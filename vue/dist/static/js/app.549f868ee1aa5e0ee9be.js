webpackJsonp([1],{"1oen":function(t,e){},"41J7":function(t,e){},"8knr":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("el-button",{on:{click:function(e){return t.toPage("tetris")}}},[t._v("俄罗斯方块")]),t._v(" "),n("el-button",{on:{click:function(e){return t.toPage("card")}}},[t._v("抽卡")])],1)},staticRenderFns:[]};var r=n("VU/8")({methods:{toPage:function(t){switch(t){case"tetris":this.$router.push("/tetris");break;case"card":this.$router.push("/card")}}}},s,!1,function(t){n("qDgq")},"data-v-94485c18",null).exports,a={name:"App",components:{Home:r},methods:{}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var u=n("VU/8")(a,o,!1,function(t){n("8knr")},null,null).exports,c=n("/ocq"),h=n("Dd8w"),l=n.n(h),v={three:40,four:50,five:8,six:2},f={three:["芬","克洛丝","炎熔","米格鲁","芙蓉","卡缇","史都华德","香草","玫兰莎","安赛尔","梓兰","翎羽","安德切尔","空爆","月见夜","斑点","泡普卡"],four:["深海色","杜宾","梅","白雪","远山","流星","夜烟","末药","蛇屠箱","艾丝黛尔","猎蜂","嘉维尔","慕斯","砾","暗索","调香师","地灵","讯使","清道夫","霜叶","角峰","古米","断罪者","缠丸","阿消","红豆","杰西卡","格雷伊","苏苏洛","桃金娘","坚雷","红云","伊桑","安比尔"],five:["德克萨斯","凛冬","芙兰卡","幽灵鲨","白面鸮","普罗旺斯","蓝毒","阿米娅","赫默","临光","红","雷蛇","夜魔","天火","因陀罗","初雪","拉普兰德","华法琳","守林人","真理","狮蝎","火神","白金","陨星","梅尔","可颂","崖心","食铁兽","空","暴行","格拉尼","诗怀雅","格劳克斯","锡兰","星极","炎客","送葬人","微风","拜松","槐琥","苇草","布洛卡","灰喉","雪雉","吽"],six:["推进之王","能天使","星熊","闪灵","伊芙利特","塞雷娅","银灰","夜莺","艾雅法拉","陈","凯尔希","安洁莉娜","斯卡蒂","黑","赫拉格","麦哲伦","莫斯提马","煌","阿"]},d={data:function(){return{result:[],times:0,starNum:{three:0,four:0,five:0,six:0},odds:{three:40,four:50,five:8,six:2}}},methods:{oneDraw:function(){var t=this.randomStar(),e=f[t];this.result.unshift({star:t,name:e[this.randomNum(0,e.length-1)]}),this.starNum[t]+=1,this.times+=1,this.times>=50&&(this.odds.six+=2,this.times=0,this.changeOdds()),"six"==t&&(this.odds.six=2,this.times=0,this.changeOdds())},tenDraw:function(){for(var t=0;t<10;t++)this.oneDraw()},changeOdds:function(){var t=this.odds;if(t.six==v.six)this.odds=l()({},v);else{var e=100-v.six,n=100-t.six;for(var i in t)t[i]="six"!=i?v[i]*n/e:t[i]}},clear:function(){this.result=[],this.times=0,this.starNum={three:0,four:0,five:0,six:0},this.odds=l()({},v)},randomStar:function(){var t=this.odds,e=this.randomNum(1,100);return e<=t.six?"five":e<=t.six+t.five?"five":e<=t.six+t.five+t.four?"four":e<=t.six+t.five+t.four+t.three?"three":void 0},randomNum:function(t,e){return Math.floor(Math.random()*(e-t+1))+t}}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"draw-card"}},[n("h2",[t._v("明日方舟模拟抽卡")]),t._v(" "),n("el-button",{attrs:{type:"success",plain:""},on:{click:t.oneDraw}},[t._v("单抽")]),t._v(" "),n("el-button",{attrs:{type:"success"},on:{click:t.tenDraw}},[t._v("十连抽")]),t._v(" "),n("el-button",{attrs:{type:"info",plain:""},on:{click:t.clear}},[t._v("清空")]),t._v(" "),t.result.length>0?n("div",{staticClass:"result"},[n("h3",[t._v("抽卡结果（"+t._s(t.result.length)+" 抽）：")]),t._v(" "),n("div",{staticClass:"list"},t._l(t.result,function(e){return n("span",{key:e.id,class:e.star},[t._v("\n          "+t._s(e.name)+"、\n        ")])}),0),t._v(" "),n("h3",[t._v("3星："+t._s(t.starNum.three))]),t._v(" "),n("h3",[t._v("4星："+t._s(t.starNum.four))]),t._v(" "),n("h3",[t._v("5星："+t._s(t.starNum.five))]),t._v(" "),n("h3",[t._v("6星："+t._s(t.starNum.six))])]):t._e(),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"rule"},[e("h3",[this._v("特别须知：")]),this._v(" "),e("p",[this._v("在所有【标准寻访】中，如果连续50次没有获得6星干员，则下一次获得6星干员的概率将从原本的2%提升至4%。如果该次还没有寻访到6星干员，则下一次寻访获得6星干员的概率由4%提升到6%。依此类推，每次提高2%获得6星干员的概率，直至达到100%时必定获得6星干员。\n在任何一个【标准寻访】中，没有获得6星干员时，都会累积次数，该次数不会因为【标准寻访】的结束而清零。因为累积次数而增加的获得概率，也会应用于接下来任意一次【标准寻访】。\n")]),this._v(" "),e("h3",[this._v("注意：")]),this._v(" "),e("p",[this._v("任何时候在任意一个【标准寻访】中获得6星干员，后续在【标准寻访】中获得6星干员的概率将恢复到2%。\n")])])}]};var _=n("VU/8")(d,m,!1,function(t){n("41J7")},"data-v-2bc16a80",null).exports,p={1:"#FFB90F",2:"#FFB6C1\t",3:"#EE5C42",4:"#66CD00",5:"#FFD700",6:"#EEEE00",7:"#8DEEEE",8:"#EEC900"},x=[[[[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0]],[[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]],[[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0]],[[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]]],[[[0,2,0,0],[2,2,2,0],[0,0,0,0],[0,0,0,0]],[[0,2,0,0],[0,2,2,0],[0,2,0,0],[0,0,0,0]],[[0,0,0,0],[2,2,2,0],[0,2,0,0],[0,0,0,0]],[[0,2,0,0],[2,2,0,0],[0,2,0,0],[0,0,0,0]]],[[[3,3,3,0],[0,0,3,0],[0,0,0,0],[0,0,0,0]],[[0,3,0,0],[0,3,0,0],[3,3,0,0],[0,0,0,0]],[[3,0,0,0],[3,3,3,0],[0,0,0,0],[0,0,0,0]],[[3,3,0,0],[3,0,0,0],[3,0,0,0],[0,0,0,0]]],[[[4,4,4,0],[4,0,0,0],[0,0,0,0],[0,0,0,0]],[[4,4,0,0],[0,4,0,0],[0,4,0,0],[0,0,0,0]],[[0,0,4,0],[4,4,4,0],[0,0,0,0],[0,0,0,0]],[[4,0,0,0],[4,0,0,0],[4,4,0,0],[0,0,0,0]]],[[[5,5,0,0],[5,5,0,0],[0,0,0,0],[0,0,0,0]],[[5,5,0,0],[5,5,0,0],[0,0,0,0],[0,0,0,0]],[[5,5,0,0],[5,5,0,0],[0,0,0,0],[0,0,0,0]],[[5,5,0,0],[5,5,0,0],[0,0,0,0],[0,0,0,0]]],[[[0,7,7,0],[7,7,0,0],[0,0,0,0],[0,0,0,0]],[[7,0,0,0],[7,7,0,0],[0,7,0,0],[0,0,0,0]],[[0,7,7,0],[7,7,0,0],[0,0,0,0],[0,0,0,0]],[[7,0,0,0],[7,7,0,0],[0,7,0,0],[0,0,0,0]]],[[[8,0,0,0],[8,8,0,0],[0,8,0,0],[0,0,0,0]],[[0,8,8,0],[8,8,0,0],[0,0,0,0],[0,0,0,0]],[[8,0,0,0],[8,8,0,0],[0,8,0,0],[0,0,0,0]],[[0,8,8,0],[8,8,0,0],[0,0,0,0],[0,0,0,0]]]],g={data:function(){return{canvas:"",context:"",gameData:"",curData:[],position:{x:0,y:0}}},mounted:function(){var t=document.getElementById("canvas");if(null===t)return!1;if(t.getContext){var e=t.getContext("2d");this.canvas=t,this.context=e,this.setCanvas();for(var n=new Array,i=0;i<20;i++){n[i]=new Array;for(var s=0;s<10;s++)n[i][s]=0}this.gameData=n,this.randomSquare(),this.squareMove()}},methods:{setCanvas:function(){var t=Math.floor(window.innerHeight||document.documentElement.clientHeight),e=Math.floor(window.innerWidth||document.documentElement.clientWidth),n=this.canvas;n.height=Math.min(e,t)-140,n.width=n.height/2},updataData:function(){for(var t=this.gameData,e=this.canvas,n=this.context,i=e.height/20,s=e.width/10,r=this.position,a=this.curData,o=0;o<a.length;o++)for(var u=0;u<a[o].length;u++)this.checkValid(o,u)&&0!==a[o][u]?t[r.y+o][r.x+u]=a[o][u]:this.checkValid(o,u)||(this.pauseGame(),this.nextSquare());for(var c=0;c<20;c++)for(var h=0;h<10;h++)0!=t[c][h]?(n.fillStyle=p[t[c][h]],n.fillRect(s*h,i*c,s,i),n.strokeStyle="white",n.strokeRect(s*h,i*c,s,i)):(n.fillStyle="white",n.fillRect(s*h,i*c,s,i))},randomSquare:function(){var t=n(0,6),e=n(0,6);n(0,3);function n(t,e){return Math.floor(Math.random()*(e-t))+t}this.curData=x[e][0],this.position.x=t},clearOld:function(){for(var t=this.curData,e=this.position,n=this.gameData,i=0;i<t.length;i++)for(var s=0;s<t[i].length;s++)n[e.y+i][e.x+s]=0},count:function(t,e){var n=0;return t.find(function(t){t===e&&n++}),n},squareMove:function(){var t=this,e=this.curData;if(e.length>0)for(var n=3;n>=0;n--){var i=e[n];this.count(i,0)==i.length&&e.splice(n,1)}this.timer=setInterval(function(){t.clearOld(),t.position.y+=1,t.updataData()},100)},pauseGame:function(){var t=this.timer;t&&clearInterval(t)},nextSquare:function(){this.position={x:0,y:0},this.randomSquare(),this.squareMove()},checkValid:function(t,e){var n=this.gameData,i=(this.curData,this.position);return!(i.x+e<0)&&(!(i.y+t<0)&&(!(i.y+t>=n.length)&&(!(i.x+e>n[0].length)&&!(n[i.y+t][i.x+e]>0))))}}},D={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"game-area"},[e("canvas",{staticStyle:{border:"4px solid #458B00"},attrs:{id:"canvas"}})])}]};var w=n("VU/8")(g,D,!1,function(t){n("1oen")},null,null).exports;i.default.use(c.a);var E=new c.a({routes:[{path:"/",component:r},{path:"/tetris",component:w},{path:"/card",component:_}]}),y=n("zL8q"),k=n.n(y);n("tvR6");i.default.use(k.a),i.default.config.productionTip=!1,new i.default({el:"#app",components:{App:u},router:E,template:"<App/>"})},qDgq:function(t,e){},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.549f868ee1aa5e0ee9be.js.map