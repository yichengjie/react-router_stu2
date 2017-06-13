import React,{Component} from 'react' ;
import {Icon} from 'antd' ;
import classNames from 'classnames' ;
import Ellipsis from '../Ellipsis.jsx' ;

let tdWidthArr = [70,120,170,80,100,200,60] ;

function getItemWidth(index,showOperBtn,unit){
    let w = tdWidthArr[index] ;
    let t = showOperBtn ? w : (w + 10) ;
    t = unit ? (t + 'px') : t ;
    return {width:t} ;
}


function FlightInfoContainer (props){
    let {showOperBtn} = props ;
    let headerClassName = classNames('header',{
        'bg-ddd':showOperBtn 
    }) ;
    return(
            <div className="category-flight-info-container">
                <div className={headerClassName}>
                    <span className="header-item" style={{width:'90px'}}></span>
                    <span className="header-item" style={getItemWidth(0,showOperBtn,true)}>序号</span>
                    <span className="header-item" style={getItemWidth(1,showOperBtn,true)}>航班计划适用于</span>
                    <span className="header-item" style={getItemWidth(2,showOperBtn,true)}>航班号</span>
                    <span className="header-item" style={getItemWidth(3,showOperBtn,true)}>适用航段</span>
                    <span className="header-item" style={getItemWidth(4,showOperBtn,true)}>适用星期</span>
                    <span className="header-item" style={getItemWidth(5,showOperBtn,true)}>适用时刻</span>
                    {showOperBtn ? (<span className="header-item" 
                                    style={getItemWidth(6,showOperBtn,true)}>操作</span> )
                                    : null
                    }
                </div>
                <FlightInfo label="去程航班" 
                    splitLine 
                    name='flightList1'
                    list = {props.flightList1}
                    onDelete={props.onDelete}
                    onModify={props.onModify}
                    showOperBtn={showOperBtn}
                />
                <FlightInfo label="回程航班" 
                    name='flightList2'
                    list = {props.flightList2}
                    onDelete={props.onDelete}
                    onModify={props.onModify}
                     showOperBtn={showOperBtn}
                />
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
        if(flightNoType === '1'){
            return (<Icon type="check-square-o" className="mr5" 
                        style={{color:'green'}}/>) ;
        }else if(flightNoType === '2'){
            return (
                <Icon type="close-square-o" className="mr5" 
                    style={{color:'#FF6600'}}/>
            ) ;
        }else{
            return null ;
        }
    }

    handleDeleteOprFactory(index){
        let {name} = this.props ;
        return function(){
            this.props.onDelete(name,index) ;
        }.bind(this) ;
    }

    handleModifyOperFactory(index){
        let {name} = this.props ;
        return function(){
            this.props.onModify(name,index) ;
        }.bind(this) ;
    }
    //显示操作列的td
    renderOperTd(index){
        let {showOperBtn} = this.props ;
        if(!showOperBtn){
            return null;
        }
        return (
            <td {...getItemWidth(6,showOperBtn,false)}>
                <Icon type="delete" className="oper-icon mr10"  
                    onClick={this.handleDeleteOprFactory(index)} />
                <Icon type="edit" className="oper-icon"
                    onClick ={this.handleModifyOperFactory(index)}/>
            </td>
        ) ;
    }

    renderTr(item,index){
        let {showOperBtn} = this.props ;
        let itemShowObj = getShowInfoObj(item) ;
        return (
             <tr height="28px" key ={index}>
                <td {...getItemWidth(0,showOperBtn,false)}>{index + 1}</td>
                <td {...getItemWidth(1,showOperBtn,false)}>{itemShowObj.flightPlanApplyType}</td>
                <td {...getItemWidth(2,showOperBtn,false)}>
                    {this.renderFlightNoIcon(item)}
                    {itemShowObj.flightNoType + ' ' + 
                     itemShowObj.flightNoCodeStart + '-' +  
                     itemShowObj.flightNoCodeEnd
                    } 
                </td>
                <td {...getItemWidth(3,showOperBtn,false)}>{itemShowObj.flightApplyRangeType}</td>
                <td {...getItemWidth(4,showOperBtn,false)}>{itemShowObj.flightApplyWeek}</td>
                <td {...getItemWidth(5,showOperBtn,false)}> 
                    <Ellipsis>{itemShowObj.timeRangeList}</Ellipsis>
                </td>
                {this.renderOperTd(index)}
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
        return <tbody>{arr}</tbody> ;
    }

    render(){
        let {splitLine,list=[]} = this.props ;
        let splitLineClassName = classNames('content-split-line',{
            'mt30':list.length == 0
        }) ;
        return (
            <div className="content">
                <div className="content-left">
                    <span className="content-left-title">{this.props.label}</span>
                </div>
                <div className="content-right">
                    <table>
                        {this.renderTbody()}
                    </table>
                    {/*这里是分割线*/splitLine ? <div className={splitLineClassName}></div> : null}
                </div>
            </div>
        ) ;
    }
}

export default FlightInfoContainer ;
