import React, { useReducer } from 'react';

const initFormState = {
  email: '',
  password: ''
};

const reducer = (state, action) => {
  if (action.type === 'CHANGE_EMAIL') {
    return {
      email: action.value,
      password: state.password
    };
  }

  if (action.type === 'CHANGE_PASSWORD') {
    return {
      email: state.email,
      password: action.value
    };
  }

  return { email: '', password: '' };
};

export default function App() {
  const [formState, dispatch] = useReducer(reducer, initFormState);

  const onChangeEmailHandler = event => {
    dispatch({ type: 'CHANGE_EMAIL', value: event.target.value });
  };

  const onChangePasswordHandler = event => {
    dispatch({ type: 'CHANGE_PASSWORD', value: event.target.value });
  };

  return (
    <form className="p-3">
      <div className="form-group mb-3">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          className="form-control"
          id="email"
          onChange={onChangeEmailHandler}
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          className="form-control"
          id="password"
          onChange={onChangePasswordHandler}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        disabled={!formState.email && !formState.password}
      >
        Submit
      </button>
    </form>
  );
}
