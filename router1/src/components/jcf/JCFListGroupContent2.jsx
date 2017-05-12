import React,{Component} from 'react' ;
import outputData from './data/sih-output.json' ;
import inputData from './data/input2.json' ;


class JCFListGroupContent2 extends Component{
     constructor (props){
        super(props) ;
        this.state = {
            inputValue:'',
            outputValue:''
        } 
    }
    componentDidMount(){
        let inputValue = JSON.stringify(inputData,null,2) ;
        this.setState({inputValue}) ;
    }

    handleQuery = e =>{
        this.setState({outputValue:outputData}) ;
    }

    handleInput = e => {
        let value = e.target.value ;
        this.setState({inputValue:value}) ;
    }

    render(){
        let {inputValue,outputValue} = this.state ;
        return (
           <div className="main-edit-container">
                <textarea className="inputTextarea" 
                    value={inputValue}
                    onChange={this.handleInput}></textarea>
                <br/>
                <br/>
                <button className="btn btn-primary btn-block" onClick={this.handleQuery}>GO</button>
                <br/>
                <br/>
                <pre className="output-region">
                    {outputValue ? JSON.stringify(outputValue,null,2) : ''}
                </pre>
            </div>
        ) ;
    }
}

export default JCFListGroupContent2 ;