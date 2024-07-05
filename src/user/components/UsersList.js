import React  from "react";

import './UsersList.css';
import UserItem from "./UserItem";
import Card from "../../shared/Components/UIElements/Card";


const UsersList = props =>{
    if(props.items.length===0)
        return <dev>
            <Card>
            <h2 className="center">No Users Found</h2>
            </Card>
        </dev>
    return <ul className="users-list">
        {props.items.map(
            (user)=>{
                return <UserItem key = {user.id}
                id = {user.id}
                image = {user.image}
                name = {user.name}
                placeCount={user.placeCount}  />
            }
        )}
    </ul>
};

export default UsersList;