import React,{Component} from 'react' ;
import {Button,Icon,notification} from 'antd';
import {Link} from 'react-router-dom' ;
import FlightInfoContainer from './FlightInfoContainer.jsx' ;
import {queryAllCategory4} from './api/CommonApi.js' ;


class Category4Query extends Component{
    constructor(props){
        super(props) ;
        this.state = {
            list:{}               
        }
    }
    async componentDidMount(){
      let retData = await queryAllCategory4() ;
      let {category4Data} = retData ;
      this.setState({
          list:category4Data
      }) ;
    }

    renderList(){
        let list = this.state.list ;
        let keys = Object.keys(list) ;
        return keys.map(function(key){
            let item = list[key] ;
            return this.renderListItem(item,key) ;
        }.bind(this)) ;
    }
    handleDeleteItem = (id) => {
        console.info(`删除的id 为 :${id}` ) ;
        let list = {...this.state.list} ;
        delete list[id] ;
        this.setState({list}) ;
        notification.success({message:'删除成功!'}) ;
    }
    renderListItem(item,key){
        return (
            <div className="category-section-row mb20" key={key}>
                <ListItemTitle id = {key} 
                    onDelete={this.handleDeleteItem} />
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
                </div>
                {this.renderList()}
            </div>
        ) ;
    }
}

function getFlightNoIcon(flightNoType){
    if(flightNoType === '1'){
        return (<Icon type="check-square-o" 
                    className="mr5 color-green" />) ;
    }else if(flightNoType === '2'){
        return (
            <Icon type="close-square-o" 
                className="mr5 color-orange" />
        ) ;
    }else{
        return null ;
    }
}

function ListItemTitle (props){
    let {id} = props ;
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
            <span className="oper-section">
                <Link to={"/rule-category-edit/"+id}><Icon type="edit hand" /></Link>
                <Icon type="delete" 
                    onClick={(e) => props.onDelete(id)}
                    className="ml10 color-orange hand"/>
            </span>
        </div>
    ) ;
}



export default Category4Query ;

