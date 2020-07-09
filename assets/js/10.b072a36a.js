(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{354:function(e,t,a){"use strict";a.r(t);var r=a(43),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("经过之前的学习，我们已经知道"),a("code",[e._v("React16")]),e._v("的架构分为三层：")]),e._v(" "),a("ul",[a("li",[e._v("Scheduler（调度器）—— 调度任务的优先级，高优任务优先进入"),a("strong",[e._v("Reconciler")])]),e._v(" "),a("li",[e._v("Reconciler（协调器）—— 负责找出变化的组件")]),e._v(" "),a("li",[e._v("Renderer（渲染器）—— 负责将变化的组件渲染到页面上")])]),e._v(" "),a("p",[e._v("那么架构是如何体现在源码的文件结构上呢，让我们一起看看吧。")]),e._v(" "),a("h2",{attrs:{id:"顶层目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#顶层目录"}},[e._v("#")]),e._v(" 顶层目录")]),e._v(" "),a("p",[e._v("拉取代码到本地")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 拉取代码")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/facebook/react.git\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 如果拉取速度很慢，可以考虑使用cnpm代理")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com.cnpmjs.org/facebook/react\n")])])]),a("p",[e._v("除去配置文件和隐藏文件夹，根目录的文件夹包括三个：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("根目录\n├── fixtures        # 包含一些给贡献者准备的小型 React 测试项目\n├── packages        # 包含元数据（比如 package.json）和 React 仓库中所有 package 的源码（子目录 src）\n├── scripts         # 各种工具链的脚本，比如git、jest、eslint等\n")])])]),a("p",[e._v("这里我们关注"),a("strong",[e._v("packages")]),e._v("目录")]),e._v(" "),a("h2",{attrs:{id:"packages目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#packages目录"}},[e._v("#")]),e._v(" packages目录")]),e._v(" "),a("p",[e._v("目录下的文件夹非常多，我们来看下：")]),e._v(" "),a("h3",{attrs:{id:"react文件夹"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react文件夹"}},[e._v("#")]),e._v(" "),a("a",{attrs:{href:"https://github.com/facebook/react/tree/master/packages/react",target:"_blank",rel:"noopener noreferrer"}},[e._v("react"),a("OutboundLink")],1),e._v("文件夹")]),e._v(" "),a("p",[e._v("React的核心，包含所有全局 React API，如：")]),e._v(" "),a("ul",[a("li",[e._v("React.createElement")]),e._v(" "),a("li",[e._v("React.Component")]),e._v(" "),a("li",[e._v("React.Children")])]),e._v(" "),a("p",[e._v("这些 API 是全平台通用的，它不包含"),a("code",[e._v("ReactDOM")]),e._v("、"),a("code",[e._v("ReactNative")]),e._v("等平台特定的代码。在 NPM 上作为"),a("a",{attrs:{href:"https://www.npmjs.com/package/react",target:"_blank",rel:"noopener noreferrer"}},[e._v("单独的一个包"),a("OutboundLink")],1),e._v("发布。")]),e._v(" "),a("h3",{attrs:{id:"scheduler文件夹"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scheduler文件夹"}},[e._v("#")]),e._v(" "),a("a",{attrs:{href:"https://github.com/facebook/react/tree/master/packages/scheduler",target:"_blank",rel:"noopener noreferrer"}},[e._v("scheduler"),a("OutboundLink")],1),e._v("文件夹")]),e._v(" "),a("p",[e._v("Scheduler（调度器）的实现。")]),e._v(" "),a("h3",{attrs:{id:"shared文件夹"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shared文件夹"}},[e._v("#")]),e._v(" "),a("a",{attrs:{href:"https://github.com/facebook/react/tree/master/packages/shared",target:"_blank",rel:"noopener noreferrer"}},[e._v("shared"),a("OutboundLink")],1),e._v("文件夹")]),e._v(" "),a("p",[e._v("源码中其他模块公用的"),a("strong",[e._v("方法")]),e._v("和"),a("strong",[e._v("全局变量")]),e._v("，比如在"),a("a",{attrs:{href:"https://github.com/facebook/react/blob/master/packages/shared/ReactSymbols.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("shared/ReactSymbols.js"),a("OutboundLink")],1),e._v("中保存"),a("code",[e._v("React")]),e._v("不同组件类型的定义。")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// ...")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("export")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("REACT_ELEMENT_TYPE")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0xeac7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("export")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("REACT_PORTAL_TYPE")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0xeaca")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("export")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("REACT_FRAGMENT_TYPE")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0xeacb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// ...")]),e._v("\n")])])]),a("h3",{attrs:{id:"renderer相关的文件夹"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#renderer相关的文件夹"}},[e._v("#")]),e._v(" Renderer相关的文件夹")]),e._v(" "),a("p",[e._v("如下几个文件夹为对应的"),a("strong",[e._v("Renderer")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("- react-art\n- react-dom                 # 注意这同时是DOM和SSR（服务端渲染）的入口\n- react-native-renderer\n- react-noop-renderer       # 用于debug fiber（后面会介绍fiber）\n- react-test-renderer\n")])])]),a("h3",{attrs:{id:"试验性包的文件夹"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#试验性包的文件夹"}},[e._v("#")]),e._v(" 试验性包的文件夹")]),e._v(" "),a("p",[a("code",[e._v("React")]),e._v("将自己流程中的一部分抽离出来，形成可以独立使用的包，由于他们是试验性质的，所以不被建议在生产环境使用。包括如下文件夹：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("- react-server        # 创建自定义SSR流\n- react-client        # 创建自定义的流\n- react-fetch         # 用于数据请求\n- react-interactions  # 用于测试交互相关的内部特性，比如React的事件模型\n- react-reconciler    # Reconciler的实现，你可以用他构建自己的Renderer\n")])])]),a("h3",{attrs:{id:"辅助包的文件夹"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#辅助包的文件夹"}},[e._v("#")]),e._v(" 辅助包的文件夹")]),e._v(" "),a("p",[a("code",[e._v("React")]),e._v("将一些辅助功能形成单独的包。包括如下文件夹：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("- react-is       # 用于测试组件是否是某类型\n- react-client   # 创建自定义的流\n- react-fetch    # 用于数据请求\n- react-refresh  # “热重载”的React官方实现\n")])])]),a("h3",{attrs:{id:"react-reconciler文件夹"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-reconciler文件夹"}},[e._v("#")]),e._v(" "),a("a",{attrs:{href:"https://github.com/facebook/react/tree/master/packages/react-reconciler",target:"_blank",rel:"noopener noreferrer"}},[e._v("react-reconciler"),a("OutboundLink")],1),e._v("文件夹")]),e._v(" "),a("p",[e._v("我们需要重点关注"),a("strong",[e._v("react-reconciler")]),e._v("，在接下来源码学习中 80%的代码量都来自这个包。")]),e._v(" "),a("p",[e._v("虽然他是一个实验性的包，内部的很多功能在正式版本中还未开放。但是他一边对接"),a("strong",[e._v("Scheduler")]),e._v("，一边对接不同平台的"),a("strong",[e._v("Renderer")]),e._v("，构成了整个 React16 的架构体系。")])])}),[],!1,null,null,null);t.default=s.exports}}]);