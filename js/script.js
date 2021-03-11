$(document).ready(function () {
  $("#donate-form-1").submit(function (event) {
    event.preventDefault();
    $("#btn-submit").click(function(){
      var fname = $("#fname").val();
      var lname = $("#lname").val();
      var amount = $("input:radio[type = radio]:checked").val();
      var other = $("#other").val();
      var phone = $("#phone").val();

      $("#showFname").text(fname);
      $("#showLname").text(lname);
      $("#showAmount").text(amount);
      $("#showOther").text(other);
      $("#showPhone").text(phone);
      

      $("#btn-submit").click(function () {
        
        if (fname == "" || lname == "" || amount == "" || other == "" || phone) {
          alert("Provide Contact details")
        } else {
          alert("Thank you " + Name + "for letting us serve you, your pizza will be delivered to " + location + " in less than an hour." + "Your bill amounts to Kshs." + finalDeliveryTotal);
        }
    });
    
  })});
  