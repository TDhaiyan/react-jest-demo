import { use, useState, Suspense, useEffect } from "react";

const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        id: 1,
        text: "111",
      },
      {
        id: 2,
        text: "222",
      },
    ]);
  }, 10);
});


function Comments() {
  const [flag, setFlag] = useState(false);

  const [comments, setComments] = useState([]);


  useEffect(() => {
    promise.then((value) => {
      console.log('comments', value)
      setFlag(true)

      setComments(value)
    });


  }, []);

  // const comments = use(promise)


  // `use` will suspend until the promise resolves.
  // const comments = use(promise);
  return comments.map((comment) => <p key={comment.id}>{comment.text}</p>);
}

export function Page() {
  // When `use` suspends in Comments,
  // this Suspense boundary will be shown.

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Comments />
    </Suspense>
  );
}

