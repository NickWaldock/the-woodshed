# The Woodshed

<img src="readme-files/site-screeenshots/landing-page/jumbotron.png" width="100%">
<br/>

[View the live site here](https://thewoodshed.herokuapp.com/)
<br/>
<br/>

# Table of Contents

1. [Introduction](#introduction)

2. [Project Development](#project-development)
    - 2.1 [Repos & Projects](#repos--project-links)
    - 2.2 [Aims](#aims)
    - 2.3 [Wireframes](#wireframes)
    - 2.4 [Database](#database)
    - 2.5 [CRUD](#crud)
    - 2.6 [Agile Methodology](#agile-methodology)
        - [Milestones](#milestones)
        - [User Stories](#user-stories)
        - [Sprints](#sprints)
        - [MoSCoW]()
    - 2.7. [UX Design](#ux-desgin)
        - [Typography](#typography)
        - [Colour](#colour)
        - [General Styling](#bootstrap)

3. [Technologies](#technologies)
    - 3.1 [React](#react)
    - 3.2 [Bootstrap]()
    - 3.3 [Tools](#tools)

4. [Main Features](#main-features)
    - 4.1 [Logo](#logo)
    - 4.2 [Landing Page](#landing-page)
    - 4.3 [About](#about)
    - 4.4 [Navigation Bar](#navigation-bar)
    - 4.5 [Dropdown Menus](#dropdown-menus)
    - 4.6 [Footer](#footer)
    - 4.7 [Sign In / Up](#sign-in--up)
    - 4.8 [Search Bar](#search-bar)
    - 4.9 [List Views](#list-views)
    - 4.10 [Add Post](#add-post)
    - 4.11 [Posts](#posts)
    - 4.12 [Edit Post](#edit-post)
    - 4.13 [Profile](#profile)
    - 4.14 [Edit Profile](#edit-profile)
    - 4.15 [Most Followed Profiles](#most-followed-profiles)
    - 4.16 [Change Username](#change-username)
    - 4.17 [Change Password](#change-password)
    - 4.18 [Alert](#alert)

5. [Future Development](#future-developments)

6. [Testing](#testing)
    - 6.1 [Manual Testing](#manual-testing)
    - 6.2 [Automated Testing](#automated-testing)
    - 6.3 [Bugs](#bugs)

7. [Code Validation](#code-validation)
    - 7.1 [React Validation](#react-validation)
    - 7.2 [HTML Validation](#html-validation)
    - 7.3 [CSS Validation](#css-validation)
    - 7.4 [Lighthouse Report](#lighthouse-report)

8. [Deployment](#deployment)
    - 8.1 [Cloudinary](#cloudinary)
    - 8.2 [PostgresSQL](#postgresql)
    - 8.3 [Heroku](#heroku)
    - 8.4 [Forking](#forking)
    - 8.5 [Cloning](#cloning)

9. [References & Acknowledgements](#references--acknowledgements)
    - 9.1 [General Reference](#general-reference)
    - 9.2 [Code Reference](#code-reference)
    - 9.3 [Acknoledgements](#acknoledgements)
    <br />
    <br />

# Introduction

[**The Woodshed**](https://thewoodshed.herokuapp.com/)
is a React front-end multi-user file sharing application designed to allow musicians to share, like, and comment on PDF files relating to musical practice. The name of the site refers to the colloquial term _'woodshedding'_ which is often used by musicians to mean spending time in the practice room. This originates in old jazz vernacular meaning the musician should go to the woodshed, a solitary place where no-one can hear you continually get it wrong for your sake and theirs(!), until they can play the passage correctly and are ready to return. In modern times the term is now used commonly to deonte spending time practicing.

In the digital age PDFs are common as resources amongst musicians and music teachers alike. And with the large demand for online music lessons increasing during the 2020 pandemic the demand to share resources online increase.

The Woodshed attempts to demonstrate a social-media-esq application for musicians and teachers to share musical and educational resources and grow a following of students and other musicians and potentially recruit new students through the contact information. The content shared could include anything from simple exercises, to whole pieces and scores.

This site allows users to create an account, profile, and share PDF files as well as interact in the environment through likes, comments, and following users.

The Woodshed has been created as the 5th portfolio project for the [Code Institue](https://codeinstitute.net) Full Stack Software Development Diploma and has no intended commerical purpose.

Built using: React, Django, Bootstrap, CSS, and HTML(JSX), as well as Cloudinary for image and file storage.

<br />
<br />

# Project Development

## Repos & Project Links
- [Front-end Repository](https://github.com/NickWaldock/the-woodshed)
- [Front-end Project Board](https://github.com/users/NickWaldock/projects/7)
- [Back-end Repository & README](https://github.com/NickWaldock/the-woodshed-api)
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

<ins>***Landing Page***</ins><br/>
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

<ins>***Sign In / Up***</ins><br/>
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

<ins>***Home / Feed / Liked***</ins><br/>
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

<ins>***Add Post***</ins><br/>
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

<ins>***Profile***</ins><br/>
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

<ins>***Edit Profile***</ins><br/>
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

<ins>***Update Password / Update Username***</ins><br/>
Wireframes were not included for this feature as the forms are a single field. For more info see [Change Password](#change-password) in [Main Features](#main-features)
<br />
<br />
<hr />

## Database
[Django REST Framework](https://www.django-rest-framework.org/) was utilised for building a custom API in a seperate repository. Further information (including database schema) on this side of the project can be viewed here --> <ins>[The Woodshed API](https://github.com/NickWaldock/the-woodshed-api)

[ElephantSQL](https://www.elephantsql.com/) was used to host and manage the PostgreSQL database. The data base works in tandem with the REACT front-end application to manage and store data delivered via the custom API. 
<br/><hr>

## CRUD Functionality

This project incorporates CRUD (Create, Read, Update, Delete) functionality as a key feature. Users will need to be able to create, edit and update existing elements, and finally delete any created content. All content stored in the back-end is to be kept updated in the front-end rendering so changes remain apparent to the user.

<br/><hr>

## Agile Methodology

A [Agile](https://agilemanifesto.org/) development approach was undertaken in the conception of the project. Specifically in this project, relating to the use of user stories, milestones, and sprints to dictate the development process and responding to change in design as the project progressed with the ultimate aims in mind.

The following sections in this readme will detail the development process undertaken. 

[Github Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects) was used to manage the project tasks. Each task was listed within a [Milestone](#milestones) and a [User Story](#user-stories), and was finally assigned proiritisation under the [MoSCoW](#moscow) system. Tasks were loaded into the Backlog and tackled during [sprints](#sprints). Sprints were not strictly defined to within certain timeframes as they would be in a professional team development environment, this was due to the nature of my current working practices which are unpredictable making it difficult to plan when development work on the project would occur. The sprints therefore were flexible in terms of time frame and are instead better arranged by sections/features of development.


The project management board for the front-end can be viewed here: --> [GitHub Projects](https://github.com/users/NickWaldock/projects/7)

Additinoally, the project board for the back-end can be viewed here: --> [Back-End Project](https://github.com/users/NickWaldock/projects/6)

<br/><hr>

### Milestones
With initial conceptual design complete though [wireframes](#wireframes) development was organised into key [Milestones](https://github.com/NickWaldock/the-woodshed/milestones)

- Authentication & Registration
    - Sign in, account registration, page authentication

- CRUD Posts & Profiles
    - Functionality within components to create, edit profiles, comments and posts, and delete comments and posts

- Navigation
    - Navigating the site through the navigation bar or buttons

- Interactions
    - Any actions a user takes in interacting with other users of the site: i.e. Likes, followers, followed by, comments

- UX Design
    - Aesthetic and cosmetic design

- Bugs
    - Issues documented in [GitHub Issues](https://github.com/NickWaldock/the-woodshed/issues)

- Documentation & Testing
    - Tests, planning, readme, and other documentation

### User Stories

### Sprints
The following screen shots demonstrate the various sprints undertaken during the project's development. The project [kanban board](https://github.com/users/NickWaldock/projects/7/views/2) was used exclusivly to keep track of tasks.
<table>
  <tr>
   <td><image src="readme-files/sprints/1.png" width=100%></td>
    <td><image src="readme-files/sprints/2.png" width=100%></td>
  </tr>
    <tr>
   <td><image src="readme-files/sprints/3.png" width=100%></td>
    <td><image src="readme-files/sprints/4.png" width=100%></td>
  </tr>
    <tr>
   <td><image src="readme-files/sprints/5.png" width=100%></td>
    <td><image src="readme-files/sprints/6.png" width=100%></td>
  </tr>
    <tr>
   <td><image src="readme-files/sprints/7.png" width=100%></td>
    <td><image src="readme-files/sprints/8.png" width=100%></td>
  </tr>
    <tr>
   <td><image src="readme-files/sprints/9.png" width=100%></td>
    <td><image src="readme-files/sprints/10.png" width=100%></td>
  </tr>
    <tr>
   <td><image src="readme-files/sprints/11.png" width=100%></td>
    <td><image src="readme-files/sprints/12.png" width=100%></td>
  </tr>
</table>
<br/><hr>

### MoSCoW

The [MoSCoW](https://en.wikipedia.org/wiki/MoSCoW_method) method was used to determine the priority of certain tasks and to maintain sprints within the project's scope. These were added as labels to each individual task.

Tasks were assigned a status in the project [kanban board](https://github.com/users/NickWaldock/projects/7/views/2) of either:
- <strong>Must Have</strong> : Essential for the project
- <strong>Should Have</strong> : Important but not essential
- <strong>Could Have</strong> : An idea for consideration but not a priority
- <strong>Won't Have</strong> : Not currently in the project's scope
<br/><hr>

## UX Design
### Typograpgy
[Google Fonts](https://fonts.google.com/) provided the fonts for the site. Fonts used are:<br>
- [Odibee Sans](https://fonts.google.com/specimen/Odibee+Sans?preview.text=The%20Woodshed&preview.text_type=custom&category=Sans+Serif,Display&query=odibee) : As the main title font for components and buttons<br>
- [Barlow Condensed](https://fonts.google.com/specimen/Barlow+Condensed?preview.text=The%20Woodshed&preview.text_type=custom&category=Sans+Serif,Display&query=barlow+condense) : As a primary body text and occasional title or subtitle text <br>
- [Roboto](https://fonts.google.com/specimen/Roboto?preview.text=The%20Woodshed&preview.text_type=custom&category=Sans+Serif,Display&query=roboto) : as a secondary body text
<br>
<image src="readme-files/site-screenshots/utilities/fonts.png" width=70%>

With sans-serif as back-up fonts
<br/><hr>

### Colors
### General Styling
<br/><hr>

# Technologies
## React
## Bootstrap
## Tools

- PNGs
  - https://pngtree.com/
  - https://webcode.tools/generators/css/keyframe-animation
- Font Awesome
- Box shadow generator
  https://www.cssmatic.com/box-shadow
  http://colormind.io/bootstrap/#


Axios
Axios interceptors
Toast
React Bootstrap
<br/><hr>


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
    <td><image src="readme-files/site-screenshots/mobile/landing-page-2.png" width=100%></td>
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
      The navigation bar is a standard <a href="https://getbootstrap.com/docs/4.0/components/navbar/"><em>Bootstrap Navbar</em></a> component that expands to the full width of the user's screen and automatically becomes a typical expandable menu or 'burger' menu on the top right for mobiles at a breakpoint of 767px screen-width.
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

## <ins>***Sign In / Up***
<table>
  <tr>
    <td>
      <image src="readme-files/site-screenshots/sign-in-up/sign-in.png" width=49%>
      <image src="readme-files/site-screenshots/sign-in-up/sign-up.png" width=49%>
    </td>
  </tr>
  <tr>
    <td>
      After the user has clicked on either the 'Get Started!' button on the Landing Page or one of the first available Navbar links they are brought to this Sign In page. Here a user can securely log into the account. The back-end for this functionality is handled automatically by <a href="https://docs.djangoproject.com/en/4.2/topics/auth/"><em>Django Authentication</em></a> which include basic user management including "password strength checking, throttling of login attempts, authentication against third-parties, object-level permissions" (from Django <a href="https://docs.djangoproject.com/en/4.2/topics/auth/"><em>docs</em></a>).
    </td>
  </tr>
  <tr>
    <td>
      The if the user is a first-time visitor to the application they can easily find links to create an account in the Navbar or below the sign in form.
      <br/><br/>
      The Sign Up page is almost identical to the Sign In page with the addition of a confirm password box and swapped links to login if the user already has an account.
    </td>
    <td>
      <image src="/workspace/the-woodshed/readme-files/site-screenshots/mobile/sign-in.png" width=200%>
    </td>
  </tr>
</table>
<br/>
<hr/>

## <ins>***Search Bar***
<table>
  <tr>
    <td>
      <image src="readme-files/site-screenshots/utilities/search.png" width=100%>
    </td>
  </tr>
  <tr>
    <td>
    The search bar exists at the top of all of the list pages: Home, Feed, and Liked. It allows the user to search for posts via title and for profiles by username. Future functionality will be added to allow for searching of for profiles via profile elements including location, instrument, and bio; as well as post searching all other post elements including: instrument, tags, subtitle, and possibly even the description.
    <br/><br/>
    The search bar filters search results with a short timeout function to prevent the page updating too quickly from every keyboard stroke, and a data loading spinner appears while posts are being rendered.
    </td>
  </tr>
</table>
<br/>
<hr/>

## <ins>***List Views***
<table>
  <tr>
    <td>
      <image src="/workspace/the-woodshed/readme-files/site-screenshots/list-views/feed.png" width=70%>
      <image src="/workspace/the-woodshed/readme-files/site-screenshots/mobile/list.png" width=29%>
    </td>
  </tr>
  <tr>
    <td>
      <image src="/workspace/the-woodshed/readme-files/site-screenshots/list-views/home.png" width=100%>
    </td>
  </tr>
  <tr>
    <td>
      Three main list views represent the main experience for the user. 
      <br/><br/>
      <strong>Home</strong> is typically where the user can view all available posts that exist within the database. These are organised by the time the post was last updated or created so the most recent post or update is at the top.
      <br/><br/>
      <strong>Feed</strong> will render posts in the same manner as Home but filtered by only those posts by profiles that the current logged in user is actively following.
      <br/><br/>
      <strong>Liked</strong> will also render posts in the same manner as Home but filtered to display only those posts that the current logged in user has actively 'liked', i.e. clicked the thumbs up icon in a post component.
      <br/><br/>
      These list pages also include the Most Followed Profiles component on the right hand side in desktop which displays above the search bar instead in mobile view. This component does not 'stick' to the top of the view.
      <br/><br/>
      The list pages also include post pagination to help with user experience loading mulitple post data, especially as some file sizes could make loading posts slower if rendering all post instances at once. The first 10 posts will load on page refresh, a following 10 posts will load if the usre scrolls to the bottom of the page. This process repeats until all posts are loaded.
    </td>
  </tr>
  <tr>
    <td>
      <image src="/workspace/the-woodshed/readme-files/site-screenshots/list-views/liked-1.png" width=50%>
      <image src="/workspace/the-woodshed/readme-files/site-screenshots/list-views/liked-2.png" width=49%>
    </td>
  </tr>
</table>
<br/>
<hr/>

## <ins>***Add Post***
<table>
<tr>
  <td>
    A major piece of functionality for the application is the abilty to generate new posts. A clear, simple design means the user can clearly discover the process for creating a new post. The main body of the window is taken up by the clickable area to upload a PDF. In mobile view this stacks on top of the form.
    <br/><br/>
    The form includes placeholder text to indicate the kind to information to be added to each field. Fields include: Title, Subtitle, a text area for a detail description, instrument (the instrument the post is intended to serve), and any relevant tags.
    <br/><br/>
    A cancel button will return the user to their previous page without submitting the post and the create button submits the form and directs the user to the detail view of that created post and displays a success message.
    <br/><br/>
    The form contains error handling to ensure all fields have data inputted. A form with an empty field will not be submitted and an alert on the form will display.
  </td>
</tr>
  <tr>
    <td>
      <image src="readme-files/site-screenshots/posts/add-post.png" width=72%><image src="readme-files/site-screenshots/mobile/add-post.png" width=27%>
    </td>
  </tr>
</table>
<br/>
<hr/>

## <ins>***Posts***
<table>
<tr>
  <td>
    The post component is where the majority of the applications interaction occurs. The top of the component has the post author's avatar which links to that user's profile page, on the right is the date for when the post was last updated and further to that, if the current logged in user is the post owner, is the gear icon leading to a <a href="#dropdown-menus"><em>dropdown menu</em></a> for editing the post.
    <br/><br/>
    The main information for the post component is then displayed in order of relevance to a user. This begins with the title and subtitle,followed by the instrument(s) the post is desigined to be used with, and the related tags. Finally, what was added in the Add Post page form for the description is rendered here as "Notes from {user}" which gives any final details to the user. 
    <br/><br/>
    A button to redirect the user to a new page where the pdf can be viewed i full screen and has other general browser PDF viewing options such as, zoom, rotate, and download. This always opens in a new tab to avoid taking the user away from the main application.
    <br/><br/>
    The PDF is then rendered as a preview for the user to be able to interact with it and view it within the component. They also have access to the basic PDF viewing options here as well. 
    <br/><br/>
    Finally, in this component is the like and comment icons. The like icon (thumbs up) is clickable and the icon's colour changes of hover and once it has been clicked. On clicking the icon the colour changes and the counter on the right of it will increase by one, indicating the post has been liked. This post will then be available in the user's Liked page. 
  </td>
</tr>
  <tr>
    <td>
      <image src="readme-files/site-screenshots/posts/post-1.png" width=70%>
      <image src="/workspace/the-woodshed/readme-files/site-screenshots/mobile/post.png" width=29%>
    </td>
  </tr>
  <tr>
    <td>
      <image src="readme-files/site-screenshots/posts/post-2.png" width=70%>
    </td>
  </tr>
</table>
<br/>
<hr/>

## <ins>***Edit Post***
<table>
  <tr>
    <td>
    The Edit Post page is built from the same code as the Add Post page with the addition of a feature to prepoulate the page with all existing data related to the post to be edited. Once the form data has been edited and/or the PDF file has been changed (or not, fields can remain unchanged), clicking 'Save' will redirected the user to the updated version of the individual post detail view. A success Alert will pop up to indicate the successful update of the post. If the user clicks the cancel button the user is returned to the same post detail view but as but without any of the changes made in the Edit Post form/file.
    </td>
  </tr>
  <tr>
    <td>
      <image src="readme-files/site-screenshots/posts/edit-post.png" width=72%>
      <image src="readme-files/site-screenshots/mobile/edit-post.png" width=27%>
    </td>
  </tr>
</table>
<br/>
<hr/>

## <ins>***Profile***
<table>
<tr>
    <td>
      If a user has clicked on a user's avatar in a post, the Most Followed Profiles component or on their profile Navbar link, they are directed to a profile page to view all details about that specific user or their own profile.
      <br/><br/>
      If it is the user's own profile the gear icon appears in the top right of the component as a dropdown menu to edit the profile, change the username, or change the password.
      <br/><br/>
      The profile's picture renders in the top left of the component and is the only time the profile image is not clickable. But it displays larger than the more commonly seen user avatar. Underneath the profile image is the users details (if they exist): given name, location, instrument(s), and contact email.
      <br/><br/>
      Otherwise the profile takes on a similar aesthetic to the post component and displays the profile information centered within a single column. Username; headline, a short descriptive statement, a biography; and finally some basic profile data.
      <br/><br/>
      Basic profile data consists of real-time reflection of this user's interactions within the application.<br/>
        - Posts indicates the number of posts that profile has published<br/>
        - Followers indicates the number of other user profiles that are following this particular profile<br/>
        - Following indicates the number of other profiles that this profile is actively following<br/><br/>
        Finally, under the main profile information is a list (in order of most recent) of all of that user's posts.
    </td>
  </tr>
    <td>
      <image src="readme-files/site-screenshots/profile/profile.png" width=73%>
      <image src="readme-files/site-screenshots/mobile/profile.png" width=26%>
    </td>
  </tr>
  <tr>
    <td>
      When a user first signs up to the site they only do so with a username and a password. On a first visit to the profile page they will be presented with an empty profile. The profile image is a default image and the posts list will be empty (assuming they haven't created a post yet).
    </td>
  </tr>
  <tr><tr>
    <td><image src="readme-files/site-screenshots/profile/empty-profile.png" width="100%"></td>
  </tr>
  <tr>
</table>
<hr/>

## <ins>***Edit Profile***
<table>
  <tr>
    <td>
      The Edit Post page is constructed in a similar fashion to the Edit Post page. The user's profile information will pre-poplulate with the user's data if it exists.<br/></br>
      The form contains authenication and will only submit on completed fields to make sure the user has some , with the exception of Name and Email, these two fields can be left blank and the form will not throw any errors and can be submitted. As the site is intended for musicians and music teachers to share resources it is also available for users to share contact information in order to recruit students or colloaborators, this is why the more personal details of name and email have been left as optional. In the future as the site grows, the implications of security and privacy will need to be addressed.
    </td>
  </tr>
  <tr>
    <td>
      <image src="readme-files/site-screenshots/profile/edit-profile.png" width=100%>
    </td>
  </tr>
</table>
<br/>
<hr/>

## <ins>***Most Followed Profiles***
<table>
  <tr>
    <td>
      This component appears on  profile pages and all list pages. In mobile view it renders above the search bar or above the profile header in the profile pages. In larger screens it is rendered on the right-hand side of the page. It doesn't not scroll. This component renders the most followed profiles, profiles with a higher follower count will appear at the top of the list.
      In mobile view this component will only render the top four avatars. <br/><br/>
      The component has a reactive follow/unfollow button. If the user is not currently following a profile the button will display 'follow', on click the button changes to 'unfollow' and the backgorund color changes to signify the user is now followed. If the user was to go to to their profile or that user's profile they would see the followers and following number have increase respectively.
    </td>
  </tr> 
  <tr>
    <td>
      <image src="readme-files/site-screenshots/profile/most-followed.png" width=50%><image src="readme-files/site-screenshots/mobile/list.png" width=30%>
    </td>
  </tr>
</table>
<br/>
<hr/>

## <ins>***Change Username***
<table>
  <tr>
    <td>
      A user can choose to change thier username if they wish, through the gear icon <a href="#dropdown-menus"><em>dropdown menu</em></a> in their profile.
    </td>
    <td><image src="readme-files/site-screenshots/navigation/profile-dropdown.png" width="100%"></td>
  </tr>
  <tr>
    <td>
      Clicking this option brings the user to this simple form where they can submit a new username. Clicking save will update the profile database instance which will reflect on all relevant components, it will also reflected in authentication in the sign in page, requiring the user to use the updated username to log in. Clicking cancel returns the user to their profile page.
    </td>
  </tr>
  <tr>
    <td>
      <image src="readme-files/site-screenshots/utilities/username.png" width=100%>
    </td>
  </tr>
</table>
<br/>
<hr/>

## <ins>***Change Password***
<table>
  <tr>
    <td>
      A user can choose to change thier password if they wish, through the gear icon <a href="#dropdown-menus"><em>dropdown menu</em></a> in their profile.
    </td>
    <td><image src="readme-files/site-screenshots/navigation/profile-dropdown.png" width="100%"></td>
  </tr>
  <tr>
    <td>
      <image src="readme-files/site-screenshots/utilities/password.png" width=100%>
    </td>
  </tr>
  <tr>
    <td>
      Clicking this option brings the user to this simple form where they can submit a new password. Clicking save will update the user authorisation which will be reflected in authentication for the user in the sign in page, requiring use of the updated password to log in. Clicking cancel returns the user to their profile page.
    </td>
  </tr>
</table>
<br/>
<hr/>

## <ins>***Alert***
<table>
  <tr>
    <td>
      The <a href="https://www.npmjs.com/package/react-toastify"><em>Toastify</em></a> package is used to display a simple success message on major crud operation such as: creating a post and updating a post or profile. The post is styled with custom css to maintain design aesthetics with the rest of the site.
    </td>
  </tr>
  <tr>
    <td>
      <image src="readme-files/site-screenshots/utilities/alert.png" width=100%>
    </td>
  </tr>
</table>
<br/>
<hr/>
<br/>

# Future Developments

All liked/saved posts can be organised into self-made categories
Post list descriptions to preview text in case the post has a larger amount of text
delete profile
tutor profile, student followers
larger pdf file sizes
additional fiile formats
in profiles, instuments in profile can be links that lead to posts or other profiles related to that instrument
Practice Companion - metronone, play alongs, audio
More complex profile component - to allow for larger expressions of biograpical data, and more data fields
Users can view which other profiles a profile is following or being followed by
A user can currently have a blank profile if they don't visit the edit profile page, they can either have a blank profile or have to provide certain information. A more detailed sign up page, or profile creation page could be included so users can create a profile during the process of signing up to the site
- contact user button; allow users to send a private message to other users
- Popular profiles component can show the number of followers a profile has and could always be visible when scrolling down list pages
- Users can click on the following or followers metric in a profile to get a list of users either following or being followed by that profile

<br/><hr><br/>
# Testing
## Manual Testing

Manual testing has been carried out on the application to determine the outcome of expected functions, events, and interactions. The tables in the below files indicate the type of test applied, the expected outcome, the actual outcome, and any errors found and linked to an issue in the [project board](https://github.com/users/NickWaldock/projects/7).

A detailed list of all manual testing under-taken can be found here: <br/> 
[>> Manual Testing](/readme-files/testing/manual-testing.md)
<br/><br/><hr>

## Automated Testing

React uses [Jest](https://jestjs.io/docs/tutorial-react) as its test runner, this was used in conjunction with the [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) which comes with a range of utility methods to test components in isolation.

Additionally, [Mock Service Worker](https://mswjs.io/docs/) was used during automated testing to supply mock API calls.

<image src="readme-files/testing/navbar-test.png" width=80%><br/>

Automated tests were used to determine whether the Navbar renders links correctly. 

<image src="readme-files/testing/testing-results.png" width=30%><br/>

The full code for these tests can be found here: >>> [NavBar Testing](https://github.com/NickWaldock/the-woodshed/blob/main/src/components/__tests__/NavBar.test.js)
<br/><br/><hr>

## Bugs
Here is a summary of known bugs and issues discovered from the testing procedure: 

<table>
  <th>BUG</th>
  <th>Status</th>
  <tr>
    <td>
    <a href="https://github.com/users/NickWaldock/projects/7/views/1?filterQuery=BUG&pane=issue&itemId=31576277">
    Deleting a post redirects the user to tsignin page and then to homepage</a>
    </td>
  <td>SOLVED</td>
  </tr>
  <tr>
    <td>
    <a href="https://github.com/users/NickWaldock/projects/7/views/1?filterQuery=BUG&pane=issue&itemId=31612906">Console error "Can't perform a React state update on an unmounted component"</a>
    </td>
  <td>UNRESOLVED</td>
  </tr>
  <tr>
    <td>
    <a href="https://github.com/users/NickWaldock/projects/7/views/1?filterQuery=BUG&pane=issue&itemId=31649372">Possible to navigat to pages when unauthenticaed via the url bar</a>
    </td>
  <td>SOLVED</td>
  </tr>
  <tr>
    <td>
    <a href="https://github.com/users/NickWaldock/projects/7/views/1?filterQuery=BUG&pane=issue&itemId=31839935">404 Not FOund errors when pdfs are rendering on two particualr profiles, even though the files are rendering ok in the DOM</a>
    </td>
  <td>SOLVED</td>
  </tr>
  <tr>
    <td>
    <a href="https://github.com/users/NickWaldock/projects/7/views/1?filterQuery=BUG&pane=issue&itemId=31586557">Toastify alert won't display on the delete post function</a>
    </td>
  <td>UNRESOLVED</td>
  </tr>
  <tr>
    <td>
    <a href="https://github.com/users/NickWaldock/projects/7/views/1?filterQuery=BUG&pane=issue&itemId=31976680">In Safari on OSX and iOS, user login attempts continually redirect top the landing page</a>
    </td>
  <td>SOLVED</td>
  </tr>
  <tr>
    <td>
    <a href="https://github.com/users/NickWaldock/projects/7/views/1?filterQuery=BUG&pane=issue&itemId=31066437">Clicking on a user profile redirects back to the home page instead of profile page</a>
    </td>
  <td>SOLVED</td>
  </tr>
  <tr>
    <td>
    <a href="https://github.com/users/NickWaldock/projects/7/views/1?filterQuery=BUG&pane=issue&itemId=31034422">Popular profiles component is not rendering in the post detail page view</a>
    </td>
  <td>SOLVED</td>
  </tr>
  <tr>
    <td>
    <a href="https://github.com/users/NickWaldock/projects/7/views/1?filterQuery=BUG&pane=issue&itemId=31066662">PDF preview renders only one instance in the list view and not in all post instances in the list views</a>
    </td>
  <td>SOLVED</td>
  </tr>
</table>
<br/><br/>
The following bugs persist and are permissible as part of the submission of this project:
<br/><br/>
400 - Bad Request: Occurs when submitting incorrect form data
<image src="readme-files/testing/400.png" width=50%>
<br/><br/>
401 - Unorthorised: Occurs when an accesses token has expired and is refreshed in the background
<image src="readme-files/testing/401-1.png" width=50%>
<br/><br/>
401 - Unorthorised: Occurs when navigating to the sign in or sign up page when not logged in, this console error occurs when checking if the logged in user needs to be redirected from this page<br>
<image src="readme-files/testing/401-2.png" width=50%>

<br/><hr><br/>
# Code Validation
HTML, CSS, were validated using [W3C](https://validator.w3.org/)

## React Validation
[ES Lint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) was installed into VS code for continual code validation during the project development. Every JavaScript file was checked for errors or warnings and dealth with accordingly.

Currently only one file consists of warnings for unused variables, PdfPreview.js.
<image src="readme-files/testing/eslint-warnings.png" width=100%>
These warnings have not been 'fixed' due to the nature of this component. The decision was made to make the PDF preview a seperate component rather than solely existing in the already complex Post component. The whole database object was required to be called or retrieved via the API in order to access the single pdf file attribute which was to be utilised in the component.

## HTML Validation
[W3C Markup Validation Service](https://validator.w3.org/) was used to validate application HTML
<br>
<image src="readme-files/testing/html/root.png" width=49%>
<image src="readme-files/testing/html/signin.png" width=49%>
<image src="readme-files/testing/html/signup.png" width=49%>
<image src="readme-files/testing/html/home.png" width=49%>
<image src="readme-files/testing/html/landing-page.png" width=49%>
<image src="readme-files/testing/html/add-post.png" width=49%>
<image src="readme-files/testing/html/post.png" width=49%>
<image src="readme-files/testing/html/post-edit.png" width=49%>
<image src="readme-files/testing/html/profile-edit.png" width=49%>
<image src="readme-files/testing/html/profile.png" width=49%>
<image src="readme-files/testing/html/password.png" width=49%>
<image src="readme-files/testing/html/username.png" width=49%>
<br/><br/>
The following info markers suggested removing trailing slashes for JSX elements and were ignored.<br>
<image src="readme-files/testing/html/info.png" width=49%>

## CSS Validation
[W3C Markup Validation Service](https://validator.w3.org/) was used to validate application CSS
<br>
<image src="readme-files/testing/css/root.png" width=49%>
<image src="readme-files/testing/css/landing-page.png" width=49%>
<image src="readme-files/testing/css/signin.png" width=49%>
<image src="readme-files/testing/css/signup.png" width=49%>
<image src="readme-files/testing/css/home.png" width=49%>
<image src="readme-files/testing/css/add-post.png" width=49%>
<image src="readme-files/testing/css/post.png" width=49%>
<image src="readme-files/testing/css/post-edit.png" width=49%>
<image src="readme-files/testing/css/profiles.png" width=49%>
<image src="readme-files/testing/css/password.png" width=49%>
<image src="readme-files/testing/css/username.png" width=49%>
<br><hr>

## Lighthouse Report

<br/><hr><br/>
# Deployment

[The live site can be accessed here](https://the-woodshed.herokuapp.com/)
<br/><br/>
To create and deploy your own version of this application please follow the steps below.

## Cloudinary

1. Navigate to the [Cloudinary website](https://cloudinary.com/)
2. Log in or create and account
3. On the main console page click "Dashboard"
4. Here you will find all the information for the next steps

## PostgreSQL

1. Navigate to [ElephantSQL](https://www.elephantsql.com/) or another PostgresSQL database provider
2. Log in or create an account
3. Click "Create New Instance"
4. Add a name for your database, tags and a plan (Tiny Turtle is Free)
5. Click "Select Region"
6. Select your cloest region
7. Click Review
8. On the confirm page click "Create Instance"
9. Your database is now set up. Click on the name of your database in the dashboard to view all information for the next steps


## Heroku
### Back-End
To deploy the back-end to Heroku:
1. Log in to [Heroku](https://www.heroku.com/) (create an account if necessary)
2. From the dashboard, click on the "New" button and select "Create new app"
3. Choose an appropriate name for your app and select the region closest to your location
4. Access the "Settings" tab
5. Click on "Reveal Config Vars"
6. Add all necessary key-value pairs:
<image src="readme-files/heroku-vars-backend.png">
<br/>
Required config vars:
- ALLOWED_HOST --> The URL of the back-end application
- CLIENT_ORIGIN --> The URL of the front-end application
- CLOUNDINARY_URL --> Available from Cloudinary (for image, file storage)
- DATASABE_URL --> Available from your SQL provider
- DISABLE_COLLECTSTATIC - "1"
- SECRET_KEY --> Django secret key, found in env.py file. Should be unique!

7. Access the "Deploy" tab
8. Select "GitHub - Connect to GitHub" from the deployment methods and click on "Connect to GitHub"
10. Search for the relevant GitHub repository and click it
11. Choose automatic deploys to allow the deployed site to be updated each time code is pushed to GiHub
12. Click "View" to view the deployed site. The back-end is now deployed!
<br><br>

### Front-end
1. Log in to [Heroku](https://www.heroku.com/) (create an account if necessary)
2. From the dashboard, click on the "New" button and select "Create new app"
3. Choose an appropriate name for your app and select the region closest to your location
4. Navigate to "Settings"
9. Select "GitHub - Connect to GitHub" from the deployment methods and click on "Connect to GitHub"
10. Search for the relevant GitHub repository and click it
11. Choose automatic deploys to allow the deployed site to be updated each time code is pushed to GiHub
12. Click "View" to view the deployed site. The site is now deployed!
<br><br>
## Forking
To fork this repository on [Github](https://github.com/NickWaldock/the-woodshed) proceed with the following steps:
1. Log it to GitHub (create an account if necessary)
2. Locate the [GitHub Respository](https://github.com/NickWaldock/the-woodshed)
3. On the repository page, find the 'Fork' menu in the top right, click on the small down arrow
4. Select '+ Create a new fork'
5. Remane repository as required
6. Click 'Create Fork'
7. You now have your forked version of this repository

<em>* NOTE * You can find the back-end repo for this project [here](https://github.com/NickWaldock/the-woodshed-api)</em>
<br />
<br />

## Cloning
To clone the repository procees with the following steps:
1. Log in to GitHub (create an account if necessary)
2. Locate the [GitHub Respository](https://github.com/NickWaldock/the-woodshed)
3. On the repository page, find and click on the 'Code' menu in the mid-top right of the page
4. Choose to either download or open in GitHub Desktop,
  - or;
    5. Choose the HTTPS option and copy the URL to your clipboard
    6. - To clone the repository using HTTPS, under "HTTPS", copy the url
       - To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority, click SSH, then copy the url
       - To clone a repository using GitHub CLI, click GitHub CLI, then copy url
    7. Open Terminal and change the current directory to where you want the cloned directory
    8. Type git clone, and paste the url, press Enter to create your local clone
<br/><br/>
<em>* NOTE * You can find the back-end repo for this project [here](https://github.com/NickWaldock/the-woodshed-api)</em>

<hr><br /><br />
# References & Acknowledgements
## General Reference
## Code Reference

- For adding PDF file types to the add post form
  https://stackoverflow.com/questions/12142536/how-to-make-input-type-file-should-accept-only-pdf-and-xls

## Acknowledgements

