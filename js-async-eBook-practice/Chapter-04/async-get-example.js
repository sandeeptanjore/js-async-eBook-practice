//let's convert our earlier examples of GET and POST requests that used promises into async/await syntax.
//Basic GET Request using ASYNC/AWAIT
//Example: Fetching a random dog image

//async-get-example.js

async function fetchRandomDog() {
  try {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');

    //Check for HTTP errors
    if (!response.ok) {
      throw new Error(`HTTP error!status:${response.status}`);
    }

    //Parse JSON data
    const data = await response.json();
    console.log('Random Dog Image URL:', data.message);
  } catch (error) {
    //Handle network errors or manual thrown errors
    console.error('Error fetching dog image: ', error.message);
  }
}

//call the function
fetchRandomDog();
