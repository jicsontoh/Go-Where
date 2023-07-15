import React from "react";
import "./UserItem.css"

const UserItem = props => {
    return (
        <li className="user-item">
            <div className="user-item">
                <div className="user-item_image">
                    <img src={props.img} alt={props.name} />
                </div>
                <div className="user-item__info">
                    <h2>
                        {props.name}
                    </h2>
                    <h3>
                        {props.placesCount} {props.placesCount === 1 ? 'Place' : 'Places'}
                    </h3>
                </div>
            </div>
        </li>
    );


};

export default UserItem;