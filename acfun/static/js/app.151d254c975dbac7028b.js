webpackJsonp([1], {
	"1IaT": function(t, i) {},
	"C/oB": function(t, i) {},
	NHnr: function(t, i, M) {
		"use strict";
		Object.defineProperty(i, "__esModule", {
			value: !0
		});
		var N = M("7+uW"),
			s = (M("j1ja"), {
				data: function() {
					return {
						max: 1,
						show_list: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
						top_lists: ["首页", "AC正义", "番剧", "动画", "音乐", "舞蹈·偶像", "游戏", "娱乐", "科技", "影视", "体育", "鱼塘", "文章"],
						top_child: [
							["新华社现场云", "中国网", "环球时报", "小央视", "法治进行时", "新青年工作室", "中国日报"],
							["TV动画", "剧场动画", "国产动画", "番剧列表"],
							["动画综合", "短篇动画", "MAD·AMV", "MMD·3D"],
							["原唱翻唱", "演奏乐器", "综合音乐", "音乐选集", "Vocaload"],
							["宅舞", "综合舞蹈", "偶像", "造型"],
							["主机单机", "网络游戏", "电子竞技", "英雄联盟", "手机游戏", "桌游卡牌", "Mugen", "游戏中心"],
							["生活娱乐", "鬼畜调教", "萌宠", "美食", "娱乐圈"],
							["科技制造", "人文科普", "汽车", "数码", "演讲公告", "广告"],
							["预告花絮", "电影杂谈", "剧透社", "综艺show", "纪实短片"],
							["综合体育", "足球", "搏击健身", "极限竞速", "法治进行时", "新青年工作室", "中国日报"],
							["普法安全", "国防军事", "历史", "新鲜事正能量", "法治进行时", "新青年工作室", "中国日报"],
							["综合", "生活情感", "游戏", "涂涂画画", "动漫文化"]
						]
					}
				},
				methods: {
					show_child: function(t) {
						if(this.show_list[t - 1]) {
							for(var i in this.show_list) this.$set(this.show_list, i, 1);
							this.$set(this.show_list, t - 1, 2)
						}
						this.max = 2
					},
					clert: function() {
						var t = this;
						setTimeout(function() {
							for(var i in t.show_list) t.$set(t.show_list, i - 1, 1), t.max = 1
						}, 1e3)
					}
				}
			}),
			g = {
				render: function() {
					var t = this,
						i = t.$createElement,
						M = t._self._c || i;
					return M("div", {
						staticClass: "header"
					}, [t._m(0), t._v(" "), M("div", {
						staticClass: "header-sec",
						on: {
							mouseleave: t.clert
						}
					}, [M("div", {
						staticClass: "wp",
					}, [M("div", {
						staticClass: "s_one",
					}, [t._l(t.top_lists, function(i, N) {
						return M("div", {
							staticClass: "s_two",
							attrs: {
								id: "top_list"
							}
						}, [M("a", {
							ref: "re_" + N,
							refInFor: !0,
							staticClass: "lis act",
							on: {
								mouseover: function(i) {
									return t.show_child(N)
								}
							}
						}, [t._v("\n\t\t\t\t\t\t" + t._s(i) + "\n\t\t\t\t\t")])])
					}), t._v(" "), t._m(1)], 2)]), t._v(" "), M("div", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: 2 == t.max,
							expression: "max==2"
						}],
						staticClass: "fa",
					}, [M("div", {
						staticClass: "wp",
					}, [M("div", {
						staticClass: "fa"
					}, t._l(t.top_child, function(i, N) {
						return M("div", {
							directives: [{
								name: "show",
								rawName: "v-show",
								value: 2 == t.show_list[N + 1],
								expression: "show_list[index+1]==2"
							}],
							staticClass: "thr_li",
							style: {
								left: 50 * N + "px"
							}
						}, t._l(i, function(i) {
							return M("div", {
								staticClass: "child_li",
							}, [M("a", {
							}, [t._v(t._s(i))])])
						}), 0)
					}), 0)])])])])
				},
				staticRenderFns: [function() {
					var t = this,
						i = t.$createElement,
						M = t._self._c || i;
					return M("div", {
						staticClass: "header-top"
					}, [M("div", {
						staticClass: "wp clearfix header-top-con"
					}, [M("div", {
						staticClass: "one"
					}, [M("div", {
						staticClass: "acfun li",
					}, [M("a", {
						attrs: {
							href: "javascript:void(0)"
						}
					})]), t._v(" "), M("div", {
						staticClass: "youxi li",
					}, [M("div", {
						staticClass:'acfun lai',
					}), t._v("\n\t\t\t\t\t游戏中心\n\t\t\t\t")]), t._v(" "), M("div", {
						staticClass: "zhoubian li",
					}, [M("div", {
						staticClass:"acfun laa",
					}), t._v("\n\t\t\t\t\t周边商城\n\t\t\t\t")])]), t._v(" "), M("div", {
						staticClass: "four",
					}, [M("div", {
						staticClass: "sign li",
					}, [M("div", {
						staticClass: "sign_in",
					}, [t._v("\n\t\t\t\t\t\t登录/注册\n\t\t\t\t\t")])]), t._v(" "), M("div", {
						staticClass: "xx li",
					}, [M("div", {
						staticClass: "xx_in",
					})]), t._v(" "), M("div", {
						staticClass: "ls li",
					}, [M("div", {
						staticClass: "ls_in",
					})]), t._v(" "), M("div", {
						staticClass: "tg li",
					}, [M("div", {
						staticClass: "tg_in",
					})]), t._v(" "), M("div", {
						staticClass: "sc li",
					}, [M("div", {
						staticClass: "sc_in",
					})])]), t._v(" "), M("div", {
						staticClass: "thr",
					}, [M("div", {
						staticClass:"thr-div",
					}), t._v(" "), M("div", {
						staticClass: "li",
					}, [t._v("\n\t\t\t\t\t下载客户端\n\t\t\t\t")])]), t._v(" "), M("div", {
						staticClass: "nav_search",
					}, [M("div", {
						attrs: {
							id: "aaa"
						}
					}, [M("input", {
						attrs: {
							type: "text",
							value: "",
							placeholder: "AcFun GKD News —— 重拳出击"
						}
					})]), t._v(" "), M("div", {
						staticClass: "search",
					})])])])
				}, function() {
					var t = this.$createElement,
						i = this._self._c || t;
					return i("li", {
						staticClass: "top_last act",
					}, [i("div", {
					}), this._v(" "), i("a", {
					}, [this._v("全站排行榜")])])
				}]
			};
		var D = M("VU/8")(s, g, !1, function(t) {
				M("Xpuc")
			}, null, null).exports,
			e = M("mvHQ"),
			c = M.n(e),
			a = {
				data: function() {
					return {
						leng: 0,
						a: 0,
						b: 0,
						c: 0,
						le: 0,
						it: "最新发表",
						left_list: ["one", "two"],
						show_a: !1,
						bot_lis: ["最新发表", "最热文章", "最多评论"],
						list: [{
							pl: 1,
							title: "呜呜呜，我哭了",
							yc: !0,
							tex: "没想到还能查得到！！当年的AcFun战队最后一届队员？？15年改名2144？ （好像",
							bita: "UP：白Sir",
							bitb: "2019年06月18日 02:31:21",
							bitc: 412,
							bitd: "英雄联盟",
							img: "https://imgs.aixifan.com/FvlorrA85YJEt5q3GBAZZjyRbtUU?imageView2/1/w/200/h/110"
						}, {
							pl: 0,
							title: "6月17日滔搏电竞TES赛后新闻发布会",
							yc: !1,
							tex: "6月18日滔搏电竞TES赛后新闻发布会",
							bita: "UP：暮色漫烟雨",
							bitb: "2019年06月18日 02:11:55",
							bitc: 213,
							bitd: "英雄联盟",
							img: "https://imgs.aixifan.com/FvIqC5FYELZHWWQal45q7TopCCFz?imageView2/1/w/200/h/110"
						}, {
							pl: 2,
							title: "小游戏推荐：被诅咒的宝石2",
							yc: !0,
							tex: "个人比较喜欢的小游戏推荐。",
							bita: "UP：xuexingjiyi",
							bitb: "2019年06月18日 01:32:57",
							bitc: 444,
							bitd: "游戏杂谈",
							img: "https://imgs.aixifan.com/Fu_XMqfKTeAX0Z5Hz5jpP6ZZZjMZ?imageView2/1/w/200/h/110"
						}, {
							pl: 29,
							title: "【英雄联盟】LGD打野选手condi涉嫌参与菠菜",
							yc: !0,
							tex: "以下为康帝个人微博原文： 在这里和大家解释一下我为什么不是今天的首发，我因好奇一时冲",
							bita: "小米科技有限责任",
							bitb: "2019年06月18日 01:32:39",
							bitc: 1324,
							bitd: "英雄联盟",
							img: ""
						}, {
							pl: 3,
							title: "Condi替补是因为假赛？前LOL女解说小彤爆料：有人损失了",
							yc: !1,
							tex: "6月18日凌晨，LOL官方放出了今日队伍的首发名单，其中LGD战队的打野Condi成了",
							bita: "UP：大话小撸圈",
							bitb: "2019年06月18日 01:32:02",
							bitc: 156,
							bitd: "英雄联盟",
							img: "https://imgs.aixifan.com/FhuxeNdb4Hvl1rctkfUuwXaQOgUx?imageView2/1/w/200/h/110"
						}, {
							pl: 14,
							title: "LOL开黑！好同志想找组织！",
							yc: !0,
							tex: "最近要离职了，准备玩一段时间，冲分又冲不动了，那就开黑快乐下吧。",
							bita: "UP：约克逊是个郡y",
							bitb: "2019年06月18日 00:43:58",
							bitc: 1097,
							bitd: "英雄联盟",
							img: ""
						}, {
							pl: 11,
							title: "【DNF】周年庆登录奖励新增黄金装备调整箱",
							yc: !1,
							tex: "11周年登陆活动奖励中，新增了11周年纪念帽子装扮与黄金品级调整箱。活动会在6月22号开启，当天登",
							bita: "UP：花卷真的很好吃",
							bitb: "2019年06月18日 00:17:22",
							bitc: 1523,
							bitd: "游戏杂谈",
							img: ""
						}, {
							pl: 0,
							title: "【LOL】打团像一支军队 狼行已成RNG的防弹衣",
							yc: !1,
							tex: "RNG和VG的这场Bo3比赛，其结果不会让人太意外，因为双方在硬实力上有一定的差距，而且在游戏经",
							bita: "UP：花卷真的很好吃",
							bitb: "2019年06月18日 00:15:47",
							bitc: 1111,
							bitd: "英雄联盟",
							img: ""
						}, {
							pl: 20,
							title: "【悼文向】那些游戏，我玩过后来就黄了（二）",
							yc: !0,
							tex: "话说估计没人猜第三个写什么吧。",
							bita: "UP：手速过慢不配拥有",
							bitb: "2019年06月18日 00:12:37",
							bitc: 1231,
							bitd: "游戏杂谈",
							img: "https://imgs.aixifan.com/FlSuvL5fFV-TxWSgmBgYB7ATsHE6?imageView2/1/w/200/h/110"
						}, {
							pl: 0,
							title: "【DOTA自走棋】人机相关",
							yc: !0,
							tex: "刚才无聊打了一把人机。苦苦支撑到54回合，人机强度骤降，满心欢喜可以看到55回合的野怪了，发现55",
							bita: "UP：莲蓉蛋黄馅",
							bitb: "2019年06月17日 23:58:25",
							bitc: 567,
							bitd: "游戏杂谈",
							img: ""
						}],
						lists: [{
							pl: 1,
							title: "呜呜呜，我哭了",
							yc: !0,
							tex: "没想到还能查得到！！当年的AcFun战队最后一届队员？？15年改名2144？ （好像",
							bita: "UP：白Sir",
							bitb: "2019年06月18日 02:31:21",
							bitc: 412,
							bitd: "英雄联盟",
							img: "https://imgs.aixifan.com/FvlorrA85YJEt5q3GBAZZjyRbtUU?imageView2/1/w/200/h/110"
						}, {
							pl: 0,
							title: "6月17日滔搏电竞TES赛后新闻发布会",
							yc: !1,
							tex: "6月18日滔搏电竞TES赛后新闻发布会",
							bita: "UP：暮色漫烟雨",
							bitb: "2019年06月18日 02:11:55",
							bitc: 213,
							bitd: "英雄联盟",
							img: "https://imgs.aixifan.com/FvIqC5FYELZHWWQal45q7TopCCFz?imageView2/1/w/200/h/110"
						}, {
							pl: 2,
							title: "小游戏推荐：被诅咒的宝石2",
							yc: !0,
							tex: "个人比较喜欢的小游戏推荐。",
							bita: "UP：xuexingjiyi",
							bitb: "2019年06月18日 01:32:57",
							bitc: 444,
							bitd: "游戏杂谈",
							img: "https://imgs.aixifan.com/Fu_XMqfKTeAX0Z5Hz5jpP6ZZZjMZ?imageView2/1/w/200/h/110"
						}, {
							pl: 29,
							title: "【英雄联盟】LGD打野选手condi涉嫌参与菠菜",
							yc: !0,
							tex: "以下为康帝个人微博原文： 在这里和大家解释一下我为什么不是今天的首发，我因好奇一时冲",
							bita: "小米科技有限责任",
							bitb: "2019年06月18日 01:32:39",
							bitc: 1324,
							bitd: "英雄联盟",
							img: ""
						}, {
							pl: 3,
							title: "Condi替补是因为假赛？前LOL女解说小彤爆料：有人损失了",
							yc: !1,
							tex: "6月18日凌晨，LOL官方放出了今日队伍的首发名单，其中LGD战队的打野Condi成了",
							bita: "UP：大话小撸圈",
							bitb: "2019年06月18日 01:32:02",
							bitc: 156,
							bitd: "英雄联盟",
							img: "https://imgs.aixifan.com/FhuxeNdb4Hvl1rctkfUuwXaQOgUx?imageView2/1/w/200/h/110"
						}, {
							pl: 14,
							title: "LOL开黑！好同志想找组织！",
							yc: !0,
							tex: "最近要离职了，准备玩一段时间，冲分又冲不动了，那就开黑快乐下吧。",
							bita: "UP：约克逊是个郡y",
							bitb: "2019年06月18日 00:43:58",
							bitc: 1097,
							bitd: "英雄联盟",
							img: ""
						}, {
							pl: 11,
							title: "【DNF】周年庆登录奖励新增黄金装备调整箱",
							yc: !1,
							tex: "11周年登陆活动奖励中，新增了11周年纪念帽子装扮与黄金品级调整箱。活动会在6月22号开启，当天登",
							bita: "UP：花卷真的很好吃",
							bitb: "2019年06月18日 00:17:22",
							bitc: 1523,
							bitd: "游戏杂谈",
							img: ""
						}, {
							pl: 0,
							title: "【LOL】打团像一支军队 狼行已成RNG的防弹衣",
							yc: !1,
							tex: "RNG和VG的这场Bo3比赛，其结果不会让人太意外，因为双方在硬实力上有一定的差距，而且在游戏经",
							bita: "UP：花卷真的很好吃",
							bitb: "2019年06月18日 00:15:47",
							bitc: 1111,
							bitd: "英雄联盟",
							img: ""
						}, {
							pl: 20,
							title: "【悼文向】那些游戏，我玩过后来就黄了（二）",
							yc: !0,
							tex: "话说估计没人猜第三个写什么吧。",
							bita: "UP：手速过慢不配拥有",
							bitb: "2019年06月18日 00:12:37",
							bitc: 1231,
							bitd: "游戏杂谈",
							img: "https://imgs.aixifan.com/FlSuvL5fFV-TxWSgmBgYB7ATsHE6?imageView2/1/w/200/h/110"
						}, {
							pl: 0,
							title: "【DOTA自走棋】人机相关",
							yc: !0,
							tex: "刚才无聊打了一把人机。苦苦支撑到54回合，人机强度骤降，满心欢喜可以看到55回合的野怪了，发现55",
							bita: "UP：莲蓉蛋黄馅",
							bitb: "2019年06月17日 23:58:25",
							bitc: 567,
							bitd: "游戏杂谈",
							img: ""
						}]
					}
				},
				mounted: function() {
					var t = this;
					this.a = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight, this.b = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop, this.c = this.a + this.b - 300, window.addEventListener("scroll", function() {
						t.a = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight, t.b = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop, t.c = t.a + t.b - 300
					}), alert("下拉增加数据")
				},
				watch: {
					left_list: function(t, i) {
						2 == t.length ? this.lists = JSON.parse(c()(this.list)) : "one" == t[0] ? this.lists = this.list.filter(function(t, i, M) {
							return "游戏杂谈" == t.bitd
						}) : "two" == t[0] ? this.lists = this.list.filter(function(t, i, M) {
							return "英雄联盟" == t.bitd
						}) : this.lists = []
					},
					c: function(t, i) {
						if(console.log(t), Math.floor(t / 1100) > this.leng)
							for(var M in this.leng = Math.floor(t / 1100), this.list) this.lists.push(this.list[M])
					}
				},
				methods: {
					filt: function(t) {
						1 == t ? (this.lists = this.list.filter(function(t, i, M) {
							return 3
						}), this.le = 0) : (this.lists = this.list.filter(function(t, i, M) {
							return t.yc
						}), this.le = 1)
					},
					sho: function() {
						this.show_a = !1
					},
					ch: function(t) {
						this.leng = 0, this.it = this.bot_lis[t], this.show_a = !1, 1 == t ? (this.lists = JSON.parse(c()(this.list)), this.lists.sort(function(t, i) {
							return i.bitc - t.bitc
						})) : 2 == t ? (this.lists = JSON.parse(c()(this.list)), this.lists.sort(function(t, i) {
							return i.pl - t.pl
						})) : this.lists = JSON.parse(c()(this.list))
					}
				}
			},
			j = {
				render: function() {
					var t = this,
						i = t.$createElement,
						M = t._self._c || i;
					return M("div", {
						staticClass: "main_right"
					}, [M("div", {
						staticClass: "right_title",
					}, [t._v("\n\t\t游戏\n\t")]), t._v(" "), M("div", {
						staticClass: "second clearfix"
					}, [M("div", {
						staticClass: "right_one_list lili"
					}, [t._m(0), t._v(" "), M("div", {
						staticClass: "name"
					}, [t._v("\n\t\t\t\t游戏杂谈 "), M("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.left_list,
							expression: "left_list"
						}],
						attrs: {
							type: "checkbox",
							name: "",
							id: "",
							value: "one"
						},
						domProps: {
							checked: Array.isArray(t.left_list) ? t._i(t.left_list, "one") > -1 : t.left_list
						},
						on: {
							change: function(i) {
								var M = t.left_list,
									N = i.target,
									s = !!N.checked;
								if(Array.isArray(M)) {
									var g = t._i(M, "one");
									N.checked ? g < 0 && (t.left_list = M.concat(["one"])) : g > -1 && (t.left_list = M.slice(0, g).concat(M.slice(g + 1)))
								} else t.left_list = s
							}
						}
					})])]), t._v(" "), M("div", {
						staticClass: "right_sec_list lili"
					}, [t._m(1), t._v(" "), M("div", {
						staticClass: "name"
					}, [t._v("\n\t\t\t\t英雄联盟 \n\t\t\t\t\t"), M("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.left_list,
							expression: "left_list"
						}],
						attrs: {
							type: "checkbox",
							value: "two"
						},
						domProps: {
							checked: Array.isArray(t.left_list) ? t._i(t.left_list, "two") > -1 : t.left_list
						},
						on: {
							change: function(i) {
								var M = t.left_list,
									N = i.target,
									s = !!N.checked;
								if(Array.isArray(M)) {
									var g = t._i(M, "two");
									N.checked ? g < 0 && (t.left_list = M.concat(["two"])) : g > -1 && (t.left_list = M.slice(0, g).concat(M.slice(g + 1)))
								} else t.left_list = s
							}
						}
					})])])]), t._v(" "), M("div", {
						staticClass: "thr",
					}, [M("div", {
						staticClass: "thr_one",
					}, [M("div", {
						staticClass:"keke",
						on: {
							click: function(i) {
								return t.filt(1)
							}
						}
					}, [t._v("\n\t\t\t\t综合\n\t\t\t")]), t._v(" "), M("div", {
						staticClass:"keke",
						on: {
							click: function(i) {
								return t.filt(2)
							}
						}
					}, [t._v("\n\t\t\t\t原创\n\t\t\t")]), t._v(" "), M("div", {
						staticClass: "bottom_boder",
						style: {
							left: 74 * t.le + "px"
						}
					})]), t._v(" "), M("div", {
						staticClass: "left_thr_view",
						on: {
							mouseleave: t.sho,
							mouseover: function(i) {
								t.show_a = "true"
							}
						}
					}, [t._v("\n\t\t\t" + t._s(t.it) + "\n\t\t\t"), M("div", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: t.show_a,
							expression: "show_a"
						}],
						staticClass: "left_thr_list",
					}, t._l(t.bot_lis, function(i, N) {
						return M("div", {
							staticClass: "a",
							on: {
								click: function(i) {
									return t.ch(N)
								}
							}
						}, [t._v("\n\t\t\t\t\t" + t._s(i) + "\n\t\t\t\t")])
					}), 0)])]), t._v(" "), M("div", {
						staticClass: "four",
					}, t._l(t.lists, function(i) {
						return M("div", {
							staticClass: "item clearfix",
						}, [M("div", {
							staticClass: "for_lef",
						}, [M("p", {
							staticClass: "for_one",
						}, [t._v(t._s(i.pl))]), t._v(" "), M("p", {
							staticClass: "for_two",
						}, [t._v("评论")])]), t._v(" "), M("div", {
							staticClass: "for_mid",
						}, [M("div", {
							staticClass: "for_title",
						}, [M("a", [t._v(t._s(i.title))]), t._v(" "), i.yc ? M("span", {
							staticClass: "yc",
						}, [t._v("\n\t\t\t\t\t\t原创\n\t\t\t\t\t")]) : t._e()]), t._v(" "), M("p", {
							staticClass: "tex",
						}, [t._v("\n\t\t\t\t\t" + t._s(i.tex) + "\n\t\t\t\t")]), t._v(" "), M("div", {
							staticClass: "for_bot",
						}, [M("a", {
							attrs: {
								href: "javascript:void(0)"
							}
						}, [t._v(t._s(i.bita))]), t._v(" " + t._s(i.bitb) + " " + t._s(i.bitc) + "\n\t\t\t\t")]), t._v(" "), M("div", {
							staticClass: "laizi",
						}, [M("span", {
							staticStyle: {
								color: "#979797"
							}
						}, [t._v("来自：")]), t._v(t._s(i.bitd) + "\n\t\t\t\t")])]), t._v(" "), "" != i.img ? M("div", {
							staticClass: "for_img",
						}, [M("img", {
							attrs: {
								src: i.img
							}
						})]) : t._e()])
					}), 0)])
				},
				staticRenderFns: [function() {
					var t = this.$createElement,
						i = this._self._c || t;
					return i("a", {
						attrs: {
							href: "javascript:void(0)"
						}
					}, [i("img", {
						attrs: {
							src: "http://imgs.aixifan.com/cms/2017-12-05/1512447129477.jpg?imageView2/1/w/50/h/50"
						}
					})])
				}, function() {
					var t = this.$createElement,
						i = this._self._c || t;
					return i("a", {
						attrs: {
							href: "javascript:void(0)"
						}
					}, [i("img", {
						attrs: {
							src: "http://imgs.aixifan.com/cms/2018-11-09/1541748419688.jpg?imageView2/1/w/50/h/50"
						}
					})])
				}]
			};
		var T = {
			render: function() {
				var t = this,
					i = t.$createElement,
					M = t._self._c || i;
				return M("div", {
					staticClass: "a-column-right"
				}, [t._m(0), t._v(" "), M("div", {
					staticClass: "recom-list clearfix"
				}, t._l(t.list, function(i) {
					return M("div", {
						staticClass: "recom-item fl clearfix"
					}, [M("a", {
						attrs: {
							href: "javascript:void(0)"
						}
					}, [M("img", {
						attrs: {
							src: i.img
						}
					})]), t._v(" "), M("div", {
						staticClass: "rig",
					}, [M("div", {
						staticClass: "t",
					}, [t._v("\n\t\t\t\t\t" + t._s(i.title) + "\n\t\t\t\t")]), t._v(" "), M("div", {
						staticClass: "b",
					}, [t._v("\n\t\t\t\t\t文章:" + t._s(i.num) + "\n\t\t\t\t")])])])
				}), 0)])
			},
			staticRenderFns: [function() {
				var t = this.$createElement,
					i = this._self._c || t;
				return i("div", {
					staticClass: "recom-head",
				}, [i("div", {
					staticClass: "title",
				}, [this._v("\n\t\t\t领域推荐\n\t\t")])])
			}]
		};
		var l = {
				components: {
					"ac-header": D,
					"ac-left": M("VU/8")(a, j, !1, function(t) {
						M("bo9B")
					}, null, null).exports,
					"ac-right": M("VU/8")({
						data: function() {
							return {
								list: [{
									img: "http://imgs.aixifan.com/cms/2018-08-16/1534387743663.jpg?imageView2/1/w/50/h/50",
									title: "吐槽",
									num: 29773
								}, {
									img: "http://imgs.aixifan.com/cms/2018-11-07/1541563114114.png?imageView2/1/w/50/h/50",
									title: "买买买",
									num: 2089
								}, {
									img: "http://imgs.aixifan.com/cms/2017-12-07/1512619959968.jpg?imageView2/1/w/50/h/50",
									title: "涂鸦",
									num: 3934
								}, {
									img: "http://imgs.aixifan.com/cms/2018-11-09/1541748419688.jpg?imageView2/1/w/50/h/50",
									title: "英雄联盟",
									num: 16423
								}, {
									img: "http://imgs.aixifan.com/cms/2019-02-19/1550568196630.jpg?imageView2/1/w/50/h/50",
									title: "大熊猫设计",
									num: 386
								}, {
									img: "http://imgs.aixifan.com/cms/2017-12-05/1512449889793.jpg?imageView2/1/w/50/h/50",
									title: "影视",
									num: 3423
								}]
							}
						}
					}, T, !1, function(t) {
						M("C/oB")
					}, null, null).exports
				}
			},
			I = {
				render: function() {
					var t = this.$createElement,
						i = this._self._c || t;
					return i("div", {
						staticClass: "whole"
					}, [i("ac-header"), this._v(" "), i("div", {
						staticClass: "ac_main clearfix"
					}, [i("ac-left"), this._v(" "), i("ac-right")], 1)], 1)
				},
				staticRenderFns: []
			};
		var x = M("VU/8")(l, I, !1, function(t) {
			M("1IaT")
		}, null, null).exports;
		N.a.config.productionTip = !1, new N.a({
			el: "#app",
			template: "<whole />",
			components: {
				whole: x
			}
		})
	},
	Xpuc: function(t, i) {},
	bo9B: function(t, i) {}
}, ["NHnr"]);//# sourceMappingURL=app.151d254c975dbac7028b.js.map