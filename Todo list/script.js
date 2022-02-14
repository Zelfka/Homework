$('#pressButton').click(function (){
  $('.list').append($('<li>', {
    text: $('#userInput').val()
  }));
});