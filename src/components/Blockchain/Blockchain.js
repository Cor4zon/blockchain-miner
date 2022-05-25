import React, { useState, useEffect } from 'react';
import APIClient from "../../services/APIClient";
import TransactionsList from "../TransactionsList/TransactionsList";

const Blockchain = () => {
    const [ transactionList, setTransactionList ] = useState([])
    const client = new APIClient();

    useEffect(() => {
        client.fetchBlockchain().then((result) => {
            const blockchain = result.data.blockchain;
            for (let i = 0; i < blockchain.length; i++) {
                setTransactionList(prevState => {
                    return prevState.concat(blockchain[i].transactions);
                });
            }
        })
    }, []);

    return (
        <div>
            <p>Blockchain</p>
            <TransactionsList transactionsList={ transactionList } />
        </div>
    );
};

export default Blockchain;
