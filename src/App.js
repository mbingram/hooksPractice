import React from 'react';
import { useFetch } from './useFetch';
import { useForm } from './useForm';

function App() {
  const [values, handleChange] = useForm({ email: '', password: '' });

  useFetch('http://numbersapi.com/43/trivia');

  return (
    <div>

      <input
        name='email'
        value={values.email}
        onChange={handleChange}
      />
      <input
        type='password'
        name='password'
        value={values.password}
        onChange={handleChange}
      />

    </div>
  );
}

export default App;
