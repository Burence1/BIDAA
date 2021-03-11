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
        
        if (fname == "" || lname == "" || phone == "") {
          alert("please enter details");
        } else {
          alert(`Thank you ${fname} ${lname} for contributing ${amount || other} towards needy children`)
        }
        
      });
      
    })});
    
$(document).ready(function () {
  $("#btn-submit").click(function () {
    $("#showFname").fadeIn(800);
    $("#showLname").fadeIn(900);
    $("#showAmount").fadeIn(1000);
    $("#showOther").fadeIn(1100);
    $("#showPhone").fadeIn(1200);
  })});
  
  