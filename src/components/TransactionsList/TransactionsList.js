import React, { useState, useEffect } from 'react';
import APIClient from "../../services/APIClient";
import Transaction from "../Transaction/Transaction";
import {Button} from "@mui/material";

const TransactionsList = ({ transactionsList }) => {
    const client = new APIClient();

    const transactions = (
        transactionsList.map((item, index) => {
            return <Transaction key={ index } transaction={item} />
        })
    )

    const addTransactionsHandler = (event) => {
        event.preventDefault();
        client.mine().then((result) => {
            console.log(result);
        })
    }

    return (
        <div>
            { transactions }

            <Button variant="contained" onClick={addTransactionsHandler}>Add to Blockchain</Button>
        </div>
    );
};

export default TransactionsList;
