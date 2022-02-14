$('.first').on('click', ()=> {
  console.log("Yeah, you clicked me");
})

$('.second').click(function(){
  $('.first').text("done");
});

$(document).ready(function(){
  $('.third').click(function (){
    $('button').css('background-color', $('value:input').val());
  });
});