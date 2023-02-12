import logo from './logo512.png';
import './App.css';
import { useState } from 'react';
import { CopyToClipboard } from "react-copy-to-clipboard";

function App() {
  const [password, setPassword] = useState('');

  const genPw = () => {
    const possibleCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    let password = '';
    for(let i = 0; i < 16; i++) {
      password += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
    }
    setPassword(password);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
        <h2>Welcome to pwgen!</h2>
        <p className='pwT'><p>Password:</p>{password} 
        {password !== "" && (
        <button 
        className='copyB'
        onClick={() => {navigator.clipboard.writeText(password)}}> 
        <CopyToClipboard
        text= {password}
        onCopy={() => alert("Copied to Clipboard!")}>
          <span>Copy</span>
        </CopyToClipboard></button>
        )}
        </p>
        <button 
        className='genPWB'
        onClick={genPw}
        style={{width: 200, height: 50, marginBottom:25}}
        >Generate new Password.</button>
        </div>
        <a
          className="App-link"
          href="https://tahabisginsoftware.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by Taha Bisgin.
        </a>
      </header>
    </div>
  );
}

export default App;
