![Node CI](https://github.com/joonaspartanen/press-the-button/workflows/Node%20CI/badge.svg)

# Press the Button

## About

A multiplayer browser game with socket.io, Node.js and React.

This is my project for the [Vincit Koodarijahti 2020](https://www.koodarijahti.fi/) (in Finnish only).

The aim is to build a simple multiplayer game that is played by pressing a button. There is a global counter that is incremented by one on every click and whose value is unknown to the players. When players click the button, they can either win 5, 40 or 250 points, depending on the value of the counter, or lose 1 point. After the click, a notification is shown to the player.

## Technologies

The backend is built with Node.js and Express. The frontend is made with React and uses Semantic UI React for styling. The application relies on [socket.io](https://socket.io/) for communication between the server and the client.

## How to run

Clone the repository, navigate to the backend folder and run the server using the following commands:

```
git clone https://github.com/joonaspartanen/press-the-button.git
cd press-the-button
cd backend
npm start
```

The application is now running on port 5000.

If you make changes to the frontend, you must build it again before running the application. Navigate to the backend folder and run:

```
npm run build:ui
npm start
```

The application is now running on port 5000.

## Demo

There is a demo running on Heroku: [Press the Button](http://press-the-button-game.herokuapp.com/)

## Comments and todos

- Testing the sockets turned out to be rather complicated, and the test coverage is not yet wide enough.

- The UI includes a scoreboard. This might not be wise as it allows the players to guess more easily when the counter hits the next prize. On the other hand, this leaves room for tactics and might make the game more interesting and interactive.
