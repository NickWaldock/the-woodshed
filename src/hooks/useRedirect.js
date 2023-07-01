import axios from "axios";
import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

// Function to redirect the user from a page depending on their authentication status
export const useRedirect = (userAuthStatus) => {
  const history = useHistory();

  useEffect(() => {
    const handleMount = async () => {
      try {
        await axios.post("/dj-rest-auth/token/refresh/");
        // Redirect the user if logged in
        if (userAuthStatus === "loggedIn") {
          history.push("/");
        }
      } catch (err) {
        // Redirect user if not logged in
        if (userAuthStatus === "loggedOut") {
          history.push("/welcome");
        }
      }
    };
		handleMount();
  }, [history, userAuthStatus]);
};
