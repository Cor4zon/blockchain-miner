import React, { useState, useEffect } from 'react';
import {Card, Typography} from "@mui/material";
import APIClient from "../../services/APIClient";

import './Transaction.css';

const Transaction = ({ transaction }) => {
    const [ candidateName, setCandidateName ] = useState("");
    const client = new APIClient();

    useEffect(() => {
        client.fetchVotinOption(transaction.choice).then((result) => {
            setCandidateName(result.data.title);
        })
    }, []);

    return (
        <Card variant="outlined" className="transaction_card">
            <hr />

            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                pubkey:
            </Typography>

            {transaction.voter_pubkey}
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                option: { candidateName }
            </Typography>

        </Card>
    );
};

export default Transaction;
