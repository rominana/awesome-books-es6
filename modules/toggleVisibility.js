const toggleVisbility = (activeElement) => {
  activeElement.classList.toggle('active');
  activeElement.classList.remove('hide-class');
};

export default toggleVisbility;