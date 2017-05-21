import  React,{Component} from 'react' ;
class Base64Tool extends Component {
    constructor(props){
        super(props) ;
        this.state = {
            json:{
                "name": "monkey",  
                "age": "24",  
                "height": "164.0cm" ,
                "name1": "monkey",  
                "age1": "24",  
                "height1": "164.0cm" ,
                "name2": "monkey",  
                "age2": "24",  
                "height2": "164.0cm" ,
                "name3": "monkey",  
                "age3": "24",  
                "height3": "164.0cm" 
            }  
        }   
    }
    formatToJsonStr(jsObj){
        return JSON.stringify(jsObj,null,2) ;
    }
    render(){
        return (
            <div>
                <h1>Base64 工具</h1>
                <div className="breaty-json base64-out">
                    {this.formatToJsonStr(this.state.json)}
                </div>
            </div>
        )
    }
}
export default Base64Tool