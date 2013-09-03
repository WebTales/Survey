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
            'controller' => 'Survey\\Blocks\\Controller\\Forms',
            'definitionFile' => realpath(__DIR__ . "/blocks/") . '/form.json'
        )
    ),
    'controllers' => array(
        'invokables' => array(
            'Survey\\Blocks\\Controller\\Forms' => 'Survey\\Blocks\\Controller\\FormsController',
            'Survey\\Backoffice\\Controller\\Forms' => 'Survey\\Backoffice\\Controller\\FormsController'
        )
    ),
    'router' => array(
        'routes' => array(
            // Backoffice route : prefix by backoffice
            'surveyBackOffice' => array(
                'type' => 'Literal',
                'options' => array(
                    'route' => '/backoffice/forms',
                    'defaults' => array(
                        '__NAMESPACE__' => 'Survey\\Backoffice\\Controller',
                        'controller' => 'forms',
                        'action' => 'index'
                    )
                ),
                'may_terminate' => true,
                'child_routes' => array(
                    'default' => array(
                        'type' => 'Segment',
                        'options' => array(
                            'route' => '/[:action]',
                            '__NAMESPACE__' => 'Survey\\Backoffice\\Controller',
                            'constraints' => array(
                                'controller' => 'forms',
                                'action' => '[a-zA-Z][a-zA-Z0-9_-]*'
                            ),
                            'defaults' => array()
                        )
                    )
                )
            )
        )
    )
);