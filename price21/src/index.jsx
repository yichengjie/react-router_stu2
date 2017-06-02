
'use strict';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
//引入组件
import Category4 from './components/Category4.jsx' ;
import HelloComp from './components/HelloComp.jsx' ;
import './styles/index.less' ;

let appNode = document.createElement('div') ;
appNode.id = 'app' ;
appNode.className= 'container' ;
document.body.appendChild(appNode) ;

ReactDOM.render(
  <HelloComp />,
  appNode
);