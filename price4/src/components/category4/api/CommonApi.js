export function queryAllCategory4(){
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
    let categoryData = {
        "id1":{
            descrInfo:{},
            list1:list1,
            list2:list2,
        },
        "id2":{
            descrInfo:{},
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
            descrInfo:{},
            list1:list1,
            list2:[],
        }
    }
    return new Promise(function(resolve,reject){
        let retObj = {
            flag:true,
            categoryData
        } ;
        setTimeout(resolve(retObj) ,50) ;
    }) ;
}

export default {
    queryAllCategory4
} ;