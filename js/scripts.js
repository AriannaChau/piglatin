var vowels = ["a", "e", "i", "o", "u"]


$(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var translation = $("#english").val();

    var res = translation.split("");
    console.log(res);

    $(".translation").text(translation);
    $("#output").show();
  });
});
