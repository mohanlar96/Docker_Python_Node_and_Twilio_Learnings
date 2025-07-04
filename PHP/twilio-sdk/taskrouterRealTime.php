<?php
// Update the path below to your autoload.php,
// see https://getcomposer.org/doc/01-basic-usage.md
require_once '/path/to/vendor/autoload.php';

use Twilio\Rest\Client;

// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
$sid = '';
$token = '';


$twilio = new Client($sid, $token);

$task_queue_real_time_statistics = $twilio->taskrouter->v1->workspaces("WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
->taskQueues("WQXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
->realTimeStatistics()
->fetch();

print($task_queue_real_time_statistics->activityStatistics);

