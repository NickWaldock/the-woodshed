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
    <td>Sign Out Function</td>
    <td>Once logged in, click the sign out button in the Navbar</td>
    <td>User is logged out, Nav links disappear (Add Post, Home, Feed, Liked, Avatar, & Profile), redirected to Landing Page</td>
    <td>PASS</td>
    <td></td>
    <td></td>
  </tr>
<tr>
    <td>All Posts Render Correctly in the Home Page</td>
    <td>Login with account scroll through Home page until all posts are loaded</td>
    <td>On login the user is redirected to the home page where all posts are listed in reverse chronological order and post pagination occurs</td>
    <td>PASS</td>
    <td>All posts render as intended</td>
    <td></td>
  </tr>
<tr>
    <td>All Relevant Posts Render Correctly in the Feed Page</td>
    <td>Login with account navigate to and scroll through Feed page until all relevant posts are loaded</td>
    <td>From the Home page click the nav link 'Feed', all posts from only followed users are listed in reverse chronological order and post pagination occurs</td>
    <td>PASS</td>
    <td>All posts render as intended. Unfollowing a user on this page does not automatically remove that users posts unless the page is refreshed</td>
    <td><a href="https://github.com/users/NickWaldock/projects/7/views/2?pane=issue&itemId=31981124">View in GitHub Projects</a></td>
  </tr>
  <tr>
    <td>All Relevant Posts Render Correctly in the Liked Page</td>
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
    <td><a hred="https://github.com/users/NickWaldock/projects/7/views/1?pane=issue&itemId=31983140">View in GitHub Projects</a></td>
  </tr>
  <tr>
    <td>Post Component - Post Data Rendering</td>
    <td>Edit a post's data and save, check views</td>
    <td>Post data should change in the component after being saved</td>
    <td>PASS</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Post Component - PDF View Button</td>
    <td>Click the "View PDF in New Tab" to test button on the post components</td>
    <td>New tab opens with the PDF in full screen</td>
    <td>PASS</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Post Pagination</td>
    <td>Go to Home, Feed, List pages, scroll down to the bottom to test loading of extra posts</td>
    <td>Page should load 10 posts, on scrolling to the bottom of the page additional posts load, loading spinner shows while posts are loading</td>
    <td>PASS</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Post Component - Like/Unlike Button</td>
    <td>Click the like button, once the like has been updated and counter & icon changed, click again. Check API that like has been registered</td>
    <td>Icon should change color, counter will increment by 1. On second click, icon will revert and counter will decrement by 1</td>
    <td>PASS</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Post Component - Comment Icon</td>
    <td>Click the comment icon on a post component</td>
    <td>User is redirected to the post detail page comment form section</td>
    <td>PASS</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Comment Form - Create Comment</td>
    <td>On an individual post page write and submit a new comment on a post, click "Post" button</td>
    <td>Comment should appear below the form and be visiable in API</td>
    <td>PASS</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Comment Form - Edit Comment - Save</td>
    <td>Click the gear icon, click "Edit Post", change the comment content, click 'Save'</td>
    <td>The update comment data should render in the comment under the form, Comment is visible in API</td>
    <td>PASS</td>
    <td></td>
    <td></td>
  </tr>
<tr>
    <td>Comment Form - Edit Comment - Cancel</td>
    <td>Click the gear icon, click "Edit Post", change the comment content, click 'Save'</td>
    <td>The updated content in the comment should revert to the original content, original comment is displayed below the form, comment is visible in API</td>
    <td>PASS</td>
    <td></td>
    <td></td>
  </tr>
<tr>
    <td>Comment Form - Delete Comment</td>
    <td>Click the gear icon, click "Delete Post", check if comment exists on page and API</td>
    <td>Comment is not visible in the API indicating deletion success, comment dissapears from under the comment form</td>
    <td>PASS</td>
    <td></td>
    <td></td>
  </tr>
<tr>
    <td>Footer Links</td>
    <td>Click footer social icon links ana text links</td>
    <td>Links should open in a new tab and direct to the relevant page</td>
    <td>All links open in new tab and direct to the relevant page</td>
    <td>Icons still have bootstrap primary attributes on click - blue border and blue background on active status if the link is slow to open/load</td>
    <td><a href="https://github.com/users/NickWaldock/projects/7/views/1?pane=issue&itemId=32152470">View in Github Projects</a></td>
  </tr>
<tr>
    <td>Most Followed Profiles Component - New Profile</td>
    <td>Create a new user, log in, navigate to a list page (Home, Feed, Liked)</td>
    <td>A new user should appear in the list of avatars</td>
    <td>PASS</td>
    <td></td>
    <td></td>
  </tr>
<tr>
    <td>Most Followed Profiles Component - Follow</td>
    <td>Click the follow button</td>
    <td>Button should change colour and text should change to "unfollow". User's profile page "following" count increments by 1, followed profile's "followers" count increments by 1, visible in API</td>
    <td>PASS</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Most Followed Profiles Component - Unfollow</td>
    <td>Click the unfollow button</td>
    <td>Button should change colour and text should change to "follow". User's profile page "following" count decrements by 1, followed profile's "followers" count decrements by 1, change is visible in API</td>
    <td>PASS</td>
    <td></td>
    <td></td>
  </tr>
    <tr>
    <td>Most Followed Profiles Component - Avatar</td>
    <td>Click an Avatar Image</td>
    <td>Clicking an Avatar image redirects to that user's profile page</td>
    <td>PASS</td>
    <td>Only clicking the image does this, not the username text</td>
    <td></td>
  </tr>
