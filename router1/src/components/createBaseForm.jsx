import React,{Component} from 'react' ;

function createBaseForm(){
    class BaseForm extends Component{
        render(){
            return (
                 <form className="form-horizontal">
                    
                 </form>
            ) ;
        }
    }
    return BaseForm ;
}