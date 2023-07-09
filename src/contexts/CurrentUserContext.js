import { createContext, useContext, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { axiosReq, axiosRes } from "../api/axiosDefaults";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { removeTokenTimestamp, shouldRefreshToken } from "../utils/utils";

// Create Context objects for passing current logged-in user details to app components
export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

// Export current user contexts for use in other js component files
export const useCurrentUser = () => useContext(CurrentUserContext);
export const useSetCurrentUser = () => useContext(SetCurrentUserContext);

export const CurrentUserProvider = ({ children }) => {
  // Hook to log the currently logged-in user,
  // Request user data from API
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();
  const handleMount = async () => {
    try {
      const { data } = await axiosRes.get("dj-rest-auth/user/");
      setCurrentUser(data);
    } catch (err) {
      // console.log(err);
    }
  };
  useEffect(() => {
    handleMount();
  }, []);

  useMemo(() => {
    // Always refresh access token before making a request
    axiosReq.interceptors.request.use(
      async (config) => {
        if (shouldRefreshToken()) {
          try {
            await axios.post("/dj-rest-auth/token/refresh/");
          } catch (err) {
            setCurrentUser((prevCurrentUser) => {
              if (prevCurrentUser) {
                history.push("/signin");
              }
              return null;
            });
            removeTokenTimestamp();
            return config;
          }
        };
        return config;
      },
      (err) => {
        return Promise.reject(err);
      }
    );

    // Listen for 401 errors in API response,
    // Redirect user to signin if required,
    // Refresh access token if required
    axiosRes.interceptors.response.use(
      (response) => response,
      async (err) => {
        if (err.response?.status === 401) {
          try {
            await axios.post("/dj-rest-auth/token/refresh/");
          } catch (err) {
            setCurrentUser((prevCurrentUser) => {
              if (prevCurrentUser) {
                history.push("/signin");
              }
              return null;
            });
            removeTokenTimestamp();
          }
          return axios(err.config);
        }
        return Promise.reject(err);
      }
    );
  }, [history]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SetCurrentUserContext.Provider value={setCurrentUser}>
        {children}
      </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
};
