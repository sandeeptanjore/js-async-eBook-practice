fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => {
    //converting the response to json
    return response.json();
  })
  .then((posts) => {
    //posts is an array of objects
    //lets log them and show the data
    console.log('Posts:', posts);
  })
  .catch((error) => {
    console.log('Error fetching posts: ', error);
  });
