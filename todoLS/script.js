
$(document).ready(function() {
  var todos = [];
  var todo = '';
  var res = JSON.parse(localStorage.getItem('todos'));
  todos.push(res);
  $("#btn").click(function(e) {
    e.preventDefault();
    todo = $('#todo').val();
    todos.push(todo);

    localStorage.setItem('todos', JSON.stringify(todos));
    $("#list").append("<li class='listItem'>" + todo + "</li>");
    $("input[type=text]").val('');
    res = JSON.parse(localStorage.getItem('todos'));
  }); // end btn
    
  localStorage.setItem('todos', JSON.stringify(todos)); 
  for(var i = 0; i < res.length; i++){
      $("#LScontain ul.listContainer").append("<li>"+res[i]+ "</li>");
      console.log('res[i]: ', res[i]);
  } 

  $("#list").on('click', '.listItem', function() {
    $(this).closest("li").addClass("strikethrough");
    // $(this).closest("li").remove();
  });
});