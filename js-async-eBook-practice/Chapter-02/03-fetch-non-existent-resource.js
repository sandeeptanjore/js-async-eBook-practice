//Fetch a Non-Existent Resource
fetch('https://jsonplaceholder.typicode.com/posts/99999')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    console.log(`Status of response is: ${response.status}`);
    return response.json();
})