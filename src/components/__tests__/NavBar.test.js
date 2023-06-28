import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom/cjs/react-router-dom.min";
import NavBar from "../NavBar";
import { CurrentUserProvider } from "../../contexts/CurrentUserContext";

test("renders NavBar", () => {
  render(
    <Router>
      <NavBar />
    </Router>
  );

  const signInLink = screen.getByRole("link", { name: "Sign In" });
  expect(signInLink).toBeInTheDocument();
});

test("renders link to the user profile for a logged in user", async () => {
  render(
    <Router>
			<CurrentUserProvider>
      	<NavBar />
			</CurrentUserProvider>
    </Router>
  );
	const profileAvatar = await screen.findByText('Profile')
	expect(profileAvatar).toBeInTheDocument();
});

test("renders sign in and sign up links again on log out", async () => {
  render(
    <Router>
			<CurrentUserProvider>
      	<NavBar />
			</CurrentUserProvider>
    </Router>
  );
	const signOutLink = await screen.findByRole('link', {name: 'Sign Out'});
	fireEvent.click(signOutLink);

	const signInLink = await screen.findByRole('link', {name: 'Sign In'});
	expect(signInLink).toBeInTheDocument();

	const signUpLink = await screen.findByRole('link', {name: 'Sign Up'});
	expect(signUpLink).toBeInTheDocument();
});


test("Renders additional nav links when user is logged in", async () => {
  render(
    <Router>
			<CurrentUserProvider>
      	<NavBar />
			</CurrentUserProvider>
    </Router>
  );
	const addPostLink = await screen.findByRole('link', {name: 'Add Post'});
	fireEvent.click(addPostLink);
  expect(addPostLink).toBeInTheDocument();

  const homeLink = await screen.findByRole('link', {name: 'Home'});
  fireEvent.click(homeLink);
  expect(homeLink).toBeInTheDocument();

  const feedLink = await screen.findByRole('link', {name: 'Feed'});
  fireEvent.click(feedLink);
  expect(feedLink).toBeInTheDocument();

  const likedLink = await screen.findByRole('link', {name: 'Liked'});
  fireEvent.click(likedLink);
  expect(likedLink).toBeInTheDocument();
});


