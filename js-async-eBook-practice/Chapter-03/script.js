document.addEventListener('DOMContentLoaded', () => {
  const userList = document.getElementById('userList');

  //Fetch user data from JSONPlaceholder
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error fetching users: ${response.status}`);
      }
      return response.json();
    })
    .then((users) => {
      //For each user, create a list item and append it to the userList
      users.forEach((user) => {
        const listItem = document.createElement('li');
        listItem.className = 'user-item';

        listItem.innerHTML = `
              <h2>${user.name}</h2>
              <p><strong>Username:</strong>${user.username}</p>
              <p><strong>Email:</strong>${user.email}</p>
              <p><strong>Address:</strong></p>
              <p>${user.address.street}</p>
              <p>${user.address.city}</p>
              <p>${user.address.zipcode}</p>
                            `;
        userList.appendChild(listItem);
      });
    })
    .catch((error) => {
      console.error('Failed to fetch user data:', error.message);
      userList.innerHTML = `<li>Oops! Something went wrong while fetching users.</li>`;
    });
});
