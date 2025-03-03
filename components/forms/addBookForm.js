import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';
import selectAuthor from './selectAuthor';

// USING THIS FORM FOR BOTH CREATE AND UPDATE
const addBookForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-book--${obj.firebaseKey}` : 'submit-book'}" class="mb-4">
      <div class="form-group">
        <label for="title">Book Title</label>
        <input type="text" class="form-control" id="title" aria-describedby="bookTitle" placeholder="Enter Book Title" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea class="form-control" placeholder="Book Description" id="description" style="height: 100px">${obj.description || ''}</textarea>
      </div>
      <div class="form-group">
        <label for="image">Image URL</label>
        <input type="url" class="form-control" id="image" placeholder="Image URL" value="${obj.image || ''}" required>
      </div>
      <div class="form-group">
        <label for="price">Price</label>
        <input type="text" class="form-control" id="price" placeholder="Book Price" value="${obj.price || ''}" required>
      </div>
      <div class="form-group" id="select-author">
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="sale" ${obj.sale ? 'checked' : ''}>
        <label class="form-check-label" for="sale">On Sale?</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit Book
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
  selectAuthor(`${obj.author_id || ''}`);
};

export default addBookForm; // updated formatting to match other files; still getting a warning (potentially ignore that) but fix it by removing "default" and adding multiple other functions/ function calls to this file. also make the importa match with curtly braces above (I didn't google if those are correct, just looked at the other files).
// error came back - beleive it can't find addBookForm now either because of the default export, or there's something wrong in the function.
// tried removing the default export, no luck.  this linting error is silly.  Make sure all spelling and locations are correct after checking contents of the addbookform function.
