import React,{Component} from 'react' ;
import {Icon} from 'antd' ;


class FlightInfoContainer extends Component{
    render(){
        return(
            <div className="category-flight-info-container">
                <div className="header">
                    <span className="header-item" style={{width:'90px'}}></span>
                    <span className="header-item" style={{width:'50px'}}>序号</span>
                    <span className="header-item" style={{width:'120px'}}>航班计划适用于</span>
                    <span className="header-item" style={{width:'170px'}}>航班号</span>
                    <span className="header-item" style={{width:'80px'}}>适用航段</span>
                    <span className="header-item" style={{width:'100px'}}>适用星期</span>
                    <span className="header-item" style={{width:'200px'}}>适用时刻</span>
                    <span className="header-item" style={{width:'80px'}}>操作</span>
                </div>
                <FlightInfo label="去程航班" splitLine/>
                <FlightInfo label="回程航班" />
            </div>
        ) ;
    }
}


class FlightInfo extends Component{
    renderTr(){
        return (
             <tr height="28px">
                <td width="50">1</td>
                <td width="120">正班/加班</td>
                <td width="170">
                    <Icon type="check-square-o" className="mr5" style={{color:'green'}}/>
                    适用于 900-999
                </td>
                <td width="80">第一段</td>
                <td width="100">1234567</td>
                <td width="200">00:00-02:00,04:00-06:00</td>
                <td width="80"><Icon type="delete" className="oper-icon" /></td>
            </tr>
        ) ;
    }

    renderTbody(){
        let arr = [] ;
        arr.push(this.renderTr()) ;
        arr.push(this.renderTr()) ;
        arr.push(this.renderTr()) ;
        arr.push(this.renderTr()) ;
        arr.push(this.renderTr()) ;
        arr.push(this.renderTr()) ;
        return arr ;
    }

    render(){
        let {splitLine} = this.props ;
        return (
            <div className="content">
                <div className="content-left">
                    <span className="content-left-title">{this.props.label}</span>
                </div>
                <div className="content-right">
                    <table>
                        {this.renderTbody()}
                    </table>
                    {splitLine ? <div className="content-split-line"></div> : null}
                </div>

            </div>
        ) ;
    }
}






export default FlightInfoContainer ;
