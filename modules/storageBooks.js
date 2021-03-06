import Book from './book.js';
import getListElement from './getListElement.js';

const bookList = document.getElementById('book-list');
const newTitle = document.getElementById('new-title');
const newAuthor = document.getElementById('new-author');

export default class StorageBooks {
  static storeData(bookData) {
    localStorage.setItem('bookData', JSON.stringify(bookData));
    document.querySelectorAll('.remove').forEach((button) => {
      button.addEventListener('click', () => {
        StorageBooks.removeLi(Number(button.id));
      });
    });
  }

  static loadData() {
    const data = localStorage.getItem('bookData');
    if (data) {
      const bookData = JSON.parse(data);
      bookData.forEach((book) => {
        bookList.appendChild(getListElement(book.title, book.author, book.id));
      });
    }
    document.querySelectorAll('.remove').forEach((button) => {
      button.addEventListener('click', () => {
        StorageBooks.removeLi(Number(button.id));
      });
    });
  }

  static removeLi(id) {
    const li = document.getElementById(`book${id}`);
    let bookData = JSON.parse(localStorage.getItem('bookData'));
    bookData = bookData.filter((book) => book.id !== id);
    StorageBooks.storeData(bookData);
    li.remove();
  }

  static addLi() {
    if (newTitle.value && newAuthor.value) {
      const bookData = localStorage.getItem('bookData') ? JSON.parse(localStorage.getItem('bookData')) : [];
      const id = Date.now();
      const book = new Book(newTitle.value, newAuthor.value, id);
      bookData.push(book);
      bookList.appendChild(getListElement(book.title, book.author, book.id));
      StorageBooks.storeData(bookData);
      newTitle.value = '';
      newAuthor.value = '';
    }
  }
}