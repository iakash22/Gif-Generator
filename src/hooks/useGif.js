import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
const useGif = (tag) => {

    const [loading, setLoading] = useState(false);
    const [gif, setGif] = useState('')
    async function fetchData() {
        setLoading(true);
        const output = await axios.get(tag ? `${url}&tag=${tag}` : url);
        const urlImg = output?.data?.data?.images?.downsized_large?.url;
        setGif(urlImg);
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return {gif,loading,fetchData}
};

export default useGif;
