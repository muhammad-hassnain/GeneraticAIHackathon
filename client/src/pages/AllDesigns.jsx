import React, { useState, useEffect } from "react";
// import Web3 from "web3";
import abi from "./Transactions.json";
import { ethers } from "ethers";
const { ethereum } = window;

export const contractAddress = "0x0613Bfdf1f19e8e934aaB43f11A06fE763E8176c";
const contractAbi = abi.abi;

// const web3 = new Web3.eth.contract ; // Replace with your own Web3 provider

function App() {
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    async function fetchObjects() {
      const contract = new web3.eth.Contract(
        contractAbi, // Replace with your contract ABI
        contractAddress // Replace with your contract address
      );

      const objects = await contract.methods.getObjects().call();
      setObjects(objects);
    }

    fetchObjects();
  }, []);

  return (
    <div>
      {objects.map((object, index) => (
        <div key={index}>
          <div>Name: {object.name}</div>
          <div>Value: {object.value}</div>
        </div>
      ))}
    </div>
  );
}

export default App;
