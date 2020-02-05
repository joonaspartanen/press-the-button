![Node CI](https://github.com/joonaspartanen/press-the-button/workflows/Node%20CI/badge.svg)

# Press the Button

## About

A multiplayer browser game with socket.io, Node.js and React.

This is my project for the [Vincit Koodarijahti 2020](https://www.koodarijahti.fi/) (in Finnish only).

The aim is to build a simple multiplayer game that is played by pressing a button. There is a global counter that is incremented by one on every click and whose value is unknown to the players. When players click the button, they can either win 5, 40 or 250 points, depending on the value of the counter, or lose 1 point. After the click, a notification is shown to the player.

## Technologies

The backend is built with Node.js and Express. The frontend is made with React and uses Semantic UI React for styling. The application relies on [socket.io](https://socket.io/) for communication between the server and the client.

The backend is tested with [jest](https://jestjs.io/) and there are some E2E tests with [Cypress](https://www.cypress.io/).

## Prerequisites

Make sure you have npm and node installed.

## How to run

First, clone the repository with `git clone https://github.com/joonaspartanen/press-the-button.git`.

### Development

To run the application in development mode, use the following commands to navigate to the backend folder and run the server:

```
cd press-the-button
cd backend
npm install
npm start
```

The backend is now running on port 5000.

Now, open another terminal window, head to the frontend folder, install the dependencies and start the client:

```
cd press-the-button
cd frontend
npm install
npm start
```

The frontend is now running on port 3000 and you can head to `http://localhost:3000/` to access it.

### Production

To start the project in production mode, first head to the backend folder and make a production build of the project. Then run the backend. Use the following commands:

```
cd press-the-button
cd backend
npm install
npm build:ui
npm start
```

Now open `http://localhost:5000/` in your browser to use the application.

## Demo

There is a demo running on Heroku: [Press the Button](http://press-the-button-game.herokuapp.com/)

## Comments and todos

- Testing the sockets turned out to be rather complicated, and the test coverage is not yet wide enough.

- The UI includes a scoreboard. This might not be wise as it allows the players to guess more easily when the counter hits the next prize. On the other hand, this leaves room for tactics and might make the game more interesting and interactive. Also, without the scoreboard, it wouldn't make much sense to use the socket.io for the project, and I wanted to take this opportunity to learn about a new technology.

- TODO: Frontend tests with react-testing-library.

- TODO: CD pipeline.

- TODO: Create Dockerfiles.
