import React from 'react'; 
import {Link} from 'react-router-dom' ;
import {assembleLocationByItem,getListGroupRouteData} from '../api/ListGroupApi.js' ;
function ListGroup(){
    // {pathname: '/main',hash:'1',state: { name:'OC附加服务' }},
    return(
        <ul className="list_group">
            {
                getListGroupRouteData().map(item=>{
                    return (<li className="list_item" key={item.key}>
                                <Link to={assembleLocationByItem(item)}>{item.title}</Link>
                            </li>
                    ) ;
                }) 
            }
        </ul>
    ) ;
}

export default ListGroup ;