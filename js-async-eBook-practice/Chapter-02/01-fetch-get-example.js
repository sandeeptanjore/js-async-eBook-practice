//Example 1: GET Request

//fetch-get-example.js

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => {
    if (!response.ok) {
      //handling non-2xx HTTP status codes
      throw new Error(`Server responded with status: ${response.status}`);
    }
    console.log(`Response Status is: ${response.status}`);
    return response.json(); //Parsing the JSON body
  })
  .then((data) => {
    console.log('Fetched Post: ', data);
  })
  .catch((error) => {
    console.log('Error', error);
  });
