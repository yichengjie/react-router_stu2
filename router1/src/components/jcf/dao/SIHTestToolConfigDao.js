let dbKey = "SIHTestToolConfigFormData" ;
function getFormData(){
     var storage = window.localStorage;  
     var strStoreData = storage? storage.getItem(dbKey): Cookie.read(dbKey);

     console.info('strStoreData : ' , strStoreData) ;

     return strStoreData ? null : JSON.parse(strStoreData) ;
}

function saveFormData(formData){
     var storage = window.localStorage;  
     let formDataStr = JSON.stringify(formData) ;
     storage? storage.setItem(dbKey,formDataStr): Cookie.write(dbKey,formDataStr);
}

export default {
   getFormData,
   saveFormData
} ;