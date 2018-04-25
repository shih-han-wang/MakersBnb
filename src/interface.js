$(document).ready(function(){



  $("#add-houses").submit(function(event){
      event.preventDefault();

      var name = $("#house-name").val();
      var descrip = $("#descrip").val();
      var date = $("#dates").val();
      var price = $("#price").val();

      AddProperty(name, descrip, price, dates);


      $("#houses").append("<li>" + name + "  " + date + "  " + price + "  " + "</li>");
    });


});
