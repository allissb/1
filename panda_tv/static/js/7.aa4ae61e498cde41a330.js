webpackJsonp([7], {
	"5kZW": function(t, i, a) {
		"use strict";
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var s = {
				data: function() {
					return {
						list: [{
							id: 1,
							src: "static/img/wrap/5/1.web.png",
							title: "金曲歌王",
							name: "林俊杰",
							num: "0"
						}, {
							id: 2,
							src: "static/img/wrap/5/2.web.png",
							title: "国民女神",
							name: "Angelababy",
							num: "0"
						}, {
							id: 3,
							src: "static/img/wrap/5/3.web.png",
							title: "篮球巨星",
							name: "孙悦Qtip",
							num: "0"
						}, {
							id: 4,
							src: "static/img/wrap/5/4.web.png",
							title: "爱你哟仙仙",
							name: "baby半仙",
							num: "0"
						}, {
							id: 5,
							src: "static/img/wrap/5/5.web.png",
							title: "脏王之王",
							name: "王师傅",
							num: "0"
						}, {
							id: 6,
							src: "static/img/wrap/5/6.web.png",
							title: "IG战队中单",
							name: "IG.Rookie",
							num: "0"
						}, {
							id: 7,
							src: "static/img/wrap/5/7.web.png",
							title: "IG世界冠军上单",
							name: "Panda丶TheShy",
							num: "0"
						}, {
							id: 8,
							src: "static/img/wrap/5/8.web.png",
							title: "世界冠军上单",
							name: "iG_Duke",
							num: "0"
						}, {
							id: 5,
							src: "static/img/wrap/5/9.web.png",
							title: "金牌主持",
							name: "暄哥",
							num: "0"
						}, {
							id: 5,
							src: "static/img/wrap/5/10.web.png",
							title: "最强武器大师",
							name: "贾克虎丶虎神",
							num: "0"
						}, {
							id: 5,
							src: "static/img/wrap/5/11.web.png",
							title: "最美歌姬星妈",
							name: "Igxingsu",
							num: "0"
						}, {
							id: 5,
							src: "static/img/wrap/5/12.web.png",
							title: "心大集团",
							name: "苏C皮蛋",
							num: "0"
						}, {
							id: 5,
							src: "static/img/wrap/5/13.web.png",
							title: "鼠大王",
							name: "鼠大王",
							num: "0"
						}, {
							id: 5,
							src: "static/img/wrap/5/14.web.png",
							title: "南枪李锦",
							name: "李锦",
							num: "0"
						}, {
							id: 5,
							src: "static/img/wrap/5/15.web.png",
							title: "麦克李",
							name: "JamLee",
							num: "0"
						}, {
							id: 5,
							src: "static/img/wrap/5/16.web.png",
							title: "岛田老叉",
							name: "LaoX2333",
							num: "0"
						}, {
							id: 5,
							src: "static/img/wrap/5/17.web.png",
							title: "百变歌者",
							name: "Mars毒药",
							num: "0"
						}],
						active: [" transform:translateX(0px)", "transform:translateX(-980px)", "transform:translateX(-1400px)"],
						current: 0
					}
				},
				methods: {
					nex: function() {
						2 == this.current ? this.current = 2 : this.current += 1
					},
					pre: function() {
						0 == this.current ? this.current = 0 : this.current -= 1
					}
				},
				components: {
					"stat-li": function() {
						return a.e(13).then(a.bind(null, "97Ey"))
					}
				}
			},
			e = {
				render: function() {
					var t = this,
						i = t.$createElement,
						a = t._self._c || i;
					return a("div", {
						staticClass: "index-pandastars",
						attrs: {
							id: "five"
						}
					}, [a("div", {
						staticClass: "bw"
					}, [a("div", {
						staticClass: "stars-title"
					}), t._v(" "), a("div", {
						staticClass: "stars"
					}, [a("div", {
						staticClass: "stars-wall"
					}, [a("div", {
						staticClass: "bx-wrapper",
						staticStyle: {
							"max-width": "1540px"
						}
					}, [a("div", {
						staticClass: "bx-viewport",
						staticStyle: {
							width: "100%",
							overflow: "hidden",
							position: "relative",
							height: "150px"
						}
					}, [a("ul", {
						staticClass: "stars-lists clearfix",
						staticStyle: {
							width: "17215%",
							position: "relative",
							transition: "all 1s ease-in",
							"-webkit-transition": "all 1s ease-in",
							"-ms-transition": "all 1s ease-in",
							"-o-transition": "all 1s ease-in"
						},
						style: t.active[t.current]
					}, t._l(t.list, function(t, i) {
						return a("stat-li", {
							key: i,
							attrs: {
								item: t
							}
						})
					}), 1)])])]), t._v(" "), a("div", {
						staticClass: "arrows"
					}, [0 != t.current ? a("div", {
						staticClass: "arrow arrow-left",
						on: {
							click: t.pre
						}
					}, [a("a", {
						staticClass: "bx-prev disabled",
						attrs: {
							href: "javascript:void(0);"
						}
					})]) : t._e(), t._v(" "), 2 != t.current ? a("div", {
						staticClass: "arrow arrow-right",
						on: {
							click: t.nex
						}
					}, [a("a", {
						staticClass: "bx-next",
						attrs: {
							href: "javascript:void(0);"
						}
					})]) : t._e()])])])])
				},
				staticRenderFns: []
			};
		var n = a("VU/8")(s, e, !1, function(t) {
			a("6xuM")
		}, null, null);
		i.default = n.exports
	},
	"6xuM": function(t, i) {}
});//# sourceMappingURL=7.aa4ae61e498cde41a330.js.map