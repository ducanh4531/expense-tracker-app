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

	const handleSubmit = (newExpense: ExpenseFormData) => {
		const cloneExpenses = [...expenses];

		// make sure expenses is immutable
		console.log(expenses);
		setExpenses(
			cloneExpenses[0].category === ""
				? cloneExpenses.map((expense) => ({
						...expense,
						...newExpense,
				  }))
				: [...cloneExpenses, newExpense]
		);
	};

	const handleDelete = (description: string) => {
		const updatedExpenses = expenses.filter(
			(expense) => expense.description !== description
		);

		setExpenses(
			!updatedExpenses.length
				? [{ description: "", amount: 0, category: "" }]
				: updatedExpenses
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
