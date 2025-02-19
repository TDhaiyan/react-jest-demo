import { useState, useEffect } from "react";
import axios from "axios";

const promiseWrapper = (promise) => {
  let status = "pending";
  let result;

  const s = promise.then(
    (value) => {
      console.log('promise.then=======',value)
      status = "success";
      result = value;
    },
    (error) => {
      status = "error";
      result = error;
    }
  );

  return () => {
    console.log('return=======',status)
    switch (status) {
      case "pending":
        throw s;
      case "success":
        return result;
      case "error":
        throw result;
      default:
        throw new Error("Unknown status");
    }
  };
};

function useGetData(url) {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const promise = axios.get(url).then((response) => response.data);
      console.log('promise=======',promise)
      setResource(promiseWrapper(promise));
    };

    getData();
  }, [url]);

  console.log('resource=======url',url, resource)

  return resource;
}

export default useGetData;
