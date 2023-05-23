// import { useEffect, useRef, useState } from "react";
// import { BsFillCalendarFill } from "react-icons/bs";
// import { produce } from "immer";

// import ExpandableText from "./components/ExpandableText";
// import Alert from "./components/Alert";
// import ListGroup from "./components/ListGroup";
// import Button from "./components/Button";
// import Like from "./components/Like";
// import Cart from "./components/Cart";
// import NavBar from "./components/NavBar";
// import Form from "./components/Form";
// import ExpenseForm, {
// 	ExpenseFormData,
// } from "./expense-tracker/components/ExpenseForm";
// import ExpenseList from "./expense-tracker/components/ExpenseList";
// import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";

// export const categories = [
// 	"All categories",
// 	"Groceries",
// 	"Utilities",
// 	"Entertainment",
// ];

const App = () => {
	// example useEffect:
	// would like to focus on input field after each render and change title as well
	// const ref = useRef<HTMLInputElement>(null);

	// function inside will be called after each render
	// useEffect(() => {
	// console.log(ref.current);

	// this code has a side effect: changing something outside of the component
	// so the component is no longer a pure component
	// that's why need to put to useEffect hook
	// if (ref.current) ref.current.focus();
	// });

	// useEffect(() => {
	// 	document.title = "My App";
	// });

	return (
		<>{/* <input ref={ref} type="text" className="form-control" /> */}</>
	);

	// const [expenses, setExpenses] = useState([
	// 	{ description: "", amount: 0, category: "" },
	// ]);
	// const [selectedCategory, setSelectedCategory] = useState("");

	// const handleSubmit = (newProduct: ExpenseFormData) => {
	// const cloneProducts = [...expenses];

	// make sure expenses is immutable
	// 	console.log(expenses);
	// 	setExpenses(
	// 		cloneProducts[0].category === ""
	// 			? cloneProducts.map((product) => ({
	// 					...product,
	// 					...newProduct,
	// 			  }))
	// 			: [...cloneProducts, newProduct]
	// 	);
	// };

	// const handleDelete = (description: string) => {
	// 	const product = expenses.filter(
	// 		(product) => product.description !== description
	// 	);

	// setExpenses(
	// 	!product.length
	// 		? [{ description: "", amount: 0, category: "" }]
	// 		: product
	// );
	// setSelectedCategory("All categories");
	// };

	// const handleSelectCategory = (category: string) => {
	// 	setSelectedCategory(category);
	// };

	// const visibleExpenses =
	// 	selectedCategory && selectedCategory !== "All categories"
	// 		? expenses.filter(
	// 				(expense) => expense.category === selectedCategory
	// 		  )
	// 		: expenses;

	// return (
	// <>
	{
		/* <ExpenseForm onSubmitForm={handleSubmit} />
			<ExpenseFilter onSelectCategory={handleSelectCategory} />
			<ExpenseList expenses={visibleExpenses} onDelete={handleDelete} /> */
	}
	// </>
	// );

	// const cities = ["hanoi", "hcm", "danang"];
	// const [alertVisible, setAlertVisibility] = useState(false);
	// const [cartProducts, setCartProducts] = useState(["item1", "item2"]);
	// const [game, setGame] = useState({
	// 	id: 1,
	// 	player: { email: "a", name: "John" },
	// });
	// const [pizza, setPizza] = useState({
	// 	name: "Spicy Pepperoni",
	// 	toppings: ["Mushroom"],
	// });
	// const [cart, setCart] = useState({
	// 	discount: 0.1,
	// 	items: [
	// 		{
	// 			id: 1,
	// 			title: "product1",
	// 			quantity: 1,
	// 		},
	// 		{ id: 2, title: "product2", quantity: 2 },
	// 	],
	// });

	// const handleSelectItem = (item: string) => {
	// 	console.log(item);
	// };

	// const handleClear = () => {
	// 	setCartProducts([]);
	// };

	// const handleUpdate = () => {
	// 	// use immer
	// 	setGame(
	// 		produce((draft) => {
	// 			if (draft.id === 1) draft.player.name = "Bob";
	// 		})
	// 	);

	// 	setPizza(
	// 		produce((draft) => {
	// 			draft.toppings.push("Sauce");
	// 		})
	// 	);

	// 	// use immutable way:
	// 	// setGame({ ...game, player: { ...game.player, name: "Bob" } });

	// 	setCart({
	// 		...cart,
	// 		items: cart.items.map((i) =>
	// 			i.id === 1 ? { ...i, quantity: (i.quantity += 1) } : i
	// 		),
	// 	});
	// };

	// return (
	// 	<>

	{
		/* <Form /> */
	}

	{
		/* <ExpandableText maxChars={100}>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit.
				Explicabo officiis magnam quasi hic? Qui autem unde rerum minima
				expedita sequi voluptatibus veniam magnam eum dolor, vitae
				libero optio accusamus adipisci, inventore voluptate, iusto
				illum consequuntur neque totam? Neque eos porro, quos eaque
				saepe, ipsum fugit cumque tempora dolores voluptates qui
				ducimus, vel explicabo officia eveniet nulla? Quis nam debitis
				reiciendis perferendis beatae, aliquid soluta aperiam a
				temporibus rerum, hic id ipsum incidunt neque ipsam deserunt?
				Sequi ratione obcaecati qui reprehenderit esse eligendi
				reiciendis cum exercitationem tenetur dolorem, quaerat rerum
				illo sapiente corrupti quos quidem? Cum, molestias ipsam!
				Placeat, reprehenderit sequi?
			</ExpandableText> */
	}

	// 		<p>
	// 			{game.player.name} {pizza.toppings.join(" ")}{" "}
	// 			{cart.items.map((i) => (
	// 				<p key={i.id}>{i.quantity}</p>
	// 			))}
	// 		</p>
	// 		<button onClick={handleUpdate}>Update name</button>

	// 		<NavBar cartProductsCount={cartProducts.length} />

	// 		<Cart cartProducts={cartProducts} onClear={handleClear} />

	// 		<BsFillCalendarFill />

	// 		{alertVisible && (
	// 			<Alert onClose={() => setAlertVisibility(false)}>
	// 				Hello <span>World</span>
	// 			</Alert>
	// 		)}
	// 		<Button color="Primary" onClick={() => setAlertVisibility(true)}>
	// 			Test Button
	// 		</Button>

	// 		<Like onClick={() => console.log("clicked")} />

	// 		<ListGroup
	// 			items={cities}
	// 			heading="Cities"
	// 			onSelectItem={handleSelectItem}
	// 		/>

	// 	</>
	// );
};

export default App;
