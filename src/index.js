import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

import MainContent from "./components/UI/MainContent/MainContent";
import Blockchain from "./components/Blockchain/Blockchain";
import NewTransactions from "./components/NewTransactions/NewTransactions";

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index path="/" element={<MainContent />} />
                <Route path="transactions" element={<NewTransactions />} />
                <Route path="blockchain" element={<Blockchain />} />

            </Route>
        </Routes>
    </BrowserRouter>
);
