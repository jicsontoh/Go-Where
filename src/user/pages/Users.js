import React from "react";
import UserList from "../components/UserList";
import image from "./user-1.jpg"

const Users = () => {
    const USERS = [{
        id: "u1",
        name: "John",
        placesCount: 5,
        img: image

    }]
    return <UserList items={USERS} />

}

export default Users;