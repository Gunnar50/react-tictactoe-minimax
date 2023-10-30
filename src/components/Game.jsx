import React, { useEffect, useState } from "react";
import NEW_GAME from "../assets/images/new-game.png";
import PLAYER_O from "../assets/images/player-o.png";
import PLAYER_X from "../assets/images/player-x.png";
import Board from "./Board";

function Game() {
	const [tiles, setTiles] = useState(Array(9).fill(null));
	const [playerTurn, setPlayerTurn] = useState(PLAYER_X);

	useEffect(() => {
		checkWinner();
	}, [tiles]);

	const handleTileClick = (index) => {
		if (tiles[index] !== null) return;

		const newTiles = [...tiles];
		newTiles[index] = playerTurn;
		setTiles(newTiles);

		if (playerTurn === PLAYER_X) setPlayerTurn(PLAYER_O);
		else setPlayerTurn(PLAYER_X);
	};

	const handleNewGame = () => {
		setTiles(Array(9).fill(null));
		setPlayerTurn(PLAYER_X);
	};

	return (
		<div className="game">
			<h1>TicTacToe</h1>
			<Board tiles={tiles} onTileClick={handleTileClick} />
			<div className="new-game">
				<img src={NEW_GAME} onClick={handleNewGame} />
			</div>
		</div>
	);
}

export default Game;