<tr>
    <td>Add Post - File</td>
    <td>Click on upload area, upload a PDF file, view preview, click "Change the File" button, upload different PDF file</td>
    <td>File window appears, selected file is uploadedanbd previewed. Button click reopens file window, new file upload replaces previous preview</td>
    <td>PASS</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Add Post - Create</td>
    <td>Upload file, add data to field sets, click "Create", check list pages for post, check API</td>
    <td>Redirected to the new post detail page view, success alert shown, post is visiable in API.</td>
    <td>PASS</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Add Post - Cancel</td>
    <td>Add data to form, click "Cancel" button</td>
    <td>User is redirected to their previously visited page, form data is not submitted</td>
    <td>PASS</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Add Post - Empty Form</td>
    <td>Attempt to create a post with no data</td>
    <td>Alerts show on empty fields</td>
    <td>PASS</td>
    <td>400 Bad Request error occurs in the console</td>
    <td></td>
  </tr>
  <tr>
    <td>Edit Post</td>
    <td>Click the gear icon on existing post, click "Edit Post", update a form field, click "Save" button</td>
    <td>Redirected to the updated post's detail page, updated data visible, success alert shown, updated data on post visible in API</td>
    <td>PASS</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Delete Post</td>
    <td>Click gear icon on existing post, click "Delete Post", check post exists on front-end lists and profile list of post author profile, check post exists in API</td>
    <td>Post should no longer be visible in the API or on the front-end, success message should display</td>
    <td>PASS* (with exception)</td>
    <td>Post deletion successful. Success alert does not display</td>
    <td><a href="https://github.com/users/NickWaldock/projects/7/views/1?pane=issue&itemId=31586557">View in Github Projects</a></td>
  </tr>
<tr>
    <td>Profile Page - Component Rendering</td>
    <td>Navigate to profile pages, including as current user and not current user profiles</td>
    <td>Current user profile should have the gear icon in the top right side of the profile component. Other profiles should not have this icon. All profile data should display (if it exists) and reflect data in the API, profiles authored posts should display under the profile component</td>
    <td>PASS</td>
    <td>All data renders correctly, gear icon displays on correct profile, post components form the author render below the profile</td>
    <td></td>
  </tr>
<tr>
    <td>Profile Page - Follow Button</td>
    <td>Click the "Follow" button on the profile component of a profile other than that of the currently logged in user</td>
    <td>Profile's "Follower" count increments by one, button text changes to "Unfollow", button in Most Followed Profiles component also reflects the change. Change visible in the API, user's profile "Following" count increments by 1</td>
    <td>PASS</td>
    <td>This button does not change colour as the buttons in the Most Followed Profiles component do</td>
    <td></td>
  </tr>
  <tr>
    <td>Profile Page - Unfollow Button</td>
    <td>Click the "Unfollow" button on the profile component of a profile other than that of the currently logged in user</td>
    <td>Profile's "Follower" count decrements by one, button text changes to "Follow", button in Most Followed Profiles component also reflects the change. Change visible in the API, user's profile "Following" count decrements by 1</td>
    <td>PASS</td>
    <td>This button does not change colour as the buttons in the Most Followed Profiles component do</td>
    <td></td>
  </tr>
<tr>
    <td>Profile Page - Edit Profile - Save</td>
    <td>Click gear icon in profile page, click "Edit Profile", update fields, click "Save"</td>
    <td>Existing profile data should prepopulate edit page form. On Save- redirected back to profile page, changes visible, success alert appears. Changes visiable in API</td>
    <td>PASS</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Profile Page - Edit Profile - Cancel</td>
    <td>Click gear icon in profile page, click "Edit Profile", update fields, click "Cancel"</td>
    <td>Existing profile data should prepopulate edit page form. On Cancel- redirected back to profile page, no changes visible. No changes visible in API</td>
    <td>PASS</td>
    <td></td>
    <td></td>
  </tr>
<tr>
    <td>Profile Page - Change Username - Save</td>
    <td>Click gear icon in profile page, click "Update Username", enter new value, click "Save"</td>
    <td>Redirected to profile page, success alert appears, new username reflected in profile and in API</td>
    <td>PASS</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Profile Page - Change Username - Cancel</td>
    <td>Click gear icon in profile page, click "Update Username", enter new value, click "Cancel"</td>
    <td>Redirected to profile page, no change reflected in profile and in API</td>
    <td>PASS</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Change Username - Login</td>
    <td>Change username on a profile, sign out, sign in with original username, on authentication fail sign in with new username</td>
    <td>Original username should be deauthenticated, form error appears on sign in page, loggin in with new username should be successful. Username change reflected in API</td>
    <td>PASS</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Profile Page - Change Password - Save</td>
    <td>Click gear icon in profile page, click "Update Password", enter new value, click "Save"</td>
    <td>Redirected to profile page, success alert appears</td>
    <td>PASS</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Profile Page - Change Password - Cancel</td>
    <td>Click gear icon in profile page, click "Update Password", enter new value, click "Cancel"</td>
    <td>Redirected to profile page</td>
    <td>PASS</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Change Password - Login</td>
    <td>Change password on a profile, sign out, sign in with original password, on authentication fail sign in with new password</td>
    <td>Original password should be deauthenticated, form error appears on sign in page, log in in with new password should be successful</td>
    <td>PASS</td>
    <td></td>
    <td></td>
  </tr>
<tr>
    <td>Attempting to reach site pages via the url when not logged-in</td>
    <td>Sign out of any profiles, attempt to reach list, add post, profiles, and individual post page directly from the url bar</td>
    <td>User should not be able to navigate to any of these pages and be redirected to the Landing Page</td>
    <td>FAIL*</td>
    <td>All pages will redirect to the Landing Page except an individual profile or an indivdual post</td>
    <td><a href="https://github.com/users/NickWaldock/projects/7/views/1?pane=issue&itemId=31649372">*SOLVED* View in Github Projects</a></td>
  </tr>
<tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
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



To test


URLS when not logged in
