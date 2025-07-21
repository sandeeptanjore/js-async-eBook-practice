//Example 2: POST request
//fetch-post-example.js

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'New Post',
    body: 'This is the content of the new post from Sandeep.',
    UserId:1
  })
})
  .then(response => {
    if (response.status === 201) {
      console.log(`Response Status is: ${response.status}`);
      return response.json();
    } else {
      throw new Error(`Unexpected status code: ${response.status}`);
  }
  })
  .then(createdPost => {
   
    console.log('Created Post:', createdPost);
  })
  .catch(error => {
    console.error('Error creating post:', error);
})