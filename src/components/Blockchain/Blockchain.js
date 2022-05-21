import React, { useState, useEffect } from 'react';
import APIClient from "../../services/APIClient";

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
        </div>
    );
};

export default Blockchain;
