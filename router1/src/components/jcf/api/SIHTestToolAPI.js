import sihOutputData from '../data/sih-output.json' ;
import sihInputData from '../data/sih-input.json' ;
import SIHTestToolDao from '../dao/SIHTestToolDao.js' ;

function querySIHData(){
    let retData = {
        outputData:sihOutputData,
        flag:true
    } ;
    return new Promise(function(resolve,reject){
         setTimeout(function(){
            resolve(retData) ; 
         },2000) ;
    }) ;
}

function getSIHInputDataTemplate(){
    let inputData = sihInputData ;
    let dbInputDataTemplate = SIHTestToolDao.getMsgPageInputDataTemplate()
    if(dbInputDataTemplate != null){
        inputData = dbInputDataTemplate ;
    }
    let retData = {
        inputData,
        flag:true
    } ;
    return new Promise(function(resolve,reject){
        resolve(retData) ;
    }) ;
}

function saveSIHInputDataTemplate(inputDataStr){
    let jsonObj = JSON.parse(inputDataStr) ;
    SIHTestToolDao.saveMsgPageInputDataTemplate(jsonObj) ;
}

function resetSIHInputDataTemplate(){
    SIHTestToolDao.saveMsgPageInputDataTemplate(sihInputData) ;
    return JSON.stringify(sihInputData,null,2)  ;
}

export default {
    querySIHData,
    getSIHInputDataTemplate,
    saveSIHInputDataTemplate,
    resetSIHInputDataTemplate
} ;