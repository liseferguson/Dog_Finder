/* This app doesn't follow a11y best practices, and the JS file is incomplete. Complete the getDataFromApi and displaySearchData functions. When you're done, this app should allow a user to search for a specific dog breed, and display a random image of that dog breed. You should make requests to this API: https://dog.ceo/dog-api/ . Also make any necessary adjustments to make this app accessible. */

//this function sends a data request to the API. The const "settings" is an object with params defined in the documentation.
//Q: how to search breed and sub-breed
//how to return multiple images, limit how many
//how to have an error that says when there are no results
function getDataFromApi(searchTerm, callback) {
  console.log(searchTerm);
  const settings = {
    url: `https://dog.ceo/api/breed/${searchTerm}/images/random`,
    dataType:'json',
    type: 'GET',
    success: callback,
    error: function(error){
      alert("please enter a valid breed");
    }
    }
$.ajax(settings);
}

//??? is this the callback function because it is passed into the bottom of the watchSubmit function as an argument?
//data param refrences searchTerm from above function
function displaySearchData(data) {
  console.log(data);
   let results = `
  <div class ="image-container">
    <img src="${data.message}" alt='photo of your dog' target="_blank">
  </div>
  `
  $('.js-search-results').html(results);
}

//this function contains the event listener connected to the search button. When the user hits search, preventDefault prevents redirection to another page, and then the getDataFromApi function is called.
function watchSubmit() {
  $('.js-search-form').submit(event => {
    event.preventDefault();
    let searchTerm = $('.js-query').val();
    getDataFromApi(searchTerm, displaySearchData);
  });
}

//this fucntion waits for the page to load, then calls all the functions inside it above
$(watchSubmit);
