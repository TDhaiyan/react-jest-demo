import React, { useEffect, useState } from "react";

// export const User = () => {
//   const [user, setuser] = useState(null);

//   useEffect(() => {
//     setTimeout(() => {
//     const res = fetch("https://jsonplaceholder.typicode.com/todos/1")
//       .then((response) => response.json())
//       .then((json) => setuser(json));
//     }, 5000);
//   }, []);

//   return <div>{JSON.stringify(user)}</div>;
// };



function wrapPromise(promise) {
  let status = 'pending';
  let result;
  const suspender = promise.then(
    (r) => {
      status = 'success';
      result = r;
    },
    (e) => {
      status = 'error';
      result = e;
    }
  );
  return {
    read() {
      //console.log(status);
      if (status === 'pending') {
        throw suspender;
      } else if (status === 'error') {
        throw result;
      } else if (status === 'success') {
        return result;
      }
    },
  };
}



const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  await delay(2000);
  return data;
};

/* Util to delay loading */

const delay = (d) => new Promise((r) => setTimeout(r, d));



export const User = () => {

  /* HOOK that lets to start the fetch promise only on component mount */
/* It's based on "wrapPromise" utility, which is MANDATORY to return a Suspense consumable entity */

const useGetData = (url) => {
  const [resource, setResource] = useState(null);
  useEffect(() => {
    const _resource = wrapPromise(fetcher(url));
    setResource(_resource);
  }, [url]);

  return resource?.read();
};

  const data = useGetData('https://jsonplaceholder.typicode.com/todos/1');
  return <div>{JSON.stringify(data)}</div>;

};
