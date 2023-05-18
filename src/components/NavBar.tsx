interface NavBarProps {
	cartProductsCount: number;
}

const NavBar = ({ cartProductsCount }: NavBarProps) => {
	return <div>Cart: {cartProductsCount}</div>;
};

export default NavBar;
