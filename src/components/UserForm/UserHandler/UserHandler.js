import React, {useState} from 'react';
import UserInput from '../../UI/UserInput';
import FormButton from '../../UI/FormButton';
import Card from '../../UI/Card';
import './UserHandler.css'

const UserHandler = (props) => {
    const [usernameInput, setUsernameInput] = useState('');
    const [dobInput, setDobInput] = useState('');

    const usernameHandler = (e) => {
        setUsernameInput(e.target.value);
    }

    const dobHandler = (e) => {
        setDobInput(e.target.value);
    }

    const formHandler = () => {
        const formValues = {
            username: usernameInput,
            dob: dobInput,
            key: Math.random().toString(),
        }
        if(parseInt(dobInput) <= 0 || isNaN(parseInt(dobInput))) {
            props.formValues('Not a valid age.');
          } else if(usernameInput === '') {
            props.formValues('Invalid Input.');
          } else if((usernameInput === '') && (parseInt(dobInput) <= 0 || isNaN(dobInput))) {
            props.formValues('Invalid Inputs.');
          } else {
            setUsernameInput('');
            setDobInput('');
            props.formValues(formValues);
          }
    }
    return (
        <Card className="UserHandler">
            <div className="user-inputs">
                <div className="username">
                    <label>Username</label>
                    <UserInput onChange={usernameHandler} value={usernameInput}/>
                </div>

                <div className="dob">
                    <label>Age</label>
                    <UserInput onChange={dobHandler} value={dobInput}/>
                </div>

                <div className="form-buttons">
                    <FormButton onClick={formHandler}>Submit</FormButton>
                </div>
            </div>

        </Card>
    )
}

export default UserHandler;