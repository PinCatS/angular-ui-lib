(self.webpackChunkngx_ui=self.webpackChunkngx_ui||[]).push([[179],{65152:(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__(70001).configure)([__webpack_require__(76230)],module,!1)},42e3:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{parameters:()=>parameters});__webpack_require__(47941),__webpack_require__(82526),__webpack_require__(57327),__webpack_require__(38880),__webpack_require__(89554),__webpack_require__(54747),__webpack_require__(49337),__webpack_require__(33321),__webpack_require__(69070);var client_api=__webpack_require__(78880),esm=__webpack_require__(23827),angular=__webpack_require__(83156);const documentation_namespaceObject=JSON.parse('{"pipes":[],"interfaces":[],"injectables":[],"classes":[],"directives":[],"components":[{"name":"AppComponent","id":"component-AppComponent-6d492a3ec6ab352d961153b4f80073ce","file":"projects/ui-sandbox/src/app/app.component.ts","encapsulation":[],"entryComponents":[],"inputs":[],"outputs":[],"providers":[],"selector":"app-root","styleUrls":["./app.component.scss"],"styles":[],"templateUrl":["./app.component.html"],"viewProviders":[],"inputsClass":[],"outputsClass":[],"propertiesClass":[{"name":"title","defaultValue":"\'ui-sandbox\'","type":"string","optional":false,"description":"","line":9}],"methodsClass":[],"hostBindings":[],"hostListeners":[],"description":"","rawdescription":"","type":"component","sourceCode":"import { Component } from \'@angular/core\';\\n\\n@Component({\\n  selector: \'app-root\',\\n  templateUrl: \'./app.component.html\',\\n  styleUrls: [\'./app.component.scss\']\\n})\\nexport class AppComponent {\\n  title = \'ui-sandbox\';\\n}\\n","assetsDirs":[],"styleUrlsData":[{"data":"","styleUrl":"./app.component.scss"}],"stylesData":"","templateData":"<ui-button></ui-button>\\n"},{"name":"ButtonComponent","id":"component-ButtonComponent-7870e5487035e4fadea2207209b7182a","file":"projects/button/src/lib/button.component.ts","encapsulation":[],"entryComponents":[],"inputs":[],"outputs":[],"providers":[],"selector":"ui-button","styleUrls":[],"styles":[],"template":"<button [disabled]=\\"disabled\\">{{text}}</button>\\n","templateUrl":[],"viewProviders":[],"inputsClass":[{"name":"disabled","defaultValue":"false","line":14,"type":"boolean"},{"name":"text","defaultValue":"\'button\'","line":13,"type":"string"}],"outputsClass":[],"propertiesClass":[],"methodsClass":[],"hostBindings":[],"hostListeners":[],"description":"","rawdescription":"","type":"component","sourceCode":"import { Component, Input } from \'@angular/core\';\\n\\n@Component({\\n  selector: \'ui-button\',\\n  template: `\\n    <button [disabled]=\\"disabled\\">{{text}}</button>\\n  `,\\n  styles: [\\n  ]\\n})\\nexport class ButtonComponent {\\n\\n  @Input() text: string = \'button\';\\n  @Input() disabled: boolean = false;\\n\\n}\\n","assetsDirs":[],"styleUrlsData":"","stylesData":""}],"modules":[{"name":"AppModule","children":[{"type":"providers","elements":[]},{"type":"declarations","elements":[{"name":"AppComponent"}]},{"type":"imports","elements":[{"name":"ButtonModule"}]},{"type":"exports","elements":[]},{"type":"bootstrap","elements":[{"name":"AppComponent"}]},{"type":"classes","elements":[]}]},{"name":"ButtonModule","children":[{"type":"providers","elements":[]},{"type":"declarations","elements":[{"name":"ButtonComponent"}]},{"type":"imports","elements":[]},{"type":"exports","elements":[{"name":"ButtonComponent"}]},{"type":"bootstrap","elements":[]},{"type":"classes","elements":[]}]}],"miscellaneous":{"variables":[{"name":"context","ctype":"miscellaneous","subtype":"variable","file":"projects/button/src/test.ts","type":"","defaultValue":"require.context(\'./\', true, /\\\\.spec\\\\.ts$/)"},{"name":"context","ctype":"miscellaneous","subtype":"variable","file":"projects/ui-sandbox/src/test.ts","type":"","defaultValue":"require.context(\'./\', true, /\\\\.spec\\\\.ts$/)"},{"name":"Default","ctype":"miscellaneous","subtype":"variable","file":"projects/button/src/lib/button.stories.ts","type":"","defaultValue":"Template.bind({})"},{"name":"environment","ctype":"miscellaneous","subtype":"variable","file":"projects/ui-sandbox/src/environments/environment.ts","type":"object","defaultValue":"{\\n  production: false\\n}"},{"name":"environment","ctype":"miscellaneous","subtype":"variable","file":"projects/ui-sandbox/src/environments/environment.prod.ts","type":"object","defaultValue":"{\\n  production: true\\n}"},{"name":"require","ctype":"miscellaneous","subtype":"variable","file":"projects/button/src/test.ts","type":"literal type"},{"name":"require","ctype":"miscellaneous","subtype":"variable","file":"projects/ui-sandbox/src/test.ts","type":"literal type"},{"name":"Template","ctype":"miscellaneous","subtype":"variable","file":"projects/button/src/lib/button.stories.ts","type":"Story<ButtonComponent>","defaultValue":"args => ({\\n  props: {\\n    ...args,\\n  },\\n})"}],"functions":[],"typealiases":[],"enumerations":[],"groupedVariables":{"projects/button/src/test.ts":[{"name":"context","ctype":"miscellaneous","subtype":"variable","file":"projects/button/src/test.ts","type":"","defaultValue":"require.context(\'./\', true, /\\\\.spec\\\\.ts$/)"},{"name":"require","ctype":"miscellaneous","subtype":"variable","file":"projects/button/src/test.ts","type":"literal type"}],"projects/ui-sandbox/src/test.ts":[{"name":"context","ctype":"miscellaneous","subtype":"variable","file":"projects/ui-sandbox/src/test.ts","type":"","defaultValue":"require.context(\'./\', true, /\\\\.spec\\\\.ts$/)"},{"name":"require","ctype":"miscellaneous","subtype":"variable","file":"projects/ui-sandbox/src/test.ts","type":"literal type"}],"projects/button/src/lib/button.stories.ts":[{"name":"Default","ctype":"miscellaneous","subtype":"variable","file":"projects/button/src/lib/button.stories.ts","type":"","defaultValue":"Template.bind({})"},{"name":"Template","ctype":"miscellaneous","subtype":"variable","file":"projects/button/src/lib/button.stories.ts","type":"Story<ButtonComponent>","defaultValue":"args => ({\\n  props: {\\n    ...args,\\n  },\\n})"}],"projects/ui-sandbox/src/environments/environment.ts":[{"name":"environment","ctype":"miscellaneous","subtype":"variable","file":"projects/ui-sandbox/src/environments/environment.ts","type":"object","defaultValue":"{\\n  production: false\\n}"}],"projects/ui-sandbox/src/environments/environment.prod.ts":[{"name":"environment","ctype":"miscellaneous","subtype":"variable","file":"projects/ui-sandbox/src/environments/environment.prod.ts","type":"object","defaultValue":"{\\n  production: true\\n}"}]},"groupedFunctions":{},"groupedEnumerations":{},"groupedTypeAliases":{}},"routes":[],"coverage":{"count":0,"status":"low","files":[{"filePath":"projects/button/src/lib/button.component.ts","type":"component","linktype":"component","name":"ButtonComponent","coveragePercent":0,"coverageCount":"0/3","status":"low"},{"filePath":"projects/button/src/lib/button.stories.ts","type":"variable","linktype":"miscellaneous","linksubtype":"variable","name":"Default","coveragePercent":0,"coverageCount":"0/1","status":"low"},{"filePath":"projects/button/src/lib/button.stories.ts","type":"variable","linktype":"miscellaneous","linksubtype":"variable","name":"Template","coveragePercent":0,"coverageCount":"0/1","status":"low"},{"filePath":"projects/button/src/test.ts","type":"variable","linktype":"miscellaneous","linksubtype":"variable","name":"context","coveragePercent":0,"coverageCount":"0/1","status":"low"},{"filePath":"projects/button/src/test.ts","type":"variable","linktype":"miscellaneous","linksubtype":"variable","name":"require","coveragePercent":0,"coverageCount":"0/1","status":"low"},{"filePath":"projects/ui-sandbox/src/app/app.component.ts","type":"component","linktype":"component","name":"AppComponent","coveragePercent":0,"coverageCount":"0/2","status":"low"},{"filePath":"projects/ui-sandbox/src/environments/environment.prod.ts","type":"variable","linktype":"miscellaneous","linksubtype":"variable","name":"environment","coveragePercent":0,"coverageCount":"0/1","status":"low"},{"filePath":"projects/ui-sandbox/src/environments/environment.ts","type":"variable","linktype":"miscellaneous","linksubtype":"variable","name":"environment","coveragePercent":0,"coverageCount":"0/1","status":"low"},{"filePath":"projects/ui-sandbox/src/test.ts","type":"variable","linktype":"miscellaneous","linksubtype":"variable","name":"context","coveragePercent":0,"coverageCount":"0/1","status":"low"},{"filePath":"projects/ui-sandbox/src/test.ts","type":"variable","linktype":"miscellaneous","linksubtype":"variable","name":"require","coveragePercent":0,"coverageCount":"0/1","status":"low"}]}}');(0,angular.setCompodocJson)(documentation_namespaceObject);var parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},docs:{inlineStories:!0}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.kg.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return(0,client_api.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,client_api.HZ)(loader,!1)}));case"parameters":return(0,client_api.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,client_api.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,client_api._C)(enhancer)}));case"globals":case"globalTypes":var v={};return v[key]=value,(0,client_api.h1)(v,!1);default:return console.log(key+" was not supported :( !")}}))},21057:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__(70001)},21386:(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(23645),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__)()((function(i){return i[1]}));___CSS_LOADER_EXPORT___.push([module.id,"/* You can add global styles to this file, and also import other style files */",""]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},22799:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(93379),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_rules_0_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_rules_0_oneOf_1_use_2_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_1_rules_1_use_0_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_rules_1_use_1_styles_scss__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(21386),options={insert:"head",singleton:!1};_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_rules_0_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_rules_0_oneOf_1_use_2_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_1_rules_1_use_0_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_rules_1_use_1_styles_scss__WEBPACK_IMPORTED_MODULE_1__.Z,options),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_rules_0_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_rules_0_oneOf_1_use_2_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_1_rules_1_use_0_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_rules_1_use_1_styles_scss__WEBPACK_IMPORTED_MODULE_1__.Z.locals},91259:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>button_stories});var common=__webpack_require__(8164),client=__webpack_require__(70001),tslib_es6=__webpack_require__(70655),core=__webpack_require__(55615);let ButtonComponent=class ButtonComponent{constructor(){this.text="button",this.disabled=!1}};(0,tslib_es6.gn)([(0,core.Input)(),(0,tslib_es6.w6)("design:type",String)],ButtonComponent.prototype,"text",void 0),(0,tslib_es6.gn)([(0,core.Input)(),(0,tslib_es6.w6)("design:type",Boolean)],ButtonComponent.prototype,"disabled",void 0),ButtonComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"ui-button",template:'\n    <button [disabled]="disabled">{{text}}</button>\n  ',styles:[]})],ButtonComponent);const button_stories={component:ButtonComponent,decorators:[(0,client.moduleMetadata)({declarations:[ButtonComponent],imports:[common.ez]})],excludeStories:/.*Data$/,title:"UiButton"},Default=(args=>({props:Object.assign({},args)})).bind({});Default.args={text:"Hello"},Default.parameters=Object.assign({storySource:{source:"args => ({\n  props: {\n    ...args,\n  },\n})"}},Default.parameters)},60306:module=>{"use strict";module.exports={i8:"0.0.0"}},55321:module=>{function webpackEmptyAsyncContext(req){return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}))}webpackEmptyAsyncContext.keys=()=>[],webpackEmptyAsyncContext.resolve=webpackEmptyAsyncContext,webpackEmptyAsyncContext.id=55321,module.exports=webpackEmptyAsyncContext},76230:(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./button/src/lib/button.stories.ts":91259};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=76230},24654:()=>{}},__webpack_require__=>{"use strict";var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[893],(()=>(__webpack_exec__(37707),__webpack_exec__(99669),__webpack_exec__(21057),__webpack_exec__(17119),__webpack_exec__(26432),__webpack_exec__(59746),__webpack_exec__(84873),__webpack_exec__(62853),__webpack_exec__(81953),__webpack_exec__(22609),__webpack_exec__(87464),__webpack_exec__(21424),__webpack_exec__(42e3),__webpack_exec__(65152),__webpack_exec__(22799))));__webpack_require__.O()}]);
//# sourceMappingURL=main.41d5ebee.iframe.bundle.js.map