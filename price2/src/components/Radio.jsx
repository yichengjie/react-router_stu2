import React,{Component} from 'react' ;
//onChange={this.onChange} value={this.state.value}

export class RadioGroup extends Component{
    constructor(props){
        super(props) ;
        
    }
    static defaultProps = {
        onChange(value){console.info(`you shoule override method [onChange()] value:${value}`)}
    } ;
    render(){
        let retArr = [] ;
        let {children,name,value,onChange} = this.props ;
        React.Children.forEach(children,function(radio,index){
            let curValue = radio.props.value ;
            let checked = false;
            if(curValue === value){
                checked = true ;
            }
            let newProps = {name,key:index,checked,onChange} ;
            retArr[index] = React.cloneElement(radio,newProps) ;
        }.bind(this)) ;
        return (<span className="radio-group-container">{retArr}</span>) ;
    }
}

class Radio extends Component{
    constructor(props){
        super(props) ;
        let checked = this.props.checked ;
        this.state = {
            checked
        } ;
        this.handleChange = this.handleChange.bind(this) ;
    }

    handleChange(e){
        let value = e.target.value ;
        console.info('value : ' + value) ;
        this.props.onChange(value) ;
    }

    render(){
        let {children,name,value} = this.props ;
        let checked = this.state.checked ;
        return (
            <label className="radio-label">
                <input type ="radio" 
                    checked={checked}
                    name = {name} 
                    value ={value} 
                    onChange={this.handleChange}/>
                <span>{children}</span>
            </label>
        ) ;
    }
}

Radio.RadioGroup = RadioGroup ;
export default Radio ;