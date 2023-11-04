import { checkWinner } from "./checkWinner";

export function bestMove(board) {
	let bestScore = -Infinity;
	let moveIndex;
	for (let i = 0; i < board.length; i++) {
		// is spot available
		if (board[i] === null) {
			const boardCopy = [...board];
			boardCopy[i] = "O"; // AI
			let score = minimax(boardCopy, 0, false);
			if (score > bestScore) {
				bestScore = score;
				moveIndex = i;
			}
		}
	}
	console.log(moveIndex);
	return moveIndex;
}

const scores = {
	X: -1,
	O: 1,
	tie: 0,
};

function minimax(board, depth, isMax) {
	let result = checkWinner(board, () => {});
	if (result) {
		return scores[result];
	}

	if (isMax) {
		let bestScore = -Infinity;
		for (let i = 0; i < board.length; i++) {
			// is spot available
			if (board[i] === null) {
				const boardCopy = [...board];
				boardCopy[i] = "O"; // AI
				let score = minimax(boardCopy, depth + 1, false);
				bestScore = Math.max(score, bestScore);
			}
		}
		return bestScore;
	} else {
		let bestScore = Infinity;
		for (let i = 0; i < board.length; i++) {
			// is spot available
			if (board[i] === null) {
				const boardCopy = [...board];
				boardCopy[i] = "X"; // PLAYER
				let score = minimax(boardCopy, depth + 1, true);
				bestScore = Math.min(score, bestScore);
			}
		}
		return bestScore;
	}
}
