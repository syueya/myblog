(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{1421:function(t,s,r){"use strict";r.r(s);var a=r(4),e=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("github 官网："),s("a",{attrs:{href:"https://github.com/hectorqin/reader",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/hectorqin/reader"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"容器部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#容器部署"}},[t._v("#")]),t._v(" 容器部署")]),t._v(" "),s("p",[t._v("1、在 Docker 管理器中打开镜像管理，在镜像仓库中搜索 hectorqin/reader，选择 latest 版本下载。")]),t._v(" "),s("p",[s("img",{attrs:{src:r(628),alt:"img"}})]),t._v(" "),s("p",[t._v("2、点击本地镜像，找到刚才下载的镜像，并点击创建容器。在配置窗口容器名称可以自定义，勾选创建后启动容器，并点击下一步。")]),t._v(" "),s("p",[s("img",{attrs:{src:r(629),alt:"img"}})]),t._v(" "),s("p",[t._v("3、在基础设置中，勾选重启策略为“容器退出时总是重启容器”。")]),t._v(" "),s("p",[s("img",{attrs:{src:r(630),alt:"img"}})]),t._v(" "),s("p",[t._v("4、网络中保持默认为“bridge”，命令保持默认为 java -jar /app/bin/reader.jar。")]),t._v(" "),s("p",[t._v("5、存储空间设置：在 docekr 文件夹下新建一个文件夹 reader，然后在这个文件夹下再创建两个子文件夹，分别叫 log 和 storage。")]),t._v(" "),s("ul",[s("li",[t._v("选择 log 目录，然后配置装载路径为/log，类型为读写。")]),t._v(" "),s("li",[t._v("选择 storage 目录，然后配置装载路径为/storage，类型为读写。")])]),t._v(" "),s("p",[s("img",{attrs:{src:r(631),alt:"img"}})]),t._v(" "),s("p",[t._v("6、在端口设置中，如果本地端口未被占用的话默认即可，要不设置一个未被占用的其他端口即可。")]),t._v(" "),s("p",[s("img",{attrs:{src:r(632),alt:"img"}})]),t._v(" "),s("p",[t._v("7、在环境设置中，我们添加三个环境变量。")]),t._v(" "),s("ul",[s("li",[t._v("配置邀请码：READER_APP_INVITECODE:your_invite_code")]),t._v(" "),s("li",[t._v("配置访问密码：READER_APP_SECUREKEY:your_password")]),t._v(" "),s("li",[t._v("开启安全访问：READER_APP_SECURE:true")])]),t._v(" "),s("p",[s("img",{attrs:{src:r(633),alt:"img"}})]),t._v(" "),s("h2",{attrs:{id:"初始化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初始化"}},[t._v("#")]),t._v(" 初始化")]),t._v(" "),s("p",[t._v("1、在浏览器输入 IP:端口来访问网站，点击注册")]),t._v(" "),s("p",[s("img",{attrs:{src:r(634),alt:"img"}})]),t._v(" "),s("p",[t._v("2、设置账号密码，邀请码为我们刚才在环境变量里配置的邀请码。")]),t._v(" "),s("p",[s("img",{attrs:{src:r(635),alt:"img"}})]),t._v(" "),s("p",[t._v("3、自动登陆后点击左下角用户空间处的“进入管理模式”。输入我们在环境变量里配置的密码，点击确定。")]),t._v(" "),s("p",[s("img",{attrs:{src:r(636),alt:"img"}})]),t._v(" "),s("p",[t._v("4、点击导入书源并选择书源配置文件，配置文件为 json 格式。")]),t._v(" "),s("p",[s("img",{attrs:{src:r(637),alt:"img"}})])])}),[],!1,null,null,null);s.default=e.exports},628:function(t,s,r){t.exports=r.p+"assets/img/0201.09323906.png"},629:function(t,s,r){t.exports=r.p+"assets/img/0202.412f3515.png"},630:function(t,s,r){t.exports=r.p+"assets/img/0203.fa625a2d.png"},631:function(t,s,r){t.exports=r.p+"assets/img/0204.1d318e06.png"},632:function(t,s,r){t.exports=r.p+"assets/img/0205.0a3afb73.png"},633:function(t,s,r){t.exports=r.p+"assets/img/0206.db1abb0b.png"},634:function(t,s,r){t.exports=r.p+"assets/img/0207.09c5bc4a.png"},635:function(t,s,r){t.exports=r.p+"assets/img/0208.f1331e45.png"},636:function(t,s,r){t.exports=r.p+"assets/img/0209.68f45511.png"},637:function(t,s,r){t.exports=r.p+"assets/img/0210.cc1b02fd.png"}}]);