import React, { useState, useEffect } from 'react';
import TransactionsList from "../TransactionsList/TransactionsList";
import APIClient from "../../services/APIClient";

const NewTransactions = () => {
    const client = new APIClient();
    const [ transactionsList, setTransactionsList ] = useState([]);

    useEffect(() => {
        client.fetchTransactions().then((result) => {
            console.log(result.data.transactions);
            setTransactionsList(result.data.transactions);
        })
    }, [])

    return (
        <TransactionsList transactionsList={ transactionsList } />
    );
};

export default NewTransactions;
