import React from "react";

function Tile({ value, className, onClick }) {
	return (
		<div onClick={onClick} className={`tile ${className}`}>
			<img src={value} />
		</div>
	);
}

export default Tile;
