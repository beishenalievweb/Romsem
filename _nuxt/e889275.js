(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{758:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r(9),c=(r(44),r(28),r(8),r(50),r(11),r(12),r(3),r(13),r(10),r(14),r(36));function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={data:function(){return{loaded:!1}},head:function(){return{title:this.name,meta:[{hid:"description",name:"description",content:this.description}]}},scrollToTop:!1,fetch:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fetchDish(e.$route.params.dishId);case 2:return data=t.sent,e.loaded=!0,t.abrupt("return",data);case 5:case"end":return t.stop()}}),t)})))()},transition:{mode:""},computed:l({},Object(c.e)("dish",["name","description"])),methods:l(l({},Object(c.b)("dish",["fetchDish"])),{},{onClose:function(){this.$router.push(this.localePath({name:"restaurant-menu-index-categoryId",params:{restaurant:this.$route.params.restaurant,categoryId:this.$route.params.categoryId}}))}})},h=r(40),component=Object(h.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.loaded?r("ProductPopup",{on:{close:e.onClose}}):e._e()}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ProductPopup:r(742).default})}}]);