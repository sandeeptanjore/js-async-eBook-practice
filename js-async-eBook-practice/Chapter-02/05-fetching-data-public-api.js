//fetch-random-dog.js

fetch('https://dog.ceo/api/breeds/image/random')
  .then((response) => {
    console.log('HTTP Status: ', response.status);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status} (${response.statusText})`);
    }
    return response.json();
  })
  .then((data) => {
    console.log('Random Dog Image URL: ', data.message);
    document.querySelector('#dogImage').src = data.message;
  })
  .catch((error) => {
    console.error('Error fetching data: ', error);
  });
