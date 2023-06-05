import React, { useState, useEffect } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { ethers,BigNumber } from 'ethers';
import cyberknights from '../cyberknights.json';
import twitter from '../assets/twitter-64.png';
import etherscan from '../assets/etherscan-logo-circle-light.png';

const contractAddress = ""
let provider;
if (typeof window.ethereum !== 'undefined') {
  provider = new ethers.providers.Web3Provider(window.ethereum);
} else {
  provider = new ethers.providers.JsonRpcProvider('https://sepolia.infura.io/v3/f546c64bc64d41fdb5a0481b34044122');
}
const signer = provider.getSigner();
const contract = new ethers.Contract(contractAddress, cyberknights.abi, signer);

const Mint = () => {
const [connected, setConnected] = useState(false);
const [quantity, setquantity] = useState(1);
const [totalMinted, setTotalMinted] = useState(0);
const maxMinted = 550;

async function connectWallet() {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        setConnected(true);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
      } catch (err) {
        console.error(err);
      }
    } else {
      alert("You need to install an Ethereum wallet like MetaMask to use this feature");
    }
  }

const handleDecrement = () => {
if (quantity <= 1) return;
setquantity(quantity - 1);
};
    
const handleIncrement = () => {
if (quantity >= 10) return;
 setquantity(quantity + 1);
};
  
function getSumma() {
return ( 0.0059 * quantity).toFixed(4)
}; 

const mintToken = async () => {
  const connection = contract.connect(signer);
  const addr = connection.address;
  const response = await contract.mint(BigNumber.from(quantity), {
  value: ethers.utils.parseEther(('0.0059' * quantity).toString()),
  });
  console.log("response: ", response);
}

async function getTotalTokensMinted() {
  const totalTokensMinted = await contract.getTotalTokensMinted();
  return totalTokensMinted.toNumber();
}

const displayTotalTokens = `${totalMinted}/${maxMinted}`;
const displayStatus = totalMinted === maxMinted ? "Sold Out" : displayTotalTokens

useEffect(() => {
  const intervalId = setInterval(async () => {
    const newTotalMinted = await getTotalTokensMinted();
    setTotalMinted(newTotalMinted);
  }, 10000);
  return () => clearInterval(intervalId);
}, []);
    
    return (
    <div>   
        <div className="mintcomponent">
            <div className="flex justify-center items-center min-h-screen">
            {connected ? (
              <table className="table-fixed shadow-lg shadow-[#9d3bc0] font-semibold transparent-table bg-[#fafafa] w-[500px] h-[350px]">
              <thead>
                <tr className="">
                  <th className="w-1/4 p-2 text-center" colSpan="2">
                    Mint
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t-2 border-gray-200">
                  <td className="w-1/2 p-2">Mint quantity:</td>
                  <td className="w-1/2 p-2">
                    <div className="flex items-center">
                      <div>{quantity}</div>
                      <div className="flex flex-col ml-2">
                        <button
                          onClick={handleIncrement}
                          className="text-[black] hover:text-gray-700 focus:outline-none"
                        >
                          <ChevronUpIcon className="h-4 w-4" />
                        </button>
                        <button
                          onClick={handleDecrement}
                          className="text-[black] hover:text-gray-700 focus:outline-none"
                        >
                          <ChevronDownIcon className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-t-2 border-gray-200">
                  <td className="w-1/2 p-2">Mint price:</td>
                  <td className="w-1/2 p-2">{getSumma()}</td>
                </tr>
                <tr className="border-t-2 border-gray-200">
                  <td className="w-1/2 p-2">Tokens Left:</td>
                  <td className="w-1/2 p-2">{displayStatus}</td>
                </tr>
                <tr className="border-t-2">
                  <td className="p-2 text-center " colSpan="2">
                    <button className="w-40 shadow-md shadow-black text-center bg-[#9d3bc0] text-white hover:bg-[#772d92] font-bold py-2 px-4 rounded"
                    onClick={mintToken}>
                      Mint
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
                ) : (
                    <button className="button" onClick={connectWallet}>
                    <span class="actual-text">&nbsp;Connect&nbsp;</span>
                    <span class="hover-text" aria-hidden="true">&nbsp;Connect&nbsp;</span>
                </button>
                )}    
            </div>
            <div className="flex justify-center items-center">
              <div className="line"></div>
              <p className="text-white bottomm text-[13px] font-light">All rights reserved. CyberKnights are the arts created by our designers and programmers using AI</p>
            </div>
        </div>
    </div> 
    )
}

export default Mint;