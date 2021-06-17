import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

import PasswordInput from './PasswordInput.jsx'


export default function (props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeLogin = (event) => {
    setEmail(event.target.value);
  }

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    alert(`Отправлен email: '${email}' и пароль: '${password}'`);
    event.preventDefault();
  }

  const handleClose = (event) => {
    props.onClose();
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        className="email-text-field"
        label="Email"
        variant="outlined"
        value={email}
        onChange={handleChangeLogin}
        size='small'
        margin='dense'
        fullWidth={true}
      />
      <PasswordInput
        onChange={handleChangePassword}
        value={password}
      />
      <div className="modal-window-login-butttons">
        <Button variant="outlined" color="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="outlined" color="primary" margin='normal' onClick={handleSubmit}>
          Login
        </Button>
      </div>
    </form>
  );
}
