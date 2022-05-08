import React, {useState} from 'react';
import './App.css';
import UserForm from './components/UserForm/UserForm'
import ErrorMessage from './components/UserForm/UserHandler/ErrorMessages/ErrorMessage'
import UserList from './components/UserList/UserList';

function App() {
  const [promptState, setPromptState] = useState(false);
  const [promptText, setPromptText] = useState('');
  let [userStorage, setUserStorage] = useState([
    {
      username: 'Sean',
      dob: 13,
      key: Math.random().toString(),
    }
  ])

  const formValHandler = (e) => {
    if(e === 'Not a valid age.') {
      setPromptState(true)
      setPromptText('Not a valid age.')
    } else if(e === 'Invalid Input.') {
      setPromptState(true)
      setPromptText('Invalid Input.')
    } else if(e === 'Invalid Inputs') {
      setPromptText('Invalid Inputs.')
      setPromptState(true)
    } else {
      setPromptState(false)
      setUserStorage((prevStorage) => {
        return [e, ...prevStorage]
      })
    }
  }

  

  const formStateChange = (e) => {
    setPromptState(e);
  }

  return (
    <div className="App">
      <UserForm formVals={formValHandler}/>
      {promptState ? <ErrorMessage text={promptText} promptBool={formStateChange}/> : ''}
      <UserList userDetails={userStorage}/>
    </div>
  );
}

export default App;
