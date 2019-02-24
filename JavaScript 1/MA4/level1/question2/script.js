// Level 1 Task 2
var apiURL = 'https://jsonplaceholder.typicode.com/todos';

fetch(apiURL)
  .then(function(result) {
    return result.json();
  })
  .then(function(jsonFile) {
    addJsonToHTML(jsonFile);
  })
  .catch(function(error) {
    console.error(error);
  });


function addJsonToHTML(jsonFile){
    var jsonLength = jsonFile.length;
    for (var i = 0; i<jsonLength; i++){
        var jsonObject = jsonFile[i];

        var todoCards = document.getElementById("todoCards");

        todoCards.innerHTML += getCardHTML(jsonObject);
    }
}

function getCardHTML(jsonObject){

    var cardHTML = "";
    cardHTML += "<div class='card bg-info'>";
    cardHTML += "<div class='card-body text-center'>";
    cardHTML += "<h4 class='card-title'>User: " + jsonObject.userId + "</h4>";
    cardHTML += "<p class='card-text'>Task: " + jsonObject.id + "</p>";
    cardHTML += "<p class='card-text' style='line-height:1.5em; height:4.5em; overflow:hidden;'>Title: " + jsonObject.title + "</p>";
    if (jsonObject.completed == true){
        cardHTML += "<p class='card-text'>Completed: <input type='checkbox' onclick='return false;' checked> <br> </p>";
    }
    else {
        cardHTML += "<p class='card-text'>Completed: <input type='checkbox' onclick='return false;'> <br> </p>";
    }
    cardHTML += "</div>";
    cardHTML += "</div>";

    return cardHTML;
}
