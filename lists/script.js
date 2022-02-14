let names = ['Petr','Pavel','Franta','Zuzka','Veronika'];
names.forEach((name) => {
  $('ul').append(" " + [name])
});
let additionalBlock = {
  title: "Added with javascript",
  text: "This block was added using JavaScript's jQuery library. How awesome!"
};
$('body').append($('additionalBlock'),['<h3>',additionalBlock.title,'</h3>','<p>',additionalBlock.text, '</p>']);

