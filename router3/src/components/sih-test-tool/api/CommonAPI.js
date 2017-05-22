import sihInputData from '../data/sih-input.json' ;
import sihFormData from '../data/sih-formdata.json' ;
import SIHTestToolDao from './SIHTestToolDao.js' ;

function getSIHInputDataTemplate(){
    let inputData = sihInputData ;
    //这里暂时不从本地数据库中读取
    // let dbInputDataTemplate = SIHTestToolDao.getMsgPageInputDataTemplate()
    // if(dbInputDataTemplate != null){
    //     inputData = dbInputDataTemplate ;
    // }
    let retData = {
        inputData,
        flag:true
    } ;
    return new Promise(function(resolve,reject){
        resolve(retData) ;
    }) ;
}

//获取formData原始数据
function getSIHFormDataOrigin(){
    return sihFormData ;
}

//获取SIHFormData数据
function getSIHFormData(){
    let dbFormData = SIHTestToolDao.getConfigPageFormData() ;
    let formData =  sihFormData ;
    if(dbFormData != null){
        formData = Object.assign({},sihFormData,dbFormData) ;
    }else{
        SIHApi.saveFormData2DB(formData) ;
    }
    return formData ;
}

function saveSIHInputDataTemplate(inputDataStr){
    let jsonObj = JSON.parse(inputDataStr) ;
    SIHTestToolDao.saveMsgPageInputDataTemplate(jsonObj) ;
}

function resetSIHInputDataTemplate(){
    SIHTestToolDao.saveMsgPageInputDataTemplate(sihInputData) ;
    return JSON.stringify(sihInputData,null,2)  ;
}

function saveFormData2DB(formData){
    SIHTestToolDao.saveConfigPageFormData(formData) ;
}

export default {
    getSIHInputDataTemplate,
    saveSIHInputDataTemplate,
    resetSIHInputDataTemplate,
    getSIHFormData,
    getSIHFormDataOrigin,
    saveFormData2DB
} ;