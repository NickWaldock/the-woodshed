[>>> Return to README](/README.md)

Below is the account of all manual testing that has taken place on the project.
<br>
<br>
<table>
  <tr>
    <th>What is being tested?</th>
    <th>How?</th>
    <th>Expected Response</th>
    <th>Outcome</th>
    <th>Notes</th>
    <th>Issue Link</th>
  </tr>
  <tr>
    <td>Site Responsiveness - Desktop Browsers</td>
    <td>Checked responsiveness of the site by navigating with desktop browsers with dev tools: Chrome, Safari, Firefox, and Edge</td>
    <td>Site should look consistent across all browsers</td>
    <td>PASS (with exception*)</td>
    <td>In Chrome, Firefox, and Edge the site is responsive and acts as intended.<br/>*SOLVED: In Safari, user login attempt redirects back to landing page. Site renders as expected in Safari
    </td>
    <td><a href="https://github.com/users/NickWaldock/projects/7/views/2?pane=issue&itemId=31976680">View in GitHub Projects</a></td>
  </tr>
   <tr>
    <td>Site Responsiveness - Mobile Browsers</td>
    <td>Checked responsiveness of the site by navigating with mobile browsers on an iPhone 11 Pro: Chrome, Safari, and Edge</td>
    <td>Site should look consistent across all browsers</td>
    <td>PASS</td>
    <td>In Chrome, Safari and Edge the site is responsive and acts as intended on mobile device. A minor issue is that avatar username text needs to scale down to avoid text forming on a newline.
    </td>
    <td><a href="https://github.com/users/NickWaldock/projects/7/views/2?pane=issue&itemId=31978422">View in GitHub Projects</a></td>
  </tr>
 <tr>
    <td>Site Responsiveness - Tablet Browsers</td>
    <td>Checked responsiveness of the site by navigating with tablet browsers on an iPad: Chrome, Safari, FireFox, and Edge</td>
    <td>Site should look consistent across all browsers</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Landing Page Links</td>
    <td>Click the 'Click to Enter' and 'Get Started!' buttons on the Landing Page</td>
    <td>Redirected to Sign In page</td>
    <td>PASS</td>
    <td></td>
    <td></td>
  </tr>
<tr>
    <td>Authentication - Sign Up page - able to create account</td>
    <td>The Sign Up page form can be completed and submitted to create a new account. </td>
    <td>User instance is visible in the back-end API admin panel and within the front-end application</td>
    <td>PASS</td>
    <td></td>
    <td></td>
  </tr>
<tr>
    <td>Authentication - Sign Up page form error handling</td>
    <td>The Sign Up page form cannot be submitted empty and not passing Django Rest Auths password requirements.</td>
    <td>Alerts are shown</td>
    <td>PASS</td>
    <td>Alerts on all empty fields display on empty field submission. Alerts for weak/common/numeric/too short passwords functional</td>
    <td></td>
  </tr>
  <tr>
    <td>Authentication - Sign In page form error handling</td>
    <td>The Sign in page form cannot be submitted empty and not passing Django Rest Auths password requirements.</td>
    <td>Alerts are shown</td>
    <td>PASS (with exception*)</td>
    <td>Alerts for unable to login with provided credentials functional. *Alerts for an empty form submission fail to display</td>
    <td><a href="https://github.com/users/NickWaldock/projects/7/views/2?pane=issue&itemId=31979907">View in GitHub Projects</a></td>
  </tr>
  <tr>
    <td>Sign Out function</td>
    <td>Once logged in, click the sign out button in the Navbar</td>
    <td>User is logged out, Nav links disappear (Add Post, Home, Feed, Liked, Avatar, & Profile), redirected to Landing Page</td>
    <td>PASS</td>
    <td></td>
    <td></td>
  </tr>
<tr>
    <td>All posts render correctly in the Home page</td>
    <td>Login with account scroll through Home page until all posts are loaded</td>
    <td>On login the user is redirected to the home page where all posts are listed in reverse chronological order and post pagination occurs</td>
    <td>PASS</td>
    <td>All posts render as intended</td>
    <td></td>
  </tr>
<tr>
    <td>All relevant posts render correctly in the Feed page</td>
    <td>Login with account navigate to and scroll through Feed page until all relevant posts are loaded</td>
    <td>From the Home page click the nav link 'Feed', all posts from only followed users are listed in reverse chronological order and post pagination occurs</td>
    <td>PASS</td>
    <td>All posts render as intended. Unfollowing a user on this page does not automatically remove that users posts unless the page is refreshed</td>
    <td><a href="https://github.com/users/NickWaldock/projects/7/views/2?pane=issue&itemId=31981124">View in GitHub Projects</a></td>
  </tr>
  <tr>
    <td>All relevant posts render correctly in the Liked page</td>
    <td>Login with account scroll through Liked page until all relevant posts are loaded</td>
    <td>From the Home page click the nav link 'Liked', all posts that have been 'liked' are listed in reverse chronological order and post pagination occurs</td>
    <td>PASS</td>
    <td>All posts render as intended. Unliking a user on this page does not automatically remove that users posts unless the page is refreshed</td>
    <td><a href="https://github.com/users/NickWaldock/projects/7/views/2?pane=issue&itemId=31981124">View in GitHub Projects</a></td>
  </tr>
  <tr>
    <td>Post Component - Author Profile Avatar Link</td>
    <td>Check Avatar component links to correct profile page</td>
    <td>Both the image and username are clickable, redirect to the correct user's profile page</td>
    <td>PASS</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Post Component - Title Link</td>
    <td>Click post titles to check redirect to full detail page view for the relevant post</td>
    <td>Title colour changes on hover indicating clickable link. Redirect to single post view for relevant post</td>
    <td>PASS</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Post Component - Update Date Display</td>
    <td>Update an old post, test to see if the updated date is correct.</td>
    <td>Post updated date should change to the current date</td>
    <td>PASS</td>
    <td>Posts that are updated on the same day are not further arranged by time of update</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>