import React,{Component} from 'react' ;
import {Button} from 'antd';
import {Link} from 'react-router-dom' ;

class Category4Query extends Component{
    render(){
        return (
            <div className="category-container">
                <Button type="primary">
                     <Link to="/rule-category-edit">新建</Link>
                </Button>
                <Button className="mlr15">编辑</Button>
                <Button>删除</Button>   
                
            </div>
        ) ;
    }
}

export default Category4Query ;

