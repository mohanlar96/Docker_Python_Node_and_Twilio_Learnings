<?php

// Update the path below to your autoload.php,
// see https://getcomposer.org/doc/01-basic-usage.md
require __DIR__ . '/vendor/autoload.php';

use Twilio\Rest\Client;

// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
$sid = '';
$token = '';
$twilio = new Client($sid, $token);

$call = $twilio->calls
    ->create("+15203672331", // to
        "+13168424995", // from
        ["url" => "http://demo.twilio.com/docs/voice.xml"]
    );

print($call->sid);
