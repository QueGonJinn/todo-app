import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

const style = {
	li: `flex justify-between bg-slate-100 p-4 my-2 capitalize rounded-md`,
	liComplete: `flex justify-between bg-slate-400 p-4 my-2 capitalize rounded-md`,
	row: `flex `,
	text: `ml-2 cursor-pointer`,
	textComplete: `ml-2 cursor-pointer line-through`,
	button: `cursor-pointer flex items-center`,
};

function Todo({ todo }) {
	return (
		<li className={todo.completed ? style.liComplete : style.li}>
			<div className={style.row}>
				<input type="checkbox" checked={todo.completed ? 'checked' : ''} />
				<p className={style.text}>{todo.text}</p>
				<p>{todo.time}</p>
			</div>
			<button className={style.button}>
				<FaRegTrashAlt />
			</button>
		</li>
	);
}

export default Todo;
