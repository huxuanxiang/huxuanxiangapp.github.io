(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74694ea2"],{"3c75":function(e,t,a){"use strict";var r=a("7991"),n=a.n(r);n.a},7991:function(e,t,a){},d848:function(e,t,a){e.exports=a.p+"img/zanwu.0d284c2e.png"},e075:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"TeacherMsg"}},[r("div",{staticClass:"teacher-head"},[r("van-nav-bar",{attrs:{id:"nav-bar",title:"讲师详情","left-arrow":"",border:e.bool},on:{"click-left":e.onClickLeft}})],1),r("div",{staticClass:"teacher-hot"},[r("div",{staticClass:"teacher-hot-div"},[r("img",{attrs:{src:e.TeacherHeader.avatar,alt:""}}),r("div",[r("p",[r("span",[e._v(e._s(e.TeacherHeader.real_name))]),r("font",[e._v(e._s(e.TeacherHeader.level_name))])],1),r("p",[e._v(" "+e._s(e._f("sex1")(e.sex))+" "),r("span",[e._v(e._s(e.TeacherHeader.teach_age)+"年教龄")])])]),r("button",{class:1==e.guanzhuNum?"yiguanzhuColor":"guanzhuClor",on:{click:e.follow}},[e._v(e._s(e._f("followIndex")(e.guanzhuNum)))])])]),r("div",{staticClass:"teacher-content"},[r("div",[r("van-tabs",{attrs:{animated:"","line-width":"20px"}},[r("van-tab",{attrs:{title:"讲师介绍"}},[r("div",{staticClass:"teacher-text"},[r("ul",[e._l(e.TeacherList.attr,(function(t,a){return r("li",{key:a},["年级"!=t.attr_name&&"学科"!=t.attr_name?[r("span",[e._v(e._s(t.attr_name))]),e._l(t.attr_value,(function(t,a){return r("font",{key:a},[e._v(e._s(t.attr_value_name))])}))]:e._e()],2)})),r("li",[r("span",[e._v("老师介绍")]),r("font",[e._v(e._s(e.TeacherList.intro))])],1)],2)])]),r("van-tab",{attrs:{title:"主讲课程"}},[r("div",{staticClass:"pan-good"},e._l(e.Curriculum,(function(t,a){return r("div",{key:a,staticClass:"pan-good-content"},[r("div",{staticClass:"pan-good-content-wrapper"},[r("div",[e._v(e._s(t.title))]),r("div",[e._v("共"+e._s(t.total_periods)+"课时")]),e._l(t.teachers_list,(function(t,a){return r("div",{key:a},[r("img",{attrs:{src:t.teacher_avatar,alt:""}}),r("span",[e._v(e._s(t.teacher_name))])])})),r("div",[r("div",{staticClass:"wrapper-apply"},[e._v(e._s(t.sales_num)+"人已报名")]),r("div",{class:"免费"==t.price?"wrapper-offer-red":"wrapper-offer"},[e._v(e._s(e._f("IndexHomePrice")(t.price)))])])],2)])})),0)]),r("van-tab",{attrs:{title:"学院评价"}},[e.TeacherAppraise.length>0?r("div"):r("div",{staticClass:"Appraise-no"},[r("div",{staticClass:"Appraise-img"},[r("img",{attrs:{src:a("d848"),alt:""}}),r("p",[e._v("暂无数据")])])])])],1)],1)]),r("div",{staticClass:"SendYuyue"},[e._v(" 立即预约 ")])])},n=[],s=(a("20a5"),a("b449"),a("9666")),i={name:"TeacherMsg",data:function(){return{bool:!1,id:this.$route.query.id,TeacherList:[],TeacherHeader:[],Curriculum:[],TeacherAppraise:[],guanzhuText:"",guanzhuNum:-1,sex:""}},filters:{sex1:function(e){return 0==e?"男":1==e.sex?"女":e},IndexHomePrice:function(e){return 0==e?"免费":"$:".concat((e/100).toFixed(2))},followIndex:function(e){return 1==e?"已关注":2==e?"关注":"请登录"}},created:function(){this.message(),this.teacherHead(),this.techerClass()},mounted:function(){var e=this;this.http({url:"/api/app/teacher/mainCourse",method:"post",data:{limit:10,page:1,teacher_id:this.id}}).then((function(t){e.Curriculum=t.data.data.list})),this.http({url:"/api/app/courseComment",method:"post",data:{id:this.id,limit:10,page:1}}).then((function(t){e.TeacherAppraise=t.data.data.list}))},methods:{message:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.http.get("/api/app/teacher/info/"+e.id);case 2:a=t.sent,r=a.data,e.TeacherList=r.data,console.log(r.data);case 6:case"end":return t.stop()}}),t)})))()},teacherHead:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.http.get("/api/app/teacher/"+e.id);case 2:a=t.sent,r=a.data,e.TeacherHeader=r.data.teacher,0!=r.data.flag&&(e.guanzhuNum=r.data.flag);case 6:case"end":return t.stop()}}),t)})))()},follow:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.http.get("/api/app/teacher/collect/"+e.id);case 2:a=t.sent,r=a.data,console.log(r),200==r.code?e.guanzhuNum=r.data.flag:alert(r.msg),1==e.guanzhuNum?e.$toast.success("已关注"):0==e.guanzhuNum&&e.$toast.success("已取消");case 7:case"end":return t.stop()}}),t)})))()},techerClass:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.http.get("/api/app/teacher/mainCourse"+e.id);case 2:a=t.sent,r=a.data,console.log(r);case 5:case"end":return t.stop()}}),t)})))()},onClickLeft:function(){window.history.go(-1)}}},c=i,u=(a("3c75"),a("9ca4")),o=Object(u["a"])(c,r,n,!1,null,null,null);t["default"]=o.exports}}]);
//# sourceMappingURL=chunk-74694ea2.43981941.js.map