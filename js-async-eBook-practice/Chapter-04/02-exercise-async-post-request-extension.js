/**
 * 2. Async POST Request Extension
 * a) create a function called submitComment() that uses async/await to send a POST request to:
 *    https://jsonplaceholder.typicode.com/comments
 * b) The function should send a JSON object with properties postId, name, email and body
 * c) log the data if successful, or log a custom error message if there is an error
 *
 */

const submitComment = async (url, payload) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      throw new Error(
        `HTTP error! Status: ${response.status} ${response.statusText}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch POST failed: ', error.message);
    return null;
  }
};

//Wrapper that provides the URL and payload and logs on success

const submitCommentAndLog = async () => {
  const url = 'https://jsonplaceholder.typicode.com/comments';
  // const url = 'https://jsonplaceholder.typicode.com/commentz';
  const payload = {
    postId: 1,
    name: 'Sergio',
    email: 'Sergio@sergio.com',
    body: 'Hi Sergio. How are you?!',
  };

  console.log('Posting payload:', payload);

  const data = await submitComment(url, payload);
  if (data) console.log('Created comment:', data);
};

// run it
submitCommentAndLog();
