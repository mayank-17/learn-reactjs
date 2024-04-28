import {useEffect, useState} from 'react';

const useCurrencyInfo = (currency) => {
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((response) => response.json())
        .then((response) => { console.log(response[currency]); return setData(response[currency]); })
        .catch((error) => console.log(`Encountered Error: ${error}`))
    }, [currency]);
    return data;
};

export default useCurrencyInfo;