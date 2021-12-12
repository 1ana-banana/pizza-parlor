//===============
//Pizza Business Logic
//===============

function Pizza(size,crust,cheese,nonprotein,meats) {
  this.size = size;
  this.crust = crust;
  this.cheese = cheese;
  this.nonprotein = nonprotein;
  this.meats = meats
}

Pizza.prototype.calculatePrice = function() {
  this.price = 11;
  if(this.size === "small") {
    this.price += 0;
  } else if (this.size === "medium") {
    this.price += 2;
  } else if (this.size === "large") {
    this.price += 5;
  }

  if (this.crust === "thin") {
    this.price += 0;
  } else if (this.crust === "cheesy") {
    this.price += 2;
  } else if (this.crust === "goguma") {
    this.rpice += 3;
  }

  if (this.cheese === "yes") {
    this.price += 3;
  }

  for (var i = 0; i <this.nonprotein.length; i++) {
    this.price += 0.5;
  }

  for (var i = 0; i <this.meats.length; i++) {
    this.price += 2;
  }
}

Pizza.prototype.shortDescription = function() {
  return "A " + this.crust + " " + this.size + " pizza: $" + this.price;
}

//===============
//Pizza UI Logic
//===============

var displayPizzaDetails = function() {
  $("#pizzaDetails").show();
  $("#pizzaDetails h5").text(newPizza.shortDescription());
  $("#nonprotein").text(newPizza.nonprotein.join(", "));
  $("#meats").text(newPizza.meats.join(", "));
}

$(document).ready(function() {
  $("#orderForm").submit(function(event) {
    event.preventDefault();
    var size = $("input[name=size]:checked").val();
    var crust = $("input[name=crust]:checked").val();
    var cheese = $("input[name=cheese]:checked").val();
    var nonprotein = $("input:checkbox[name=nonprotein]:checked").map(function() {
      return this.value;
    }).get();
    var meats = $("input:checkbox[name=meats]:checked").map(function() {
      return this.value;
    }).get();
    var newPizza = new Pizza(size, crust, cheese, nonprotein, meats);
    newPizza.calculatePrice();
    $('#pizzaList').append('<li><span class="pizza">' + newPizza.shortDescription() + '</span></li>');
    document.getElementById("orderForm");
    $(".pizza").last().click(function() {
      $("#pizzaDetails").show();
      $("#pizzaDetails h5").show();
      $("#nonprotein").text(newPizza.nonprotein.join(", "));
      $("#meats").text(newPizza.meats.join(", "));
    });
  });
});
