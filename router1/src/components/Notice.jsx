import React,{Component} from 'react' ;

let success = "success" ;
let info = "info" ;
let warning = "warning" ;
let danger = "danger" ;

export const NoticeType = {
    success,
    info,
    warning,
    danger
} ;

function getNotieClassName (type){
    let tmpStr = "alert-info" ;
    let arr = [success,info,warning,danger] ;
    if(arr.includes(type)){
       tmpStr = 'alert-'+type ; 
    }
    return 'alert alert-dismissible ' + tmpStr ;
}


function Notice ({show,type,msg}){
    return show ? (
        <div className="notice-container">
            <div className={getNotieClassName(type)} role="alert">
                <button type="button" className="close" data-dismiss="alert" 
                    aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                 {msg ? msg : '提示信息'}
            </div>
        </div>
    ) : null;
}

export default Notice ;