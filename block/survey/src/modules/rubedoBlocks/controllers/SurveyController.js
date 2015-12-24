angular.module("rubedoBlocks").lazy.controller('SurveyController',['$scope','$http',function($scope,$http){
    var me = this;
    var config = $scope.blockConfig;
    me.currentPage=false;
    me.isFinished=false;
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
        if(me.currentPageIndex<me.survey.formPages.length-1){
            me.currentPageIndex=me.currentPageIndex+1;
            me.currentPage=me.survey.formPages[me.currentPageIndex];
        } else {
            console.log($scope.fieldEntity);
            me.currentPage=false;
            me.isFinished=true;
        }
    };
    me.hasNext=function(){
        return(me.currentPageIndex<me.survey.formPages.length-1);
    }
}]);