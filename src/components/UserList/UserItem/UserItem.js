import React from 'react';
import './UserItem.css'

const UserItem = (props) => {
    return (
        <div className="UserItem">
            <h3 id="details">{props.username} ({props.age} years old)</h3>
        </div>
    )
}

export default UserItem;