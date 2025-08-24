/**
 * Handling Multiple Async Calls  
   Write an async function that first fetches user data from
  https://jsonplaceholder.typicode.com/users and then fetches posts
   for the first user using https://jsonplaceholder.typicode.com/posts?userId={id}.
 */

// 1) Helper: get all users (Pattern A)
const getAllUsers = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const allData = await response.json();
    return allData;
  } catch (error) {
    console.error(`GET Failed:`, error.message);
    return null;
  }
};

// 2) Helper: get posts for each user (Pattern A)

const getPostsByUser = async (userId) => {
  const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`GET Failed:`, error.message);
    return null;
  }
};

//wrapper
const getFirstUserAndPosts = async () => {
  const users = await getAllUsers('https://jsonplaceholder.typicode.com/users');

  if (!users || !Array.isArray(users) || users.length === 0) {
    console.log('No users found.');
    return null;
  }
  const first = users[0];
  console.log(
    'First user and username:',
    first.name,
    first.username,
    `(id: ${first.id})`
  );
  // console.log('First User:', first);

  const posts = await getPostsByUser(first.id);
  if (!posts || posts.length === 0) {
    console.log(`No posts for user ${first.id}.`);
    return null;
  }

  console.log('First post title:', posts[0].title);
  return { user: first, userPost: posts };
};

getFirstUserAndPosts();
