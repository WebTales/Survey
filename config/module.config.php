<?php
return array(
    'session' => array(
        'name' => 'survey'
    ),
    'localisationfiles' => array(
        'module/Survey/data/locale/languagekey/survey.json'
    ),
    'blocksDefinition' => array(
        'form' => array(
            'controller' => 'Survey\\Controller\\Forms',
            'definitionFile' => realpath(__DIR__ . "/blocks/") . '/form.json'
        )
    ),
    'controllers' => array(
        'invokables' => array(
            'Survey\\Controller\\Forms' => 'Survey\\Controller\\FormsController'
        )
    )
);