/**
 * Combine a GET and a POST request. First, GET a list of posts from https://jsonplaceholder.typicode.com/posts.
 * Then, POST a new post
 * Log both the responses and note how they differ
 */

const getPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts/1bc')
    .then((response) => {
      if (!response.ok) {
        //Distinguish between different error statuses
        if (response.status === 404) {
          throw new Error(`User not found (404)`);
        }
        throw new Error(
          `Server responded with a status of:  ${response.status} ${response.statusText}`
        );
      }
      console.log(
        `Response Status and text is: ${response.status} ${response.statusText}`
      );
      return response.json();
    })
    .then((data) => {
      console.log('Fetched Posts: ', data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const createPost = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstName: 'Sandeep',
      lastName: 'Tanjore',
      email: 'sandeep@sandeep.com',
    }),
  })
    .then((response) => {
      console.log(`POST Status: ${response.status}`);
      if (!response.ok) {
        throw new Error(
          `POST failed : ${response.status} ${response.statusText}`
        );
      }
      return response.json();
    })
    .then((data) => {
      console.log('POST Response (new post): ', data);
    })
    .catch((error) => {
      console.log('POST Error: ', error);
    });
};

// getPosts();
// console.log('**********');
// createPost();

// Execute in order with separator
getPosts()
  .then(() => {
    console.log('**********');
    console.log('The other procedure kicks in now....');
    return createPost();
  })
  .catch((error) => console.log('Overall error:', error));
