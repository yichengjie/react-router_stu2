import React,{Component} from 'react' ;

function Panel ({title,children}){
    return (
         <div className="oc-panel">
            <div className="oc-panel-title">
                {title}
            </div>
            <div className="oc-panel-body">
                {children}
            </div>
        </div>
    ) ;
}
export default Panel ;