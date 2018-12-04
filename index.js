$(document).ready(function () {
  console.log('ready')
});
// get aboutMeContent, then hide it
$('#aboutMeContent').hide()
$('#contactContent').hide()
$('#resumeContent').hide();

// get home id, when clicked
$("#home").click(function() {
  // get aboutMeContent and hide it
  $('#aboutMeContent').hide();
  // get homeContent and show it
  $('#homeContent').show();
  // get contactContent and hide it
  $('#contactContent').hide();
  $('#resumeContent').hide();
});

// get about id when clicked
$("#about").click(function() {
  $('#aboutMeContent').show();
  $('#homeContent').hide();
  $('#contactContent').hide();
  $('#resumeContent').hide();

});

$("#resume").click(function() {
  $('#aboutMeContent').hide();
  $('#homeContent').hide();
  $('#contactContent').hide();
  $('#resumeContent').show();
});


$("#contact").click(function() {
  $('#contactContent').show();
  $('#homeContent').hide();
  $('#aboutMeContent').hide();
  $('#resumeContent').hide();
});
