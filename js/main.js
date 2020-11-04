$(document).ready(function () {
  // Icon set
  const icons = [
    {
      name: 'cat',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'crow',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dog',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dove',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dragon',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'horse',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'hippo',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'fish',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'carrot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'apple-alt',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'lemon',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'pepper-hot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'user-astronaut',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-graduate',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-ninja',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-secret',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
  ];
  // html references
  const select = $('#type');
  // array containing the colors for each type of icon
  const arrColors = ['blue','orange','purple'];
  // create array with different types of icons
  const arrTypes = getTypes(icons);
  // populate select element with types found in icon set
  populateSelectOptions(arrTypes, select);

});

// Functions declaration
/**
 * Return an array containing the differt types of the icon set given
 * @param {object} icons 
 */
function getTypes(icons) {
  let types = [];
  icons.forEach((icon) => {
    if(! types.includes(icon.type)) {
      types.push(icon.type);
    }
  });
  return types;
}

/**
 * Populate <select> element with option types based on the array passed as a parameter
 * @param {object} arrTypes 
 * @param {object} select 
 */
function populateSelectOptions(arrTypes, select) {
  const source = $("#option-template").html();
  const template = Handlebars.compile(source);
  arrTypes.forEach((type) => {
    const context = { type };
    const html = template(context);
    select.append(html);
  });
}