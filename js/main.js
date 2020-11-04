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
  // create a new icons array with color property
  const iconsColor = addColorIcon(icons, arrColors, arrTypes);
  // show icon set
  showIcons(iconsColor);
  // change() event on select
  select.change(() => {
    const iconsFiltered = filterIcons(iconsColor, select.val());
    showIcons(iconsFiltered);
  });
});

// FUNCTIONS DECLARATIONS
/**
 * Return an array containing the differt types of the icon set given
 * @param {object} icons 
 */
function getTypes(icons) {
  const types = [];
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
  const source = $('#option-template').html();
  const template = Handlebars.compile(source);
  arrTypes.forEach((type) => {
    const context = { type };
    const html = template(context);
    select.append(html);
  });
}

/**
 * Add the color property and return the icons object array
 * @param {object} icons 
 * @param {object} arrColors 
 * @param {object} arrTypes 
 */
function addColorIcon(icons, arrColors, arrTypes) {
  return icons.map((icon) => {
    const position = arrTypes.indexOf(icon.type);
    return {
      ...icon,
      color: arrColors[position]
    }
  });
}

/**
 * Filter icons based on the type selected. Return the filtered array
 * @param {object} iconsColor 
 * @param {string} selectVal 
 */
function filterIcons(iconsColor, selectVal) {
  const typeSelected = selectVal;
  if(typeSelected === 'all') {
    return iconsColor;
  } else {
    return iconsColor.filter((icon) => icon.type === typeSelected);
  }
}

/**
 * Show the icons passed with -arrIcons- parameter
 * @param {object} arrIcons 
 * @param {function} template 
 */
function showIcons(arrIcons) {
  const mainContent = $('.main-content');
  const source = $("#icon-template").html();
  const template = Handlebars.compile(source);
  mainContent.html('');
  arrIcons.forEach((icon) => {
    const {family, prefix, name, color} = icon;
    const context = {family, prefix, name, color};
    const html = template(context);
    mainContent.append(html);
  });
}