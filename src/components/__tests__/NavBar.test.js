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

  // screen.debug();
  const signInLink = screen.getByRole("link", { name: "SIGN IN" });
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
	const signOutLink = await screen.findByRole('link', {name: 'SIGN OUT'});
	fireEvent.click(signOutLink);

	const signInLink = await screen.findByRole('link', {name: 'SIGN IN'});
	expect(signInLink).toBeInTheDocument();

	const signUpLink = await screen.findByRole('link', {name: 'SIGN UP'});
	expect(signUpLink).toBeInTheDocument();
});