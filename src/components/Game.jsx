import React, { useEffect, useState } from "react";
import PLAYER_O from "../assets/images/player-o.png";
import PLAYER_X from "../assets/images/player-x.png";
import { checkWinner, isBoardFull } from "../util/checkWinner";
import { generateAIEasy, generateAIHard } from "../util/computerAI";
import { GameState } from "../util/gameState";
import Board from "./Board";
import GameOver from "./GameOver";
import GameStats from "./GameStats";

function Game() {
	const [tiles, setTiles] = useState(Array(9).fill(null));
	const [playerTurn, setPlayerTurn] = useState(Math.floor(Math.random() * 2));
	const [winnerStrikeClass, setWinnerStrikeClass] = useState("");
	const [gameState, setGameState] = useState(GameState.inGame);
	const [gameStats, setGameStats] = useState({
		player: 0,
		computer: 0,
		tie: 0,
		gamesPlayed: 0,
	});

	const makeMove = (index) => {
		const newTiles = [...tiles];
		newTiles[index] = playerTurn ? PLAYER_X : PLAYER_O;
		setTiles(newTiles);
		setPlayerTurn(!playerTurn);
	};

	const updateStats = (updatedGameState) => {
		setGameStats((prevStats) => {
			let newStats = { ...prevStats, gamesPlayed: prevStats.gamesPlayed + 1 };

			if (updatedGameState === GameState.playerWin) {
				newStats.player = prevStats.player + 1;
			} else if (updatedGameState === GameState.computerWin) {
				newStats.computer = prevStats.computer + 1;
			} else if (updatedGameState === GameState.tie) {
				newStats.tie = prevStats.tie + 1;
			}

			newStats.gamesPlayed = prevStats.gamesPlayed + 1;

			return newStats;
		});
	};

	useEffect(() => {
		const winner = checkWinner(tiles, setWinnerStrikeClass);
		let updatedGameState = gameState;

		if (winner) {
			updatedGameState =
				winner === PLAYER_X ? GameState.playerWin : GameState.computerWin;
			setGameState(updatedGameState);
			updateStats(updatedGameState);
			return;
		}
		if (isBoardFull(tiles)) {
			setGameState(GameState.tie);
			updateStats(GameState.tie);
			return;
		}
		if (!playerTurn) {
			const computerMove = generateAIHard(tiles);
			makeMove(computerMove);
		}
	}, [tiles]);

	const handleTileClick = (index) => {
		if (gameState !== GameState.inGame || !playerTurn) return; // return if game state is not in game
		if (tiles[index] !== null) return; // return if tile is not null

		makeMove(index);
	};

	const handleNewGame = () => {
		setTiles(Array(9).fill(null));
		setPlayerTurn(Math.floor(Math.random() * 2));
		setGameState(GameState.inGame);
		setWinnerStrikeClass(null);
	};

	return (
		<div className="game">
			<h1>Tic-Tac-Toe</h1>
			<GameStats gameStats={gameStats} />
			<Board
				tiles={tiles}
				onTileClick={handleTileClick}
				strikeClass={winnerStrikeClass}
			/>
			<GameOver gameState={gameState} handleNewGame={handleNewGame} />
		</div>
	);
}

export default Game;
