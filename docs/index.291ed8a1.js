!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=13)}([function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},function(e,t){e.exports=React},function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.r(t),n.d(t,"default",function(){return r})},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return o});var r=n(6);function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){Object(r.default)(e,t,n[t])})}return e}},function(e,t){e.exports=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}},function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.r(t),n.d(t,"default",function(){return r})},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t),n.d(t,"default",function(){return r})},function(e,t){e.exports=antd},function(e,t,n){"use strict";var r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"C",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"p",{enumerable:!0,get:function(){return a.default}});var o=r(n(9)),a=r(n(12))},function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _objectSpread2=_interopRequireDefault(__webpack_require__(3)),_extends2=_interopRequireDefault(__webpack_require__(2)),_objectWithoutProperties2=_interopRequireDefault(__webpack_require__(5)),_react=_interopRequireDefault(__webpack_require__(1)),_propTypes=_interopRequireDefault(__webpack_require__(10)),_clone2=_interopRequireDefault(__webpack_require__(11)),_props=_interopRequireDefault(__webpack_require__(12));function C(params){const onEvent=params.onEvent,components=params.components,rest=(0,_objectWithoutProperties2.default)(params,["onEvent","components"]),_clone=(0,_clone2.default)(rest),node=_clone.node,props=_clone.props,children=_clone.children;let properties={},Node=node;if(!Node)return children||null;if(Node.charCodeAt(0)>96){if(Object.keys(props).forEach(e=>{"object"==typeof props[e]&&"style"!==e||(properties[e]=props[e])}),void 0===children)return _react.default.createElement(Node,properties);if("string"==typeof children||"boolean"==typeof children||"number"==typeof children)return _react.default.createElement(Node,properties,children);if(Array.isArray(children))return _react.default.createElement(Node,properties,children.map((e,t)=>_react.default.createElement(C,(0,_extends2.default)({key:t},e,{components:components,onEvent:onEvent}))));if("object"==typeof children)return _react.default.createElement(Node,properties,_react.default.createElement(C,(0,_extends2.default)({},children,{components:components,onEvent:onEvent})))}if(Node.charCodeAt(0)<90){const keys=Node.split(".").map(e=>`['${e}']`).join("");try{Node=eval(`components${keys}`)}catch(e){window.console.error(`Component '${node}' not exist`)}if(!Node)return window.console.error(`Component '${node}' not exist`),null;if(!1===Node.puffinParse)return _react.default.createElement(Node,(0,_clone2.default)(params));if(properties=(0,_props.default)((0,_objectSpread2.default)({},props,{onEvent:onEvent,components:components})),void 0===children)return _react.default.createElement(Node,properties);if("string"==typeof children||"boolean"==typeof children||"number"==typeof children)return _react.default.createElement(Node,properties,children);if(Array.isArray(children))return _react.default.createElement(Node,properties,children.map((e,t)=>_react.default.createElement(C,(0,_extends2.default)({key:t},e,{components:components,onEvent:onEvent}))));if("object"==typeof children)return _react.default.createElement(Node,properties,_react.default.createElement(C,(0,_extends2.default)({},children,{components:components,onEvent:onEvent})))}return children||null}C.propTypes={node:_propTypes.default.string,props:_propTypes.default.object,components:_propTypes.default.object,onEvent:_propTypes.default.func,children:_propTypes.default.any},C.defaultProps={node:"",props:{},components:{},onEvent:()=>null};var _default=C;exports.default=_default},function(e,t,n){e.exports=n(16)()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=(e=>JSON.parse(JSON.stringify(e)))},function(e,t,n){"use strict";var r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(3)),a=r(n(2)),l=r(n(5)),d=r(n(1)),u=r(n(11)),i=r(n(18)),c=r(n(9));var s=function e(t,n){const r=t.onEvent,s=t.components,p=(0,l.default)(t,["onEvent","components"]),f=(0,u.default)(p);return f.node&&f.arguments?(0,i.default)({C:c.default,node:f,components:s,onEvent:r}):f.node?d.default.createElement(c.default,(0,a.default)({key:n},f,{components:s,onEvent:r})):(Object.keys(f).forEach(t=>{const n=f[t];if(n)if(Array.isArray(n))f[t]=n.map((t,n)=>e((0,o.default)({},t,{components:s,onEvent:r}),n));else if(n.node&&n.arguments)f[t]=(0,i.default)({C:c.default,node:n,components:s,onEvent:r});else if(n.node)f[t]=d.default.createElement(c.default,(0,a.default)({},n,{components:s,onEvent:r}));else if("string"==typeof n&&n.match(/^:.{1,}/)){const e=`this.onEvent('${n.split(":")[1]}', arguments)`;f[t]=new Function(e).bind({onEvent:r})}}),f)};t.default=s},function(e,t,n){e.exports=n(14)},function(e,t,n){"use strict";var r=n(4),o=n(0),a=o(n(2)),l=o(n(3)),d=o(n(1)),u=n(15),i=r(n(7)),c=n(8),s=o(n(20)),p=o(n(25)),f=o(n(26));(0,u.render)(d.default.createElement(function(){return d.default.createElement(c.C,(0,a.default)({},s.default,{components:(0,l.default)({},i,{Tabs:p.default,Custom:f.default}),onEvent:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return window.console.log(t)}}))},null),document.getElementById("root"))},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";var r=n(17);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,l){if(l!==r){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";var r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){const t=e.node,n=e.C,r=e.components,l=e.onEvent,d=`\n    "use strict";\n\n    const { literal, React, node, C, onEvent, components } = this\n    const params = literal(node, { ${t.arguments.join()} })\n    return React.createElement(C, { ...params, components, onEvent })\n  `,u={literal:a.default,React:o.default,node:t,components:r,onEvent:l,C:n};return new Function(...t.arguments,d).bind(u)};var o=r(n(1)),a=r(n(19))},function(e,t,n){"use strict";function r(e,t){const n=[],r=[];return Object.keys(t).forEach(e=>{n.push(e),r.push(t[e])}),n.length&&e?new Function(...n,`return \`${e.replace(/"(\${JSON\.stringify.*?})"/g,"$1")}\``)(...r):e}Object.defineProperty(t,"__esModule",{value:!0}),t.tplls=r,t.default=function(e,t){return JSON.parse(r(JSON.stringify(e),t))}},function(e,t,n){"use strict";var r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(21)),a=r(n(22)),l=r(n(23)),d=r(n(24)),u={node:"Row",children:[{node:"Col",props:{span:14,style:{borderRight:"1px solid #eee",padding:15}},children:[o.default,l.default,d.default]},{node:"Col",props:{span:10,style:{padding:15}},children:[a.default,{node:"Custom",children:["a","b"]}]}]};t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={node:"p",props:{ignore:["this should be ignored"],also:{be:"ignore"},style:{color:"grey"}},children:[{node:"span",children:"span"},{node:"a",props:{href:"#",style:{marginLeft:10}},children:{node:"span",children:"a"}}]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={node:"Table",props:{pagination:!1,scroll:{x:800,y:200},columns:[{title:"Full Name",width:200,dataIndex:"name",fixed:"left",render:{arguments:["text","record","index"],node:"span",props:{style:{whiteSpace:"nowrap"}},children:{node:"p",children:[{node:"span",children:"${index % 2 ? 'SSSS' : 'TTTT'}"},{node:"em",children:", ${record.age}"}]}}},{title:"List",dataIndex:"list",render:{arguments:["list"],node:"div",children:"${JSON.stringify(list)}"}},{title:"Age",dataIndex:"age"},{title:"Gender",dataIndex:"gender",render:{arguments:["text"],node:"div",children:{node:"Tag",props:{onClick:":ttt${text}"},children:"xxx ${text}"}}},{title:"Address",dataIndex:"address"}],dataSource:[{key:"0",name:"Edrward 1",age:32,gender:"female",address:"London Park no. 1",list:{b:2},te:null},{key:"1",name:"Edrward 2",age:32,gender:"male",address:"London Park no. 2",list:[{a:1},{b:2}],te:null},{key:"2",name:"Edrward 3",age:32,gender:"female",address:"London Park no. 3",list:[{a:1},{b:2}],te:null},{key:"3",name:"Edrward 4",age:32,gender:"female",address:"London Park no. 4",list:[{a:1},{b:2}],te:null},{key:"4",name:"Edrward 5",age:32,gender:"male",address:"London Park no. 5",list:[{a:1},{b:2}],te:null}],bordered:!1}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={node:"Carousel",props:{autoplay:!1,afterChange:":afterChange"},children:[{node:"div",props:{style:{height:200,background:"#364d79",color:"#fff",fontSize:30,textAlign:"center",lineHeight:"200px"}},children:"0"},{node:"div",props:{style:{height:200,color:"#fff",fontSize:30,background:"#364d79",textAlign:"center",lineHeight:"200px"}},children:"1"}]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={node:"Tabs",props:{style:{marginTop:30}},children:[{node:"Tabs.TabPane",props:{tab:{node:"Button",children:"Tab 0"}},children:"Content of Tab Pane 0"},{node:"Tabs.TabPane",props:{tab:{children:"Tab 1"}},children:"Content of Tab Pane 1"}]}},function(e,t,n){"use strict";var r=n(4),o=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(2)),l=o(n(3)),d=o(n(5)),u=o(n(1)),i=o(n(10)),c=r(n(7)),s=n(8);const p=c.Tabs;function f(e){let t=e.props,n=e.children;const r=t.tabBarExtraContent,o=(0,d.default)(t,["tabBarExtraContent"]);return u.default.createElement(p,(0,a.default)({tabBarExtraContent:u.default.createElement(s.C,r)},o),n.map((e,t)=>{const n=e.props,r=void 0===n?{}:n,o=r.disabled,i=r.tab,f=(0,d.default)(r,["disabled","tab"]),_=(0,l.default)({},e,{node:"div",props:f});return u.default.createElement(p.TabPane,{key:t,disabled:o,tab:u.default.createElement(s.C,(0,a.default)({},i,{components:(0,l.default)({},c)}))},u.default.createElement(s.C,(0,a.default)({},_,{components:(0,l.default)({},c)})))}))}f.propTypes={props:i.default.object,children:i.default.array},f.defaultProps={props:{},children:[]},f.puffinParse=!1;var _=f;t.default=_},function(e,t,n){"use strict";var r=n(4),o=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(6)),l=r(n(1));class d extends l.Component{render(){const e=this.props.children;return l.default.createElement("div",null,e.map((e,t)=>l.default.createElement("p",{key:t},e)))}}t.default=d,(0,a.default)(d,"puffinParse",!1)}]);
//# sourceMappingURL=index.291ed8a1.js.map