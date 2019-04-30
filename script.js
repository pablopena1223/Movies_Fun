$( document ).ready(function() {
$('button').click(function(){

var searchText = getSearchText();
performSearch(searchText);

});

function getSearchText(){
    var inputValue = $("input").val();
    return inputValue;
}

function performSearch(searchText){
 $.ajax({
    url: `https://www.omdbapi.com/?apikey=8e9ded79&t=${searchText}`,
    method: "GET",
    success: function(movieInfo){
        updateUI(movieInfo);
    }
 });
}


function updateUI(movieInfo){
        $('.full_movie_title').html(movieInfo.Title);
        $('.image').attr("src", movieInfo.Poster);
        $('.date').html(movieInfo.Year);
}
});