import {Content} from "../mocks/Content";
export const getContent = () => {
    return new Promise((resolve, reject) => {
        return resolve(Content)
    })
}