import React from "react";
import "./UserList.css"
import UserItem from "./UserItem";

const UserList = props => {
    if (props.items.length === 0) {
        return (<div className="center">
            <h1>No Users found</h1>
        </div>);
    }
    
    return (<ul>
        {props.items.map(user => (
            <UserItem 
            key={user.id} id={user.id} name={user.name} img={user.img} placesCount={user.placesCount} />
        ))}
    </ul>);


}

export default UserList;