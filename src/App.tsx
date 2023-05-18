import { useState } from "react";

import ExpenseForm, {
	ExpenseFormData,
} from "./expense-tracker/components/ExpenseForm";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";

const App = () => {
	const [expenses, setExpenses] = useState([
		{ description: "", amount: 0, category: "" },
	]);
	const [selectedCategory, setSelectedCategory] = useState("");

	const handleSubmit = (newProduct: ExpenseFormData) => {
		const cloneProducts = [...expenses];

		// make sure expenses is immutable
		console.log(expenses);
		setExpenses(
			cloneProducts[0].category === ""
				? cloneProducts.map((product) => ({
						...product,
						...newProduct,
				  }))
				: [...cloneProducts, newProduct]
		);
	};

	const handleDelete = (description: string) => {
		const product = expenses.filter(
			(product) => product.description !== description
		);

		setExpenses(
			!product.length
				? [{ description: "", amount: 0, category: "" }]
				: product
		);
		setSelectedCategory("All categories");
	};

	const handleSelectCategory = (category: string) => {
		setSelectedCategory(category);
	};

	const visibleExpenses =
		selectedCategory && selectedCategory !== "All categories"
			? expenses.filter(
					(expense) => expense.category === selectedCategory
			  )
			: expenses;

	return (
		<>
			<ExpenseForm onSubmitForm={handleSubmit} />
			<ExpenseFilter onSelectCategory={handleSelectCategory} />
			<ExpenseList expenses={visibleExpenses} onDelete={handleDelete} />
		</>
	);
};

export default App;
