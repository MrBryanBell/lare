import type UserCSTR from '../models/constructors/user';
import type UserContract from '../models/contracts/user';


class User implements UserContract {

    public id: string;
    public name: string;
    public lastName: string;
    public email: string;

    constructor({
        id = '',
        name = '',
        lastName = '',
        email = '',
    } 
        : UserCSTR
    ) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.email = email;
    }


}



export default User;