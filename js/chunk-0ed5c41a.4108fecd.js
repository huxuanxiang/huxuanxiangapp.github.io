(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ed5c41a"],{"861c":function(s,t,e){"use strict";var a=e("9f68"),i=e.n(a);i.a},"9f68":function(s,t,e){},dcc9:function(s,t,e){"use strict";e.r(t);var a=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"codelogin"},[s._m(0),e("div",{staticClass:"loding_loding"},[e("div",[e("div",{ref:"div1",staticClass:"inp"},[e("input",{directives:[{name:"model",rawName:"v-model",value:s.ss,expression:"ss"}],attrs:{placeholder:"请输入手机号"},domProps:{value:s.ss},on:{input:function(t){t.target.composing||(s.ss=t.target.value)}}})]),e("div",{ref:"div2",staticClass:"inp"},[e("input",{directives:[{name:"model",rawName:"v-model",value:s.ss1,expression:"ss1"}],attrs:{placeholder:"请输入密码"},domProps:{value:s.ss1},on:{input:function(t){t.target.composing||(s.ss1=t.target.value)}}})]),e("div",{staticClass:"loding_loding_Registration"},[e("div",{on:{click:s.password}},[s._v("找回密码")]),e("div",{on:{click:s.reg}},[s._v("注册/验证码登录")])]),e("button",{staticClass:"btn",on:{click:s.dlu}},[s._v("登录")])])])])},i=[function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"loding_img"},[e("img",{attrs:{src:"https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019pILfAg7Avr1567732916.png"}})])}],o={data:function(){return{ss:"",ss1:""}},methods:{password:function(){this.$router.push("/qrgPassword")},reg:function(){this.$router.push("/qrgBoarding")},dlu:function(){var s=this;this.$http.post("/api/app/login",{mobile:this.ss,password:this.ss1,type:1}).then((function(t){console.log(t),window.localStorage.setItem("remember_token",t.data.data.remember_token),window.localStorage.setItem("mobile",t.data.data.mobile),200==t.data.code?s.$router.push({path:"/Czp/Czp_E1"}):alert("账号密码不正确")})).catch((function(s){console.log(s+"报错了")}))}}},n=o,r=(e("861c"),e("9ca4")),c=Object(r["a"])(n,a,i,!1,null,"f51bedba",null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-0ed5c41a.4108fecd.js.map