/* This app doesn't follow a11y best practices, and the JS file is incomplete. Complete the getDataFromApi and displaySearchData functions. When you're done, this app should allow a user to search for a specific dog breed, and display a random image of that dog breed. You should make requests to this API: https://dog.ceo/dog-api/ . Also make any necessary adjustments to make this app accessible. */

//how to connect searchTerm to user input?
//what is the callback in this code and what is being called back?
function getDataFromApi(searchTerm, callback) {
  console.log(searchTerm);
  const settings = {
    url: `https://dog.ceo/api/breed/${searchTerm}/images/random`,
    dataType:'json',
    type: 'GET',
    success: callback,
    error: function(error){
      console.log(error);
    }
  }
$.ajax(settings);
}

//how to select the image from the data
//data is not defined, how does code know what it is
function displaySearchData(data) {
  console.log(data);
  let htmlToDisplay = renderResults(data);
  $('.js-search-results').html(htmlToDisplay);
}

function renderResults(dataPassedToThisFunction){
  return `
  <div class ="image-container">
    <href="https://dog.ceo/api/breed/${dataPassedToThisFunction.message}/image/random" alt="photo of chosen dog breed" target="_blank">
  </div>
  `;
}
/* <div>
      <h2>${$('.js-query-title').val()}</h2>
      by
      <h2>${$('.js-query-artist').val()}</h2>
      <p class="result-lyrics" href="https://api.lyrics.ovh/v1/${'.js-query-artist'}/${'.js-query-title'} target="_blank">${dataPassedToThisFunction.lyrics}</p>
    </div>
*/

function watchSubmit() {
  $('.js-search-form').submit(event => {
    event.preventDefault();
    //currentTarget
    let queryTarget = $(event.currentTarget).find('.js-query');
    let query = queryTarget.val();
    // clear out the input
    queryTarget.val("");
    getDataFromApi(query, displaySearchData);
  });
}

$(watchSubmit);
