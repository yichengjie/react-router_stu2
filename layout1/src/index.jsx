
'use strict';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
//引入组件
import HelloComp from './components/HelloComp.jsx' ;
import Layout1 from './components/Layout1.jsx' ;
import Layout2 from './components/Layout2.jsx' ;
import Layout3 from './components/Layout3.jsx' ;
import './styles/index.scss' ;

let appNode = document.createElement('div') ;
appNode.id = 'app' ;
document.body.appendChild(appNode) ;

ReactDOM.render(
  <Layout3 />,
  appNode
);