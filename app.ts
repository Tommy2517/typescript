//
// 1) створити інтерфейс на основі цього объекта:
//     Зверніть увагу там де масиви... в них може бути багато однотипних об'ектів
//
import {userService} from "./services/user.service";

interface IPayload {
    payload_type: string
    payload_mass_kg: number
    payload_mass_lbs: number
}

interface ICore {
    flight: number
    core: {
        reuse_count: number
        status: string
    }

}

interface ISpace {
    mission_name: string
    launch_date_local: string
    launch_site: {
        site_name_long: string
    },
    links: {
        article_link: string
        video_link: string
    },
    rocket: {
        rocket_name: string
        first_stage: {
            cores: ICore[]
        },
        second_stage: {
            payloads: IPayload[]
        }
    }
}

const myMission: ISpace = {
    mission_name: 'qweqw',
    launch_date_local: 'qweqwe',
    launch_site: {
        site_name_long: 'dqwdsazd'
    },
    links: {
        article_link: 'dsaf',
        video_link: 'qwe'
    },
    rocket: {
        rocket_name: 'qweqweqweda',
        first_stage: {
            cores: [
                {
                    core: {reuse_count: 1, status: 'dddd'},
                    flight: 2
                }
            ]
        },
        second_stage: {
            payloads: [
                {
                    payload_type: 'sss',
                    payload_mass_kg: 111,
                    payload_mass_lbs: 333
                },
                {
                    payload_type: 'sss',
                    payload_mass_kg: 111,
                    payload_mass_lbs: 333
                },
                {
                    payload_type: 'sss',
                    payload_mass_kg: 111,
                    payload_mass_lbs: 333
                },

            ]
        }
    }
}

// ---------------------------------------------------------------------------—————————
// 2) протипізувати функції:
//
interface IUser {
    name: string
    age: number
    gender: string
}

const user: IUser = {
    name: "Max",
    age: 18,
    gender: 'male'
}

function sum(a: number, b: number):number {
    return a + b
}

function showSum(a, b) {
    console.log(a + b);
}

function incAge(someUser: IUser, inc: number): IUser {
    someUser.age += inc
    return someUser
}

console.log(sum(1, 2));
showSum(2, 3)
incAge(user, 2)

const user11:IUser = {
    name: 'string',
    age: 22,
    gender: 'true'

}
console.log(user11)

userService.getAll().then(value => value.data).then(users => {
    for (let user of users){
        console.log(user.email);
    }
})

// const start = async () => {
//     await userService
// }
enum DaysOfWeek {
    MON,
    TUE,
    WED,
}// просто перечисление чего либо
let tuensday = DaysOfWeek.TUE
console.log(tuensday);