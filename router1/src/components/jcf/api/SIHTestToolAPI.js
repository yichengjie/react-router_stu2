import sihOutputData from '../data/sih-output.json' ;

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

export default {
    querySIHData
} ;