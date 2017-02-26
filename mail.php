<?php

$recepient = "dmitriy.pashenko@yandex.ru";
$sitename = "UncleSam";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);

$message = "Имя: $name \nТелефон: $phone ";



$pagetitle = "Новая заявка с сайта UNcle_Sam \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");