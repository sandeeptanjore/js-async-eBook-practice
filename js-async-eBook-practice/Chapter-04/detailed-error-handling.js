const getData = async (url) => {
  try {
    const response = await fetch(url);

    //Check for HTTP errors
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Resource not found (404).');
      } else if (response.status >= 500) {
        throw new Error('Server error. Please try again later.');
      } else {
        throw new Error(`Unexpected error: ${response.status}`);
      }
    }
    const data = await response.json();
    return data;
  } catch (error) {
    //Log error and optionally rethrow or return a default value
    console.error(`Failed to fetch ${url}:`, error.message);
    // For network errors (like wrong domain)
    if (error.message.includes('Failed to fetch')) {
      console.error('This usually means:');
      console.error('- The website address is wrong');
      console.error('- You lost internet connection');
      console.error('- The server is down');
    }
    return null;
  }
};

//Usage example with async/await
const displayData = async () => {
  const data = await getData('https://jsonplaceholder.typicode.co2m/posts/99');
  if (data) {
    console.log('Post Data:', data);
  } else {
    console.log('Failed to load data - see error above for details');
  }
};

displayData();
