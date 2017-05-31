import React,{Component} from 'react' ;
var domAlign = require('dom-align');

class DomAlign1 extends Component{
    align = (sourceNode,targetNode)=>{
        const ret = domAlign(this.refs.source, this.refs.target, {
            points: ['bl', 'bl'],
            overflow: {
                adjustY: 1,
            },
        });
        console.log(ret);
    }
    render(){
        window.align = this.align;
        return (
           <div style={{ height: '200px',paddingTop:'100px' }}>
                <button ref="target">target</button>
                <div style={{ height: 100 }}/>
                <button onClick={this.align}>align</button>
                <div ref="source"
                    style={{ position: 'absolute', width: 100, 
                    height: 200, border: '1px solid red' }}>
                    oo
                </div>
           </div>);
    }
}

export default DomAlign1 ;