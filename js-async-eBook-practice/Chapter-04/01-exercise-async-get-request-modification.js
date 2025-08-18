/**
 * 1. Async GET Request Modification
 * a) Convert an existing promise-based GET request to async/await syntax
 * b) Fetch a list of posts from https://jsonplaceholder.typicode.com/posts and log the title of the first post
 * c) Include error handling for both network errors and non-OK HTTP responses
 */

// const getUser = async () => {
//   const url = 'https://jsonplaceholder.typicodwee.com/posts';
//   try {
//     const response = await fetch(url);
//     //Checking for HTTP errors:
//     if (!response.ok) {
//       let errorMessage;
//       const contentType = response.headers.get('content-type');

//       if (response.status === 404) {
//         errorMessage = `Resource not found at ${url}`;
//       } else if (response.status >= 500) {
//         errorMessage = `Server error (${response.status} ${response.statusText}) at ${url}`;
//       } else {
//         errorMessage = `Request failed with ${response.status} and message of ${response.statusText} at ${url}`;
//       }
//       throw new Error(errorMessage);
//     }
//     const data = await response.json();
//     return data;

//   } catch (error) {
//     console.error(`Failed to fetch ${url}:`, error.message);
//     // For network errors (like wrong domain)
//     if (error.message.includes('Failed to fetch')) {
//       console.error('This usually means:');
//       console.error('- The website address is wrong');
//       console.error('- You lost internet connection');
//       console.error('- The server is down');
//     }
//     return null;
//   }
// };

// //Wrapper that logs automatically
// const getUserAndLog = async () => {
//   try {
//     const data = await getUser();
//     if (data) {
//       console.log("Fetched title: ", data[0].title);
//       console.log("Fetched data: ", data[0].body);
//     }
//     return data;
//   } catch (e) {
//     console.error("Error status:", e.status ?? "(no status - network error)");
//     console.error("Error message:", e.message);
//     return null;
//   }
// }
// //now calling the function:
// getUserAndLog();


// Minimal: no try/catch inside; throw with status for non-OK
const getUser = async () => {
  // BAD PATH -> forces an HTTP 404 (has a status)
  const url = 'https://jsonplaceholder.typicode.com/posts';

  const response = await fetch(url);

  if (!response.ok) {
    const err = new Error(`HTTP ${response.status} ${response.statusText} at ${url}`);
    err.status = response.status;          // attach the number
    throw err;                             // let the wrapper handle it
  }

  return response.json(); // (would be an array for /posts; here it won't reach)
};

// Wrapper: prints the status if available
const getUserAndLog = async () => {
  try {
    const data = await getUser();
    if (data) {
      console.log("Fetched title:", data[0].title);
      console.log("Fetched data:", data[0].body);
    }
    return data;
  } catch (e) {
    console.error("Error status:", e.status ?? "(no status - network error)");
    console.error("Error message:", e.message);
    return null;
  }
};

getUserAndLog();
