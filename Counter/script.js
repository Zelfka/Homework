let count = 0;
$('.first').click(function(){
  count++;
  $('h2').text(count);
})
$('.second').click(function(){
  count--;
  $('h2').text(count);
})