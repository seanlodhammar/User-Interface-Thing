import React from 'react';
import UserItem from './UserItem/UserItem';
import Card from '../UI/Card';
import './UserList.css';

const UserList = (props) => {
    return (
        <Card className="UserList">
            {props.userDetails.map(i => <UserItem username={i['username']} age={i['dob']} key={i['key']}/>)}
        </Card>
    )
}

export default UserList;