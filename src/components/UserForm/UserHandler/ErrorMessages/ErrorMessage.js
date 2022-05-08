import React from 'react';
import FormButton from '../../../UI/FormButton';
import Card from '../../../UI/Card';
import './ErrorMessage.css';

const ErrorMessage = (props) => {
    const closePrompt = () => {
        props.promptBool(false);
    }

    return (
        <Card className="ErrorPrompt">
            <div className="ErrorComponents">
                <h3 id='errortext'>Error: {props.text}</h3>
                <FormButton onClick={closePrompt}>Ok</FormButton>
            </div>
        </Card>
    )
}

export default ErrorMessage;