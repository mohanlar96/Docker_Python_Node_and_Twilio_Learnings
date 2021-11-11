<?php
// Required if your environment does not handle autoloading
require __DIR__ . '/vendor/autoload.php';

// Use the REST API Client to make requests to the Twilio REST API
use Twilio\Rest\Client;

// Your Account SID and Auth Token from twilio.com/console
$sid = '';
$token = '';

var_dump($sid);
$client = new Client($sid, $token);
// Use the client to do fun stuff like send text messages!
$client->messages->create(
// the number you'd like to send the message to
    '+16418198225',
    [
        // A Twilio phone number you purchased at twilio.com/console
        'from' => '+13168424995',
        // the body of the text message you'd like to send
        'body' => 'Hey man! How are you! testing :P - Mohan Twilio.com '
    ]
);
