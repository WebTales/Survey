angular.module("rubedoBlocks").lazy.controller('SurveyController',['$scope','$http',function($scope,$http){
    var me = this;
    var config = $scope.blockConfig;
    me.currentPage=false;
    $scope.fieldEntity={};
    if(config.formId&&config.formId!=""){
        $http.get("/api/v1/survey/"+config.formId).then(
            function(response){
                me.survey=response.data.survey;

            }
        );
    }
    me.startSurvey=function(){
        me.currentPage=me.survey.formPages[0];
        me.currentPageIndex=0;
    };
    me.setPage=function(page,index){
        if(page.id!=me.currentPage.id){
            me.currentPage=page;
            me.currentPageIndex=index;
        }
    };
    me.doNext=function(){
        console.log("test");
    };
}]);