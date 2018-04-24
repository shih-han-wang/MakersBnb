$(document).ready(function(){



  $("#add-houses").submit(function(event){
      event.preventDefault();

      var name = $("#house-name").val();
      var date1 = $("#dates").val();
      var price = $("#price").val();

      



      $("#houses").append("<li>" + name + "  " + dates + "  " + price + "  " + "</li>");
    });


});
