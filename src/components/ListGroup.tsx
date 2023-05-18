import { useState } from "react";
import styled from "styled-components";

interface ListGroupProps {
	items: string[];
	heading: string;
	onSelectItem: (item: string) => void;
}

const List = styled.ul`
	list-style: none;
	padding: 0;
`;

interface ListItemProps {
	active: string;
}

const ListItem = styled.li<ListItemProps>`
	padding: 5px 0;
	background-color: ${(props) => (props.active === "true" ? "blue" : "none")};
`;

const ListGroup = ({ items, heading, onSelectItem }: ListGroupProps) => {
	const [selectedIndex, setSelectedIndex] = useState(-1);

	return (
		<>
			<h1>{heading}</h1>
			<List
			// using bootstrap
			// className="list-group"
			>
				{items.map((item, index) => (
					<ListItem
						// using bootstrap
						// className={`${
						// 	selectedIndex === index && "active"
						// } list-group-item`}
						active={index === selectedIndex ? "true" : "false"}
						key={item}
						onClick={() => {
							setSelectedIndex(index);
							onSelectItem(item);
						}}
					>
						{item}
					</ListItem>
				))}
			</List>
		</>
	);
};

export default ListGroup;
