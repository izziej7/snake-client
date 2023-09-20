# Snake Client Project

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.

This is simply a multiplayer take on the genre.

Before you can run this client, you will need to be running the server side which you can download and install from [here](https://github.com/lighthouse-labs/snek-multiplayer). 

## Final Product

![Start of game](assets/images/screenshot-start.png)
![Game underway](assets/images/screenshot-mid.png)


## Getting Started

- Follow steps inside the snek server repo to run the server side
- Run the development snake client using the `node play.js` command and include your player initials as a command line argument. For example, `node play.js FMJ`.
- Use the `W` (up), `A` (left), `S` (down), and `D` (right) keys to move your snake.
- Use the `G` (Good Game!) and `O` (Oops!) keys to send messages to other players.
- If you are idle for more than a few seconds, you will be kicked out of the game with the message `you ded cuz you idled`.
- Press `Ctrl + C` to terminate the game.