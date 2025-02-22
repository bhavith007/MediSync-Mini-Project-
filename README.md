# Setup Guide

## 1. Install Truffle
Type the following command and press Enter:

```sh
npm install -g truffle
```

## 2. Install Dependencies
Type the following command and press Enter:

```sh
npm i
```

## 3. Compile the Smart Contract
In the terminal, use the following command to compile the smart contract:

```sh
truffle compile
```

## 4. Deploy the Smart Contract
After compiling, we need to deploy the smart contract on the blockchain. We are using **Ganache**, a personal blockchain for Ethereum development used to test and develop smart contracts.

### Steps to Deploy:
1. Open **Ganache** and create a new workspace.
2. Copy the **RPC Server Address**.

The RPC server allows applications to communicate with the Ethereum blockchain, execute smart contract transactions, query the blockchain state, and interact with the Ethereum network.

3. Add the **RPC address** to `truffle-config.js`.
4. Replace the **host address** and **port address** with the Ganache RPC.
5. After updating the RPC address, open the terminal and run:

```sh
truffle migrate
```

This command will deploy the smart contract to the blockchain.

## 5. Run DApp
### Open a second terminal and enter the client folder:

```sh
cd client
```

### Install all packages from `package.json`:

```sh
npm i
```

### Install Web3:

```sh
npm install --save web3
```

### Run the application:

```sh
npm start
```

The app gets hosted by default at **port 3000**.

