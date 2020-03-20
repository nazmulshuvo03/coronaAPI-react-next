import { useState, useEffect } from "react";

export default function useStats(url) {
    const [stats, setStats] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    // console.log(url);

    useEffect(() => {
        // console.log("Fetching Data");
        async function fetchData() {
            setLoading(true);
            setError();
            const data = await fetch(url)
                .then(res => res.json())
                .catch(err => {
                    setError(err);
                });
            // console.log(data);
            setStats(data);
            setLoading(false);
        }
        fetchData();
    }, [url]);

    return {
        stats,
        loading,
        error
    };
}
