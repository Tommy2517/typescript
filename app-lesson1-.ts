////Создаем функцию
//в аргументах функций нужно указывать тип данных через двоеточие - num:number
//у функций есть типы возвращения данных. если функция ничего не возвращает,
//типизируем ее как :void
//так же есть :string, :number, :number|string
import {userService} from "./services/user.service";

const func = (str: number): void => {
    console.log('hello', str);
}
func(5)
func(1.5)
//**функция может вернуть функцию
const funk2 = (num: number): Function => {
    return () => console.log('qwe')
}

const func34 = (q)=>{
    console.log(q)
}
func34(23)
////////////////////объекты
//что бы создать объект нужно использовать команду interfce
//interfece принято описывать с буквы I
interface IUser<T> { //<T> - дженерик
    name: string;//объявляем ключи с типом значений
    age: number;
    status: boolean;
    data: T //если мы не знаем какого типа будут данные,
    // пишем дженерик Т и будем указывать в нем тип данных при использовании
}

//создаем объект использую интерфейс IUser
const user1: IUser<number[]> = {name: 'namx', status: true, age: 15, data: [1, 2, 3, 4]}
const user2: IUser<string> = {name: 'namx', status: true, age: 15, data: 'qwertyuHELLO'}
//должен быть заполнен полностью иначе error


//Generic Types
//что бы заполнить частично
const user3: Partial<IUser<number>> = {name: 'karina',}

//сlass - классы

class User {
//модификаторы:
//   public - доступны везде;
//   protected - доступты внутри класса и иего наследников
//   private - можно использовать только внутри класса
//     public id: number;
//     public name: string;
//     public age: number

//alt+insert = create constructor

    constructor(public id: number, private name: string, private age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    getName(): string {
        return this.name
    }

    getAge(): number {
        return this.age
    }
}

const user: User = new User(4, 'arar', 22);
const user123: Partial<User> = new User(5, 'sova', 2);
console.log(user.getName());
console.log(user123);

//////////////////////////////////////////////////////////
//имплементация интерфейсов к классам

interface IShapesActions {//создаем интерфейс с шейпами
    area: () => number;//shape - площадь
    perimeter: () => number;//shape - периметр

}

interface IGreeting {
    print: () => void;
}

class Rectangle implements IShapesActions, IGreeting {//создаем класс
    constructor(private a: number, private b: number) {
    }//принимаем 2 переменные и типизируем их по типам данных
    //с модификатором private(видно только внутри класса)

    area(): number {
        return this.a * this.b;
    }

    perimeter(): number {
        return (this.a * this.b) * 2;
    }

    print(): void {
        console.log(rectangle.a, rectangle.b);
    }

//получилось в классе 2 параметра - метод вычисления area и perimetr
//прибавили еще 1 метод
}

const rectangle: Rectangle = new Rectangle(2, 3);
rectangle.print()

class Qwert implements IShapesActions {
    get z(): number {
        return this._z;
    }

    get x(): number {
        return this._x;
    }
    area(): number {
        return 0;
    }

    perimeter(): number {
        return 0;
    }

    constructor(public _z: number, public _x: number) {
    }

}

class Triangle implements IShapesActions {
    constructor(private a: number, private b: number, private c: number) {
    }

    area(): number {
        return this.a * this.b / this.c;
    }

    perimeter(): number {
        return this.c + this.c + this.b;
    }
}

const shapes: IShapesActions[] = [
    new Triangle(1, 2, 3),
    new Rectangle(3, 6),
    new Triangle(2, 3, 5)
]


for (let shape of shapes) {
    console.log(shape.area());
    console.log(shape.perimeter());
}

console.log(shapes[2].perimeter())


//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//используя сторонние библиотеки иногда нужно будет использовать
//функции из них и нужно будет знать тип возвращения этих функций
//как достать из каких либо функций тип возвращения:

const asd = () => {
    return 18
}

type MyNumber = number//с помощью type можно создавать свои типы на основе других типов
//или нескольких типов

// type MyNumber2 = number|string;//
//теперь в гугл можно запиывать как числа так и текст
// const google:MyNumber2 = 'qwe'|2;//

type MyFuncType = ReturnType<typeof asd> //присваивает тип данных тот же что и у функции asd

const g: MyFuncType = 1//присваиваем переменной, тип который определили выше

type Q = ReturnType<typeof asd>

userService.getAll().then(value => value.data).then(users => {
    for (const user4 of users) {
        console.log(user4.email);
    }
})