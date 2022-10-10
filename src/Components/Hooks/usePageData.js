import { useEffect, useState } from "react";

const usePageData = (url, initialState = null) => {

    const [pageData, setPageData] = useState(initialState);

    useEffect(() => {
        console.log('usePageData called =>' + url);
        const fetchData = async (dataUrl) => {
            var response = await fetch(dataUrl);
            var data = await response.json();
            console.log(data);
            setPageData(data);
        }
        fetchData(url);
    }, [url]);

    return pageData;

}

export default usePageData;