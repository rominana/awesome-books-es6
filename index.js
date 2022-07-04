// IMPORT MODULES
import StorageBooks from './modules/storageBooks.js';
import toggleVisbility from './modules/toggleVisibility.js';
import theClasses from './modules/theClasses.js';
import { DateTime } from './node_modules/luxon/src/luxon.js';

// CREATE ELEMENTS
const addBook = document.getElementById('add-book');
const allBooksSection = document.getElementById('all-books');
const addNewBookSection = document.getElementById('add-new-book');
const contactSection = document.getElementById('contact');
const listLink = document.getElementById('list-link');
const addLink = document.getElementById('add-link');
const contactLink = document.getElementById('contact-link');

// SET CURRENT TIME
document.getElementById('date').innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
// LOAD BOOK INFO INTO THE LOCAL STORAGE
document.addEventListener('DOMContentLoaded', StorageBooks.loadData);

// ADD BOOK INFORMATION FROM FORM
addBook.addEventListener('click', StorageBooks.addLi);

// SET THE BOOK LIST VISIBLE
allBooksSection.classList.add('active');
allBooksSection.classList.remove('hide-class');

listLink.addEventListener('click', () => {
  toggleVisbility(allBooksSection);
  theClasses(addNewBookSection, contactSection);
});

addLink.addEventListener('click', () => {
  toggleVisbility(addNewBookSection);
  theClasses(allBooksSection, contactSection);
});

contactLink.addEventListener('click', () => {
  toggleVisbility(contactSection);
  theClasses(allBooksSection, addNewBookSection);
});
