import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

// Create Context objects for passing current logged-in user details to app components
export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

function App() {
  // Hook to log the currently logged-in user,
  // Request user data from API
  const [currentUser, setCurrentUser] = useState(null);
  const handleMount = async () => {
    try {
      const { data } = await axios.get("dj-rest-auth/user/");
      setCurrentUser(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    handleMount();
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SetCurrentUserContext.Provider value={setCurrentUser}>
        <div className={styles.App}>
          <NavBar />
          <Container className={styles.Main}>
            <Switch>
              <Route exact path="/" render={() => <h1>Home Page</h1>} />
              <Route exact path="/signin" render={() => <SignInForm />} />
              <Route exact path="/signup" render={() => <SignUpForm />} />
              <Route exact path="/register" render={() => <h1>Register</h1>} />
              <Route exact path="/add-post" render={() => <h1>Add post</h1>} />
              <Route exact path="/feed" render={() => <h1>Feed</h1>} />
              <Route exact path="/liked" render={() => <h1>Liked</h1>} />
              <Route
                exact
                path="/following"
                render={() => <h1>Following</h1>}
              />
              <Route exact path="/profile" render={() => <h1>Profile</h1>} />
              <Route render={() => <h1>Page not found!</h1>} />
            </Switch>
          </Container>
        </div>
      </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
