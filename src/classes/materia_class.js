class MateriaClass {
	constructor({
		code = '03GC02',
		id = 'GTYS-DER',
		name = 'introducción a la comunicación',
		uv = 4,
		grade = 9,
		cycle = 1,
	}) {
		this.code = code;
		this.id = id;
		this.name = name;
		this.uv = uv;
		this.grade = grade;
		this.cycle = cycle;
	}

	getUMT() {
		return this.uv * this.grade;
	}

}
 

export { MateriaClass }