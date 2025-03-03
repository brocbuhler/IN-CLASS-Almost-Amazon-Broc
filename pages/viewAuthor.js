import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';
import { getAuthorBooks } from '../api/authorData';

const showAuthorBooks = (array) => {
  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-book-btn">Add A Book</button>';
  renderToDOM('#add-button', btnString);

  let bomString = '';
  array.forEach((item) => {
    bomString += `
      <div class="card">
        <img class="card-img-top" src=${item.image} alt=${item.title} style="height: 400px;">
        <div class="card-body" style="height: 180px;">
          <h5 class="card-title">${item.title}</h5>
            <p class="card-text bold">${item.sale ? `<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> $${item.price}` : `$${item.price}`}</p>
            <hr>
            <i class="btn btn-success fas fa-eye" id="view-book-btn--${item.firebaseKey}">View</i>
            <i id="edit-book-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info">Edit</i>
            <i id="delete-book-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt">Delete</i>
        </div>
      </div>`;
  });
  renderToDOM('#author-books', bomString);
};

const viewAuthor = (obj) => {
  clearDom();

  const domString = `<div>
  <h1>${obj.first_name} ${obj.last_name}</h1>
  <h3>Author Email: ${obj.email}</h3>
  <p>Favorite? ${obj.favorite}</p>
  <button id="update-author-${obj.firebaseKey}"></button>
  <button id="delete-author-btn--${obj.firebaseKey}"></button>
  </div>
  <div id="author-books"></div>`;
  getAuthorBooks(obj.firebaseKey).then(showAuthorBooks);

  renderToDOM('#view', domString);
};

export default viewAuthor;
