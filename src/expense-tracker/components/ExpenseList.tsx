interface Expense {
	description: string;
	amount: number;
	category: string;
}

interface ExpenseListProps {
	expenses: Expense[];
	onDelete: (item: string) => void;
}

const ExpenseList = ({ expenses, onDelete }: ExpenseListProps) => {
	if (!expenses[0]?.category && expenses.length === 1) {
		return null;
	}

	return (
		<>
			<table className="table table-bordered">
				<thead>
					<tr>
						<th>Description</th>
						<th>Amount</th>
						<th>Category</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{expenses[0]?.description ? (
						expenses.map((item) => (
							<tr key={item.description}>
								<td>{item.description}</td>
								<td>${item.amount.toFixed(2)}</td>
								<td>{item.category}</td>
								<td>
									<button
										onClick={() =>
											onDelete(item.description)
										}
										className="btn btn-outline-danger"
									>
										Delete
									</button>
								</td>
							</tr>
						))
					) : (
						<></>
					)}
				</tbody>
				<tfoot>
					<tr>
						<td>Total</td>
						<td>
							$
							{expenses
								.reduce(
									(total, expense) => total + expense.amount,
									0
								)
								.toFixed(2)}
						</td>
						<td></td>
						<td></td>
					</tr>
				</tfoot>
			</table>
		</>
	);
};

export default ExpenseList;
