fetch('https://httpbin.org/status/400', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    firstName: 'Sandeep',
    lastName: 'Tanjore',
    userId: 1,
    email: 'sandeep@yahoo.com',
  }),
})
  .then((response) => {
    console.log('HTTP Status: ', response.status);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status} (${response.statusText})`);
    }
    return response.json();
  })
  .then((data) => {
    console.log('Success: ', data);
  })
  .catch((error) => {
    console.error('Request Failed:', error.message);
  });
