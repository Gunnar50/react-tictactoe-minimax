import { checkWinner, isBoardFull } from "./checkWinner";

export const bestMove = (board) => {
	let bestScore = -Infinity;
	let moveIndex;
	for (let i = 0; i < board.length; i++) {
		// is spot available
		if (board[i] === null) {
			boardCopy = [...board];
			boardCopy[i] = "O"; // AI
			let score = minimax(boardCopy, 0, true);
			if (score > bestScore) {
				bestScore = score;
				moveIndex = i;
			}
		}
	}
	return moveIndex;
};

scores = {
	X: 1,
	O: -1,
	tie: 0,
};

const minimax = (board, depth, isMax) => {
	let result = checkWinner(board, () => {});
	if (!result || isBoardFull(board)) {
		return scores[result];
	}

	if (isMax) {
		let bestScore = -Infinity;
		for (let i = 0; i < board.length; i++) {
			// is spot available
			if (board[i] === null) {
				boardCopy = [...board];
				boardCopy[i] = "O"; // AI
				let score = minimax(boardCopy, depth + 1, false);
				bestScore = max(score, bestScore);
			}
		}
		return bestScore;
	} else {
		let bestScore = Infinity;
		for (let i = 0; i < board.length; i++) {
			// is spot available
			if (board[i] === null) {
				boardCopy = [...board];
				boardCopy[i] = "X"; // PLAYER
				let score = minimax(boardCopy, depth + 1, true);
				bestScore = min(score, bestScore);
			}
		}
		return bestScore;
	}
};
