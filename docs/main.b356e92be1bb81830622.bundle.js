(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{159:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _type=__webpack_require__(585);Object.defineProperty(exports,"TYPE",{enumerable:!0,get:function(){return _type.TYPE}}),Object.defineProperty(exports,"DEFAULT_TYPE",{enumerable:!0,get:function(){return _type.DEFAULT_TYPE}})},240:function(module,exports,__webpack_require__){__webpack_require__(241),__webpack_require__(320),module.exports=__webpack_require__(321)},321:function(module,exports,__webpack_require__){"use strict";(function(module){var _react=__webpack_require__(179),_addonOptions=__webpack_require__(430),_package=__webpack_require__(437),rex=__webpack_require__(438).themes.normal;rex.mainBackground="#F7F7F7",rex.mainTextColor="#333333",rex.dimmedTextColor="#4D4D4D",rex.highlightColor="#BF0000",(0,_react.addDecorator)((0,_addonOptions.withOptions)({name:_package.name,url:_package.repository.url,theme:rex})),(0,_react.configure)(function(){__webpack_require__(546)},module)}).call(this,__webpack_require__(84)(module))},437:function(module){module.exports={name:"rex-grid",version:"1.1.1",description:"ReX React UI Component",main:"src/Grid.jsx",scripts:{test:"jest","test:upgrade":"npm test -- -u","test:coverage":"npm test -- --coverage","init:component":"node init.js && npm i && npm run test:upgrade && npm start",start:"npm run storybook",build:"npm run build:component && npm run build:storybook","build:patch":"npm --no-git-tag-version version patch && npm run build && npm run commit","build:minor":"npm --no-git-tag-version version minor && npm run build && npm run commit","build:major":"npm --no-git-tag-version version major && npm run build && npm run commit","build:component":"NODE_ENV=production ./node_modules/.bin/webpack --mode=production --config webpack.config.js","build:storybook":"NODE_ENV=production ./node_modules/.bin/build-storybook -c .storybook -o docs",commit:"npm run commit:docs && npm run commit:package","commit:docs":"git add docs README.md && git commit -m 'Added - Docs for github pages and README file'","commit:package":"git add package.json package-lock.json && git commit -m 'New version - v'$npm_package_version","commit:html":"git add docs/html && git commit -m 'Added - Static HTML for github pages'",storybook:"NODE_ENV=development ./node_modules/.bin/start-storybook -p 8080 --ci",serve:"NODE_ENV=production ./node_modules/.bin/http-server ./docs -p 8081",eslint:"eslint --fix './src/*.{js,jsx}'",prettier:"prettier --write './src/*.{js,jsx}'",static:"node static.js"},repository:{type:"git",url:"https://github.com/rakuten-rex/rex-grid.git"},author:"ReX React UI Components Library Authors (https://github.com/rakuten-rex/rex-grid/graphs/contributors)",license:"MIT",bugs:{url:"https://github.com/rakuten-rex/rex-grid/issues"},homepage:"https://rakuten-rex.github.io/rex-grid/",husky:{hooks:{"pre-commit":"lint-staged"}},"lint-staged":{"src/*.{js,jsx}":["eslint --fix","git add"]},devDependencies:{"@babel/core":"^7.3.4","@storybook/addon-a11y":"^4.1.13","@storybook/addon-actions":"^4.1.13","@storybook/addon-info":"^4.1.13","@storybook/addon-knobs":"^4.1.13","@storybook/addon-options":"^4.1.13","@storybook/addon-viewport":"^4.1.13","@storybook/addons":"^4.1.13","@storybook/components":"^4.1.13","@storybook/react":"4.1.13","babel-core":"^6.26.3","babel-eslint":"^10.0.1","babel-loader":"^7.1.5","babel-plugin-transform-object-rest-spread":"^6.26.0","babel-plugin-transform-runtime":"^6.23.0","babel-preset-env":"^1.7.0","babel-preset-react":"^6.24.1","clean-webpack-plugin":"^1.0.1","copy-webpack-plugin":"^5.0.0","css-loader":"^2.1.0",enzyme:"^3.9.0","enzyme-adapter-react-16":"^1.10.0",eslint:"^5.13.0","eslint-config-prettier":"^3.6.0","eslint-config-rex-react-component":"^1.2.0","eslint-loader":"^2.1.1","eslint-plugin-prettier":"^3.0.1","fs-extra":"^7.0.1","google-closure-compiler-js":"20180610.0.0","http-server":"^0.11.1",husky:"^1.3.1","identity-obj-proxy":"^3.0.0",jest:"^23.6.0","lint-staged":"^8.1.3","mini-css-extract-plugin":"^0.5.0","node-sass":"^4.11.0","optimize-css-assets-webpack-plugin":"^5.0.1",prettier:"^1.16.4",puppeteer:"^1.13.0","sass-loader":"^7.1.0","storybook-inspecthtml":"^0.0.4","style-loader":"^0.23.1",webpack:"^4.29.5","webpack-cli":"^3.2.3","webpack-merge":"^4.2.1"},dependencies:{"lodash.isobject":"^3.0.2","prop-types":"^15.7.2",react:"^16.8.3","react-dom":"^16.8.3","rex-core":"^1.4.0","rex-react-utils":"^1.0.1"}}},546:function(module,exports,__webpack_require__){"use strict";(function(module){var _react2=_interopRequireDefault(__webpack_require__(1)),_react3=__webpack_require__(179),_addonKnobs=__webpack_require__(547),_addonA11y=__webpack_require__(558),_storybookInspecthtml=__webpack_require__(567),_centerDecorator2=_interopRequireDefault(__webpack_require__(575));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}__webpack_require__(576),__webpack_require__(577);var Container=__webpack_require__(580).default,Row=__webpack_require__(586).default,Col=__webpack_require__(587).default,stories=(__webpack_require__(589).default,(0,_react3.storiesOf)("Grid",module));stories.addDecorator(_storybookInspecthtml.withInspectHtml),stories.addDecorator(_centerDecorator2.default),stories.addDecorator(_addonA11y.checkA11y),stories.addDecorator(_addonKnobs.withKnobs),stories.add("Equal-width",function(){return _react2.default.createElement(Container,null,_react2.default.createElement(Row,null,_react2.default.createElement(Col,null,"1 of 2"),_react2.default.createElement(Col,null,"2 of 2")),_react2.default.createElement(Row,null,_react2.default.createElement(Col,null,"1 of 3"),_react2.default.createElement(Col,null,"2 of 3"),_react2.default.createElement(Col,null,"3 of 3")))}),stories.add("Setting one column width",function(){return _react2.default.createElement(Container,null,_react2.default.createElement(Row,null,_react2.default.createElement(Col,null,"1 of 3"),_react2.default.createElement(Col,{xs:"6"},"2 of 3 (wider)"),_react2.default.createElement(Col,null,"3 of 3")),_react2.default.createElement(Row,null,_react2.default.createElement(Col,null,"1 of 3"),_react2.default.createElement(Col,{xs:"5"},"2 of 3 (wider)"),_react2.default.createElement(Col,null,"3 of 3")))}),stories.add("Variable with content",function(){return _react2.default.createElement(Container,null,_react2.default.createElement(Row,{className:"justify-content-md-center"},_react2.default.createElement(Col,{lg:"2"},"1 of 3"),_react2.default.createElement(Col,{md:{size:"auto"}},"Variable width content"),_react2.default.createElement(Col,{lg:"2"},"3 of 3")),_react2.default.createElement(Row,null,_react2.default.createElement(Col,null,"1 of 3"),_react2.default.createElement(Col,{md:{size:"auto"}},"Variable width content"),_react2.default.createElement(Col,{lg:"2"},"3 of 3")))}),stories.add("Equal-width multi-row",function(){return _react2.default.createElement(Container,null,_react2.default.createElement(Row,null,_react2.default.createElement(Col,null,"col"),_react2.default.createElement(Col,null,"col"),_react2.default.createElement("div",{className:"w-100"}),_react2.default.createElement(Col,null,"col"),_react2.default.createElement(Col,null,"col")))});var stories2=(0,_react3.storiesOf)("Responsive classes",module);stories2.addDecorator(_storybookInspecthtml.withInspectHtml),stories2.addDecorator(_centerDecorator2.default),stories2.addDecorator(_addonA11y.checkA11y),stories2.addDecorator(_addonKnobs.withKnobs),stories2.add("All breakpoints",function(){return _react2.default.createElement(Container,null,_react2.default.createElement(Row,null,_react2.default.createElement(Col,null,"col"),_react2.default.createElement(Col,null,"col"),_react2.default.createElement(Col,null,"col"),_react2.default.createElement(Col,null,"col")),_react2.default.createElement(Row,null,_react2.default.createElement(Col,{xs:"8"},"col-8"),_react2.default.createElement(Col,{xs:"4"},"col-4")))}),stories2.add("Stacked to horizontal",function(){return _react2.default.createElement(Container,null,_react2.default.createElement(Row,null,_react2.default.createElement(Col,{sm:"8"},"col-sm-8"),_react2.default.createElement(Col,{sm:"4"},"col-sm-4")),_react2.default.createElement(Row,null,_react2.default.createElement(Col,{sm:{size:""}},"col-sm"),_react2.default.createElement(Col,{sm:{size:""}},"col-sm"),_react2.default.createElement(Col,{sm:{size:""}},"col-sm")))}),stories2.add("Mix and match",function(){return _react2.default.createElement(Container,null,_react2.default.createElement(Row,null,_react2.default.createElement(Col,{xs:"12",md:"8"},".col-12 .col-md-8"),_react2.default.createElement(Col,{xs:"6",md:"4"},".col-6 .col-md-4")),_react2.default.createElement(Row,null,_react2.default.createElement(Col,{xs:"6",md:"4"},".col-6 .col-md-4"),_react2.default.createElement(Col,{xs:"6",md:"4"},".col-6 .col-md-4"),_react2.default.createElement(Col,{xs:"6",md:"4"},".col-6 .col-md-4")),_react2.default.createElement(Row,null,_react2.default.createElement(Col,{xs:"6"},".col-6"),_react2.default.createElement(Col,{xs:"6"},".col-6")))});var stories3=(0,_react3.storiesOf)("Alignment",module);stories3.addDecorator(_storybookInspecthtml.withInspectHtml),stories3.addDecorator(_centerDecorator2.default),stories3.addDecorator(_addonA11y.checkA11y),stories3.addDecorator(_addonKnobs.withKnobs),stories3.add("Vertical alignment",function(){return _react2.default.createElement(Container,{className:"bd-example-row bd-example-row-flex-cols"},_react2.default.createElement(Row,{className:"align-items-start"},_react2.default.createElement(Col,null,"One of three columns"),_react2.default.createElement(Col,null,"One of three columns"),_react2.default.createElement(Col,null,"One of three columns")),_react2.default.createElement(Row,{className:"align-items-center"},_react2.default.createElement(Col,null,"One of three columns"),_react2.default.createElement(Col,null,"One of three columns"),_react2.default.createElement(Col,null,"One of three columns")),_react2.default.createElement(Row,{className:"align-items-end"},_react2.default.createElement(Col,null,"One of three columns"),_react2.default.createElement(Col,null,"One of three columns"),_react2.default.createElement(Col,null,"One of three columns")))}),stories3.add("Vertical alignment2",function(){return _react2.default.createElement(Container,{className:"bd-example-row bd-example-row-flex-cols"},_react2.default.createElement(Row,null,_react2.default.createElement(Col,{className:"align-self-start"},"One of three columns"),_react2.default.createElement(Col,{className:"align-self-center"},"One of three columns"),_react2.default.createElement(Col,{className:"align-self-end"},"One of three columns")))}),stories3.add("Horizontal alignment",function(){return _react2.default.createElement(Container,null,_react2.default.createElement(Row,{className:"justify-content-start"},_react2.default.createElement(Col,{xs:"4"},"One of two columns"),_react2.default.createElement(Col,{xs:"4"},"One of two columns")),_react2.default.createElement(Row,{className:"justify-content-center"},_react2.default.createElement(Col,{xs:"4"},"One of two columns"),_react2.default.createElement(Col,{xs:"4"},"One of two columns")),_react2.default.createElement(Row,{className:"justify-content-end"},_react2.default.createElement(Col,{xs:"4"},"One of two columns"),_react2.default.createElement(Col,{xs:"4"},"One of two columns")),_react2.default.createElement(Row,{className:"justify-content-around"},_react2.default.createElement(Col,{xs:"4"},"One of two columns"),_react2.default.createElement(Col,{xs:"4"},"One of two columns")),_react2.default.createElement(Row,{className:"justify-content-between"},_react2.default.createElement(Col,{xs:"4"},"One of two columns"),_react2.default.createElement(Col,{xs:"4"},"One of two columns")))}),stories3.add("No gutters",function(){return _react2.default.createElement(Row,{className:"no-gutters"},_react2.default.createElement(Col,{xs:"12",sm:"6",md:"8"},".col-12 .col-sm-6 .col-md-8"),_react2.default.createElement(Col,{xs:"6",md:"4"},".col-6 .col-md-4"))}),stories3.add("Column wrapping",function(){return _react2.default.createElement(Container,null,_react2.default.createElement(Row,null,_react2.default.createElement(Col,{xs:"9"},".col-9"),_react2.default.createElement(Col,{xs:"4"},".col-4",_react2.default.createElement("br",null),"Since 9 + 4 = 13 > 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit."),_react2.default.createElement(Col,{xs:"6"},".col-6",_react2.default.createElement("br",null),"Subsequent columns continue along the new line.")))}),stories3.add("Column breaks",function(){return _react2.default.createElement(Container,null,_react2.default.createElement(Row,null,_react2.default.createElement(Col,{xs:"6",sm:"3"},".col-6 .col-sm-3"),_react2.default.createElement(Col,{xs:"6",sm:"3"},".col-6 .col-sm-3"),_react2.default.createElement("div",{className:"w-100"}),_react2.default.createElement(Col,{xs:"6",sm:"3"},".col-6 .col-sm-3"),_react2.default.createElement(Col,{xs:"6",sm:"3"},".col-6 .col-sm-3")))}),stories3.add("Column breaks2",function(){return _react2.default.createElement(Container,null,_react2.default.createElement(Row,null,_react2.default.createElement(Col,{xs:"6",sm:"4"},".col-6 .col-sm-4"),_react2.default.createElement(Col,{xs:"6",sm:"4"},".col-6 .col-sm-4"),_react2.default.createElement("div",{className:"w-100 d-none d-md-block"}),_react2.default.createElement(Col,{xs:"6",sm:"4"},".col-6 .col-sm-4"),_react2.default.createElement(Col,{xs:"6",sm:"4"},".col-6 .col-sm-4")))}),stories3.add("Order classes",function(){return _react2.default.createElement(Container,{className:"bd-example-row"},_react2.default.createElement(Row,null,_react2.default.createElement(Col,null,"First, but unordered"),_react2.default.createElement(Col,{xs:{size:"",order:12}},"Second, but last"),_react2.default.createElement(Col,{xs:{size:"",order:1}},"Third, but first")))}),stories3.add("Order classes2",function(){return _react2.default.createElement(Container,{className:"bd-example-row"},_react2.default.createElement(Row,null,_react2.default.createElement(Col,{xs:{size:"",order:"last"}},"First, but last"),_react2.default.createElement(Col,null,"Second, but unordered"),_react2.default.createElement(Col,{xs:{size:"",offset:"first"}},"Third, but first")))});var stories4=(0,_react3.storiesOf)("Offset columns",module);stories4.addDecorator(_storybookInspecthtml.withInspectHtml),stories4.addDecorator(_centerDecorator2.default),stories4.addDecorator(_addonA11y.checkA11y),stories4.addDecorator(_addonKnobs.withKnobs),stories4.add("Offset classes",function(){return _react2.default.createElement(Container,null,_react2.default.createElement(Row,null,_react2.default.createElement(Col,{md:"4"},".col-md-4"),_react2.default.createElement(Col,{md:{size:4,offset:4}},".col-md-4 .offset-md-4")),_react2.default.createElement(Row,null,_react2.default.createElement(Col,{md:{size:3,offset:3}},".col-md-3 .offset-md-3"),_react2.default.createElement(Col,{md:{size:3,offset:3}},".col-md-3 .offset-md-3")),_react2.default.createElement(Row,null,_react2.default.createElement(Col,{md:{size:6,offset:3}},".col-md-6 .offset-md-3")))}),stories4.add("Offset classes2",function(){return _react2.default.createElement(Container,null,_react2.default.createElement(Row,null,_react2.default.createElement(Col,{sm:"5",md:"6"},".col-sm-5 .col-md-6"),_react2.default.createElement(Col,{sm:{size:5,offset:2},md:{size:6,offset:0}},".col-sm-5 .offset-sm-2 .col-md-6 .offset-md-0")),_react2.default.createElement(Row,null,_react2.default.createElement(Col,{sm:"6",md:"5",lg:"6"},".col-sm-6 .col-md-5 .col-lg-6"),_react2.default.createElement(Col,{sm:"6",md:{size:5,offset:2},lg:{size:6,offset:0}},".col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0")))})}).call(this,__webpack_require__(84)(module))},575:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _assign2=_interopRequireDefault(__webpack_require__(137));exports.default=CenterDecorator;var _react2=_interopRequireDefault(__webpack_require__(1));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function CenterDecorator(storyFn){var contentContainer={display:"flex",justifyContent:"center",alignContent:"center"},leftSide={flexGrow:0},centerContent={flexGrow:2},rightSide={flexGrow:0},guideBox={width:"20px",height:"20px"},guide=(0,_assign2.default)({borderStyle:"solid",borderColor:"#EBEBEB"},guideBox),guideTopLeft=(0,_assign2.default)({borderWidth:"0px 1px 1px 0px"},guide),guideTopRight=(0,_assign2.default)({borderWidth:"0px 0px 1px 1px"},guide),guideCenterLeft=(0,_assign2.default)(guideBox),guideCenterRight=(0,_assign2.default)(guideBox),guideBottomLeft=(0,_assign2.default)({borderWidth:"1px 1px 0px 0px"},guide),guideBottomRight=(0,_assign2.default)({borderWidth:"1px 0px 0px 1px"},guide);return _react2.default.createElement("div",{style:{padding:"10px 10px 10px 10px"}},_react2.default.createElement("div",{style:contentContainer},_react2.default.createElement("div",{style:leftSide},_react2.default.createElement("div",{style:guideTopLeft})),_react2.default.createElement("div",{style:centerContent}),_react2.default.createElement("div",{style:rightSide},_react2.default.createElement("div",{style:guideTopRight}))),_react2.default.createElement("div",{style:contentContainer},_react2.default.createElement("div",{style:leftSide},_react2.default.createElement("div",{style:guideCenterLeft})),_react2.default.createElement("div",{style:centerContent},storyFn()),_react2.default.createElement("div",{style:rightSide},_react2.default.createElement("div",{style:guideCenterRight}))),_react2.default.createElement("div",{style:contentContainer},_react2.default.createElement("div",{style:leftSide},_react2.default.createElement("div",{style:guideBottomLeft})),_react2.default.createElement("div",{style:centerContent}),_react2.default.createElement("div",{style:rightSide},_react2.default.createElement("div",{style:guideBottomRight}))))}CenterDecorator.__docgenInfo={description:"",methods:[],displayName:"CenterDecorator"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/centerDecorator.jsx"]={name:"CenterDecorator",docgenInfo:CenterDecorator.__docgenInfo,path:".storybook/centerDecorator.jsx"})},576:function(module,exports,__webpack_require__){},580:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _keys2=_interopRequireDefault(__webpack_require__(105)),_extends3=_interopRequireDefault(__webpack_require__(26)),_objectWithoutProperties3=_interopRequireDefault(__webpack_require__(58));exports.default=Container;var _react2=_interopRequireDefault(__webpack_require__(1)),_propTypes=__webpack_require__(2),_rexReactUtils=__webpack_require__(158),_props=__webpack_require__(159);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function Container(_ref){var className=_ref.className,type=_ref.type,fluid=_ref.fluid,attributes=(0,_objectWithoutProperties3.default)(_ref,["className","type","fluid"]),Tag=_props.TYPE[type],classes=(0,_rexReactUtils.composeClassName)([className,fluid?"container-fluid":"container"]);return _react2.default.createElement(Tag,(0,_extends3.default)({},classes,attributes))}Container.defaultProps={className:"",type:_props.DEFAULT_TYPE,fluid:!1},Container.propTypes={className:_propTypes.string,type:(0,_propTypes.oneOf)((0,_keys2.default)(_props.TYPE)),fluid:_propTypes.bool},Container.__docgenInfo={description:"",methods:[],displayName:"Container",props:{className:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},type:{defaultValue:{value:"DEFAULT_TYPE",computed:!0},type:{name:"enum",computed:!0,value:"Object.keys(TYPE)"},required:!1,description:""},fluid:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Container.jsx"]={name:"Container",docgenInfo:Container.__docgenInfo,path:"src/Container.jsx"})},585:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.TYPE={default:"div"},exports.DEFAULT_TYPE="default"},586:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _keys2=_interopRequireDefault(__webpack_require__(105)),_extends3=_interopRequireDefault(__webpack_require__(26)),_objectWithoutProperties3=_interopRequireDefault(__webpack_require__(58));exports.default=Row;var _react2=_interopRequireDefault(__webpack_require__(1)),_propTypes=__webpack_require__(2),_rexReactUtils=__webpack_require__(158),_props=__webpack_require__(159);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function Row(_ref){var className=_ref.className,type=_ref.type,noGutters=_ref.noGutters,form=_ref.form,attributes=(0,_objectWithoutProperties3.default)(_ref,["className","type","noGutters","form"]),Tag=_props.TYPE[type],classes=(0,_rexReactUtils.composeClassName)([className,noGutters?"no-gutters":null,form?"form-row":"row"]);return _react2.default.createElement(Tag,(0,_extends3.default)({},classes,attributes))}Row.defaultProps={className:"",type:_props.DEFAULT_TYPE,noGutters:!1,form:!1},Row.propTypes={className:_propTypes.string,type:(0,_propTypes.oneOf)((0,_keys2.default)(_props.TYPE)),noGutters:_propTypes.bool,form:_propTypes.bool},Row.__docgenInfo={description:"",methods:[],displayName:"Row",props:{className:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},type:{defaultValue:{value:"DEFAULT_TYPE",computed:!0},type:{name:"enum",computed:!0,value:"Object.keys(TYPE)"},required:!1,description:""},noGutters:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},form:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Row.jsx"]={name:"Row",docgenInfo:Row.__docgenInfo,path:"src/Row.jsx"})},587:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _extends3=_interopRequireDefault(__webpack_require__(26)),_keys2=_interopRequireDefault(__webpack_require__(105)),_defineProperty3=_interopRequireDefault(__webpack_require__(230)),_objectWithoutProperties3=_interopRequireDefault(__webpack_require__(58));exports.default=Col;var _lodash2=_interopRequireDefault(__webpack_require__(588)),_react2=_interopRequireDefault(__webpack_require__(1)),_propTypes=__webpack_require__(2),_rexReactUtils=__webpack_require__(158),_props=__webpack_require__(159);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var stringOrNumberProp=(0,_propTypes.oneOfType)([_propTypes.number,_propTypes.string]),getColumnSizeClass=function(isXs,colWidth,colSize){return!0===colSize||""===colSize?isXs?"col":"col-"+colWidth:"auto"===colSize?isXs?"col-auto":"col-"+colWidth+"-auto":isXs?"col-"+colSize:"col-"+colWidth+"-"+colSize};function Col(props){var className=props.className,widths=props.widths,type=props.type,attributes=(0,_objectWithoutProperties3.default)(props,["className","widths","type"]),Tag=_props.TYPE[type],colClasses=[];widths.forEach(function(colWidth,i){var columnProp=props[colWidth],isXs=!i;if(delete attributes[colWidth],columnProp||""===columnProp)if((0,_lodash2.default)(columnProp)){var _colObj,colSizeInterfix=isXs?"-":"-"+colWidth+"-",colClass=getColumnSizeClass(isXs,colWidth,columnProp.size),colObj=(_colObj={},(0,_defineProperty3.default)(_colObj,colClass,columnProp.size||""===columnProp.size),(0,_defineProperty3.default)(_colObj,"order"+colSizeInterfix+columnProp.order,columnProp.order||0===columnProp.order),(0,_defineProperty3.default)(_colObj,"offset"+colSizeInterfix+columnProp.offset,columnProp.offset||0===columnProp.offset),_colObj);(0,_keys2.default)(colObj).filter(function(key){return!1!==colObj[key]}).map(function(objClass){return colClasses.push(objClass)})}else{var _colClass=getColumnSizeClass(isXs,colWidth,columnProp);colClasses.push(_colClass)}}),colClasses.length||colClasses.push("col");var classes=(0,_rexReactUtils.composeClassName)([className].concat(colClasses));return _react2.default.createElement(Tag,(0,_extends3.default)({},classes,attributes))}var columnProps=(0,_propTypes.oneOfType)([_propTypes.bool,_propTypes.number,_propTypes.string,(0,_propTypes.shape)({size:(0,_propTypes.oneOfType)([_propTypes.bool,_propTypes.number,_propTypes.string]),order:stringOrNumberProp,offset:stringOrNumberProp})]);Col.defaultProps={widths:["xs","sm","md","lg","xl"],type:_props.DEFAULT_TYPE,className:"",xs:"",sm:"",md:"",lg:"",xl:""},Col.propTypes={xs:columnProps,sm:columnProps,md:columnProps,lg:columnProps,xl:columnProps,className:_propTypes.string,widths:(0,_propTypes.arrayOf)(_propTypes.string),type:(0,_propTypes.oneOf)((0,_keys2.default)(_props.TYPE))},Col.__docgenInfo={description:"",methods:[],displayName:"Col",props:{widths:{defaultValue:{value:"['xs', 'sm', 'md', 'lg', 'xl']",computed:!1},type:{name:"arrayOf",value:{name:"string"}},required:!1,description:""},type:{defaultValue:{value:"DEFAULT_TYPE",computed:!0},type:{name:"enum",computed:!0,value:"Object.keys(TYPE)"},required:!1,description:""},className:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},xs:{defaultValue:{value:"''",computed:!1},type:{name:"custom",raw:"columnProps"},required:!1,description:""},sm:{defaultValue:{value:"''",computed:!1},type:{name:"custom",raw:"columnProps"},required:!1,description:""},md:{defaultValue:{value:"''",computed:!1},type:{name:"custom",raw:"columnProps"},required:!1,description:""},lg:{defaultValue:{value:"''",computed:!1},type:{name:"custom",raw:"columnProps"},required:!1,description:""},xl:{defaultValue:{value:"''",computed:!1},type:{name:"custom",raw:"columnProps"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Col.jsx"]={name:"Col",docgenInfo:Col.__docgenInfo,path:"src/Col.jsx"})}},[[240,1,2]]]);
//# sourceMappingURL=main.b356e92be1bb81830622.bundle.js.map