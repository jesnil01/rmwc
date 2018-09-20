webpackJsonp([7],{198:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),a.d(t,"attributes",function(){return p});var o=a(0),c=a.n(o),s=a(54),i=a(214),m=a(232),u=(a.n(m),function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}()),p={},d=function(e){function t(e){n(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={},a}return l(t,e),u(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("h1",null,"Switches"),c.a.createElement("blockquote",null,c.a.createElement("p",null,"On/off switches toggle the state of a single settings option. The option that the switch controls, as well as the state it\u2019s in, should be made clear from the corresponding inline label. Switches take on the same visual properties of the radio button.")),c.a.createElement("ul",null,c.a.createElement("li",null,"Module ",c.a.createElement("strong",null,"@rmwc/switch")),c.a.createElement("li",null,"Import styles:",c.a.createElement("ul",null,c.a.createElement("li",null,"import ",c.a.createElement("strong",null,"'@material/switch/dist/mdc.switch.css'"),";"),c.a.createElement("li",null,"import ",c.a.createElement("strong",null,"'@material/form-field/dist/mdc.form-field.css'"),";"))),c.a.createElement("li",null,"MDC Docs: ",c.a.createElement("a",{href:"https://material.io/develop/web/components/input-controls/switches/"},"https://material.io/develop/web/components/input-controls/switches/"))),c.a.createElement("p",null,"Switches are identical in function to the ",c.a.createElement("a",{href:"checkboxes"},"Checkbox")," component, they just present a different UI / UX paradigm."),c.a.createElement("div",{className:"example render-with-code"},c.a.createElement("div",{className:"run"},c.a.createElement(s.a,{checked:!!this.state.cookiesChecked,onChange:function(t){return e.setState({cookiesChecked:t.target.checked})}},"Cookies"),c.a.createElement(s.a,{defaultChecked:!0},"Pizza"),c.a.createElement(s.a,{label:"Icecream"}),c.a.createElement(s.a,{disabled:!0,label:"Disabled"})),c.a.createElement("div",{className:"source"},c.a.createElement("pre",{className:"language-jsx"},c.a.createElement("code",{className:"language-jsx"},c.a.createElement("span",{className:"token keyword"},"import")," ",c.a.createElement("span",{className:"token punctuation"},"{")," Switch ",c.a.createElement("span",{className:"token punctuation"},"}")," ",c.a.createElement("span",{className:"token keyword"},"from")," ",c.a.createElement("span",{className:"token string"},"'@rmwc/switch'"),c.a.createElement("span",{className:"token punctuation"},";"),"\n","\n",c.a.createElement("span",{className:"token punctuation"},"{"),c.a.createElement("span",{className:"token comment"},"/* Controlled with change handler */"),c.a.createElement("span",{className:"token punctuation"},"}"),"\n",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"<"),"Switch"),"\n","  ",c.a.createElement("span",{className:"token attr-name"},"checked"),c.a.createElement("span",{className:"token script language-javascript"},c.a.createElement("span",{className:"token punctuation"},"="),c.a.createElement("span",{className:"token punctuation"},"{"),c.a.createElement("span",{className:"token operator"},"!"),c.a.createElement("span",{className:"token operator"},"!"),c.a.createElement("span",{className:"token keyword"},"this"),c.a.createElement("span",{className:"token punctuation"},"."),"state",c.a.createElement("span",{className:"token punctuation"},"."),"cookiesChecked",c.a.createElement("span",{className:"token punctuation"},"}")),"\n","  ",c.a.createElement("span",{className:"token attr-name"},"onChange"),c.a.createElement("span",{className:"token script language-javascript"},c.a.createElement("span",{className:"token punctuation"},"="),c.a.createElement("span",{className:"token punctuation"},"{"),"evt ",c.a.createElement("span",{className:"token operator"},"="),c.a.createElement("span",{className:"token operator"},">")," ",c.a.createElement("span",{className:"token keyword"},"this"),c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",{className:"token function"},"setState"),c.a.createElement("span",{className:"token punctuation"},"("),c.a.createElement("span",{className:"token punctuation"},"{"),"cookiesChecked",c.a.createElement("span",{className:"token punctuation"},":")," evt",c.a.createElement("span",{className:"token punctuation"},"."),"target",c.a.createElement("span",{className:"token punctuation"},"."),"checked",c.a.createElement("span",{className:"token punctuation"},"}"),c.a.createElement("span",{className:"token punctuation"},")"),c.a.createElement("span",{className:"token punctuation"},"}")),c.a.createElement("span",{className:"token punctuation"},">")),"\n","  Cookies","\n",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"</"),"Switch"),c.a.createElement("span",{className:"token punctuation"},">")),"\n","\n",c.a.createElement("span",{className:"token punctuation"},"{"),c.a.createElement("span",{className:"token comment"},"/* Uncontrolled Switch */"),c.a.createElement("span",{className:"token punctuation"},"}"),"\n",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"<"),"Switch")," ",c.a.createElement("span",{className:"token attr-name"},"defaultChecked"),c.a.createElement("span",{className:"token punctuation"},">")),"Pizza",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"</"),"Switch"),c.a.createElement("span",{className:"token punctuation"},">")),"\n","\n",c.a.createElement("span",{className:"token punctuation"},"{"),c.a.createElement("span",{className:"token comment"},"/* Using the label prop */"),c.a.createElement("span",{className:"token punctuation"},"}"),"\n",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"<"),"Switch")," ",c.a.createElement("span",{className:"token attr-name"},"label"),c.a.createElement("span",{className:"token attr-value"},c.a.createElement("span",{className:"token punctuation"},"="),c.a.createElement("span",{className:"token punctuation"},'"'),"Icecream",c.a.createElement("span",{className:"token punctuation"},'"'))," ",c.a.createElement("span",{className:"token punctuation"},"/>")),"\n","\n",c.a.createElement("span",{className:"token punctuation"},"{"),c.a.createElement("span",{className:"token comment"},"/* Disabled */"),c.a.createElement("span",{className:"token punctuation"},"}"),"\n",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"<"),"Switch")," ",c.a.createElement("span",{className:"token attr-name"},"disabled")," ",c.a.createElement("span",{className:"token attr-name"},"label"),c.a.createElement("span",{className:"token attr-value"},c.a.createElement("span",{className:"token punctuation"},"="),c.a.createElement("span",{className:"token punctuation"},'"'),"Disabled",c.a.createElement("span",{className:"token punctuation"},'"'))," ",c.a.createElement("span",{className:"token punctuation"},"/>")),"\n")))),c.a.createElement("div",{className:"example render-only"},c.a.createElement("div",{className:"run"},c.a.createElement(i.a,{docs:m,displayName:"Switch"}))))}}]),t}(c.a.Component);t.default=d},214:function(e,t,a){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}a.d(t,"a",function(){return m});var c=a(0),s=(a.n(c),function(){function e(e,t){var a=[],n=!0,r=!1,l=void 0;try{for(var o,c=e[Symbol.iterator]();!(n=(o=c.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{!n&&c.return&&c.return()}finally{if(r)throw l}}return a}return function(t,a){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()),i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),m=function(e){function t(e){r(this,t);var a=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.flatDocs=Object.values(e.docs).reduce(function(e,t){return e.concat(t)},[]),a}return o(t,e),i(t,[{key:"findDocDef",value:function(e){return this.flatDocs.find(function(t){return t.displayName===e})}},{key:"renderRaw",value:function(e){return e.split("\n").map(function(e,t){return c.createElement(c.Fragment,{key:t},0!==t&&c.createElement("br",null),e.split("  ").map(function(e,t){return c.createElement(c.Fragment,{key:t},0!==t&&c.createElement(c.Fragment,null,"\xa0\xa0"),e)}))})}},{key:"getComposedDefs",value:function(e){var t=this;return e.map(function(e){return t.findDocDef(e)}).filter(Boolean).reduce(function(e,t){return Object.assign({},t,e,{props:t.props||e.props?Object.assign({},t.props||{},e.props||{}):null})},{})}},{key:"render",value:function(){var e=this,t=this.props,a=t.displayName,r=t.composes,l=void 0===r?[]:r,o=this.getComposedDefs([a].concat(n(l)));return c.createElement("div",{className:"document-component"},c.createElement("h2",null,a),o&&!!o.description&&c.createElement("p",null,o.description),o&&o.props&&c.createElement("div",null,c.createElement("h3",null,"Props"),c.createElement("table",null,c.createElement("thead",null,c.createElement("tr",null,c.createElement("th",null,"Name"),c.createElement("th",null,"Type"),c.createElement("th",null,"Default"),c.createElement("th",null,"Description"))),c.createElement("tbody",null,Object.entries(o.props).map(function(t,a){var n=s(t,2),r=n[0],l=n[1];return c.createElement("tr",{key:a},c.createElement("td",{className:l.required?"required":""},c.createElement("code",null,r)),c.createElement("td",null,c.createElement("code",null,l.flowType&&e.renderRaw(l.flowType.raw||l.flowType.name||""))),c.createElement("td",null,l.defaultValue?c.createElement("code",null,l.defaultValue.value):c.createElement("code",null,"undefined")),c.createElement("td",null,l.description||""))})))))}}]),t}(c.Component)},232:function(e,t){e.exports=[{description:"",displayName:"SwitchRoot",methods:[]},{description:"",displayName:"SwitchNativeControl",methods:[],props:{type:{defaultValue:{value:"'checkbox'",computed:!1},required:!1}}},{description:"",displayName:"SwitchTrack",methods:[]},{description:"",displayName:"SwitchThumbUnderlay",methods:[]},{description:"",displayName:"SwitchThumb",methods:[]},{description:"",displayName:"SwitchKnob",methods:[]},{description:"",displayName:"SwitchLabel",methods:[]},{description:"",displayName:"Switch",methods:[{name:"syncWithProps",docblock:null,modifiers:[],params:[{name:"nextProps",type:{name:"intersection",raw:"{\n  /** A DOM ID for the toggle. */\n  id?: string,\n  /** Disables the control. */\n  disabled?: boolean,\n  /** Toggle the control on and off. */\n  checked?: boolean | string,\n  /** A label for the control. */\n  label?: string,\n  /** Props for the root element. By default, props spread to the input. */\n  rootProps?: any,\n  /** Any children to render. */\n  children?: React.Node\n} & SimpleTagPropsT &\n  //$FlowFixMe\n  React.InputHTMLAttributes<HTMLInputElement>",elements:[{name:"signature",type:"object",raw:"{\n  /** A DOM ID for the toggle. */\n  id?: string,\n  /** Disables the control. */\n  disabled?: boolean,\n  /** Toggle the control on and off. */\n  checked?: boolean | string,\n  /** A label for the control. */\n  label?: string,\n  /** Props for the root element. By default, props spread to the input. */\n  rootProps?: any,\n  /** Any children to render. */\n  children?: React.Node\n}",signature:{properties:[{key:"id",value:{name:"string",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"checked",value:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}],required:!1}},{key:"label",value:{name:"string",required:!1}},{key:"rootProps",value:{name:"any",required:!1}},{key:"children",value:{name:"ReactNode",raw:"React.Node",required:!1}}]}},{name:"SimpleTagPropsT"},{name:"ReactInputHTMLAttributes",raw:"React.InputHTMLAttributes<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]}],alias:"SwitchPropsT"}}],returns:null}],props:{id:{flowType:{name:"string"},required:!1,description:"A DOM ID for the toggle."},disabled:{flowType:{name:"boolean"},required:!1,description:"Disables the control."},checked:{flowType:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}]},required:!1,description:"Toggle the control on and off."},label:{flowType:{name:"string"},required:!1,description:"A label for the control."},rootProps:{flowType:{name:"any"},required:!1,description:"Props for the root element. By default, props spread to the input."},children:{flowType:{name:"ReactNode",raw:"React.Node"},required:!1,description:"Any children to render."}}}]}});
//# sourceMappingURL=7.bbb04a8e.chunk.js.map