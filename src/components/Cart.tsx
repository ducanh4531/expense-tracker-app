interface CartProps {
	cartProducts: string[];
	onClear: () => void;
}

const Cart = ({ cartProducts, onClear }: CartProps) => {
	return (
		<>
			{cartProducts.map((item) => (
				<li key={item}>{item}</li>
			))}
			<button onClick={onClear}>Clear cart</button>
		</>
	);
};

export default Cart;
