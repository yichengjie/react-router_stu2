import React,{Component} from 'react' ;

class FlightInfoItem extends Component{
    render(){
        return(
            <div className="category-flight-info-container">
                <div className="header">
                    <span className="header-item"></span>
                    <span className="header-item" style={{width:'50px'}}>序号</span>
                    <span className="header-item" style={{width:'120px'}}>航班计划适用于</span>
                    <span className="header-item" style={{width:'170px'}}>航班号</span>
                    <span className="header-item" style={{width:'80px'}}>适用航段</span>
                    <span className="header-item">适用星期</span>
                    <span className="header-item" style={{width:'200px'}}>适用时刻</span>
                    <span className="header-item" style={{width:'80px'}}>操作</span>
                </div>
                <div className="body-left">
                    去程航班
                </div>
                <div className="body-right">
                    回程航班
                </div>
            </div>
        ) ;
    }
}

export default FlightInfoItem ;
