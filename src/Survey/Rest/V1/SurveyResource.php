<?php
/**
 * Rubedo -- ECM solution
 * Copyright (c) 2014, WebTales (http://www.webtales.fr/).
 * All rights reserved.
 * licensing@webtales.fr
 *
 * Open Source License
 * ------------------------------------------------------------------------------------------
 * Rubedo is licensed under the terms of the Open Source GPL 3.0 license.
 *
 * @category   Rubedo
 * @package    Rubedo
 * @copyright  Copyright (c) 2012-2014 WebTales (http://www.webtales.fr)
 * @license    http://www.gnu.org/licenses/gpl.html Open Source GPL 3.0 license
 */

namespace Survey\Rest\V1;


use Rubedo\Services\Manager;
use RubedoAPI\Entities\API\Definition\VerbDefinitionEntity;
use RubedoAPI\Entities\API\Definition\FilterDefinitionEntity;
use RubedoAPI\Exceptions\APIEntityException;
use Rubedo\Collection\AbstractLocalizableCollection;
use RubedoAPI\Rest\V1\AbstractResource;
use Zend\Debug\Debug;


/**
 * Class RssResource
 * @package RubedoAPI\Rest\V1
 */
class SurveyResource extends AbstractResource
{

    /**
     * { @inheritdoc }
     */
    public function __construct()
    {
        parent::__construct();
        $this->define();
    }


    /**
     * Get a media type
     *
     * @param $id
     * @return array
     */
    public function getEntityAction($id,$params)
    {
        $survey=Manager::getService("Forms")->findById($id);
        if (empty($survey)) {
            throw new APIEntityException('Survey not found', 404);
        }
        $currentTime = $this->getCurrentTimeService()->getCurrentTime();
        if(isset($survey["openingDate"])&&$survey["openingDate"]&&$survey["openingDate"]!=""&&$currentTime< (int) $survey["openingDate"]){
            throw new APIEntityException('Survey not yet started', 400);
        }
        if(isset($survey["closingDate"])&&$survey["closingDate"]&&$survey["closingDate"]!=""&&$currentTime> (int) $survey["closingDate"]){
            throw new APIEntityException('Survey closed', 400);
        }
        return([
            "success"=>true,
            "survey"=>$survey
        ]);
    }


    /**
     * Define the resource
     */
    protected function define()
    {
        $this
            ->entityDefinition
            ->setName('Survey')
            ->setDescription('Handle surveys')
            ->editVerb('get', function (VerbDefinitionEntity &$definition) {
                $this->defineGetEntity($definition);
            });
    }

    /**
     * Define get entity action
     *
     * @param VerbDefinitionEntity $definition
     */
    private function defineGetEntity(VerbDefinitionEntity &$definition)
    {
        $definition
            ->setDescription('Get survey')->addOutputFilter(
                (new FilterDefinitionEntity())
                    ->setKey('survey')
                    ->setDescription('Survey')
            );
    }
}