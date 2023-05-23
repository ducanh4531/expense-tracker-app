// have better separate of concerns by creating module to make http request
// so components know absolutely nothing about making http request
// can reuse user-service anywhere that need to get users, create, delete, update...
// import apiClient from "./api-client";

import create from "./http-service";

export interface User {
	id: number;
	name: string;
}

// class userService {
// 	getAllUser() {
// 		const controller = new AbortController();
// 		const req = apiClient.get<User[]>("/users", {
// 			signal: controller.signal,
// 		});
// 		return { req, cancel: () => controller.abort() };
// 	}

// 	deleteUser(id: number) {
// 		return apiClient.delete(`/users/${id}`);
// 	}

// 	createUser(user: User) {
// 		return apiClient.post("/users", user);
// 	}

// 	updateUser(user: User) {
// 		return apiClient.patch(`/users/${user.id}`, user);
// 	}
// }

// export default new userService();

export default create("/users");
