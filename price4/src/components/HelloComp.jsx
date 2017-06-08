import  React,{Component} from 'react'
import Sidebar from './Sidebar.jsx' ;
import Category4 from './category4/Category4.jsx' ;

class HelloComp extends Component {
    render(){
        return (
            <Sidebar>
                <Category4 />   
            </Sidebar>
        )
    }
}
export default HelloComp