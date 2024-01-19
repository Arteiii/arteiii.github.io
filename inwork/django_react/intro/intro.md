---
slug: django_react_intro
title: Django + React Intro
authors: arteii
keywords: [Django, React, Django + React, Fullstack web]
date: 2023-07-17T18:00
---

<!--truncate-->
after a little searching i found three main ways to combine djano and react

1. separate projects: In this approach, the Django backend and the React frontend are developed as separate projects and are
   and deployed independently of each other.
   The Django backend provides a RESTful API that is called by the React application.
   The React application communicates with the backend via AJAX calls (e.g. using Fetch or Axios) and uses the data received,
   to update the user interface.
   This method allows for a clear separation of frontend and backend and provides flexibility in the development and deployment of the two parts.

2. Django + Create React App: This approach uses Create React App (CRA) to create a separate React app that acts as the frontend.
   The React application is provided by Django as static files.
   Django takes responsibility for authentication, routing and data management, while React is responsible for the user interface.
   This method allows for a clearer separation of frontend and backend and makes it easier to develop and deploy each component independently.

3. Django Templates: Django includes a powerful template system,
   with which you can create dynamic HTML pages. You can embed React in a Django template and use the Django template,
   to pass data to the React components. In this case, Django will be used to render the first page,
   and then React will handle the interactivity of the application. This approach can be useful
   if you already have an existing Django project and want to integrate React gradually.

When connecting Django and React, it is important to define a suitable communication interface between the two,
such as a RESTful API.

You can use libraries such as Django REST Framework,
to facilitate the creation of the API and handle the data communication between Django and React.

Ultimately, the choice of approach depends on your specific requirements,
your project structure and your preference.

in this case i chose option 1. the separate projects