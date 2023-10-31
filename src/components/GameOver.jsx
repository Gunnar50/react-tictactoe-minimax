import React from "react";
import NEW_GAME from "../assets/images/new-game.png";
import { GameState, checkGameState } from "../util/gameState";

function GameOver({ gameState, handleNewGame }) {
	return (
		<>
			<div className="game-over">{checkGameState(gameState)}</div>
			<div className="new-game">
				{gameState !== GameState.inGame ? (
					<img src={NEW_GAME} onClick={handleNewGame} />
				) : (
					""
				)}
			</div>
		</>
	);
}

export default GameOver;
