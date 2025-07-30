const fetchRandomDogImage = () => {
  fetch('https://dosg.ceo/api/breeds/image/random')
    .then((response) => {
      console.log(
        'HTTP Status and Message: ',
        response.status + ' ' + response.statusText
      );
      if (!response.ok) {
        throw new Error(
          `Dog API failed: ${response.status} (${response.statusText})`
        );
      }
      return response.json();
    })
    .then((data) => {
      console.log('Random Dog Image URL: ', data.message);
      return data;
    })
    .then((data) => {
      console.log('Image breed: ', data.message.split('/')[4]);
    })
    .then(() => {
      console.log('Fetched a random dog image successfully!');
    })
    .catch((error) => {
      if (
        error instanceof TypeError &&
        error.message.includes('fetch failed')
      ) {
        console.error(
          'Network error: Could not connect to the Dog API. Check the URL or your internet connection.'
        );
      } else if (error.message.startsWith('Dog API failed:')) {
        console.error(`API error: ${error}`);
      } else {
        console.log(`Unexpected error: ${error.message}`);
      }
    });
};

fetchRandomDogImage();
