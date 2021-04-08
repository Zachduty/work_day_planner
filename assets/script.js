// worked with Jeremy Joanet and Matt Reisdorf

// Setting header's current day.
$('#currentDay').text(moment().format('dddd, MMMM do YYYY'));
// Save button to store text content to local storage.
$('#sub1').on('click', function(){
    var msg1 = $('#msg1').val();
    localStorage.setItem("9am", msg1);
});
$('#sub2').on('click', function(){
    var msg2 = $('#msg2').val();
    localStorage.setItem("10am", msg2);
});
$('#sub3').on('click', function(){
    var msg3 = $('#msg3').val();
    localStorage.setItem("11am", msg3);
});
$('#sub4').on('click', function(){
    var msg4 = $('#msg4').val();
    localStorage.setItem("12pm", msg4);
});
$('#sub5').on('click', function(){
    var msg5 = $('#msg5').val();
    localStorage.setItem("1pm", msg5);
});
$('#sub6').on('click', function(){
    var msg6 = $('#msg6').val();
    localStorage.setItem("2pm", msg6);
});
$('#sub7').on('click', function(){
    var msg7 = $('#msg7').val();
    localStorage.setItem("3pm", msg7);
});
$('#sub8').on('click', function(){
    var msg8 = $('#msg8').val();
    localStorage.setItem("4pm", msg8);
});
$('#sub9').on('click', function(){
    var msg9 = $('#msg9').val();
    localStorage.setItem("5pm", msg9);
});
// if statements to check local storage and repopulate text fields
if($('#msg1').val() === ""){
    var amOne = localStorage.getItem('9am');
    $('#msg1').val(amOne);
}
if($('#msg2').val() === ""){
    var amTwo = localStorage.getItem('10am');
    $('#msg2').val(amTwo);
}
if($('#msg3').val() === ""){
    var amThree = localStorage.getItem('11am');
    $('#msg3').val(amThree);
}
if($('#msg4').val() === ""){
    var pmFour = localStorage.getItem('12pm');
    $('#msg4').val(pmFour);
}
if($('#msg5').val() === ""){
    var pmFive = localStorage.getItem('1pm');
    $('#msg5').val(pmFive);
}
if($('#msg6').val() === ""){
    var pmSix = localStorage.getItem('2pm');
    $('#msg6').val(pmSix);
}
if($('#msg7').val() === ""){
    var pmSeven = localStorage.getItem('3pm');
    $('#msg7').val(pmSeven);
}
if($('#msg8').val() === ""){
    var pmEight = localStorage.getItem('4pm');
    $('#msg8').val(pmEight);
}
if($('#msg9').val() === ""){
    var pmNine = localStorage.getItem('5pm');
    $('#msg9').val(pmNine);
}
var currentHour = moment().format('H')
// 9 am
if(currentHour == 9){
    $('#msg1').css('background-color', '#ff6961')
} else if(currentHour < 9){
    $('#msg1').css('background-color', '#77dd77')
} else{
    $('#msg1').css('background-color', '#d3d3d3')
}
// 10am
if(currentHour == 10){
    $('#msg2').css('background-color', '#ff6961')
} else if(currentHour < 10){
    $('#msg2').css('background-color', '#77dd77')
} else{
    $('#msg2').css('background-color', '#d3d3d3')
}
// 11 am
if(currentHour == 11){
    $('#msg3').css('background-color', '#ff6961')
} else if(currentHour < 11){
    $('#msg3').css('background-color', '#77dd77')
} else{
    $('#msg3').css('background-color', '#d3d3d3')
}
// 12 pm
if(currentHour == 12){
    $('#msg4').css('background-color', '#ff6961')
} else if(currentHour < 12){
    $('#msg4').css('background-color', '#77dd77')
} else{
    $('#msg4').css('background-color', '#d3d3d3')
}
// 1 pm
if(currentHour == 13){
    $('#msg5').css('background-color', '#ff6961')
} else if(currentHour < 13){
    $('#msg5').css('background-color', '#77dd77')
} else{
    $('#msg5').css('background-color', '#d3d3d3')
}
// 2 pm
if(currentHour == 14){
    $('#msg6').css('background-color', '#ff6961')
} else if(currentHour < 14){
    $('#msg6').css('background-color', '#77dd77')
} else{
    $('#msg6').css('background-color', '#d3d3d3')
}
// 3 pm
if(currentHour == 15){
    $('#msg7').css('background-color', '#ff6961')
} else if(currentHour < 15){
    $('#msg7').css('background-color', '#77dd77')
} else{
    $('#msg7').css('background-color', '#d3d3d3')
}
// 4 pm
if(currentHour == 16){
    $('#msg8').css('background-color', '#ff6961')
} else if(currentHour < 16){
    $('#msg8').css('background-color', '#77dd77')
} else{
    $('#msg8').css('background-color', '#d3d3d3')
}
// 5 pm
if(currentHour == 17){
    $('#msg9').css('background-color', '#ff6961')
} else if(currentHour < 17){
    $('#msg9').css('background-color', '#77dd77')
} else{
    $('#msg9').css('background-color', '#d3d3d3')
}
var currentDay = moment().format('dddd');
if(currentDay != moment().format('dddd')){
    localStorage.clear();
};
localStorage.setItem("Day", currentDay);