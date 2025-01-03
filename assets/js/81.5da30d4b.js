(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{1399:function(a,t,v){a.exports=v.p+"assets/img/hostnamectl.8b07703b.png"},1400:function(a,t,v){a.exports=v.p+"assets/img/bpytop.b10027f3.png"},1459:function(a,t,v){"use strict";v.r(t);var _=v(4),s=Object(_.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[a._v("#")]),a._v(" 常用命令")]),a._v(" "),t("h3",{attrs:{id:"切换root"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#切换root"}},[a._v("#")]),a._v(" 切换root")]),a._v(" "),t("p",[a._v("sudo su : 用于切换到超级用户（root）权限")]),a._v(" "),t("h3",{attrs:{id:"退出-ssh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#退出-ssh"}},[a._v("#")]),a._v(" 退出 ssh")]),a._v(" "),t("p",[a._v("输入 exit 然后按回车")]),a._v(" "),t("h3",{attrs:{id:"查看主机信息-hostnamectl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看主机信息-hostnamectl"}},[a._v("#")]),a._v(" 查看主机信息 hostnamectl")]),a._v(" "),t("p",[t("code",[a._v("hostnamectl")]),a._v("  是一个 Linux 命令，通常用于管理系统的主机名和相关的系统信息。")]),a._v(" "),t("p",[t("img",{attrs:{src:v(1399),alt:"img"}})]),a._v(" "),t("p",[a._v("修改主机名：通过  "),t("code",[a._v("hostnamectl set-hostname xxx")]),a._v("  命令，您可以更改系统的主机名为 XXX。")]),a._v(" "),t("h2",{attrs:{id:"目录及文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目录及文件"}},[a._v("#")]),a._v(" 目录及文件")]),a._v(" "),t("h3",{attrs:{id:"pwd-显示用户当前所处的工作目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pwd-显示用户当前所处的工作目录"}},[a._v("#")]),a._v(" pwd--显示用户当前所处的工作目录")]),a._v(" "),t("p",[a._v("用法：pwd [选项]...\n选项：-P 显示链接的真实路径。")]),a._v(" "),t("h3",{attrs:{id:"cd-命令用于切换当前工作路径"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cd-命令用于切换当前工作路径"}},[a._v("#")]),a._v(" cd--命令用于切换当前工作路径")]),a._v(" "),t("p",[a._v("用法：")]),a._v(" "),t("ul",[t("li",[a._v("cd .. 切换路径至当前目录的上一级")]),a._v(" "),t("li",[a._v("cd - 返回前一个路径")]),a._v(" "),t("li",[a._v("cd 切换目录至当前用户的家目录")])]),a._v(" "),t("h3",{attrs:{id:"ls-显示目录与文件信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ls-显示目录与文件信息"}},[a._v("#")]),a._v(" ls--显示目录与文件信息")]),a._v(" "),t("p",[a._v("用法：ls [选项]... [文件/目录]\n选项：\n-a 显示所有，包括隐藏文件与目录。\n-d 显示目录本身的信息，而非目录内的文件。\n-h 人性化显示容量信息。\n-l 长格式列出文档详细信息。包括权限设置和文件属性。\n-i 显示每个文件的 inode 号。\n-S 根据文件大小排序\n-u 显示文件或目录最后被访问的时间。")]),a._v(" "),t("p",[a._v("示例：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("ls -l /volume3/docker/cow/godcmd.py\n\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("输出结果可能类似于以下格式："),t("code",[a._v("-rwxrwxrw-+ 1 syue admin 378 May 23 10:34 /volume3/docker/cow/godcmd.py")])]),a._v(" "),t("ul",[t("li",[t("code",[a._v("-rwxrwxrw-+")]),a._v(": 表示文件权限，其中第一个字符 - 表示这是一个常规文件，后续的权限位分为三组，每组三个字符，分别代表文件所有者、文件所属组和其他用户的权限。其中：\n"),t("ul",[t("li",[a._v("rwx：文件所有者 (syue) 具有读、写和执行权限。")]),a._v(" "),t("li",[a._v("rwx：文件所属组 (admin) 具有读、写和执行权限。")]),a._v(" "),t("li",[a._v("rw-：其他用户也具有读和写权限")])])]),a._v(" "),t("li",[t("code",[a._v("1")]),a._v(": 表示链接数，通常是指向该文件的硬链接数。")]),a._v(" "),t("li",[t("code",[a._v("syue")]),a._v(": 文件所有者是用户 syue。")]),a._v(" "),t("li",[t("code",[a._v("admin")]),a._v(": 文件所属组是 admin。")]),a._v(" "),t("li",[t("code",[a._v("378")]),a._v(": 表示文件大小（以字节为单位）。")]),a._v(" "),t("li",[t("code",[a._v("May 23 10:34")]),a._v(": 表示文件的最后修改日期和时间。")]),a._v(" "),t("li",[t("code",[a._v("/volume3/docker/cow/godcmd.py")]),a._v(": 是文件的完整路径。")])]),a._v(" "),t("p",[a._v("通过这个命令的输出，您可以查看文件 openai_voice.py 的权限设置，所有者、所属组、大小以及最后修改时间等信息。")]),a._v(" "),t("h3",{attrs:{id:"mkdir-创建目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mkdir-创建目录"}},[a._v("#")]),a._v(" mkdir--创建目录")]),a._v(" "),t("p",[a._v("用法：mkdir [选项]...[目录]...\n选项：-p 创建多级目录。")]),a._v(" "),t("h3",{attrs:{id:"cp-复制文件与目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cp-复制文件与目录"}},[a._v("#")]),a._v(" cp--复制文件与目录")]),a._v(" "),t("p",[a._v("用法：cp [选项] 源 目标\n选项：\n-r 递归复制目录及其子目录内的所有目录。\n-a 复制时保留源文档的所有属性（包括权限、时间等）。")]),a._v(" "),t("h3",{attrs:{id:"rm-删除文件或目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rm-删除文件或目录"}},[a._v("#")]),a._v(" rm--删除文件或目录")]),a._v(" "),t("p",[a._v("删除文件时可以不加选项，删除目录时必须加选项 -r")]),a._v(" "),t("p",[a._v("用法：rm [选项]...文件...\n选项：\n-f 不提示，强制删除。\n-r 递归删除，删除目录及目录下的所有内容。")]),a._v(" "),t("h3",{attrs:{id:"find-搜索文件或目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#find-搜索文件或目录"}},[a._v("#")]),a._v(" find--搜索文件或目录")]),a._v(" "),t("p",[a._v("用法：find [命令选项] [路径] [表达式选项]\n选项：\n-name 按文档名称查找\n-iname 按文档名查找，且不区分大小写\n-mtime 按修改时间查找\n-group 按组查找\n-user 按用户查找\n-size 按容量大小查找\n-type 按文档类型查找，文件（f）、目录（d）、设备（b，c），链接（l）等。\n-exec 对找到的文档执行特定的命令\n-a 并且\n-o 或者")]),a._v(" "),t("h3",{attrs:{id:"du-计算文件或者目录的容量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#du-计算文件或者目录的容量"}},[a._v("#")]),a._v(" du--计算文件或者目录的容量")]),a._v(" "),t("p",[a._v("用法：du [选项]...[文件或目录]...\n选项：\n-h 人性化显示容量信息\n-s 仅显示总容量")]),a._v(" "),t("p",[a._v("示例："),t("code",[a._v("du ./ -h --max-depth=1")])]),a._v(" "),t("ul",[t("li",[a._v("du显示文件或目录磁盘占用的命令")]),a._v(" "),t("li",[a._v("./当前目录")]),a._v(" "),t("li",[a._v("-h 已易读的方式显示")]),a._v(" "),t("li",[a._v("--max-depth=1显示参数（文件或目录的占用限制输出到目录的一级子目录）")])]),a._v(" "),t("h3",{attrs:{id:"改变文件或目录的权限chmod"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#改变文件或目录的权限chmod"}},[a._v("#")]),a._v(" 改变文件或目录的权限chmod")]),a._v(" "),t("h4",{attrs:{id:"符号模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#符号模式"}},[a._v("#")]),a._v(" 符号模式")]),a._v(" "),t("p",[a._v("在符号模式下，可以使用 chmod 命令按以下格式添加权限：")]),a._v(" "),t("p",[t("code",[a._v("chmod [类别][操作][权限] 文件名")])]),a._v(" "),t("ul",[t("li",[a._v("类别：u（用户User）、g（组Group）、o（其他Others）、a（所有All）")]),a._v(" "),t("li",[a._v("操作：+（添加）、-（移除）、=（设置）")]),a._v(" "),t("li",[a._v("权限：r（读Read）、w（写Write）、x（执行Execute）")])]),a._v(" "),t("p",[t("strong",[a._v("示例")])]),a._v(" "),t("p",[a._v("给所有用户添加读权限："),t("code",[a._v("chmod a+r filename")])]),a._v(" "),t("h4",{attrs:{id:"八进制模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#八进制模式"}},[a._v("#")]),a._v(" 八进制模式")]),a._v(" "),t("p",[a._v("在八进制模式下，可以使用 chmod 命令按以下格式添加权限：")]),a._v(" "),t("p",[t("code",[a._v("chmod [权限] 文件名")])]),a._v(" "),t("p",[a._v("权限：由三个数字组成，每个数字代表不同用户类别的权限（用户、组、其他）。")]),a._v(" "),t("p",[t("strong",[a._v("权限的八进制表示法")])]),a._v(" "),t("p",[a._v("八进制表示法中的每个数字表示一个用户类别的权限，具体如下：")]),a._v(" "),t("ul",[t("li",[a._v("4：读（read）")]),a._v(" "),t("li",[a._v("2：写（write）")]),a._v(" "),t("li",[a._v("1：执行（execute）")])]),a._v(" "),t("p",[a._v("这些值可以相加，以表示组合权限：")]),a._v(" "),t("ul",[t("li",[a._v("7（4 + 2 + 1）：读、写和执行")]),a._v(" "),t("li",[a._v("6（4 + 2）：读和写")]),a._v(" "),t("li",[a._v("5（4 + 1）：读和执行")]),a._v(" "),t("li",[a._v("3（2 + 1）：写和执行")])]),a._v(" "),t("p",[t("strong",[a._v("示例")])]),a._v(" "),t("p",[t("code",[a._v("chmod 755 filename")]),a._v("：文件所有者有读、写和执行权限（7），所属组和其他用户有读和执行权限（5）")]),a._v(" "),t("h2",{attrs:{id:"查看文件内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看文件内容"}},[a._v("#")]),a._v(" 查看文件内容")]),a._v(" "),t("h3",{attrs:{id:"cat-查看文件里的内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cat-查看文件里的内容"}},[a._v("#")]),a._v(" cat--查看文件里的内容")]),a._v(" "),t("p",[a._v("用法：cat [选项]...[文件]...\n选项：\n-n 显示行号，包括空白行\n-b 显示行号，空白行不显示行号")]),a._v(" "),t("h3",{attrs:{id:"more-查看文件里的内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#more-查看文件里的内容"}},[a._v("#")]),a._v(" more--查看文件里的内容")]),a._v(" "),t("p",[a._v("more 命令和 cat 的功能一样都是查看文件里的内容，但有所不同的是 more 可以按页来查看文件的内容，还支持直接跳转行等功能。")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("Enter键：向下n行，需要定义。默认为1行\n\n空格键：向下滚动一屏\n\nCtrl+B：返回上一屏\n\n= 输出当前行的行号\n\nV 调用vi编辑器\n\n!命令 调用Shell，并执行命令\n\nq 退出more\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br")])]),t("h3",{attrs:{id:"less-分页查看文件内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#less-分页查看文件内容"}},[a._v("#")]),a._v(" less--分页查看文件内容")]),a._v(" "),t("p",[a._v("操作：\n空格（下一页）\n方向键（上下回翻）\nq 键（退出查看）")]),a._v(" "),t("h3",{attrs:{id:"head-显示文件头部内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#head-显示文件头部内容"}},[a._v("#")]),a._v(" head--显示文件头部内容")]),a._v(" "),t("p",[a._v("用法：head [选项]...[文件]...\n选项：\n-c nK 显示文件前 nKB 的内容。\n-n 显示文件前 n 行的内容。")]),a._v(" "),t("h3",{attrs:{id:"tail-显示文件尾部内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tail-显示文件尾部内容"}},[a._v("#")]),a._v(" tail--显示文件尾部内容")]),a._v(" "),t("p",[a._v("用法：tail [选项]...[文件]...\n选项：\n-c nK 显示文件末尾 nKB 的内容。\n-n 显示文件末尾 n 行的内容。\n-f 动态显示文件内容，常用于查看日志，按 Ctrl+C 组合键退出。")]),a._v(" "),t("h3",{attrs:{id:"grep-查找"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#grep-查找"}},[a._v("#")]),a._v(" grep--查找")]),a._v(" "),t("p",[a._v("用法：grep [选项] 匹配模式 [文件]...\n常用选项：\n-i 忽略大小写。\n-v 取反匹配")]),a._v(" "),t("p",[a._v("示例：\n[root@qll ~]# grep root /etc/passwd #在 passwd 文件中过滤出包含 root 的行。")]),a._v(" "),t("h3",{attrs:{id:"查看文件md5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看文件md5"}},[a._v("#")]),a._v(" 查看文件md5")]),a._v(" "),t("p",[a._v("用法："),t("code",[a._v("md5sum <filename>")])]),a._v(" "),t("p",[a._v("这里的 filename 是你想要计算 MD5 校验和的文件的名称。例如：")]),a._v(" "),t("p",[t("code",[a._v("md5sum example.txt")])]),a._v(" "),t("p",[a._v("处理文件名中的特殊字符：如果文件名包含空格或特殊字符，你可能需要将文件名用单引号或双引号括起来。例如：")]),a._v(" "),t("p",[t("code",[a._v("md5sum '散就散了 - 庆庆.mp3'")])]),a._v(" "),t("h2",{attrs:{id:"apt-相关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#apt-相关"}},[a._v("#")]),a._v(" apt 相关")]),a._v(" "),t("p",[a._v("apt 命令执行需要超级管理员权限(root)。")]),a._v(" "),t("ul",[t("li",[a._v("列出所有可更新的软件清单命令："),t("code",[a._v("apt update")])]),a._v(" "),t("li",[a._v("升级软件包："),t("code",[a._v("apt upgrade")])]),a._v(" "),t("li",[a._v("列出可更新的软件包及版本信息："),t("code",[a._v("apt list --upgradeable")])]),a._v(" "),t("li",[a._v("升级软件包，升级前先删除需要更新软件包："),t("code",[a._v("apt full-upgrade")])]),a._v(" "),t("li",[a._v("安装指定的软件命令："),t("code",[a._v("apt install <package_name>")])]),a._v(" "),t("li",[a._v("安装多个软件包："),t("code",[a._v("apt install <package_1> <package_2> <package_3>")])]),a._v(" "),t("li",[a._v("更新指定的软件命令："),t("code",[a._v("apt update <package_name>")])]),a._v(" "),t("li",[a._v("显示软件包具体信息,例如：版本号，安装大小，依赖关系等等："),t("code",[a._v("apt show <package_name>")])]),a._v(" "),t("li",[a._v("删除软件包命令："),t("code",[a._v("apt remove <package_name>")])]),a._v(" "),t("li",[a._v("清理不再使用的依赖和库文件: "),t("code",[a._v("apt autoremove")])]),a._v(" "),t("li",[a._v("移除软件包及配置文件: "),t("code",[a._v("apt purge <package_name>")])]),a._v(" "),t("li",[a._v("查找软件包命令： "),t("code",[a._v("apt search <keyword>")])]),a._v(" "),t("li",[a._v("列出所有已安装的包："),t("code",[a._v("apt list --installed")])]),a._v(" "),t("li",[a._v("列出所有已安装的包的版本信息："),t("code",[a._v("apt list --all-versions")])])]),a._v(" "),t("h2",{attrs:{id:"bpytop-终端资源监视器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bpytop-终端资源监视器"}},[a._v("#")]),a._v(" bpytop--终端资源监视器")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("安装："),t("code",[a._v("sudo apt install bpytop")])])]),a._v(" "),t("li",[t("p",[a._v("使用：在终端中输入  "),t("code",[a._v("bpytop")]),a._v("  回车，即可打开 bpytop 工具")])]),a._v(" "),t("li",[t("p",[a._v("退出：按键盘上的  "),t("code",[a._v("q")]),a._v("  键，将关闭 bpytop 工具并返回到终端提示符")])]),a._v(" "),t("li",[t("p",[a._v("效果：")]),a._v(" "),t("p",[t("img",{attrs:{src:v(1400),alt:"img"}})])])])])}),[],!1,null,null,null);t.default=s.exports}}]);