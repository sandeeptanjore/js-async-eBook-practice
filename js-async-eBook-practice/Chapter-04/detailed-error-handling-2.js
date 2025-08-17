//This is the same code from detailed-error-handling.js but enhanced by DeepSeek

const getData = async (url) => {
  try {
    const response = await fetch(url);

    // Check for HTTP errors
    if (!response.ok) {
      let errorMessage;
      const contentType = response.headers.get('content-type');

      if (response.status === 404) {
        errorMessage = `Resource not found at ${url}`;
      } else if (response.status >= 500) {
        errorMessage = `Server error (${response.status}) at ${url}`;
      } else {
        errorMessage = `Request failed with status ${response.status} at ${url}`;
      }

      // Try to get error details from response body if it's JSON
      if (contentType && contentType.includes('application/json')) {
        const errorDetails = await response.json();
        errorMessage += ` | Server says: ${JSON.stringify(errorDetails)}`;
      }

      throw new Error(errorMessage);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Enhanced error logging with context
    const errorContext = {
      timestamp: new Date().toISOString(),
      url,
      errorType: error.name,
      errorMessage: error.message,
      // Include system error details if available (Node.js)
      ...(error.cause && { systemError: error.cause }),
    };

    console.error('API Request Failed:', errorContext);
    return null;
  }
};

// Usage example with better error display
const displayData = async () => {
  const data = await getData('https://jsonplaceholder.typicode.co2m/posts/99');

  if (data) {
    console.log('Post Data:', data);
  } else {
    console.log(
      '❌ Data fetch failed. Check console for detailed error report.'
    );
  }
};

displayData();
