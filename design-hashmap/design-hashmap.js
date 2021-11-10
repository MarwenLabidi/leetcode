class MyHashMap {

	constructor() {
		this.data = [];
	}
	put(key, value) {
		for (let DATA of this.data) {
			if (DATA[0] === key) {

				DATA[1] = value

				return this.data

			}
		}

		this.data.push([key, value])
		return this.data
	}

	get(key) {
		for (let DATA of this.data) {
			if (DATA[0] === key) {

				return DATA[1]
			}

		}
		return -1

	}

	remove(key) {
		for (let DATA of this.data) {
			if (DATA[0] === key) {

				const index = this.data.indexOf(DATA)
				this.data.splice(index, 1)
			}
		}
		return this.data
	}
}