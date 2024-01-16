import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import circle from '../assets/circle.png';
import cross from '../assets/cross.png';
import './style.css';

let data = ['', '', '', '', '', '', '', '', ''];

const BGame = () => {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  let titleRef = useRef(null);
  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);

  let box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src="${cross}"/>`;
      data[num] = 'x';
      setCount(++count);
    } else {
      e.target.innerHTML = `<img src="${circle}"/>`;
      data[num] = 'o';
      setCount(++count);
    }
    checkWin();
  };

  const checkWin = () => {
    /* check for the winning combination (row, column, diagonal) */
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    let draw = true;

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (data[a] === data[b] && data[b] === data[c] && data[c] !== '') {
        won(data[c]);
        return;
      }
    }

    /* Check if there is an empty cells */
    for (const cell of data) {
      if (cell === '') {
        draw = false;
        break;
      }
    }

    /* declare a draw */
    if (draw) {
      won('draw');
    }
  };

  const won = (winner) => {
    setLock(true);
    if (winner === 'x') {
      titleRef.current.innerHTML = `Congratulations: <img src="${cross}"/>`;
    } else if (winner === 'o') {
      titleRef.current.innerHTML = `Congratulations: <img src="${circle}"/>`;
    } else {
      titleRef.current.innerHTML = `It's a Draw`;
    }
  };

  const reset = () => {
    setLock(false);
    setCount(0);
    data = ['', '', '', '', '', '', '', '', ''];
    titleRef.current.innerHTML = `Tic Tac Toe Reloaded: <span>React Version</span>`;
    box_array.map((e) => {
      e.current.innerHTML = '';
    });
  };

  return (
    <>
      <div className="container">
        <h1 className="header" ref={titleRef}>
          Tic Tac Toe Reloaded: <span>React Version</span>
        </h1>
        <div className="board">
          <div className="row1">
            <div
              className="box"
              ref={box1}
              onClick={(e) => {
                toggle(e, 0);
              }}
            ></div>
            <div
              className="box"
              ref={box2}
              onClick={(e) => {
                toggle(e, 1);
              }}
            ></div>
            <div
              className="box"
              ref={box3}
              onClick={(e) => {
                toggle(e, 2);
              }}
            ></div>
          </div>
          <div className="row2">
            <div
              className="box"
              ref={box4}
              onClick={(e) => {
                toggle(e, 3);
              }}
            ></div>
            <div
              className="box"
              ref={box5}
              onClick={(e) => {
                toggle(e, 4);
              }}
            ></div>
            <div
              className="box"
              ref={box6}
              onClick={(e) => {
                toggle(e, 5);
              }}
            ></div>
          </div>
          <div className="row3">
            <div
              className="box"
              ref={box7}
              onClick={(e) => {
                toggle(e, 6);
              }}
            ></div>
            <div
              className="box"
              ref={box8}
              onClick={(e) => {
                toggle(e, 7);
              }}
            ></div>
            <div
              className="box"
              ref={box9}
              onClick={(e) => {
                toggle(e, 8);
              }}
            ></div>
          </div>
        </div>
        <button
          className="reset"
          onClick={() => {
            reset();
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default BGame;
