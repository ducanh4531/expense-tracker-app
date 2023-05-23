import { useEffect, useState } from "react";
import UserService, { User } from "../services/user-service";
import { CanceledError } from "../services/api-client";

const useUsers = () => {
	const [users, setUsers] = useState<User[]>([]);
	const [error, setError] = useState("");
	const [isLoading, setLoading] = useState(false);

	// use then catch method
	useEffect(() => {
		setLoading(true);

		// call a generic function
		const { req, cancel } = UserService.getAll<User>();

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
