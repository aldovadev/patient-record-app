import { useEffect, useState } from "react";


const BASE_URL = 'http://localhost:8000';

function useFetchOptions(endpoint: string) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${BASE_URL}/${endpoint}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setOptions(data);
      } catch (error) {
        console.error('Error fetching medications prescribed:', error);
      }
    }

    fetchData();

  }, [endpoint]);

  return options;
}

export default useFetchOptions;
