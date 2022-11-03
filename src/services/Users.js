import {Users} from "../mocks/Users";
export const getUser = () => {
    return new Promise((resolve, reject) => {
        return resolve(Users)
    })
}