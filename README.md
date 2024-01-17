# Tic Tac Toe Reloaded: React Version 

## Documentation

### Overview
This documentation provides an overview of the simple Tic Tac Toe game implemented in React using the provided BGame component.

### Files
- **BGame.jsx:** React component for the Tic Tac Toe game.
- **App.jsx:** Main application component that renders the `BGame` component.
- **main.jsx:** Entry point for rendering the React application.
- **style.css:** Holds the designing aspect of the game.

### How to Play

#### Starting the Game
1. Open the application in a web browser.
2. The Tic Tac Toe board will be displayed, and the game will start.

#### Game Rules
1. The game is played on a 3x3 grid.
2. Two players take turns to make a move.
3. Player 1 (X) and Player 2 (O) alternate turns.
4. The objective is to get three of their marks in a row (horizontally, vertically, or diagonally) before the opponent.
5. The game ends when either a player wins, it's a draw, or the user decides to reset the game.

#### Making a Move
- Click on an empty box on the grid to place your mark (X or O).
- Alternately, Player 1 (X) starts the game, followed by Player 2 (O) on each subsequent turn.
- Once a move is made, the turn switches to the other player.

#### Winning the Game
- The game is won when a player successfully forms a horizontal, vertical, or diagonal line with their marks.
- The winning player's mark (X or O) will be displayed, and the game will be locked.

#### Draw
- If all the boxes are filled, and no player has formed a winning combination, the game is declared a draw.

### Components and Functions

#### BGame Component

- ##### State:
  - `count` : Tracks the number of moves made.
  - `lock` : Boolean flag to lock the game after a win or draw.
- ##### Refs:
  - `titleRef` : Ref to the game title for dynamic updates.
  - `box1` to `box9` : Refs to individual boxes on the game board.
- ##### Functions:
  - `toggle(e, num)` : Handles the logic for making a move when a box is clicked.
  - `checkWin()` : Checks for winning combinations or a draw.
  - `won(winner)` : Handles the end of the game, displaying the winner or a draw message.
  - `reset()` : Resets the game to its initial state.

#### App Component

- ##### Rendering:
  - Renders the `BGame` component.

#### main.jsx
- ##### Rendering:
  - Renders the `App` component using ReactDOM.

#### Usage 
1. Ensure you have a React development environment set up.
2. Include the provided components (BGame, App) in your React application.
3. Run your React application to start playing Tic Tac Toe.

#### Customization

Feel free to customize the game's appearance, styles, or add additional features based on your preferences. You can modify the CSS styles in the `style.css` file and enhance the game logic in the `BGame.jsx` file.


Have fun playing Tic Tac Toe!