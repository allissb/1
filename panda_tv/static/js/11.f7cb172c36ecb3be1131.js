webpackJsonp([11], {
	"8EHJ": function(t, s, i) {
		"use strict";
		Object.defineProperty(s, "__esModule", {
			value: !0
		});
		var e = {
			render: function() {
				var t = this,
					s = t.$createElement,
					i = t._self._c || s;
				return i("li", {
					staticClass: "stars-list",
					staticStyle: {
						float: "left",
						"list-style": "none",
						position: "relative",
						width: "245px"
					}
				}, [i("a", {
					attrs: {
						href: "javascript:void(0);",
						"data-pdt-ele": t.item.id
					}
				}, [i("div", {
					staticClass: "shuffer-stars"
				}, [i("img", {
					staticClass: "thumb-img thumb-img-lazy",
					attrs: {
						src: t.item.src
					}
				}), t._v(" "), i("div", {
					staticClass: "cover"
				}), t._v(" "), i("div", {
					staticClass: "shuffer-line"
				}), t._v(" "), i("div", {
					staticClass: "stars-info"
				}, [i("div", {
					staticClass: "name"
				}, [t._v(t._s(t.item.name))]), t._v(" "), i("div", {
					staticClass: "intro"
				}, [t._v(t._s(t.item.title))])])])])])
			},
			staticRenderFns: []
		};
		var a = i("VU/8")({
			props: ["item"]
		}, e, !1, function(t) {
			i("t8oA")
		}, null, null);
		s.default = a.exports
	},
	t8oA: function(t, s) {}
});//# sourceMappingURL=11.f7cb172c36ecb3be1131.js.map