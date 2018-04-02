$(document).ready(() => {
  $("button").on("click", () => {
    $("dl").show(".hidden");
  })
  counter = function() {
  	var value = $('#user-text').val();
    var regex = /\s+/gi;
    var wordCount = value.trim().replace(regex, ' ').split(' ').length;
    console.log(wordCount); 
  }
});