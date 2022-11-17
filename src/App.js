import { useState, useEffect } from 'react';
import Todo from './components/Todo';
import { HiOutlinePencilSquare } from 'react-icons/hi2';
import { db } from './firebase';
import { query, collection, onSnapshot } from 'firebase/firestore';

const style = {
	bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#114b5f] to-[#88d498]`,
	container: `bg-slate-100 bg-[#f3e9d2] max-w-[700px] w-full m-auto rounded-md shadow-xl p-4`,
	header: `text-3xl font-bold text-center text-gray-800 p-2`,
	form: `flex justify-between`,
	input: `border p-2 w-full text-xl rounded-md`,
	button: `border p-4 ml-2 bg-[#ea5455] rounded-md text-slate-100`,
	count: `text-center p-2`,
};

function App() {
	const [todos, setTodos] = useState([]);

	// Create todo
	// Read todo
	useEffect(() => {
		const q = query(collection(db, 'todos'));
		const unsubscribe = onSnapshot(q, (querySnapshot) => {
			let todosArr = [];
			querySnapshot.forEach((doc) => {
				todosArr.push({ ...doc.data(), id: doc.id });
			});
			setTodos(todosArr);
		});
		return () => unsubscribe;
	}, []);
	// Update todo
	// Delete todo

	return (
		<div className={style.bg}>
			<div className={style.container}>
				<h3 className={style.header}>Todo App</h3>
				<form className={style.form}>
					<input className={style.input} type="text" placeholder="Add Todo" />
					<button className={style.button}>
						<HiOutlinePencilSquare size={30} />
					</button>
				</form>
				<ul>
					{todos.map((todo, index) => {
						return <Todo key={index} todo={todo} />;
					})}
				</ul>
				<p className={style.count}>You have 2 todos</p>
			</div>
		</div>
	);
}

export default App;
