import { useState } from 'react';

const usePostFetch = (url, object) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(object)
};
    setTimeout(() => {
      fetch(url, requestOptions)
      .then(res => {
        if (!res.ok) { 
          throw Error('could not login for that resource');
        } 
        return res.json();
      })
      .then(data => {
        setIsPending(false);
        console.log(data)
        setData(data);
        setError(null);
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('fetch http call aborted')
        } else {
          setIsPending(false);
          setError(err.message);
        }
      })
    }, 1000);
  return { data, isPending, error };
}
 
export default usePostFetch;