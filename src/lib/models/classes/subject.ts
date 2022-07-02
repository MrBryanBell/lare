import type { SubjectProps }    from '../constructors/subject-props';
import type { SubjectContract } from '../contracts/subject';

abstract class Subject implements SubjectContract {
	public id          : string;
	public name        : string;
	public code        : string;
	public uv          : number;
	public pensumOrder : number;
	public isOptative  : boolean;

	constructor({
		id, name, code, uv, pensumOrder, isOptative,
	}: SubjectProps) {
		this.id          = id;
		this.name        = name;
		this.code        = code;
		this.uv          = uv;
		this.pensumOrder = pensumOrder;
		this.isOptative  = isOptative;
	}
}

export { Subject };
