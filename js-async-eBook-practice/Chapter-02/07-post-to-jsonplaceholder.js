//post-to-jsonplaceholder.js

fetch("https://jsonplaceholder.typicode.com/posts",{
  method: "POST",
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'My New Post',
    body: 'Hello World',
    userId: 123
  })
})
  .then(response => {
    if (!response.ok) throw new Error(response.status);
    return response.json();
  })
  .then(createdPost => {
    console.log("Created a post:", createdPost);
  })
  .catch(error => {
    console.log("Error creating a post: ", error);
  })
  ;