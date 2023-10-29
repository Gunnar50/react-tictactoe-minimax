import React from "react";
import Tile from "./Tile";

function Board({ tiles }) {
	return (
		<div className="board">
			<Tile value={tiles[0]} className="border-right border-bottom" />
			<Tile value={tiles[1]} className="border-right border-bottom" />
			<Tile value={tiles[2]} className="border-bottom" />

			<Tile value={tiles[3]} className="border-right border-bottom" />
			<Tile value={tiles[4]} className="border-right border-bottom" />
			<Tile value={tiles[5]} className="border-bottom" />

			<Tile value={tiles[6]} className="border-right" />
			<Tile value={tiles[7]} className="border-right" />
			<Tile value={tiles[8]} />
		</div>
	);
}

export default Board;
