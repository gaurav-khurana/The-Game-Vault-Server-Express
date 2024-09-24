# The Game Vault

## _- By Gaurav Khurana_

## Overview

The Game Vault is a web application for online purchase and rental of video games for Playstation & Xbox One console.

- Web Application for Mobile & Desktop
- Purpose - Online Rental & Purchase of console video games for Playstation & Xbox One

## Problem

I love games which have a story to it. For me, the problem has been that if I purchase a game and I am done with my game play & story mode, I don't know what to do with so either I have to sell it online or let it sit in my shelf. I always wished if I could rent out the game for 15days or 30days that would enough time to enjoy the game & return back to the store.
Hence, "The Game Vault" platform which lets you decide if you want to rent the game or purchase it.

## User Profile

"The Targeted Audience" for this application will be gamers who play video games on Xbox One & Playstation console.

## Features

- User will be able to navigate to the xbox & playstation games area, where they can click & select any game to see their details.
- After going through the details & photo gallery of the game, they would have an option to rent out the game for 15 days or 30 days or they can even purchase the game.
- User will be redirect to checkout page with product in cart, where they fill out a contact details form, shipping details, payment details.
- Once order is succesfully placed, they will be redirected to order confirmation page

## Implementation

## Tech Stack

- React
- JavaScript
- Express
- Heroku
- Client libraries:
  - vite
  - react
  - react-router
  - react-router-dom
  - axios
  - sass
  - bootstrap-react / daisy ui (tailwind css)
  - material-ui
- Server libraries:
  - node
  - express
  - uniqid
  - cors
  - dotenv
- Data Source: JSON files

## APIs

No external API's will be used for "The Game Vault"

## Site Map

- Landing page
- Xbox Product Page -> Xbox Product Details Page
- Playstation Product Page -> Xbox Product Details Page
- Cart
- Checkout Page
- Shipping details
- Billing Page
- Order confirmation

## Mockups

### Home Page

![Landing Page](./public/images/TGV%20Landing%20Page.png)

### Menu/Navigation Page

![Menu/Navigation Page](./public/images/TGV%20Menu:Navigation%20Page.png)

### Product Page

![Product Page](./public//images/TGV%20Product%20Page.png)

### Product Details Page

![Product Details Page](./public/images/TGV%20Product%20Details%20Page.png)

## Data

Data would be in form of 2 different tables i.e Xbox games table & Playstation games table.

![Data and relationship drawing](./Data%20&%20relationship.png)

## Endpoints

**GET /xbox**

- get all xbox games

Sample Response:

```
[
    {
        "id": 1,
        "title": "F1 23",
        "releaseDate": "TBD",
        "description": "F1 23 is an upcoming racing video game
        "price": 59.99,
        "platform": "Xbox One",
        "genre": "Racing",
        "developer": "Codemasters"
    },
    ...
]
```

**GET /xbox/:id**

- get all xbox games by id

Sample Response:

```
    {
        "id": 1,
        "title": "F1 23",
        "releaseDate": "TBD",
        "description": "F1 23 is an upcoming racing video game
        "price": 59.99,
        "platform": "Xbox One",
        "genre": "Racing",
        "developer": "Codemasters"
    }
```

**GET /playstation**

- get all playstation games

Sample Response:

```
[
    {
        "id": 1,
        "title": "F1 23",
        "releaseDate": "TBD",
        "description": "F1 23 is an upcoming racing video game
        "price": 59.99,
        "platform": "Xbox One",
        "genre": "Racing",
        "developer": "Codemasters"
    },
    ...
]
```

**GET /playstation/:id**

- get all playstation games by id

Sample Response:

```
    {
        "id": 1,
        "title": "F1 23",
        "releaseDate": "TBD",
        "description": "F1 23 is an upcoming racing video game
        "price": 59.99,
        "platform": "Xbox One",
        "genre": "Racing",
        "developer": "Codemasters"
    }
```

**GET /allgames**

- get all xbox & playstation games

**POST /billing** // To be decided //

- to post billing details

**POST /shipping** // To be decided //

- to post shipping details

**POST /payment** // To be decided //

- to post payment details

**GET /customerdetails** // To be decided //

- get customer billing, shipping & payment details

## Auth.

Inclusion in application is to be decided. If included then, Login Page would be added to site flow.
Auth may be a nice to have feature

## Roadmap

- Files & Folder structure - Client & Server side

- Install Dependencies - Client & Server side

- Create client

  - react project with routes and boilerplate pages
  - Sass - typo - variables setup on Client side

- Create server

  - express project with routing, with placeholder 200 responses

- Create JSON file for data for xbox & playstation games

- Check and validate API Endpoints using Postman

- Deploy client and server projects so all commits will be reflected in production

- Create Server routes, controllers for all get requests (post requests if included in project)

- Feature: Landing Page

  - Implement landing page with animations

- Feature: Menu/Navigation Page

  - Implement Menu/Navigation page with animations

- Feature: Xbox & Playstation product page

  - Implement product page with animations
  - Create GET /xbox - to get all xbox games
  - Create GET /playstation - to get all playstation games

- Feature: Xbox & Playstation product page

  - Implement product details page with animations
  - Create GET /xbox/:id - to get xbox game by id
  - Create GET /playstation/:id - to get playstation game by id

- Feature: Checkout Page

  - Implement Accodian with Billing details, Shipping details & payments details with form
  - Form validation for all fields
  - Get data from form (if included)
  - Create POST /billing (Client side) to get billing info (if included)
  - Create POST /shipping (Client side) to get shipping info (if included)
  - Create POST /payment (Client side) to get payment info (if included)

- Feature: Order confirmation

  - Create GET /customerdetails to get customer's billing, shipping & payment info
  - Implement Order confirmation page with order number (uniqid) & display customer details
  - Navigate back to Homepage

- Bug fixes
