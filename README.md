# The Woodshed

<img src="readme-files/site-screeenshots/landing-page/jumbotron.png" width="100%">
<br/>

[View the live site here](https://thewoodshed.herokuapp.com/)
<br/>
<br/>

# Table of Contents

1. [Introduction](#introduction)

2. [Project Development](#project-development)
    - 2.1. [Repos & Projects](#repos--project-links)
    - 2.2. [Aims](#aims)
    - 2.3. [Wireframes](#wireframes)
    - 2.4. [Landing Page](#landing-page)
    - 2.5. [Sign In / Up](#sign-in--up)
    - 2.6. [Home / Feed / Liked](#home--feed--liked)
    - 2.7. [Add Post](#add-post)
    - 2.8. [Profile](#profile)
    - 2.9. [Edit Profile](#edit-profile)
    - 2.10. [Change Password / Username](#change-password)

    4. [Database](#database)
        - 4.1 [CRUD](#crud)
    5. [Agile Methodology](#agile-methodology)
        - 5.1 [Milestones](#milestones)
        - 5.2 [User Stories](#user-stories)
        - 5.3 [Sprints](#sprints)
        - 5.4 [MoSCoW]
  
    6. [UX Design](#ux-desgin)
        - 6.1 [Typography](#typography)
        - 6.2 [Colour](#colour)
        - 6.3 [Bootstrap](#bootstrap)

    7. [Technologies](#technologies)
        - 7.1 [React](#react)
        - 7.2 [Tools](#tools)

3. [Main Features](#main-features)
    - 3.1 [Logo]()
    - 3.2 [Landing Page]()
    - 3.3 [About]()
    - 3.4 [Navigation Bar]()
    - 3.5 [Dropdown Menus]()
    - 3.6 [Footer]()
    - 3.7 [Sign In / Up]()
    - 3.8 [Search Bar]()
    - 3.9 [List Views]()
    - 3.10 [Add Post]()
    - 3.11 [Posts]()
    - 3.12 [Edit Post]()
    - 3.13 [Profile]()
    - 3.14 [Edit Profile]()
    - 3.15 [Most Followed Profiles]()
    - 3.16 [Change Username]()
    - 3.17 [Change Password]()
    - 3.18 [Alert]()

  

3. [Future Development](#future-developments)

4. [Testing](#testing)
5. [HTML Validation](#html-validation)
6. [CSS Validation](#css-validation)
7. [React Validation](#react-validation)
8. [Lighthouse Report](#lighthouse-report)
9. [Manual Testing](#manual-testing)
10. [Jtest](#jtest)
11. [Bugs](#bugs)

12. [Deployment](#deployment)
13. [Heroku](#heroku)
14. [Forking](#forking)
15. [Cloning](#cloning)

16. [References & Acknowledgements](#references--acknowledgements)
17. [General Reference](#general-reference)
18. [Code Reference](#code-reference)
19. [Acknoledgements](#acknoledgements)
    <br />
    <br />

# Introduction

[**The Woodshed**](https://thewoodshed.herokuapp.com/)
is a React front-end multi-user file sharing application designed to allow musicians to share, like, and comment on PDF files relating to musical practice. The name of the site refers to the colloquial term _'woodshedding'_ which is often used by musicians to mean spending time in the practice room. This originates in old jazz vernacular meaning the musician should go to the woodshed, a solitary place where no-one can hear you continually get it wrong for your sake and theirs(!), until they can play the passage correctly and are ready to return. In modern times the term is now used commonly to deonte spending time practicing.

In the digital age PDFs are common as resources amongst musicians and music teachers alike. And with the large demand for online music lessons increasing during the 2020 pandemic the demand to share resources online increase.

The Woodshed attempts to demonstrate a social-media-esq application for musicians and teachers to share musical and educational resources and grow a following of students and other musicians. The content shared could include anything from simple exercises, to whole pieces and scores.

This site allows users to create an account, profile, and share PDF files as well as interact in the environment through likes, comments, and following users.

The Woodshed has been created as the 5th portfolio project for the [Code Institue](https://codeinstitute.net) Full Stack Software Development Diploma and has no intended commerical purpose.

Built using: React, Django, Bootstrap, CSS, and HTML(JSX), as well as Cloudinary for image and file storage.

<br />
<br />

# Project Development

## Repos & Project Links
- [Front-end Repository](https://github.com/NickWaldock/the-woodshed)
- [Front-end Project Board](https://github.com/users/NickWaldock/projects/7)
- [Back-end Repository & READEME](https://github.com/NickWaldock/the-woodshed-api)
- [Back-end Project Board](https://github.com/users/NickWaldock/projects/6)
- [Github Profile](https://github.com/NickWaldock)

<br />

## Aims
- Design and create a multi-user interactive front-end web application using HTML, CSS, and JavaScript based on component composition
- Create a interactive front-end application that consumes custom API data
- Demonstrate the key role that specialist front-end developers perform in modern software development teams
- Maintain a consistient and simple user interface design aesthetic
<br />
<br />
<hr />

## Wireframes
Wireframes were produced during the intitial development of the project to guide design and layout. Even though the product went through a design change in the early stages, this was only related to color scheme and typograpy, so the original wireframes were still valid.

<br />
<hr />

### <ins>***Landing Page***
The Landing Page is a simple Jumbotron design front and center including the site name, headline, and logo which acts as a quick sign-in button for users familiar with the site. The Navbar contains the traditional sign in and sign up links, and the brand logo on the left hand side, this exists on every page including on mobile views.
<table>
  <tr>
    <td>
      <image src="readme-files/wireframes/landing-page.png" width=70%>
      <image src="readme-files/wireframes/landing-page-mobile.png" width=22%>
    </td>
  </tr>
  <tr>
    <td>
      Further down the Landing Page is a set of four cards each with two images and text. The images are to portray various instruments indicating the eclectic nature of the site to cater for all musical practices. The cards will provide short descriptive info on the sites purpose and ethos. Below the cards will be a single "Get Started" button which will lead directly to the sign in page.
    </td>
  </tr>
  <tr>
    <td>
      <image src="readme-files/wireframes/landing-page-2.png" width=70%>
  </tr>
</table>
<hr />

### <ins>***Sign In / Up***
The Sign Up page is styled exactly the same as the Sign In page with the exception of the addition of the confirm password field. Both contain the sign up/in simple form mirrored by the main logo on the right. On mobile view, the main logo will not display to prioritise the form.
<table>
  <tr>
    <td>
      <image src="readme-files/wireframes/sign-in-up.png" width=70%>
      <image src="readme-files/wireframes/sign-in-up-mobile.png" width=22%>
    </td>
  </tr>
</table>
<br />
<hr />

### <ins>***Home / Feed / Liked***
The 3 main list pages are indentical in layout and design, the only difference between them is the filtered content. Home page will display all posts, Feed will display only posts from users your profile is following, and Liked will only display posts you have 'liked'. 

At this point the user is logged in and we have all Navbar links displaying. These links collapse into a typical 'burger' menu in mobile view. Additionaly, a profile avatar and link to the user's profile page renders on the right hand side where it exists on all pages when logged in. The add post link is kept seperate from the other links to be distinctive and easy to find. This link does not move to the burger menu in mobile but is the sole link in the center of the navbar. This is because it is assumed this link will be the most commonly used in the navigation element and saves the user having to click through to the burger menu to create a post.

A seach bar sits just below the navbar for easy searching of posts. 

<table>
  <tr>
    <td>
      <image src="readme-files/wireframes/feed.png" width=70%>
      <image src="readme-files/wireframes/feed-mobile.png" width=22%>
    </td>
  </tr>
</table>

The Popular Profiles segment is a component that will exists on all list-based pages. It shows popular profiles on the site with user's avatars, username, and the option to follow/unfollow depending on followed status. In mobile view this moves to the top of the page above the search bar and will show a maximum of 4 avatars.

Finally the posts themselves are rendered on a background the help them standout from the main site background. Each post element includes all of the post details: Title, subtitle, username and avatar of the author, date last updated, the instrument the post is designed for, and relevant user added tags and notes. Just before the PDF preview is rendered a button is available which will open the PDF in a new tab and in full screen with the option to download. 
<br />
<br />
<hr />

### <ins>***Add Post***

This page contains a form which allows the user to upload a new post. The PDF upload area is kept seperate from the form for ease of use. The form contains the input fields for the post model including: Title, Subtitle, Description (which displays as 'Notes' in the later rendering), Instrument, Tags, and finally two buttons, one to submit the form and the other to cancel and retun the user to thier previous page.

Here we can can mention the footer which exists and the bottom on all pages but may not be immediately visiable due to content. It contains social links and copyright information.
<table>
  <tr>
    <td>
      <image src="readme-files/wireframes/add-post.png" width=70%>
    </td>
  </tr>
</table>
<hr />

### <ins>***Profile***
Clicking on any user avatar on a posts or popular profile component, or clicking on your own profile link in the nav bar will bring you to the profile page. Here a user can see all submitted information about a specific user. If the logged in user is the owner of the profile they have the option to edit the profile throught the gear icon (which will also render in the below posts). The profile header contains: user avatar, location, instrument played, and contact info on the left; main username, real name (small and in brackets), headline, and biography. Underneath are basic analytics for the number of posts the user has written, number of followers, and number of people that user is following. 

Finally, underneath the profile header all posts relating to that user are rendered. On mobile view the Popular Profiles component renders above the profile header as it does on the list pages.
<table>
  <tr>
    <td>
      <image src="readme-files/wireframes/profile.png" width=70%>
    </td>
  </tr>
</table>
<br />
<hr />

### <ins>***Edit Profile***
When a user clicks on the gear icon in their profile a drop down menu appears to allow them to edit thier profile. This brings them to this page which is designed similarly to the Add Post page. The form contains all of the relevant fields, note these fields will be empty as the user is not required to fill in this information to create an account. The image will also set to a default for the same reason.Here the user can upload an image for the user avatar. The Cancel button returns the user to the previous page and the Save button submits the form.
<table>
  <tr>
    <td>
      <image src="readme-files/wireframes/edit-profile.png" width=70%>
      <image src="readme-files/wireframes/edit-profile-mobile.png" width=24%>
    </td>
  </tr>
</table>
<hr />

### <ins>***Update Password / Update Username***
Wireframes were not included for this feature as the forms are a single field. For more info see [Change Password](#change-password) in [Main Features](#main-features)
<br />
<br />
<hr />

## Database
[Django REST Framework](https://www.django-rest-framework.org/) was utilised for building a custom API in a seperate repository. Further information (including database schema) on this side of the project can be viewed here --> <ins>[The Woodshed API](https://github.com/NickWaldock/the-woodshed-api)

[ElephantSQL](https://www.elephantsql.com/) was used to host and manage the PostgreSQL database. The data base works in tandem with the REACT front-end application to manage and store data delivered via the custom API. 













- [Agile Methodology](#agile-methodology)
- [Milestones](#milestones)
- [User Stories](#user-stories)
- [Sprints](#sprints)

## Change password


## Refernces

Google Fonts

- Roboto
- Barlow Condensed
  - light 300
  - Light 300 Italic
  - Regular 400
  - Medium 500
  - Semibold 600
- Odibee Sans

## SO

- For adding PDF file types to the add post form
  https://stackoverflow.com/questions/12142536/how-to-make-input-type-file-should-accept-only-pdf-and-xls

## Tools

- PNGs
  - https://pngtree.com/
  - https://webcode.tools/generators/css/keyframe-animation
- Font Awesome
- Box shadow generator
  https://www.cssmatic.com/box-shadow
  http://colormind.io/bootstrap/#

## Technologies

Axios
Axios interceptors
Toast
React Bootstrap

<br/>
<br/>
<br/>
<hr />

# Main Features
The following is a list of all of the current main features with descriptions of functionality.
<hr/>

## <ins>***Logo***
<table>
  <tr>
    <td>
      <image src="readme-files/site-screenshots/logo/main-logo.png" width=100%>
    </td>
    <td>
      The logo for The Woodshed application was created using the online logo generator
      <a href="https://looka.com/">Looka</a>. The logo wanted to be simple and fun, in -line with the site's design principles and denote a musical instrument of some kind.
    </td>
  </tr>
</table>
<br/>
<hr/>

## <ins>***Landing Page***
<table>
  <tr>
    <td>
      The first page the user arrives at is simple and bold, making a clear statement where the user is and what to do. The logo and button "Click to Enter" are a single link card that directs the user straight to the login page. The original idea behind the card was to look like a vip backstage tour pass from a music festival, this more detailed styling of design will be completed at a later date. on mobile view this is much smaller meaning the user can see the beginning of the site info below.
    </td>
    <td>
      <image src="readme-files/site-screenshots/mobile/landing-page-1.png" width=100%>
    </td>
  </tr>
  <tr>
    <td>
      <image src="readme-files/site-screenshots/landing-page/landing-page.png" width=100%>
    </td>
  </tr>
</table>
<br/>
<hr/>

## About
<table>
  <tr>
    <td>
      <image src="readme-files/site-screenshots/landing-page/landing-page-info.png" width=49%>
      <image src="readme-files/site-screenshots/landing-page/landing-page-info-2.png" width=49%>
    </td>
  </tr>
  <tr>
    <td>
      Below the main jumbotron of the landing page are four cards. Each card contains succint and general information about the site with casual images denoting a variety of instruments and musicians. The titles of the cards and the related text offer the user context to the purpose of the application and the ethos whilst attempting to maintain a fun and casual approach.
      <br/>
      <br/>
      Below the four cards is a wide call to action button to encourage the user to "Get Started". This button directs the user to the login page where they can either login or navigate to create an account.
    </td>
  </tr>
</table>
<br/>
<hr/>

## <ins>***Navigation Bar***
<table>
  <tr>
    <td>
      <image src="readme-files/site-screenshots/navigation/navbar.png" width=100%><br/><hr /><image src="readme-files/site-screenshots/mobile/navbar.png" width=50%>
    </td>
  </tr> 
  <tr>
    <td>
      The navigation bar is a standard Bootstrap Nav component that expands to the full width of the user's screen and automatically becomes a typical expandable mobile menu or 'burger' menu on the top right at a breakpoint of 767px screen-width.
      <br/><br/>
      When a user is not logged in the navbar only displays the Sign In and Sign Up navigation links. When a user is logged in all available links display. 
      <br/><br/>
      'Add Post' displays on the left-hand side and seperately from the rest of the links so it is easily identifyable to the user, this leads to the Add Post page. In mobile view this link does not appear in the burger menu but continues in the main navbar and centered making it still distinct from the other navigation elements.
      <br/><br/>
      <em>'Home'</em>, <em>'Feed'</em>, and <em>'Liked'</em> navigation links direct the user to the realted list pages. This is essentially a single list page which renders the available posts in reverse chronological order through one of teh following filter options: Home renders all posts, Feed renders only the posts of profiles the user is following, and Liked only renders posts the the user has 'liked'.
      <br/><br/>
      Sign Out leads the user back to the Landing Page and de-authenticates them giving them a logged-out status.
      <br/><br/>
      The current user's avatar image is the users profile picture which can be uploaded in the Edit Profile page. This image and profile nav link leads the user to their profile page.
      <br/><br/>
      The site logo is always present on the left-hand side, is clickable and leads to the landing page.
    </td>
  </tr>
</table>
<br/>
<hr/>

## <ins>***Dropdown Menus***
<table>
  <tr>
    <td>
    Additional edit options are available for a logged-in user with relevant access privilidges for the post component and the profile component which are represented by a gear icon. These are dropdown menus providing the uer with links to additional pages: The profile gear leads the user to the Edit Profile page where what can add additional profile information, change their username, or change their password; The post gear offers an edit and delete function, edit directs the user to the edit post page, and delete will permanently delete that post instance from the database.
    </td>
  </tr>
  <tr>
    <td>
      <image src="readme-files/site-screenshots/navigation/post-dropdown.png" width=50%>  <image src="readme-files/site-screenshots/navigation/profile-dropdown.png" width=44%>
    </td>
  </tr>
</table>
<br/>
<hr/>

## <ins>***Footer***
<table>
  <tr>
    <td>
    A basic footer exists on all pages regardless of user authentication status. On most pages it will not be seen unless the user scrolls down past the page content, this is especially true for the post list pages where the footer will only be visible once all posts in the database have been rendered.
    <br/><br/>
    Four icons link to social pages: Linkedin links to my Linkedin profile, Github links to my github repos, and, Facebook and YouTube link to the main homepages for those social sites and act as demo links.
    <br/><br/>
    The links embedded within the text link to <a href="https://codeinstitute.net/"><ins><em>Code Institute</em></a> it is for this course that this project has been created; and finally below, a link to my <a href="https://nicholasjameswaldock.uk/"><ins><em>personal website</em></a>. 
    </td>
  </tr>
  <tr>
    <td>
      <image src="readme-files/site-screenshots/navigation/footer.png" width=100%>
    </td>
  </tr>
</table>
<br/>
<hr/>

<table>
  <th>Sign In / Up</th>
  <tr>
    <td>
      <image src="" width=70%>
    </td>
  </tr>
</table>
<br/>
<hr/>

<table>
  <th>Search Bar</th>
  <tr>
    <td>
      <image src="" width=70%>
    </td>
  </tr>
</table>
<br/>
<hr/>

<table>
  <th>List Views</th>
  <tr>
    <td>
      <image src="" width=70%>
    </td>
  </tr>
</table>
<br/>
<hr/>

<table>
  <th>Add Post</th>
  <tr>
    <td>
      <image src="" width=70%>
    </td>
  </tr>
</table>
<br/>
<hr/>

<table>
  <th>Posts</th>
  <tr>
    <td>
      <image src="" width=70%>
    </td>
  </tr>
</table>
<br/>
<hr/>

<table>
  <th>Edit Posts</th>
  <tr>
    <td>
      <image src="" width=70%>
    </td>
  </tr>
</table>
<br/>
<hr/>

<table>
  <th>Profile</th>
  <tr>
    <td>
      <image src="" width=70%>
    </td>
  </tr>
</table>
<br/>
<hr/>

<table>
  <th>Edit Profile</th>
  <tr>
    <td>
      <image src="" width=70%>
    </td>
  </tr>
</table>
<br/>
<hr/>

<table>
  <th>Most Followed Profiles</th>
  <tr>
    <td>
      <image src="" width=70%>
    </td>
  </tr>
</table>
<br/>
<hr/>

<table>
  <th>Change Username</th>
  <tr>
    <td>
      <image src="" width=70%>
    </td>
  </tr>
</table>
<br/>
<hr/>

<table>
  <th>Change Password</th>
  <tr>
    <td>
      <image src="" width=70%>
    </td>
  </tr>
</table>
<br/>
<hr/>

<table>
  <th>Alert</th>
  <tr>
    <td>
      <image src="" width=70%>
    </td>
  </tr>
</table>
<br/>
<hr/>

<table>
  <th></th>
  <tr>
    <td>
      <image src="" width=70%>
    </td>
  </tr>
</table>
<br/>
<hr/>


<br/>
<br/>
<br/>
<hr />



## Future Developments

All liked/saved posts can be organised into self-made categories
Post list descriptions to preview text in case the post has a larger amount of text
delete profile
tutor profile, student followers
larger pdf file sizes
additional fiile formats
in profiles, instuments in profile can be links that lead to posts or other profiles related to that instrument
Practice Companion - metronone, play alongs, audio

## Bugs

[Alert wont show on delete post function](https://github.com/NickWaldock/the-woodshed/issues/107#issuecomment-1604253384)
