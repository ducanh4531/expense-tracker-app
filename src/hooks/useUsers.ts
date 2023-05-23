// using custom hook => can share functionality across different components that need to use
import { useEffect, useState } from "react";

import userService, { User } from "../services/user-service";
import { CanceledError } from "../services/api-client";

const useUsers = () => {
	const [users, setUsers] = useState<User[]>([]);
	const [error, setError] = useState("");
	const [isLoading, setLoading] = useState(false);

	// use then catch method
	useEffect(() => {
		setLoading(true);

		// call a generic function
		const { req, cancel } = userService.getAll<User>();

		req.then((res) => {
			setUsers(res.data);
			setLoading(false);
		}).catch((err) => {
			if (err instanceof CanceledError) return null;
			setError(err.message);
			setLoading(false);
		});

		return () => cancel();
	}, []);

	return { users, error, isLoading, setUsers, setError };
};

export default useUsers;

// use async await method
// useEffect(() => {
// 	const controller = new AbortController();
// 	setLoading(true);

// 	const fetchUsers = async () => {
// 		try {
// 			const res = await axios.get(
// 				"https://jsonplaceholder.typicode.com/users",
// 				{ signal: controller.signal }
// 			);
// the order of these lines doesn't matter, since react will apply all these updates
// then rerender component
// setUsers(res.data);

// way 1: use setLoading at 2 places (resolved, rejected) => repeat code
// 	setLoading(false);
// } catch (err) {
// 	if (err instanceof CanceledError) return;
// 	setError((err as AxiosError).message);
// 	setLoading(false);
// }

// finally {
// way 2: use finally for setLoading, but this method doesn't work with strict mode turned on
// setLoading(false);
// }
// };

// 	fetchUsers();

// 	return () => controller.abort();
// }, []);
