// create a generic service so it can be reused and no need to repeat every services by time
import apiClient from "./api-client";

interface Entity {
	id: number;
}

class HttpService {
	endpoint: string;

	// constructor is a func which is called when create an instance of the class
	constructor(endpoint: string) {
		this.endpoint = endpoint;
	}
	// define a generic method
	getAll<T>() {
		const controller = new AbortController();
		const req = apiClient.get<T[]>(this.endpoint, {
			signal: controller.signal,
		});
		return { req, cancel: () => controller.abort() };
	}

	delete(id: number) {
		return apiClient.delete(`${this.endpoint}/${id}`);
	}

	create<T>(entity: T) {
		return apiClient.post(this.endpoint, entity);
	}

	update<T extends Entity>(entity: T) {
		return apiClient.patch(`${this.endpoint}/${entity.id}`, entity);
	}
}

const create = (endpoint: string) => new HttpService(endpoint);

export default create;
