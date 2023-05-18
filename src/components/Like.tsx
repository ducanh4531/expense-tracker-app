import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import { produce } from "immer";

interface LikeProps {
	onClick: () => void;
}

const Like = ({ onClick }: LikeProps) => {
	const [like, setLike] = useState(false);
	const [drink, setDrink] = useState({ title: "hello", price: 5 });
	const [bugs, setBugs] = useState([
		{ id: 1, title: "bug1", fixed: false },
		{ id: 2, title: "bug2", fixed: false },
	]);

	const handleClick = () => {
		// use immutable way to update obj:
		// setBugs(
		// 	bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug))
		// );

		// use immer library to handle obj:
		setBugs(
			produce((draft) => {
				const bug = draft.find((bug) => bug.id === 1);
				if (bug) bug.fixed = !bug.fixed;
			})
		);
	};

	return (
		<>
			{bugs.map((bug) => (
				<p key={bug.id}>
					{bug.title} {bug.fixed ? "Fixed" : "New"}
				</p>
			))}
			<button onClick={handleClick}>Update bugs</button>
			<div
				onClick={() => {
					onClick();
					setLike(!like);
					const newDrink = { ...drink };
					newDrink.price += 1;
					setDrink(newDrink);
				}}
			>
				<p>{drink.price}</p>
				{like ? (
					<AiFillHeart style={{ color: "red" }} />
				) : (
					<AiOutlineHeart />
				)}
			</div>
		</>
	);
};

export default Like;
