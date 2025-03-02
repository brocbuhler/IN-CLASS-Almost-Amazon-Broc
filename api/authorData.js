// import client from '../utils/client';

// const endpoint = client.databaseURL;
const firebaseEndpoint = 'https://almost-broc-s-default-rtdb.firebaseio.com/';
// FIXME:  GET ALL AUTHORS
const favoriteAuthors = () => new Promise((resolve, reject) => {
  fetch(`${firebaseEndpoint}/authors.json?orderBy="favorite"&equalTo=true`, {
    method: 'GET',
    headers: {
      'content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getAuthors = () => new Promise((resolve, reject) => {
  fetch(`${firebaseEndpoint}/authors.json`, {
    method: 'GET',
    headers: {
      'content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});
// FIXME: CREATE AUTHOR
const createAuthor = () => {};

// FIXME: GET SINGLE AUTHOR
const getSingleAuthor = () => {};

// FIXME: DELETE AUTHOR
const deleteSingleAuthor = () => {};

// FIXME: UPDATE AUTHOR
const updateAuthor = () => {};

// TODO: GET A SINGLE AUTHOR'S BOOKS
const getAuthorBooks = () => {};

export {
  getAuthors,
  createAuthor,
  getSingleAuthor,
  deleteSingleAuthor,
  updateAuthor,
  getAuthorBooks,
  favoriteAuthors
};
