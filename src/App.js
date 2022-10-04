import { useState } from 'react';
import './App.css';
import EthereumApi from './components/EthereumApi';


function App() {

const[account, setAccount] = useState('')

const connectWallet = async () => {
  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];
  setAccount(account);
}
 

  return (
    <div className="App">
      <div>
        <button onClick={connectWallet}>Connect</button>
      </div>
      <div>
        <EthereumApi account = {account}/>

      </div>
    </div>
  );
}

export default App;
