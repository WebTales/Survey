<?php
return array(
    'localisationfiles' => array(
        'module/Survey/data/locale/languagekey/survey.json'
    ),
    'blocksDefinition' => array(
        'form' => array(
            'maxlifeTime' => -1,
            'definitionFile' => realpath(__DIR__ . "/blocks/") . '/form.json'
        )
    ),
    'controllers' => array(
        'invokables' => array(
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
    ),
    'appExtension' => array(
        'survey' => array(
            'basePath' => realpath(__DIR__ . '/../app-extension') . '/survey',
            'definitionFile' => realpath(__DIR__ . '/../app-extension') . '/survey.json'
        )
    ),
    'service_manager' => array(
        'invokables' => array(
            'Forms' => 'Survey\\Service\\Forms',
            'FormsResponses' => 'Survey\\Service\\FormsResponses'
        )
    ),
    'namespaces_api' => array(
        'Survey',
    ),
);
