/**
* This is an example request. Create your own using best practises for
* handling asynchronous data fetching
**/

export default class VehicleAPI {
	static getAll() {
		return fetch('http://localhost:9988/api/vehicle').then(response => response.json());
	}

	static getSingle(id) {
		return fetch(`http://localhost:9988/api/vehicle/${id}`).then(response => response.json());
	}
}
