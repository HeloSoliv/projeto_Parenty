<?php
/**
 * Parenty – Ponto de entrada da aplicação
 * 
 * Este arquivo serve como front controller da aplicação.
 * Para a versão React, utilize `npm start` ou `npm run build`.
 * 
 * @version 1.0.0
 */

// Redireciona para o build React em produção
$buildIndex = __DIR__ . '/build/index.html';

if (file_exists($buildIndex)) {
    readfile($buildIndex);
} else {
    echo '<pre>Parenty v1.0.0' . PHP_EOL;
    echo 'Para rodar a aplicação execute: npm start' . PHP_EOL;
    echo 'Para gerar o build: npm run build</pre>';
}
