let dbKey = "SIHTestToolConfigFormData" ;
function getFormData(){
     var storage = window.localStorage;  
     var formDataStr = storage? storage.getItem(dbKey): Cookie.read(dbKey);
     if(formDataStr == null){
        return null ;
     }
     return JSON.parse(formDataStr) ;
}

function saveFormData(formData){
     var storage = window.localStorage;  
     let formDataStr = JSON.stringify(formData) ;
     if(storage != null){
        storage.setItem(dbKey,formDataStr)
     }else{
        Cookie.write(dbKey,formDataStr);
     }
     return true ;
}

export default {
   getFormData,
   saveFormData
} ;