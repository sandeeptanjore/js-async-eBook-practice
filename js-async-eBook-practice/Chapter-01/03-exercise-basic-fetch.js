/* Basic Fetch Request
==============================
Write a function getUsers() that fetches the user data from:
https://jsonplaceholder.typicode.com/users

Log each user's name and email to the console
 */

const fetchButton = document.getElementById('fetchButton');
const usersContainer = document.getElementById('usersContainer');

fetchButton.addEventListener('click', () => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      return response.json();
    })
    .then((users) => {
      let userHTML = ''; // Initialize empty string
      users.forEach((user) => {
        userHTML += `
          <div class="user-card">
            <h3>Name: ${user.name}</h3>
            <p>User id: ${user.username}</p>
            <p>Email: ${user.email}</p>
            <hr>
          </div>
        `;
      });
      usersContainer.innerHTML = userHTML;
    })
    .catch((error) => {
      usersContainer.innerHTML = `<p>${error.message}</p>`;
    });
});
