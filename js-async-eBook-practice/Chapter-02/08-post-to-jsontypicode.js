//Function to create a user using typicode with a JSON body containing name and an email

const createUser = () => {
  fetch("https://jsonplaceholder.typicode.com/users", {

  /* this fetch triggers Network error message*/
  // fetch("https://fakeapi.typicode404.com/users", { 
       
    method: "POST",
    headers: {
      'Content-Type': "application/json"
    },
    body: JSON.stringify({
      name: 'Sandeep Tanjore',
      email: "sandeep@sandeep.com"
    })
  })
    .then(response => {
      console.log(`Response Status is: ${response.status}`);
      if (!response.ok) { 
          throw new Error(`Unexpected status code: ${response.status} (${response.statusText})`);
      }
      return response.json();
    })
    .then(createdUser => {
      console.log("Created a new user: ", createdUser)
    })
    .catch(error => {
      if (error instanceof TypeError) {
        console.error('Network error: Could not connect to Users API. Check the URL...');
      } else {
        console.error("Error creating a user:", error.message)
      };
    })
};

createUser();