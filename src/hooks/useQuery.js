import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function useQuery() {
  const location = useLocation();
  const [queryParams, setQueryParams] = useState({});

  useEffect(() => {
    // Parse the query string into an object
    const params = new URLSearchParams(location.search);
    const parsedParams = Object.fromEntries(params.entries());
    setQueryParams(parsedParams);
  }, [location.search]); // Re-run when the query string changes


  return queryParams;
}

export default useQuery;