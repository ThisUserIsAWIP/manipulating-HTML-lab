$(function () {
    $('body').append('<button type= "button" id="alertBtn"></button>')
    $('#alertBtn').click(function () {
        alert("I hope you have a great day")
    })
    $('#btnSubmit').click(function () {
        var txt = $("#input").val();
        alert(txt);
    })
    $('#colorDiv').css({
        'background-color': 'red',
        'width': '100px',
        'height': '100px'
    })
    $('#colorDiv').mouseover(function () {
        $('#colorDiv').css('background-color', 'blue')
    })
    $('#colorDiv').mouseout(function () {
        $('#colorDiv').css('background-color', 'red')
    })
    $('body').append('<p id="colorP">some text in a paragraph</p>')
    let colors = ['red', 'blue', 'pink', 'orange', 'green', 'yellow', 'purple', 'grey']
    $('#colorP').click(function () {
        let randomnumber = Math.floor(Math.random() * colors.length)
                $('#colorP').css("color", colors[randomnumber]);
    })
    $('body').append('<button type= "button" id="spanBtn"></button>')
    $('body').append('<div id="spanDiv"></div>')
    $('#spanDiv').css({
        'background-color': 'white',
        'width': '100px',
        'height': '100px'
    })
    $('#spanBtn').click(function () {
        $('#spanDiv').append('<span>Colter Crockett</span>')
    })
    let friends = ['john','jacob','sarah','steve', 'ryan', 'shelly', 'rob', 'bill', 'michael', 'alice']
    $('#ulBtn').click(function () {
        for (let friendName of friends) {
            $('ul').append('<li>' + friendName + '</li>')
        }
    })
})