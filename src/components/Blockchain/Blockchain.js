import React, { useState, useEffect } from 'react';
import APIClient from "../../services/APIClient";
import TransactionsList from "../TransactionsList/TransactionsList";

const Blockchain = () => {
    const client = new APIClient();

    useEffect(() => {
        client.fetchBlockchain().then((result) => {
            console.log(result);
        })
    }, []);

    return (
        <div>
            <p>Blockchain</p>
            <TransactionsList />
        </div>
    );
};

export default Blockchain;
