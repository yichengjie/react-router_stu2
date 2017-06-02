import  React,{Component} from 'react'
import PriceDiv from './PriceDiv.jsx' ;
{Button}

class Category4 extends Component {
    constructor(props){
        super(props) ;
        this.state = {
            adviceType:'1'
        } ;
    }
    handleChange = (value)=>{
        this.setState({adviceType:value}) ;
    }
    render(){
        return (
            <div>
                <PriceDiv label ="公共信息">
                    hello world
                </PriceDiv>
                <PriceDiv label ="去程信息">
                    hello world
                </PriceDiv>
                <PriceDiv label ="回程信息">
                    hello world
                </PriceDiv>
            </div>
        )
    }
}
export default Category4 ;