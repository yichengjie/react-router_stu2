import React,{Component} from 'react' ;
import {Button,Icon} from 'antd';
import {Link} from 'react-router-dom' ;
import FlightInfoContainer from '../category4-edit/FlightInfoContainer.jsx' ;

let timeObj = {start:'11:20',end:'12:20'} ;

let list2 = [{
    flightPlanApplyType:'',
    flightNoType:'1',
    flightNoCodeStart:'000',
    flightNoCodeEnd:'999',
    flightApplyRangeType:'2',
    flightApplyWeek:['1','2','3'],
    timeRangeList:[timeObj,timeObj]
},
{
    flightPlanApplyType:'1',
    flightNoType:'2',
    flightNoCodeStart:'000',
    flightNoCodeEnd:'999',
    flightApplyRangeType:'3',
    flightApplyWeek:['1','2','3','4','5','6','7'],
    timeRangeList:[timeObj,timeObj,timeObj]
},
{
    flightPlanApplyType:'2',
    flightNoType:'',
    flightNoCodeStart:'000',
    flightNoCodeEnd:'999',
    flightApplyRangeType:'4',
    flightApplyWeek:['1','2','3'],
    timeRangeList:[timeObj]
},] ;

let list1 = [{
    flightPlanApplyType:'',
    flightNoType:'1',
    flightNoCodeStart:'000',
    flightNoCodeEnd:'999',
    flightApplyRangeType:'2',
    flightApplyWeek:['1','2','3'],
    timeRangeList:[timeObj,timeObj]
},
{
    flightPlanApplyType:'1',
    flightNoType:'2',
    flightNoCodeStart:'000',
    flightNoCodeEnd:'999',
    flightApplyRangeType:'3',
    flightApplyWeek:['1','2','3','4','5','6','7'],
    timeRangeList:[timeObj,timeObj,timeObj]
},
{
    flightPlanApplyType:'2',
    flightNoType:'',
    flightNoCodeStart:'000',
    flightNoCodeEnd:'999',
    flightApplyRangeType:'4',
    flightApplyWeek:['1','2','3'],
    timeRangeList:[timeObj]
},
{
    flightPlanApplyType:'1',
    flightNoType:'1',
    flightNoCodeStart:'000',
    flightNoCodeEnd:'999',
    flightApplyRangeType:'2',
    flightApplyWeek:['1','2','3'],
    timeRangeList:[timeObj]
},
{
    flightPlanApplyType:'1',
    flightNoType:'1',
    flightNoCodeStart:'000',
    flightNoCodeEnd:'999',
    flightApplyRangeType:'2',
    flightApplyWeek:['1','2','3'],
    timeRangeList:[timeObj]
},
{
    flightPlanApplyType:'1',
    flightNoType:'1',
    flightNoCodeStart:'000',
    flightNoCodeEnd:'999',
    flightApplyRangeType:'2',
    flightApplyWeek:['1','2','3'],
    timeRangeList:[timeObj]
},
{
    flightPlanApplyType:'1',
    flightNoType:'1',
    flightNoCodeStart:'000',
    flightNoCodeEnd:'999',
    flightApplyRangeType:'2',
    flightApplyWeek:['1','2','3'],
    timeRangeList:[timeObj]
},
{
    flightPlanApplyType:'1',
    flightNoType:'1',
    flightNoCodeStart:'000',
    flightNoCodeEnd:'999',
    flightApplyRangeType:'2',
    flightApplyWeek:['1','2','3'],
    timeRangeList:[timeObj]
},
{
    flightPlanApplyType:'1',
    flightNoType:'1',
    flightNoCodeStart:'000',
    flightNoCodeEnd:'999',
    flightApplyRangeType:'2',
    flightApplyWeek:['1','2','3'],
    timeRangeList:[timeObj]
},{
    flightPlanApplyType:'1',
    flightNoType:'1',
    flightNoCodeStart:'000',
    flightNoCodeEnd:'999',
    flightApplyRangeType:'2',
    flightApplyWeek:['1','2','3'],
    timeRangeList:[timeObj]
},
{
    flightPlanApplyType:'1',
    flightNoType:'1',
    flightNoCodeStart:'000',
    flightNoCodeEnd:'999',
    flightApplyRangeType:'2',
    flightApplyWeek:['1','2','3'],
    timeRangeList:[timeObj]
},
{
    flightPlanApplyType:'1',
    flightNoType:'1',
    flightNoCodeStart:'000',
    flightNoCodeEnd:'999',
    flightApplyRangeType:'2',
    flightApplyWeek:['1','2','3'],
    timeRangeList:[timeObj]
},
{
    flightPlanApplyType:'1',
    flightNoType:'1',
    flightNoCodeStart:'000',
    flightNoCodeEnd:'999',
    flightApplyRangeType:'2',
    flightApplyWeek:['1','2','3'],
    timeRangeList:[timeObj]
},
{
    flightPlanApplyType:'1',
    flightNoType:'1',
    flightNoCodeStart:'000',
    flightNoCodeEnd:'999',
    flightApplyRangeType:'2',
    flightApplyWeek:['1','2','3'],
    timeRangeList:[timeObj]
}];

class Category4Query extends Component{
    constructor(props){
        super(props) ;
        this.state = {
            list:{
                "id1":{
                    descrInfo:{
                        curentSize:'1',
                        countSize:'15',
                        deviceType:''
                    },
                    list1:list1,
                    list2:list2,
                },
                "id2":{
                    descrInfo:{
                    },
                    list1:list1,
                    list2:list2,
                },
                "id3":{
                    descrInfo:{
                    },
                    list1:list1,
                    list2:list2,
                },
                "id4":{
                    descrInfo:{
                    },
                    list1:list1,
                    list2:[],
                }
            }
                
        }
    }

    renderList(){
        let list = this.state.list ;
        let keys = Object.keys(list) ;
        return keys.map(function(key){
            let item = list[key] ;
            return this.renderListItem(item,key) ;
        }.bind(this)) ;
    }
    renderListItem(item,key){
        return (
            <div className="category-section-row mb20" key={key}>
                <ListItemTitle />
                <FlightInfoContainer 
                    flightList1 ={item.list1} 
                    flightList2 ={item.list2} 
                />
            </div> 
        ) ;
    }

    render(){
        return (
            <div className="category-container">
                <div className="category-section-row">
                    <Button type="primary">
                        <Link to="/rule-category-edit">新建</Link>
                    </Button>
                    <Button className="mlr15">编辑</Button>
                    <Button>删除</Button>
                </div>
                {this.renderList()}
            </div>
        ) ;
    }
}

function getFlightNoIcon(flightNoType){
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

function ListItemTitle (props){
    return (
        <div className="category-flight-info-descr">
            <span className="mlr20">1/15</span>
            <span className="mlr20"></span>
            <span className="mlr20">机型:</span>
            <span >{getFlightNoIcon('2')} 不适用</span>
            <span className="mlr20">747/777/M11/340 </span>
            <span className="mlr20"></span>
            <span className="ml20">代码共享航班:</span>
            <span className="ml15">
                {getFlightNoIcon('1')}
                仅适用
            </span>
            <span className="ml20">CA/CZ/MU/HU</span>
        </div>
    ) ;
}



export default Category4Query ;

