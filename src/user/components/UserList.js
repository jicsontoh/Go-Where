import React from "react";
import "./UserList.css"
import UserItem from "./UserItem";
import Card from "../../shared/components/UIElements/Card";

const UserList = props => {
    if (props.items.length === 0) {
        return (
        <div className="center">
            <Card>
            <h1>No Users found</h1>
            </Card>
        </div>);
    }
    
    return (
    <ul className="user-list">
        {props.items.map(user => (
            <UserItem 
            key={user.id} 
            id={user.id} 
            name={user.name} 
            img={user.img} 
            placesCount={user.placesCount} />
        ))}
    </ul>
    );
}

export default UserList;