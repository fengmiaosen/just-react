(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{376:function(t,a,e){"use strict";e.r(a);var s=e(43),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h3",{attrs:{id:"functioncomponent"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#functioncomponent"}},[t._v("#")]),t._v(" FunctionComponent")]),t._v(" "),e("p",[e("code",[t._v("hooks")]),t._v("使"),e("code",[t._v("FunctionComponent")]),t._v("可以获得"),e("code",[t._v("state")]),t._v("，他使用一种与"),e("code",[t._v("ClassComponent")]),t._v("不同的"),e("code",[t._v("Update")]),t._v("。")]),t._v(" "),e("p",[t._v("对应的结构如下：")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" update"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Update"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("S")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  eventTime"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  lane"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  suspenseConfig"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  action"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  eagerReducer"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  eagerState"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  next"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" any"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("blockquote",[e("p",[e("code",[t._v("Update")]),t._v("在"),e("code",[t._v("dispatchAction")]),t._v("方法内创建，你可以从"),e("a",{attrs:{href:"https://github.com/facebook/react/blob/master/packages/react-reconciler/src/ReactFiberHooks.new.js#L1661",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),e("OutboundLink")],1),t._v("看到"),e("code",[t._v("Update")]),t._v("创建的逻辑")])]),t._v(" "),e("p",[t._v("可以看到，大部分字段与"),e("code",[t._v("ClassComponent Update")]),t._v("相同。不同的字段意义如下：")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("eagerReducer")]),t._v("与"),e("code",[t._v("eagerState")]),t._v("：这两个字段与调用流程优化有关，可以理解为：通过提前计算本次更新的"),e("code",[t._v("state")]),t._v("，如果该"),e("code",[t._v("state")]),t._v("与上次更新的"),e("code",[t._v("state")]),t._v("相同则可以取消本次更新的调度。")])]),t._v(" "),e("li",[e("p",[t._v("action：类似"),e("code",[t._v("ClassComponent Update")]),t._v("的"),e("code",[t._v("payload")]),t._v("。对于"),e("code",[t._v("[state, updateState] = useState()")]),t._v("来说，"),e("code",[t._v("payload")]),t._v("为调用"),e("code",[t._v("updateState")]),t._v("传递的参数。")])])]),t._v(" "),e("h3",{attrs:{id:"functioncomponent-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#functioncomponent-2"}},[t._v("#")]),t._v(" FunctionComponent")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" queue "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hook"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("queue "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  pending"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  dispatch"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  lastRenderedReducer"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" basicStateReducer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  lastRenderedState"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("initialState"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" any"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("blockquote",[e("p",[e("code",[t._v("useState")]),t._v("的"),e("code",[t._v("queue")]),t._v("在"),e("code",[t._v("mountState")]),t._v("方法内创建，你可以从"),e("a",{attrs:{href:"https://github.com/facebook/react/blob/master/packages/react-reconciler/src/ReactFiberHooks.new.js#L1141",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),e("OutboundLink")],1),t._v("看到"),e("code",[t._v("queue")]),t._v("创建的逻辑")])])])}),[],!1,null,null,null);a.default=n.exports}}]);