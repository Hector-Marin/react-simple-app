import { useEffect, useState } from 'react';

const useFetch = (url, config=null) => {
    
    const [ data, setData ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        const fetchResource = async () => {
            try {
                let res = await fetch(url, config);
                let data = await res.json();
    
                setData(data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(true);
            }
        }

        fetchResource();
    }, [url, config])

    return { data , loading , error };
}

export default useFetch