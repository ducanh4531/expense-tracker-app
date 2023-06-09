// import axios, { AxiosError, CanceledError } from "axios";

import useUsers from "./hooks/useUsers";
import userService, { User } from "./services/user-service";

const App = () => {
	// using custom hook => can share functionalities to other components that need to use
	const { users, error, isLoading, setUsers, setError } = useUsers();

	// there are two options in this func:
	// update ui first, then call sv to save changes => faster (optimistic update) (prefer)
	// vice versa => slower (pessimistic update)
	const deleteUser = (user: User) => {
		const originalUsers = [...users];
		setUsers(users.filter((u) => u.id !== user.id));

		// this method also returns promise but nothing to do with then method,
		// so can execute catch method immediately then
		userService.delete(user.id).catch((err) => {
			setError(err.message);
			setUsers(originalUsers);
		});
	};

	const addUser = () => {
		const originalUsers = [...users];
		const newUser = { id: 0, name: "Anton" };
		setUsers([newUser, ...users]);

		userService
			.create(newUser)
			.then(({ data: savedUser }) => setUsers([savedUser, ...users]))
			.catch((err) => {
				setError(err.message);
				setUsers(originalUsers);
			});
	};

	// there are two axios methods to update data: patch and put
	// put for replacing an obj and patch for patching or updating one or more
	// of its properties and method be chosen depends on how the backend is built
	// some backends don't support patch method
	const updateUser = (user: User) => {
		const originalUsers = [...users];
		const updatedUser = { ...user, name: `${user.name}!` };
		setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

		userService.update(updatedUser).catch((err) => {
			setError(err.message);
			setUsers(originalUsers);
		});
	};

	return (
		<>
			{error && <h1 className="text-danger">{error}</h1>}
			{isLoading && <div className="spinner-border"></div>}
			<button className="btn btn-primary" onClick={addUser}>
				Add
			</button>
			<ul className="list-group">
				{users.map((user) => (
					<li
						className="list-group-item d-flex justify-content-between"
						key={user.id}
					>
						{user.name}
						<div>
							<button
								className="btn btn-outline-secondary mx-1"
								onClick={() => updateUser(user)}
							>
								Update
							</button>
							<button
								className="btn btn-outline-danger"
								onClick={() => deleteUser(user)}
							>
								Delete
							</button>
						</div>
					</li>
				))}
			</ul>
		</>
	);
};

export default App;
