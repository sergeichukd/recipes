import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

import PasswordInput from './PasswordInput.jsx'
import FormHelperText from '@material-ui/core/FormHelperText';


export default function LoginForm (props) {

  const [name, setName] = useState('');
  const [surename, setSurename] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [differentPasswords, setDifferentPasswords] = useState(false);

  const handleChangeInput = (setField) => {
    return (function (event) {
      setField(event.target.value);
      setDifferentPasswords(false);
    })
  }

  const handleSubmit = (event) => {
    if (password === passwordRepeat) {
      alert(`Отправленно:
      name: '${name}'
      surename: '${surename}'
      email: '${email}'
      password: '${password}'
      passwordRepeat: '${passwordRepeat}'
      differentPasswords: '${differentPasswords}'`);
    } else {
      setDifferentPasswords(true);
    }
    event.preventDefault();
  }

  const handleClose = (event) => {
    props.onClose();
  }

  const errorHelper = <FormHelperText>Passwords are different</FormHelperText>

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        className="login-text-field"
        label="Name"
        variant="outlined"
        value={name}
        onChange={handleChangeInput(setName)}
        size='small'
        margin='dense'
        fullWidth={true}
      />
      <TextField
        className="login-text-field"
        label="Surename"
        variant="outlined"
        value={surename}
        onChange={handleChangeInput(setSurename)}
        size='small'
        margin='dense'
        fullWidth={true}
      />
      <TextField
        className="login-text-field"
        label="Email"
        variant="outlined"
        value={email}
        onChange={handleChangeInput(setEmail)}
        size='small'
        margin='dense'
        fullWidth={true}
      />
      <PasswordInput
        value={password}
        onChange={handleChangeInput(setPassword)}
        differentPasswords={differentPasswords}
      />
      <PasswordInput
        value={passwordRepeat}
        onChange={handleChangeInput(setPasswordRepeat)}
        differentPasswords={differentPasswords}
        errorHelper={differentPasswords ? errorHelper : null}
        repeatPassword={true}
      />
      <div className="modal-window-login-butttons">
        <Button variant="outlined" color="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="outlined" color="primary" margin='normal' onClick={handleSubmit}>
          Sign in
        </Button>
      </div>
    </form>
  );
}
