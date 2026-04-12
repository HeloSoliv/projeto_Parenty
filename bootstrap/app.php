<?php
/**
 * Bootstrap da aplicação Parenty
 *
 * @version 1.0.0
 */

define('PARENTY_VERSION', '1.0.0');
define('PARENTY_ROOT', dirname(__DIR__));

// Autoload via Composer (quando disponível)
$autoload = PARENTY_ROOT . '/vendor/autoload.php';
if (file_exists($autoload)) {
    require_once $autoload;
}

// Carrega configurações
$config = require PARENTY_ROOT . '/config/app.php';

date_default_timezone_set($config['timezone']);
