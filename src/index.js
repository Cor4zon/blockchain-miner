import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

import MainContent from "./components/UI/MainContent/MainContent";
import TransactionsList from "./components/TransactionsList/TransactionsList";
import Blockchain from "./components/Blockchain/Blockchain";

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index path="/" element={<MainContent />} />
                <Route path="transactions" element={<TransactionsList />} />
                <Route path="blockchain" element={<Blockchain />} />

            </Route>
        </Routes>
    </BrowserRouter>
);
