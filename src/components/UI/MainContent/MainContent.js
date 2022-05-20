import React from 'react';
import ActionCard from '../ActionCard/ActionCard';
import { Link } from "react-router-dom";

import "./MainContent.css";

const MainContent = () => {
    return (
        <div className="content">
            <Link to="transactions">
                <ActionCard text={"Ожидающие транзакции"} />
            </Link>
            <Link to="blockchain">
                <ActionCard text={"Блокчейн"} />
            </Link>
        </div>
    );
};

export default MainContent;
