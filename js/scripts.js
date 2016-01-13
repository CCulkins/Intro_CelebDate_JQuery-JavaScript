$(document).ready(function() {
  $("form#celeb").submit(function(event) {
    var ageInput = $("input#age").val();
    var genderInput = $("select#gender").val();

    if (ageInput <=30 && genderInput=== 'male') {
       var celebmatch = "Liam Hemsworth";
    }
    if (ageInput >30 && genderInput=== 'male') {
       var celebmatch = "Tatem Channing";
    }
    if (ageInput >=40 && genderInput=== 'male') {
       var celebmatch = "Bruce Willis";
    }
    if (ageInput <=30 && genderInput=== 'female') {
       var celebmatch = "Jennifer Lawrence";
    }
    if (ageInput >30 && genderInput=== 'female') {
       var celebmatch = "Reese Witherspoon";
    }
    if (ageInput >=40 && genderInput=== 'female') {
       var celebmatch = "Michelle Pfeiffer";
    }

    $("span#match").text(celebmatch);
    $("#celebmatch").show();

    event.preventDefault();
  });
});
