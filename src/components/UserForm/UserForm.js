import React from 'react';
import UserHandler from './UserHandler/UserHandler'

const UserForm = (props) => {
    const formValHandler = (e) => {
        props.formVals(e);
    }

    return (
        <div className="UserForm">
            <UserHandler formValues={formValHandler}/>
        </div>
    )
}

export default UserForm;