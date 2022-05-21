import React from 'react';

const Transaction = ({ transaction }) => {
    return (
        <>
            <hr />
            <p>pubkey: {transaction.voter_pubkey}</p>
            <p>option: {transaction.option_pubkey} </p>
        </>
    );
};

export default Transaction;
