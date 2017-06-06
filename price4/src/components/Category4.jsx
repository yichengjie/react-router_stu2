import  React,{Component} from 'react' ;

function CategorySection (props){
    return (
        <div className="category-section-title">
            <h5>{props.children}</h5>
        </div>
    ) ; 
}


class Category4 extends Component {
    render(){
        return (
            <div>
               <CategorySection>公共信息</CategorySection> 

            </div>
        )
    }
}
export default Category4 ;