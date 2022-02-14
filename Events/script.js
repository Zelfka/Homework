$('.first').on('click', ()=> {
  console.log("Yeah, you clicked me");
})

$('.second').click(function(){
  $('.first').text("done");
});
$('.third').click(function(){
  $('button').css('background-color','red');
});