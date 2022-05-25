import AxiosWrapper from "./AxiosWrapper";
import Storage from "./Storage";

class APIClient {
    constructor() {
        this.storage = new Storage(window.localStorage)
    }

    fetchTransactions() {
        const wrapper = new AxiosWrapper('http://127.0.0.1:8000/blockchain/transactions');
        return Promise.resolve(
            wrapper.get()
                .catch((error) => {
                    this.storage.clear();
                    console.error(error);
                    return Promise.reject(error);
                })
        )
    }

    fetchBlockchain() {
        const wrapper = new AxiosWrapper('http://127.0.0.1:8000/blockchain/blockchain');
        return Promise.resolve(
            wrapper.get()
                .catch((error) => {
                    this.storage.clear();
                    console.error(error);
                    return Promise.reject(error);
                })
        )
    }

    mine() {
        const wrapper = new AxiosWrapper('http://127.0.0.1:8000/minerApp/mine');
        return Promise.resolve(
            wrapper.get()
                .catch((error) => {
                    this.storage.clear();
                    console.error(error);
                    return Promise.reject(error);
                })
        )
    }

    fetchVotinOption(choice) {
        const wrapper = new AxiosWrapper('http://127.0.0.1:8000/adminApp/voting_options/' + choice);
        return Promise.resolve(
            wrapper.get()
                .catch((error) => {
                    this.storage.clear();
                    console.error(error);
                    return Promise.reject(error);
                })
        )
    }
}

export default APIClient;
