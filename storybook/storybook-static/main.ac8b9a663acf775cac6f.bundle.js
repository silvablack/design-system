(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(module,exports,__webpack_require__){var api=__webpack_require__(639),content=__webpack_require__(640);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},281:function(module,exports,__webpack_require__){__webpack_require__(282),__webpack_require__(432),module.exports=__webpack_require__(433)},348:function(module,exports){},433:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_vue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(278);module._StorybookPreserveDecorators=!0,Object(_storybook_vue__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(624)],module)}.call(this,__webpack_require__(434)(module))},624:function(module,exports,__webpack_require__){var map={"./1-Button.stories.js":643,"./Card.stories.js":642};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=624},638:function(module,__webpack_exports__,__webpack_require__){"use strict";var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_vue_loader_lib_index_js_vue_loader_options_CardVaga_vue_vue_type_style_index_0_id_7fb7296d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(114);__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_vue_loader_lib_index_js_vue_loader_options_CardVaga_vue_vue_type_style_index_0_id_7fb7296d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__).a},640:function(module,exports,__webpack_require__){(exports=__webpack_require__(641)(!1)).push([module.i,'\n.card-vaga[data-v-7fb7296d] {\n  height: 222px;\n  background: #ffffff;\n\n  border: 0.5px solid #c7cccf;\n  box-sizing: border-box;\n  box-shadow: 0px 0px 5px rgba(38, 38, 38, 0.1);\n  border-radius: 12px;\n  margin: 24px 0px;\n  padding: 24px 32px 24px 32px;\n}\n.titulo-vaga[data-v-7fb7296d] {\n  font-family: "Inter SemiBold";\n  font-size: 24px;\n  line-height: 29px;\n\n  color: #2b2d2e;\n  margin-bottom: 12px;\n}\n.info-vaga[data-v-7fb7296d] {\n  display: grid;\n  grid-template-columns: 35px;\n  grid-template-rows: 20px;\n\n  margin-top: 30px;\n}\n.info-vaga-icone[data-v-7fb7296d] {\n  grid-column: 1;\n  justify-self: left;\n  margin-top: 2px;\n}\n.info-vaga-local[data-v-7fb7296d] {\n  font-family: "Inter SemiBold";\n  font-size: 16px;\n  line-height: 16px;\n\n  letter-spacing: 0.0015em;\n\n  color: #787b7d;\n\n  grid-column: 2;\n  align-self: center;\n  justify-self: start;\n}\n.info-vaga-filial[data-v-7fb7296d] {\n  font-size: 14px;\n  line-height: 14px;\n\n  letter-spacing: 0.001em;\n\n  color: #787b7d;\n\n  grid-column: 2;\n  justify-self: start;\n}\n.buttons-vaga[data-v-7fb7296d] {\n  display: inline-block;\n  float: right;\n  margin-top: 20px;\n}\n.button-primary[data-v-7fb7296d] {\n  flex: 1 1;\n}\n.button-link[data-v-7fb7296d] {\n  flex: 1 1;\n}\n@media only screen and (max-width: 600px) {\n.buttons-vaga[data-v-7fb7296d] {\n    margin-right: 15px;\n}\n.button-primary[data-v-7fb7296d] {\n    font-size: 14px;\n    line-height: 12px;\n}\n.button-link[data-v-7fb7296d] {\n    font-size: 14px;\n}\n}\n',""]),module.exports=exports},642:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"gdr",(function(){return gdr})),__webpack_require__.d(__webpack_exports__,"portalVagas",(function(){return portalVagas})),__webpack_require__.d(__webpack_exports__,"asAComponent",(function(){return asAComponent}));var components_CardVagavue_type_script_lang_js_={name:"CardVaga",props:{vaga:{type:Object,default:function _default(){return{titulo:"Título",filial:"Filial",local:"Local"}}}}},componentNormalizer=(__webpack_require__(638),__webpack_require__(280)),CardVaga=Object(componentNormalizer.a)(components_CardVagavue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"card-vaga"},[_c("h1",{staticClass:"titulo-vaga"},[_vm._v(_vm._s(_vm.vaga.titulo))]),_vm._v(" "),_c("div",{staticClass:"info-vaga"},[_c("svg",{staticClass:"info-vaga-icone",attrs:{width:"22",height:"30",viewBox:"0 0 22 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[_c("path",{attrs:{d:"M9.86952 29.3947C1.54516 17.0526 0 15.7859 0 11.25C0 5.03678 4.92485 0 11 0C17.0752 0 22 5.03678 22 11.25C22 15.7859 20.4548 17.0526 12.1305 29.3947C11.5842 30.2018 10.4157 30.2017 9.86952 29.3947ZM11 15.9375C13.5313 15.9375 15.5833 13.8388 15.5833 11.25C15.5833 8.66115 13.5313 6.5625 11 6.5625C8.46868 6.5625 6.41667 8.66115 6.41667 11.25C6.41667 13.8388 8.46868 15.9375 11 15.9375Z",fill:"#ED3237"}})]),_vm._v(" "),_c("h2",{staticClass:"info-vaga-local"},[_vm._v(_vm._s(_vm.vaga.local))]),_vm._v(" "),_c("h3",{staticClass:"info-vaga-filial"},[_vm._v(_vm._s(_vm.vaga.filial))])]),_vm._v(" "),_vm._m(0)])}),[function(){var _h=this.$createElement,_c=this._self._c||_h;return _c("div",{staticClass:"buttons-vaga"},[_c("button",{staticClass:"button-link"},[this._v("Saiba mais")]),this._v(" "),_c("button",{staticClass:"button-primary"},[this._v("Inscrever-se")])])}],!1,null,"7fb7296d",null).exports,gdr=(__webpack_exports__.default={title:"CardVaga"},function(){return{components:{CardVaga:CardVaga},template:"<card-vaga/>"}}),portalVagas=function(){return{components:{CardVaga:CardVaga},template:"<card-vaga/>"}},asAComponent=function(){return{components:{CardVaga:CardVaga},template:"<card-vaga/>"}}},643:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Text",(function(){return Text})),__webpack_require__.d(__webpack_exports__,"Jsx",(function(){return Jsx})),__webpack_require__.d(__webpack_exports__,"Emoji",(function(){return Emoji}));var dist=__webpack_require__(176),addon_links_dist=__webpack_require__(279),MyButton={name:"my-button",data:function data(){return{buttonStyles:{border:"1px solid #eee",borderRadius:3,backgroundColor:"#FFFFFF",cursor:"pointer",fontSize:15,padding:"3px 10px",margin:10}}},template:'\n    <button :style="buttonStyles" @click="onClick">\n      <slot></slot>\n    </button>\n  ',methods:{onClick:function onClick(){this.$emit("click")}}},Text=(__webpack_exports__.default={title:"Button",component:MyButton},function(){return{components:{MyButton:MyButton},template:'<my-button @click="action">Hello Button</my-button>',methods:{action:Object(dist.action)("clicked")}}}),Jsx=function(){return{components:{MyButton:MyButton},render:function render(){return"<my-button onClick={this.action}>With JSX</my-button>"},methods:{action:Object(addon_links_dist.linkTo)("clicked")}}},Emoji=function(){return{components:{MyButton:MyButton},template:'<my-button @click="action">😀 😎 👍 💯</my-button>',methods:{action:Object(dist.action)("clicked")}}}}},[[281,1,2]]]);
//# sourceMappingURL=main.ac8b9a663acf775cac6f.bundle.js.map