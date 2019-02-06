/*
 * Implement all your JavaScript in this file!
 */
// function expression for displaying input (when number buttons are clicked)
var input = function() {
    // save button's value
    var value = $(this).val();
    // set the value if input field is empty or operation button was clicked
    if ($('#display').val() === '' || operationFlag === true) {
        operationFlag = false;
        $('#display').attr('value', value);      
    }
    // prevent entering 0 zeroes in the beginning of the number
    else if ($('#display').val() === '0') {}
    // otherwise append clicked values
    else {
        value = $('#display').val() + value;
        $('#display').attr('value', value);
    }
}

// set event listener for button clicks
$('#button0, #button1, #button2, #button3, #button4, #button5, #button6, #button7, #button8, #button9').click(input);

// flag for click on operation buttons
var operationFlag = false;
// var to save value of operation button clicked
var operationToPerform;
// value in the input field before operation button was clicked
var value1;
// value in the input field after operation button was clicked
var value2;

// function expression to save the value of clicked operation button
var operation = function() {
    operationFlag = true;
    value1 = $('#display').val();
    operationToPerform = $(this).html();
}

// event listener for click on operation buttons
$('#multiplyButton, #divideButton, #addButton, #subtractButton').click(operation);

// perform operations when the equals button is clicked
$('#equalsButton').click(function() {
    value2 = $('#display').val();
    switch (operationToPerform) {
        case '*':
            $('#display').attr('value', Number(value1) * Number(value2));
            break;
        case '-':
            $('#display').attr('value', Number(value1) - Number(value2));
            break;
        case '+':
            $('#display').attr('value', Number(value1) + Number(value2));
            break;
        default:
            $('#display').attr('value', Number(value1) / Number(value2));
    }
});

// clear input field event listener
$('#clearButton').click(function() {
    $('#display').attr('value', '');
})

