import React,{Component} from 'react' ;
import { Input,Button } from 'antd';

class ShowInfoPage extends Component {
    constructor(props){
        super(props) ;
    }
    render(){
        let {inputValue,handleChangeInputValue} = this.props ;
        return (
            <div>
                <Input type="textarea"  rows={28} 
                    className="sih-test-tool-textarea"
                    placeholder="请输入SIH请求JSON" 
                    value = {inputValue}
                    onChange={handleChangeInputValue}/>
                <div className="sih-test-tool-split"></div>
                <Input type="textarea"  rows={28} className="sih-test-tool-textarea" 
                    disabled="disabled" placeholder="SIH处理返回结果"/>
                <Button type="primary" className="btn-block">GO</Button>
                <Input  type="textarea"  rows={3} />
            </div>
        ) ;
    }
}

export default ShowInfoPage ;