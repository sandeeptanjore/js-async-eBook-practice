//This code is used when using node.js kind of calls and not browser

const getAllPosts = async () => {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typisdkcode.com/posts'
    );
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
    const data = await response.json();
    console.log('GET Response', data);
  } catch (error) {
    console.error('🔴 Full Error:', error);

    // Node.js Specific Handling
    if (error.message === 'fetch failed') {
      console.error('\n🛑 Root Cause:');
      console.error('- Failed to connect to the server');
      console.error('- Most likely causes:');
      console.error(
        '  1. Typo in domain (you used "typisdkcode" instead of "typicode")'
      );
      console.error('  2. Your internet connection is down');
      console.error('  3. The server is blocking your request');

      // If available (Node.js specific)
      if (error.cause) {
        console.error('\n📡 Network Error Details:');
        console.error('- Code:', error.cause.code); // ENOTFOUND, ECONNREFUSED etc
        console.error('- Hostname:', error.cause.hostname);
        console.error('- System Call:', error.cause.syscall);
      }
    }
  }
};

getAllPosts();
