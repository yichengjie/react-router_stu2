import React,{Component} from 'react' ;
import {Icon} from 'antd' ;
import Ellipsis from '../Ellipsis.jsx' ;


function FlightInfoContainer (props){
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
                <FlightInfo label="去程航班" splitLine list = {props.flightList1}/>
                <FlightInfo label="回程航班" list = {props.flightList2}/>
            </div>
        ) ;
}


let FlightInfoMap = {
   flightPlanApplyType:{
     '':'正班/加班',
     '1':'正班',
     '2':'加班'
   },
   flightNoType :{
       '':'不限',
       '1':'仅适用',
       '2':'不适用'
   },
   flightApplyRangeType :{
       '':'不限',
       '1':'第一段',
       '2':'第二段',
       '3':'第三段',
       '4':'第四段',
       '5':'第五段',
       '6':'第六段',
       '7':'第七段',
       '8':'末段'
   },
   getTypeShowStr(item,name){
       if(item == null){
          return '' ;
       }
       let realValue = item[name] ;
       if(realValue == null){
           return '' ;
       }
       let showStr = FlightInfoMap[name][realValue] ;
       return showStr ;
    }
} ;

function joinArr2Str(arr,splitStr){
    if(arr == null || arr.length == 0){
        return '' ;
    }
    return arr.join(splitStr ? splitStr : ',') ;
}

function getTimeRangeListStr(timeRangeList){
    if(timeRangeList == null || timeRangeList.length == 0){
        return '' ;
    }
    let newArr = timeRangeList.map(function(item){
        let {start,end} = item ;
        return start + '-' + end ;
    }) 
    return joinArr2Str(newArr) ;
}




function getShowInfoObj(item){
    let obj = {
        flightPlanApplyType:'',//航班计划适用于 [空:正班/加班,1:正班,2:加班]
        flightNoType:'',//[空:不限,1:仅适用,2:不适用]
        flightNoCodeStart:'',//000
        flightNoCodeEnd:'',//999
        flightApplyRangeType:'',//第一段，二段，三段,
        flightApplyWeek:'',//星期
        timeRangeList:'',//适用时刻
    } ;
    if(item == null){
        return obj ;
    }
    obj.flightPlanApplyType = FlightInfoMap.getTypeShowStr(item,'flightPlanApplyType') ;
    obj.flightNoType =  FlightInfoMap.getTypeShowStr(item,'flightNoType') ;
    obj.flightNoCodeStart = item.flightNoCodeStart ;
    obj.flightNoCodeEnd = item.flightNoCodeEnd ;
    obj.flightApplyRangeType =  FlightInfoMap.getTypeShowStr(item,'flightApplyRangeType') ;
    obj.flightApplyWeek = joinArr2Str(item.flightApplyWeek,',') ;
    obj.timeRangeList = getTimeRangeListStr(item.timeRangeList) ;
    return obj ;
}

class FlightInfo extends Component{
    renderFlightNoIcon(item){
        let {flightNoType} = item ;
        if(flightNoType === '2'){
            return (
                <Icon type="minus-square-o" className="mr5" 
                    style={{color:'#FF6600'}}/>
            ) ;
        }
        return (<Icon type="check-square-o" className="mr5" 
                        style={{color:'green'}}/>) ;
    }
    renderTr(item,index){
        let itemShowObj = getShowInfoObj(item) ;
        return (
             <tr height="28px">
                <td width="50">{index + 1}</td>
                <td width="120">{itemShowObj.flightPlanApplyType}</td>
                <td width="170">
                    {this.renderFlightNoIcon(item)}
                    {itemShowObj.flightNoType + ' ' + 
                     itemShowObj.flightNoCodeStart + '-' +  
                     itemShowObj.flightNoCodeEnd
                    } 
                </td>
                <td width="80">{itemShowObj.flightApplyRangeType}</td>
                <td width="100">{itemShowObj.flightApplyWeek}</td>
                <td width="200"> 
                    <Ellipsis>{itemShowObj.timeRangeList}</Ellipsis>
                </td>
                <td width="80"><Icon type="delete" className="oper-icon" /></td>
            </tr>
        ) ;
    }
    renderTbody(){
        let arr = [] ;
        let list = this.props.list ;
        if(list !=null && list.length > 0){
            arr = list.map(function(item,index){
                return this.renderTr(item,index) ;
            }.bind(this)) ;
        }
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
                    {/*这里是分割线*/splitLine ? <div className="content-split-line"></div> : null}
                </div>
            </div>
        ) ;
    }
}

export default FlightInfoContainer ;
