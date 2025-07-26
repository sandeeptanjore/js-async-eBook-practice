fetch('https://jsonplaceholder.typicode.com/posts/99999')
  .then((response) => {
    console.log('HTTP Status:', response.status); // Log status for every response
    if (!response.ok) {
      throw new Error(`HTTP ${response.status} (${response.statusText})`); // Include status code + text
    }
    return response.json();
  })
  .then((data) => {
    console.log('Success:', data); // Log data only if successful
  })
  .catch((error) => {
    console.error('Request Failed:', error.message); // Log detailed error (includes status)
  });
