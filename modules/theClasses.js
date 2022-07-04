const theClasses = (elem1, elem2) => {
  elem1.classList.remove('active');
  elem1.classList.add('hide-class');

  elem2.classList.remove('active');
  elem2.classList.add('hide-class');
};

export default theClasses;