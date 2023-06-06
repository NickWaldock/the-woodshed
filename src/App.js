import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import PostCreateForm from "./pages/posts/PostCreateForm";
import PostPage from "./pages/posts/PostPage";
import PostsPage from "./pages/posts/PostsPage";
import { useCurrentUser } from "./contexts/CurrentUserContexts";

function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route 
            exact  
            path="/" 
            render={() => (
              <PostsPage message="No results found. Adjust the search keyword." />
              )}
          />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/posts/create" render={() => <PostCreateForm />} />
          <Route exact path="/posts/:id" render={() => <PostPage />} />
          <Route
            exact 
            path="/feed" 
            render={() => (
              <PostsPage 
                message="No results found. Adjust the search keyword or follow a profile." 
                filter={`owner__followed__owner__profile=${profile_id}&`} 
              /> 
            )} 
          />
          <Route 
            exact 
            path="/liked" 
            render={() => (
              <PostsPage
                message="No results found. Adjust the search keyword or like a post." 
                filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`}
              />
            )} 
          />
          <Route exact path="/following" render={() => <h1>Following</h1>} />
          <Route exact path="/profile" render={() => <h1>Profile</h1>} />
          <Route render={() => <h1>Page not found!</h1>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
