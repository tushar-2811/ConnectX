import { atom } from "recoil";

export const userInfo = atom({
    key : "userInfo",
    default : {
        userName : "",
        name : "",
        email : "",
        college : "",
        course : "",
        gender : "",
        height : undefined ,
        bodyCount : undefined,
        isSmoker : false,
        isDrinker : false,
        inRelationship : false
    }
})