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

$participant1 = $twilio->conferences("moh")
    ->participants
    ->create("+13168424995", "+16418191188");

print($participant1->callSid);

$participant2 = $twilio->conferences("moh")
    ->participants
    ->create("+13168424995", "+16418198225");

print($participant2->callSid);

$participant3 = $twilio->conferences("moh")
    ->participants
    ->create("+13168424995", "+12107587356");

$participant3 = $twilio->conferences("moh")
    ->participants
    ->create("+13168424995", "+16418191298");
$participant3 = $twilio->conferences("moh")
    ->participants
    ->create("+13168424995", "+16412330134");

print($participant3->callSid);
