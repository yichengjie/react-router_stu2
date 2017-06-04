import React,{Component} from 'react' ;

class Input extends Component{
    constructor(props){
        super(props) ;
        this.handleChange = this.handleChange.bind(this) ;
    }
    handleChange(e){
        let {value} = e.target ;
        this.props.onChange(value) ;
    }
    render(){
        let {value,style,name} = this.props;
        return (
            <input type ="text" 
                value={value} 
                style={style} 
                name={name}
                onChange={this.handleChange} />
        ) ;
    }
}

export default Input ;