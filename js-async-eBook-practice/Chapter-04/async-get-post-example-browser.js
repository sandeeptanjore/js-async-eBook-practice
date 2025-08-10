//GET request for posts when using a browser

const getAllPosts = async () => {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typisdkcode.com/posts'
    );
    //check for HTTP errors
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
      console.log(`HTTP status is: ${response.status} ${response.statusText}`);
    }
    //Parse JSON data
    const data = await response.json();
    console.log('GET Response', data);
  } catch (error) {
    //Handle DNS/network errors explicitly
    if (error.code === 'ENOTFOUND') {
      console.error('⚠️ Critical Network Error:');
      console.error(`- Failed to resolve hostname: ${error.hostname}`);
      console.error(`- Possible causes:`);
      console.error('  1. Typo in URL (e.g., "typisdkcode" vs "typicode")');
      console.error('  2. No internet connection');
      console.error('  3. DNS server issues');
      console.error('----------------------------');
    }
    // Log full error for debugging
    console.error('Full error details:', {
      name: error.name,
      message: error.message,
      code: error.code, // e.g., 'ENOTFOUND'
      syscall: error.syscall, // e.g., 'getaddrinfo'
      hostname: error.hostname,
      stack: error.stack, // Full stack trace
    });
  }
};

const pageLoad = document.addEventListener('DOMContentLoaded', () => {
  getAllPosts();
});
