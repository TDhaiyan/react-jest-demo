import React from "react";
import useGetData from "./usePromise";

function PostsComponent() {
  const data = useGetData("https://jsonplaceholder.typicode.com/todos/1");

  return (
    <div>
      {data &&
        // data.map((post) => (
        //   <div key={post.id}>
        //     <h2>{post.title}</h2>
        //     <hr />
        //     <p>{post.body}</p>
        //   </div>
        // ))
        JSON.stringify(data)
        }
    </div>
  );
}

export default PostsComponent;
