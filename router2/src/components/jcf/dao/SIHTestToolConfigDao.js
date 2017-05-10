let dbKey = "SIHTestToolConfigFormData" ;
function getFormData(){
     var storage = window.localStorage;  
     var strStoreDate = storage? storage.getItem(dbKey): Cookie.read(dbKey);
     return JSON.parse(strStoreDate) ;
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