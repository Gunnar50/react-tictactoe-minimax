export const checkWinner = (tiles, setStrikeClass) => {
	if (tiles[0] && tiles[0] === tiles[1] && tiles[0] === tiles[2]) {
		setStrikeClass("strike-row-1");
		return tiles[0];
	} else if (tiles[3] && tiles[3] === tiles[4] && tiles[3] === tiles[5]) {
		setStrikeClass("strike-row-2");
		return tiles[3];
	} else if (tiles[6] && tiles[6] === tiles[7] && tiles[6] === tiles[8]) {
		setStrikeClass("strike-row-3");
		return tiles[6];
	} else if (tiles[0] && tiles[0] === tiles[3] && tiles[0] === tiles[6]) {
		setStrikeClass("strike-column-1");
		return tiles[0];
	} else if (tiles[1] && tiles[1] === tiles[4] && tiles[1] === tiles[7]) {
		setStrikeClass("strike-column-2");
		return tiles[1];
	} else if (tiles[2] && tiles[2] === tiles[5] && tiles[2] === tiles[8]) {
		setStrikeClass("strike-column-3");
		return tiles[2];
	} else if (tiles[0] && tiles[0] === tiles[4] && tiles[0] === tiles[8]) {
		setStrikeClass("strike-diagonal-1");
		return tiles[0];
	} else if (tiles[2] && tiles[2] === tiles[4] && tiles[2] === tiles[6]) {
		setStrikeClass("strike-diagonal-2");
		return tiles[2];
	}
	return false;
};

export const isBoardFull = (tiles) => {
	return tiles.every((tile) => tile !== null);
};
