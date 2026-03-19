import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);

    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#1c1c1c]">
      <div className="border-2 rounded-xl p-20 border-emerald-600">
        <form onSubmit={submitHandler} className="flex flex-col items-center justify-center">

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="text-white bg-transparent border-2 py-5 px-4 text-xl border-emerald-600 rounded-full"
            type="email"
            placeholder="Enter your email"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="text-white bg-transparent border-2 py-5 px-4 text-xl mt-3 border-emerald-600 rounded-full"
            type="password"
            placeholder="Enter your password"
          />

          <button className="mt-5 text-white border-2 py-5 px-4 text-xl bg-emerald-600 rounded-full">
            Login
          </button>

        </form>
      </div>
    </div>
  );
};

export default Login;