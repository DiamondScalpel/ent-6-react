import axios from 'axios';
import React, { useState } from 'react';

const useFetch = () => {
    const [apiData, setApiData] = useState();
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/products/2%7D';
    const getApi = (url) => {
        axios.get(url)
            .then(res => setApiData(res.data))
            .catch(err => console.log(err));
    }
    return [apiData, getApi];
}

export default useFetch;