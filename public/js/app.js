var socket = io();
var name = getQueryVariable("name") || 'Anonymous';
var room = getQueryVariable("room");

console.log(name + "wants to join " + room);

jQuery('.room-title').append(room)


socket.on('connect', function() {
    console.log('Connect to socket.io server');
    socket.emit('joinRoom', {
        name: name,
        room: room
    })
});

socket.on('message', function(message){
    var momentTimestamp = moment.utc(message.timestamp)
    var $message = jQuery('.messages');


    console.log('New Message');
    console.log(message.text);

    $message.append('<p><strong>' + message.name + ' ' + momentTimestamp.format("h:mm a")  + '</strong></p>');
    $message.append('<p>'+ message.text +'</p>');
});

// Handles submitting of new message
var $form = jQuery('#message-form');

$form.on('submit', function(){
    event.preventDefault();

    var $message = $form.find("input[name=message]");

    socket.emit("message", {
        name: name,
        text: $message.val(),
        timestamp: moment.valueOf()
    });

    $message.val('');
});