import type { UserConstructor } from '../constructors/user';
import type { UserContract }    from '../contracts/user';

abstract class User implements UserContract {
	public id: string;
	public firstName: string;
	public lastName: string;
	public email: string;

	constructor({
		id, firstName, lastName, email,
	}: UserConstructor) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
	}
}

export { User };