import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxios = (url, options = {}) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios({
                url,
                ...options,
            });
            setData(response.data);
            setLoading(false);
        } catch (err) {
            setError(err);
            setLoading(false);
        }
    };


    return { data, error, loading, fetchData };
};

export default useAxios;
