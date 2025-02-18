import React from "react";
import { useQuery } from 'react-query';


// Define your data-fetching function
async function fetchData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

export const User = () => {
  const { data, isLoading, isError } = useQuery('data', fetchData);

  if (isLoading) {
    throw new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate loading delay
  }

  if (isError) {
    throw new Error('Error while fetching data');
  }

  return (
    <div>
      <h1>Fetching data with React Suspense</h1>
      <p>{data}</p>
    </div>
  );
}



