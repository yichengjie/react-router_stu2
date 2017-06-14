function getAllCategoryStaticData(){
    let timeObj = {start:'11:20',end:'12:20'} ;
    let list2 = [{
        flightType:'2',//(6)航班类型，1:去程航班，2:回程航班
        flightPlanApplyType:'',
        flightNoType:'1',
        flightNoCodeStart:'000',
        flightNoCodeEnd:'999',
        flightApplyRangeType:'2',
        flightApplyWeek:['1','2','3'],
        timeRangeList:[timeObj,timeObj]
    },
    {
        flightType:'2',//(6)航班类型，1:去程航班，2:回程航班
        flightPlanApplyType:'1',
        flightNoType:'2',
        flightNoCodeStart:'000',
        flightNoCodeEnd:'999',
        flightApplyRangeType:'3',
        flightApplyWeek:['1','2','3','4','5','6','7'],
        timeRangeList:[timeObj,timeObj,timeObj]
    },
    {
        flightType:'2',//(6)航班类型，1:去程航班，2:回程航班
        flightPlanApplyType:'2',
        flightNoType:'',
        flightNoCodeStart:'000',
        flightNoCodeEnd:'999',
        flightApplyRangeType:'4',
        flightApplyWeek:['1','2','3'],
        timeRangeList:[timeObj]
    },] ;

    let list1 = [{
        flightType:'1',//(6)航班类型，1:去程航班，2:回程航班
        flightPlanApplyType:'',
        flightNoType:'1',
        flightNoCodeStart:'000',
        flightNoCodeEnd:'999',
        flightApplyRangeType:'2',
        flightApplyWeek:['1','2','3'],
        timeRangeList:[timeObj,timeObj]
    },
    {
        flightType:'1',//(6)航班类型，1:去程航班，2:回程航班
        flightPlanApplyType:'1',
        flightNoType:'2',
        flightNoCodeStart:'000',
        flightNoCodeEnd:'999',
        flightApplyRangeType:'3',
        flightApplyWeek:['1','2','3','4','5','6','7'],
        timeRangeList:[timeObj,timeObj,timeObj]
    },
    {
        flightType:'1',//(6)航班类型，1:去程航班，2:回程航班
        flightPlanApplyType:'2',
        flightNoType:'',
        flightNoCodeStart:'000',
        flightNoCodeEnd:'999',
        flightApplyRangeType:'4',
        flightApplyWeek:['1','2','3'],
        timeRangeList:[timeObj]
    },
    {
        flightType:'1',//(6)航班类型，1:去程航班，2:回程航班
        flightPlanApplyType:'1',
        flightNoType:'1',
        flightNoCodeStart:'000',
        flightNoCodeEnd:'999',
        flightApplyRangeType:'2',
        flightApplyWeek:['1','2','3'],
        timeRangeList:[timeObj]
    },
    {
        flightType:'1',//(6)航班类型，1:去程航班，2:回程航班
        flightPlanApplyType:'1',
        flightNoType:'1',
        flightNoCodeStart:'000',
        flightNoCodeEnd:'999',
        flightApplyRangeType:'2',
        flightApplyWeek:['1','2','3'],
        timeRangeList:[timeObj]
    },
    {
        flightType:'1',//(6)航班类型，1:去程航班，2:回程航班
        flightPlanApplyType:'1',
        flightNoType:'1',
        flightNoCodeStart:'000',
        flightNoCodeEnd:'999',
        flightApplyRangeType:'2',
        flightApplyWeek:['1','2','3'],
        timeRangeList:[timeObj]
    },
    {
        flightType:'1',//(6)航班类型，1:去程航班，2:回程航班
        flightPlanApplyType:'1',
        flightNoType:'1',
        flightNoCodeStart:'000',
        flightNoCodeEnd:'999',
        flightApplyRangeType:'2',
        flightApplyWeek:['1','2','3'],
        timeRangeList:[timeObj]
    },
    {
        flightType:'1',//(6)航班类型，1:去程航班，2:回程航班
        flightPlanApplyType:'1',
        flightNoType:'1',
        flightNoCodeStart:'000',
        flightNoCodeEnd:'999',
        flightApplyRangeType:'2',
        flightApplyWeek:['1','2','3'],
        timeRangeList:[timeObj]
    },
    {
        flightType:'1',//(6)航班类型，1:去程航班，2:回程航班
        flightPlanApplyType:'1',
        flightNoType:'1',
        flightNoCodeStart:'000',
        flightNoCodeEnd:'999',
        flightApplyRangeType:'2',
        flightApplyWeek:['1','2','3'],
        timeRangeList:[timeObj]
    },{
        flightType:'1',//(6)航班类型，1:去程航班，2:回程航班
        flightPlanApplyType:'1',
        flightNoType:'1',
        flightNoCodeStart:'000',
        flightNoCodeEnd:'999',
        flightApplyRangeType:'2',
        flightApplyWeek:['1','2','3'],
        timeRangeList:[timeObj]
    },
    {
        flightType:'1',//(6)航班类型，1:去程航班，2:回程航班
        flightPlanApplyType:'1',
        flightNoType:'1',
        flightNoCodeStart:'000',
        flightNoCodeEnd:'999',
        flightApplyRangeType:'2',
        flightApplyWeek:['1','2','3'],
        timeRangeList:[timeObj]
    },
    {
        flightType:'1',//(6)航班类型，1:去程航班，2:回程航班
        flightPlanApplyType:'1',
        flightNoType:'1',
        flightNoCodeStart:'000',
        flightNoCodeEnd:'999',
        flightApplyRangeType:'2',
        flightApplyWeek:['1','2','3'],
        timeRangeList:[timeObj]
    },
    {
        flightType:'1',//(6)航班类型，1:去程航班，2:回程航班
        flightPlanApplyType:'1',
        flightNoType:'1',
        flightNoCodeStart:'000',
        flightNoCodeEnd:'999',
        flightApplyRangeType:'2',
        flightApplyWeek:['1','2','3'],
        timeRangeList:[timeObj]
    },
    {
        flightType:'2',//(6)航班类型，1:去程航班，2:回程航班
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
            basicInfo:{
                modelType:'2' , //(1)机型 [空:不限,1:适用,2:不适用]
                modelCode:'123',  //(2)机型代码       
                codeShareFlightType:'2',//(3)代码共享航班类型 [空:可适用,1:不适用,2:仅适用]
                codeShareFlightCode:'yicj',//(4)代码共享航班代码
            },
            list1:list1,
            list2:list2,
        },
        "id2":{
            basicInfo:{
                modelType:'2' , //(1)机型 [空:不限,1:适用,2:不适用]
                modelCode:'123',  //(2)机型代码       
                codeShareFlightType:'2',//(3)代码共享航班类型 [空:可适用,1:不适用,2:仅适用]
                codeShareFlightCode:'yicj',//(4)代码共享航班代码
            },
            list1:list1,
            list2:list2,
        },
        "id3":{
            basicInfo:{
                modelType:'2' , //(1)机型 [空:不限,1:适用,2:不适用]
                modelCode:'123',  //(2)机型代码       
                codeShareFlightType:'2',//(3)代码共享航班类型 [空:可适用,1:不适用,2:仅适用]
                codeShareFlightCode:'yicj',//(4)代码共享航班代码
            },
            list1:list1,
            list2:list2,
        },
        "id4":{
            basicInfo:{
                modelType:'2' , //(1)机型 [空:不限,1:适用,2:不适用]
                modelCode:'123',  //(2)机型代码       
                codeShareFlightType:'2',//(3)代码共享航班类型 [空:可适用,1:不适用,2:仅适用]
                codeShareFlightCode:'yicj',//(4)代码共享航班代码
            },
            list1:list1,
            list2:[],
        }
    }
    return categoryData ;
}

//查询category4数据
export function queryAllCategory4(){
    let category4Data = getAllCategoryStaticData() ;
    return new Promise(function(resolve,reject){
        let retObj = {
            flag:true,
            category4Data
        } ;
        setTimeout(resolve(retObj) ,50) ;
    }) ;
}

//通过id查询Category4数据
export function queryCategory4ById(id){
    let category4Data = getAllCategoryStaticData() ;
    let category4 = category4Data[id] ;
    return new Promise(function(resolve,reject){
        let retObj = {
            flag:true,
            category4,
        } ;
        setTimeout(resolve(retObj),50) ;
    }) ;
}


export default {
    queryAllCategory4,
    queryCategory4ById
} ;