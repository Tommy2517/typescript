import axios, {AxiosResponse} from "axios";
import {IUser} from "../interfaces/user.interface";

type IRes<T> = Promise<AxiosResponse<T>>
export const userService = {
    getAll: () :IRes<IUser[]> => axios('https://jsonplaceholder.typicode.com/users'),
    getById: (id:number):IRes<IUser> => axios('https://jsonplaceholder.typicode.com/users/'+id),
}

class User{
    constructor(public id: number, private name: string, private age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}
let user = new User(1,'adam',22);

console.log(user.id);