$('.delete-icon').on('click', function() {
  
  var item = $(this).parent().parent();
  
  var message = confirm('Are you sure you want to delete this color block?');
  if (message == true) {
    item.addClass('removed');

    setTimeout(function() { item.remove(); }, 450);  
    
  } else {
      x = "You pressed Cancel!";
  }
  
});