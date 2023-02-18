// import { ethers } from "ethers";
// import {ethers} from "ethers";
import React, { useEffect, useState } from "react";
import abi from "./Transactions.json";
import { ethers } from "ethers";

const { ethereum } = window;

export const contractAddress = "0x0613Bfdf1f19e8e934aaB43f11A06fE763E8176c";
const contractABI = abi.abi;

export const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  console.log("provider", provider)

  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  //   console.log({
  //     provider,
  //     signer,
  //     transactionContract,
  //   });

  //   console.log("addr", contractAddress);

  return transactionContract;
};

// getArtifacts;

export const getArtifacts = async () => {
  try {
    if (!ethereum) return alert("Please install metamask");
    const transactionsContract = createEthereumContract();
    console.log("contract", transactionsContract);
    const availableTransactions = await transactionsContract.getArtifacts();
    console.log("txns:", availableTransactions);
    return availableTransactions;

    // const structuredTransactions = availableTransactions.map((transaction) => ({
    //   addressTo: transaction.receiver,
    //   addressFrom: transaction.sender,
    //   timestamp: new Date(
    //     transaction.timestamp.toNumber() * 1000
    //   ).toLocaleString(),
    //   message: transaction.message,
    //   keyword: transaction.keyword,
    //   amount: parseInt(transaction.amount._hex) / 10 ** 18,
    // }));

    // console.log(structuredTransactions);
    // setTransactions(structuredTransactions);
  } catch (error) {
    console.log("here" , error);
    // return availableTransactions
    return (error);
  }
};

export const getArtifactCounter = async () => {
  try {
    if (!ethereum) return alert("Please install metamask");
    const transactionsContract = createEthereumContract();

    const count = await transactionsContract.getArtifactCounter();
    console.log("count:", count);

    // console.log(structuredTransactions);
  } catch (error) {
    console.log(error);
  }
};

export const insertArtifact = async (artwork, price) => {
  try {
    if (!ethereum) return alert("Please install metamask");
    const transactionsContract = createEthereumContract();

    const res = await transactionsContract.insertArtifact(artwork, price);
    // console.log("count:", count);

    // console.log(structuredTransactions);
  } catch (error) {
    console.log(error);
  }
};

// purchaseArtifact;

export const purchaseArtifact = async (index) => {
  try {
    if (!ethereum) return alert("Please install metamask");
    const transactionsContract = createEthereumContract();

    const res = await transactionsContract.purchaseArtifact(index);
    console.log("res:", res);

    // console.log(structuredTransactions);
  } catch (error) {
    console.log(error);
  }
};

export const setArtifactPrice = async (index, newPrice) => {
  try {
    if (!ethereum) return alert("Please install metamask");
    const transactionsContract = createEthereumContract();

    const res = await transactionsContract.setArtifactPrice(index, newPrice);
    // console.log("res:", res);

    // console.log(structuredTransactions);
  } catch (error) {
    console.log(error);
  }
};

