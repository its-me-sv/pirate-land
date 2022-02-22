import React from 'react';

import './App.css';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <div className='home-container'>
      <span className="title">Pirate Land</span>
      <view className="form-container">
        <view className="login-box">
          <span className="form-tile">Login</span>
          <view className="input-container">
            <label className='input-label'>Username</label>
            <input name="username"/>
          </view>
          <view className="input-container">
            <label className='input-label'>Password</label>
            <input name="password"/>
          </view>
          <div className="cstm-btn">Login</div>
        </view>
        <view className="register-box">
          <span className="form-tile">Create Account</span>
          <view className="input-container">
            <label className='input-label'>Name</label>
            <input name="name"/>
          </view>
          <view className="input-container">
            <label className='input-label'>Username</label>
            <input name="username"/>
          </view>
          <view className="input-container">
            <label className='input-label'>Password</label>
            <input name="password"/>
          </view>
          <div className="cstm-btn">Create</div> 
        </view>
      </view>
    </div>
  );
}

export default App;
