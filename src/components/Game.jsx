import React, { useState } from "react";
import Board from "./Board";

function Game() {
	const [tiles, setTiles] = useState(Array(9).fill(null));
	return (
		<div className="game">
			<h1>TicTacToe</h1>
			<Board tiles={tiles} />
		</div>
	);
}

export default Game;
