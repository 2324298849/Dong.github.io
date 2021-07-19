/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/07/01/hexo博客/index.html","85cbda69f28dd4b5ac8af00361190044"],["/2020/08/18/强调句/index.html","94ea26f94d828e205981f822fbedc9c9"],["/2020/08/31/JAVA编程起步/index.html","0b741a232e9bef87e21dfa61975f211a"],["/2020/09/02/名词性从句/index.html","a205d925332a546944e9fed2bee156a9"],["/2020/09/02/定语从句/index.html","5bff61e2641fb845be28afba6728f92c"],["/2020/09/02/状语从句/index.html","e23f7dfa7b825629f580297f1389a7c4"],["/2020/09/02/简单句的补充/index.html","602116ff0e5c6c4b9a73036e6d5b6c77"],["/2020/09/16/MySql数据库/index.html","7d4ecf3571043bfb6618ad0e8c643ee5"],["/2020/09/18/JShell交互式工具/index.html","e9b7f2c7f96ec5627ba694a7b15200ab"],["/2020/09/19/CLASSPATH环境属性/index.html","90343d174fcf61d052e3aaa4494f5a6c"],["/2020/09/19/JAVA代码集合/index.html","c9ffe95402aa0dc5847cfa1f53ffb63b"],["/2020/09/21/JAVASE/index.html","e41f0df00aff1f81bb3933b9bd4fbdd7"],["/2020/09/21/MySql表的结构/index.html","c6c658e9111d2119a0d2f4bf8f287313"],["/2020/10/04/分组查询 Group By/index.html","e4da712eb84111aca62ea2b3de974b2c"],["/2020/10/05/MySQL查询/index.html","986dc117d03deecd2776811b96c122b7"],["/2020/10/12/MYSQL表的使用/index.html","951b7eb667518157d7c4bcee71beaa23"],["/2020/10/15/MYSQL——27道练习题/index.html","8aee43a7135b5e9fc3ce6e5039deb5a8"],["/2020/10/26/Monster的口语方法/index.html","eb817c0fdf5b19ce9d1d9624de2fcaa6"],["/2020/10/27/拍摄/index.html","6b9eb380e7d91e7342f2cd5557fd1fcf"],["/2020/12/04/详细阅读之策略/index.html","dbe17ffaa194f33227711bc356d07c53"],["/2021/01/07/长难句分析/index.html","fa7168f44b2a26bd4e7235ebc40c6c65"],["/2021/04/11/unserialize反序列化漏洞/index.html","568ed4cc9dfb8525ffa6e1b5b78ad523"],["/2021/04/11/代码审计--Duomicms变量覆盖函数/index.html","388b9b2a9b73e5908913f83d29eff091"],["/2021/04/12/0day审计实战案例/index.html","e8604237a4f9d0aab2453ef048181681"],["/2021/04/15/bypass-绕过阻挡我们的WAF/index.html","447bdac02c7dbfd8d0303d4ec446abc6"],["/2021/04/19/内网渗透/index.html","e6648f05a48af8922dc7b1ffd17164ed"],["/2021/04/20/SQL注入实战/index.html","20c6ab06d9e78a24077e32fab842119e"],["/2021/05/02/注入漏洞1/index.html","be12bad1f2d3316e9257de35f0b0fdf8"],["/2021/05/05/App渗透测试原理/index.html","6bed39feb487283b4ba4969f2b44951b"],["/2021/05/07/网络攻防工具/index.html","ec06a935fb8e814f9f11ac2d4a7cb410"],["/2021/05/09/【kali linux】基础知识/index.html","929d43c881a67b9771c39dc05743bc4c"],["/2021/05/12/Movavi Screen Recorder v21.2.0汉化破解/index.html","5041f84ef8ed0f041e2d46e24407673a"],["/2021/05/15/第十四届全国大学生CTF比赛/index.html","b7e827e17f934ebf0750105a1cdda443"],["/2021/05/17/谷歌语法搜索关键字（打包）/index.html","8a8f1b1ae48415b2007fdef2cd50ee89"],["/2021/05/19/[buuctf]web SQL注入篇/index.html","6481fa77a9cbf7d602a40c7efba5dd50"],["/2021/05/21/[C语言]学习之路/index.html","97a7d849765b80836513b37aa8bd870e"],["/2021/05/25/[C]哈夫曼编码器和译码器（C语言）/index.html","72ad33da9f5f11000b87b886fd92024a"],["/2021/05/27/Gitee pages自动部署/index.html","fd9bbaaab924703ed30b9f6951a50cb5"],["/2021/05/28/议论文的基本万能模板/index.html","4970cd5e037484abacec0a8774bb22d9"],["/2021/06/13/[VC]无向图遍历（邻接矩阵和邻接表）/index.html","f9c59b0e5eaeabc21e1ecd50d831f776"],["/2021/06/14/【信息收集】Google hack语法基础/index.html","907b6341723705462f9d6144e9b7d872"],["/2021/06/14/【信息收集】基础模板/index.html","776b7b1bf75ed7da95c69f265ad695fb"],["/2021/06/14/【信息收集工具】Nmap基础使用/index.html","c02181c672b8e5dc62e2d81b7d02ad1a"],["/2021/06/15/【信息收集】CMS指纹识别/index.html","93a6706e1ee4d93b9d6e8b5e281d577d"],["/2021/06/15/【信息收集】子域名收集和目录扫描/index.html","639866158eb7331a6cee5bc8eda86cf1"],["/2021/06/15/【注入工具】SQLmap实践手册/index.html","4d139ebb8ca799165c2927e7d464c5e7"],["/2021/06/15/【漏洞工具】BEEF基本启动方式/index.html","edeb94fc83e28853bbb46cde1f0aac64"],["/2021/06/16/【入侵工具】webshell管理工具基础使用/index.html","688c0bb2ac83e69b00e3938368218c42"],["/2021/06/16/【漏洞工具】Metasploit框架基本命令/index.html","caebb9f31382e152b39b3a5c2c15d3ae"],["/2021/06/17/【破解工具】Hashcat加密破解/index.html","84da23c18adf54df07dd1be9708c9f3f"],["/2021/06/18/【嗅探工具】wireshark初步认识/index.html","16b46661eaf6185d435c4f19b26ab390"],["/2021/06/18/【漏洞工具】Metasploit框架永恒之蓝/index.html","11496486884ef65d8fc3a31cdbe8b35b"],["/2021/06/18/【漏洞工具】Metasploit框架爆破模块/index.html","2f9801e33daf9b3c731b6db86350e338"],["/2021/06/19/【嗅探工具】Dns劫持 - Ettercap/index.html","ef168521c886e833edb45c5d36c9eeb8"],["/2021/06/21/【嗅探工具】无线WIFI密码破解/index.html","3379848ece397166e7091f12585cbb66"],["/2021/06/23/【后门攻击】后门生成模块免杀/index.html","e66c45ca9c53bd6530f3d1fa1cf1c7d2"],["/2021/06/24/【Java】数据结构-插入排序法/index.html","c9e28f2ec5e1f5d581e83dd5a9c54a76"],["/2021/06/24/【Java】数据结构-线性查找法/index.html","7326b860364f83f92b44f7260b93028e"],["/2021/06/24/【Java】数据结构-选择排序法/index.html","05f5802f3f9710427dc86bc7149718a2"],["/2021/06/25/【Java】leetcode题解-有效括号利用栈LIFO实现/index.html","1ed457e4504a33094f9bf9b63b51b104"],["/2021/06/25/【Java】数据结构-利用动态数组自定义栈LIFO/index.html","f1f05ee29486e23b949fb840044897fa"],["/2021/06/25/【Java】数据结构-循环队列/index.html","c75eff3536e596223768cb27493347e7"],["/2021/06/25/【Java】数据结构-自定义数组的数据结构/index.html","53cb13b8b363ef2bdef6ce8d04bcf4f6"],["/2021/06/26/【Java】LeetCode题答-203移除链表元素/index.html","e2eab5b8f1209841faa8f950740737e7"],["/2021/06/26/【Java】数据结构-链表实现栈(完整代码)/index.html","f0f74ddeccc05d948f5298a3a7232cd5"],["/2021/06/26/【Java】数据结构-链表实现队列(完整代码)/index.html","a1e27a577f56b69ffcbcd1c8cdd54c24"],["/2021/06/26/【Java】数据结构-链表的增删改查(完整代码)/index.html","9cbd4bb683b890c50100dd791c7b1b93"],["/2021/06/27/【Java】数据结构-归并排序（完整代码）/index.html","17b8b8d81d5920245bf3746c484bfa36"],["/2021/06/30/【Java】LeetCode题答-704二分查找/index.html","6974c19d470296729a8efdba1c5388f1"],["/2021/06/30/【Java】数据结构-二分搜索树前中后序遍历和增查改（完整代码）/index.html","6021261e4644c455c27179bf8655f03b"],["/2021/06/30/【Java】数据结构-冒泡排序（完整代码）/index.html","06c8c5fbd925dd90e3f5fe17e62f8a8b"],["/2021/06/30/【Java】数据结构-堆排序（完整代码）/index.html","cdc2c68562c9518406839ce56bcc37c6"],["/2021/06/30/【Java】数据结构-快速排序（完整代码）/index.html","18518e77e73272f683bd4a0c22d2c4f8"],["/2021/07/05/【小知识】windows中java同时两个版本java8和java16混用/index.html","e7fc215c389619bc61a55eaf27febd47"],["/2021/07/07/【HTML】Form表单中Input的使用/index.html","f94a2f7c93943b808b39ff08b25285ad"],["/2021/07/07/【HTML】a标签，src标签，table标签使用/index.html","c587b23885269a25b8f128ac6f13194b"],["/2021/07/07/【HTML】列表list使用/index.html","ad1ec3727ba4705621333b78bc5beb06"],["/2021/07/07/【HTML】框架frame的使用/index.html","02118b35c72ecfa21588738998083bbd"],["/2021/07/07/【HTML】选择框、复选框、单选框、文本域/index.html","48e3ba51f11a2b2aad25234e9cfd60bc"],["/2021/07/08/【HTML】CSS基础学习之列表和超链接伪类/index.html","70a5d6dd9a8a0a427a63e73d4af9c7f5"],["/2021/07/08/【HTML】CSS基础学习之引用样式和选择器的使用/index.html","ea82304affd705ceaa5ff935dea6e182"],["/2021/07/08/【HTML】CSS基础学习之背景边框文字文本的学习/index.html","e0896b7b74e09d10c67de807a2798ff6"],["/2021/07/09/【HTML】CSS基础学习之float浮动块级元素行内元素/index.html","a947c00cb2729c3513a66082e97d5c99"],["/2021/07/09/【HTML】CSS基础学习之盒子模型margin和padding的使用/index.html","7f1aaf06ddaa022ce9483b5bf934443d"],["/2021/07/13/【HTML】实战阿里云src页面css模仿基础学习/index.html","d2cbb2a8325463499235b66e06bcfdca"],["/2021/07/13/【ctfshow】web篇wp记录（持续更新）/index.html","75e47f9bc54337e9ba754dda8831b127"],["/2021/07/18/【PHP】基础知识整理/index.html","3adc7a1f87061aa834efab1e497fc9b7"],["/about/index.html","503e4bca2628a77c1ec076d9f0507a83"],["/archives/2020/07/index.html","b4de3c2776d02ac6a638dcc1b1b33899"],["/archives/2020/08/index.html","a5f7baf5a4b86aba53f0c6bd9d412c1c"],["/archives/2020/09/index.html","573e81d45713ce11ce86e1b8bf6b8bc0"],["/archives/2020/10/index.html","6fac46897f48a875cdee78239f249f13"],["/archives/2020/12/index.html","5bfb919f7ce94f68f363e06dc2028f66"],["/archives/2020/index.html","84ac2df268b13d7d7d09459105babf9f"],["/archives/2020/page/2/index.html","7e170a19b48c390e4ff259b1cda8bb1e"],["/archives/2021/01/index.html","8e67b3cf29261922df2f556ecdd2e00b"],["/archives/2021/04/index.html","b1fb71f2516a654bd2b50533c3cfac4c"],["/archives/2021/05/index.html","447555b58341cedf67cbe3b31fff9acc"],["/archives/2021/05/page/2/index.html","385e5022edf2f5c257bfc8951ffb8f86"],["/archives/2021/06/index.html","55f76dfa17ff336a87e00254b326a688"],["/archives/2021/06/page/2/index.html","b91be36c99ec0f2161010be7cba2f551"],["/archives/2021/06/page/3/index.html","56cd816faee0f37e8704ead010deb333"],["/archives/2021/06/page/4/index.html","02d7f59366ab5b282b0f06aed700e0ce"],["/archives/2021/07/index.html","9258bb4cc9d8da84896e80124e23d2c6"],["/archives/2021/07/page/2/index.html","81712c73db5dca736989c7811ec0ecf5"],["/archives/2021/index.html","c079284f22a81ab1c7caae267a77c7fe"],["/archives/2021/page/2/index.html","902b381618d4da146bb6505257cb35a6"],["/archives/2021/page/3/index.html","358d90ae783ef9cb2febee533c41dccc"],["/archives/2021/page/4/index.html","26d4d655ea17697dd60c080beb39f876"],["/archives/2021/page/5/index.html","3fcd0e2c3d6dd75d3e0bfee70ad93245"],["/archives/2021/page/6/index.html","8db759cfb8952763e20022340fda6fad"],["/archives/2021/page/7/index.html","704f1fd2f9dca53a049caafd3aeb0491"],["/archives/index.html","11fccab582105e8ff7b26368ac170a03"],["/archives/page/2/index.html","e8b5becd1339f8041f7f7680fdbee22b"],["/archives/page/3/index.html","6595c3ef7dc26c17f8fb5b9655aad654"],["/archives/page/4/index.html","5d1c6fb9f89107baedd79bbc83cab4a1"],["/archives/page/5/index.html","1279a075478cec8676d8831502cebe86"],["/archives/page/6/index.html","d15bce0a2c8735056449ffadf2136ab9"],["/archives/page/7/index.html","0eefe8c02cd6edeefe8ec0cce4b9d872"],["/archives/page/8/index.html","71e24dc3b0fbb726a7578825e16ac44f"],["/archives/page/9/index.html","867d4b9ae676281c2a1b80d0a9abef84"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Buuctf/index.html","ab14550927ea2d7e08d2edf0bc4a8158"],["/categories/CISCN/index.html","13beb1983400607414f328b2ba5ef5b9"],["/categories/CTF/index.html","e7160ba0ac9f1512fece756fe5d0c707"],["/categories/C语言/index.html","24b65a7443df8d6aef189ed6d7d80320"],["/categories/English/index.html","fe1a5efebf63d34769232c950f047cf9"],["/categories/HTML/index.html","75be8e08a4601df3c90caacab833b500"],["/categories/HTML/page/2/index.html","591b3090010cbc627c6494b4847d6165"],["/categories/Java/index.html","c46ca784ce37da13c7988ff34ec87694"],["/categories/MySQL/index.html","e22ff2bf72d5d9cfea51bfb432c6f825"],["/categories/hexo博客搭建/index.html","e3fc177966c63314258bb56331f3a08e"],["/categories/index.html","fd0c0675ea17b6c0a91a0af222396d9a"],["/categories/kali/index.html","bad16ecaa36ad1fbfd98a308b7aeef7d"],["/categories/php/index.html","7936024d4d53155c2c9d86e1895add32"],["/categories/工具/index.html","96991b018e65ef523c9eca2f9a5ce8d8"],["/categories/摄影/index.html","bf6be2f23ae2c222c2284ef45f942268"],["/categories/渗透测试/index.html","2a665ed5f605dbe9aecdc71d1475e6bc"],["/categories/漏洞挖掘/index.html","a2f9e121cf482432dd4a771754b0b471"],["/categories/知识积累/index.html","a3e843a67af5266deb1912dfdc6846b3"],["/categories/算法与数据结构/index.html","56182c71ce1c2a7d10e39f997fa91c2a"],["/categories/算法与数据结构/page/2/index.html","2bf0ced38011e503a7d2fd97f172a318"],["/categories/黑客工具/index.html","c7bd44f494c066b852fd5b44eef3a3a2"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","1396b8a107df64cc7a0b167fb776dae5"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","a87485aa75e5177ef2b06bf948e31075"],["/figlet/fetch.min.js","350d73710c8e7facd458e74b17b96c27"],["/figlet/figlet.js","0dcd07654130a5de80d46793553ba41b"],["/flash/flash/index.html","f2251cdd6a062155eaf16a46838bf574"],["/flash/index.html","824cfcc7a16b33b4497652553d3c7c43"],["/help/index.html","fc7f53bc4a688d01b6bfaf81874c560b"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","d9452503de1e4195e67028f073c5addb"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","c6e949a6226bcf46b24676d7ff90de88"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next .png","cb9f23934fe03bc9d284da68e659d847"],["/images/favicon-32x32-next.png","896f4eb152b3798ed17bfc57d1d3e505"],["/images/head.jpg","c6e949a6226bcf46b24676d7ff90de88"],["/images/hot.png","a90be0de558143aabf0acc9cfa0a8688"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","f5f5a1ff80b9f2403d76d0092128df19"],["/images/linkcard_bak.png","e1f9f6973a3d2c38b0b2b7317bd7b317"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/qq.png","5c481dffe0f706b9666f6ca18bd4d2c6"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","4462c81055423c8d2db56a77b51c5cb8"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","641c2d396a563ddafa6fed34a9984a03"],["/images/subscribe1.png","d4accaba47d6e791ce0cd6365735992f"],["/images/subscribe~1.png","e147141e7f29ff2bb46356cc8ca7c831"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechat.svg","2ef3f3696267249c4372a5e3f9db36f2"],["/images/wechatpay.jpg","d9dbc02b5f7c379adac84eeb7f6f51b6"],["/images/xiaohutong.png","14589dbb580ac44e4c04e4e94f22ab0f"],["/index.html","9a3486d1a242621211765f6b913a40aa"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","fbe111a3ab258f224f8c4b41c9b3e886"],["/js/src/Valine.min.js","1479b73139a463e6147164e7dc880d9c"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/bubble.js","8fdcf8ca4941000b226b2e7535bf1af8"],["/js/src/clipboard-use.js","6245c44a33b72d0b5d04562b6808a309"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","a9f0920c901ee43e163479111c874163"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/linkcard.js","da6cb85a2c1d36027ca414459c8dd58f"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ee7e149030931501fa19b0ab74b46b34"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","b4b844be05c95320998e7b6669080d2c"],["/live2d-widget/README.html","db79a3bbfd794941c59b40a2f16ec8b1"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","fdff49a1ea5efd0d3bbd7ac8748b51f2"],["/live2d-widget/demo/demo1.html","f074f5ae92a048bc2510bd74fa5f376f"],["/live2d-widget/demo/demo2.html","26da508553f433cc7e277092400ce9e6"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["/navigation/index.html","eccd4a075fcf9d3936ec68d70e406a70"],["/page/2/index.html","a17f2116ccf4b282b5fab0db9ae248c8"],["/page/3/index.html","c529fb9a245f2f5bdcc66e9a29f6b6cc"],["/page/4/index.html","97ccfb507c94e875c7fb303f1c836523"],["/page/5/index.html","2a7aa2ea61464bf5087f43f26749f70c"],["/page/6/index.html","533748e0b9b74b00d7f9da45234cc579"],["/page/7/index.html","630114ffc7e147db094032e00a40104a"],["/page/8/index.html","9fb1a94f579cbbf1f6c997482098091d"],["/page/9/index.html","b4aed725b00a3ec413ac890c163300d1"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","010491e700c16d9536eaa6c1479c50bd"],["/tags/AWVS/index.html","4e7a153acf11bb286cdcfc37076beb15"],["/tags/CMS/index.html","9e5e1325333beef3a18bc31df4dd17ce"],["/tags/C语言/index.html","d6c8b2263633de48d08bac303f7ca095"],["/tags/Dns劫持/index.html","5b900df9017dd1eaceb50415608b7257"],["/tags/Ettercap/index.html","8ffa3ae14ccb8219718e1e580addcb6c"],["/tags/Form/index.html","93a19558decd40543006ae7231c0011c"],["/tags/Gitee自动部署/index.html","04ee0023c23c17ebbff9085804585903"],["/tags/Google-hack语法/index.html","54fcf28c1ca3be6d423857161900fdfc"],["/tags/Hashcat/index.html","3647b55846236979122c82508d6138c5"],["/tags/JAVA/index.html","c54044c2594e2d9422a160d3ede518a3"],["/tags/JAVA/page/2/index.html","5212c94252ddcb33692a3e462bf7425d"],["/tags/LeetCode/index.html","fe1d60d3535388a7a75b9d0b9b8733d7"],["/tags/Nmap/index.html","fefe70157c249c5d3e5e93703c7146d2"],["/tags/SQL注入/index.html","97d6e34d143567b6b30ddece06dd32f5"],["/tags/aircrack/index.html","c2911672715b0e866f382852c8134aff"],["/tags/css/index.html","55054564ecb8c7bbe5233a6ca0015f1e"],["/tags/ctf/index.html","a329726a62306a1236cd9340ec94e45c"],["/tags/html/index.html","42d38d61227edfbbcdc7ca57ec993396"],["/tags/html/page/2/index.html","506c1540befef816c96294d5562d220f"],["/tags/index.html","7e92c01cbb0df5c8acddf9b7c60fecea"],["/tags/input/index.html","9fa0ddd991f0953c4593b2dcf58f594c"],["/tags/kali基础/index.html","1e073cd91161da1cf36d2ba6affab0bf"],["/tags/list的使用/index.html","741a3c8f6b886348c0a15451e93a5dab"],["/tags/msf/index.html","953f30cd5394a83fbdc4606e3ea6d5cc"],["/tags/php/index.html","247ef890166c3308cbf75de3576b5fd5"],["/tags/python脚本/index.html","06c2654cd2bfe2df647e2ebfe3e03643"],["/tags/sqlmap/index.html","1ae1d2735bb1886d2dc813672481f49d"],["/tags/web/index.html","61e08baa84e7e6d0634723bccc5bb663"],["/tags/web安全/index.html","e6564b378f515f6ff007f300c3951b95"],["/tags/wireshark/index.html","6f4e5dcb3fcb5b3c8a5bf1c89bdcd922"],["/tags/wp/index.html","1615e61b1d71a607833e51bc859bdc82"],["/tags/二分搜索树/index.html","b2cb8e16ba780dab237f69d27cf059ea"],["/tags/信息收集/index.html","e44f639db5864b87fd4475e235d8b608"],["/tags/免杀/index.html","2fda209fd98379dd27ad8676cd4cdebd"],["/tags/博客搭建/index.html","5f5bd46f68a9af3d0ebc25cd10e6b160"],["/tags/嗅探工具/index.html","e262fbcb273a2942c06ff16ba4d3ceac"],["/tags/堆排序/index.html","9dfda4c93a491ad2abf2ec8a1bc4ca57"],["/tags/子域名/index.html","0d7fb17eff8cf88b78f5c03918eb3b29"],["/tags/学习记录/index.html","d56362eea3858551ee62825493b2acc0"],["/tags/工具/index.html","97f7f2496c4d8e143d6930738e22cb4f"],["/tags/归并排序/index.html","81b545c63512e3646a56dfca49109bfd"],["/tags/录屏/index.html","ddc1ee1df20cd7f506276f158f1e2993"],["/tags/快速排序/index.html","fd76e1838dbceb2de18b5dfd60c4b2f6"],["/tags/成长之路/index.html","b0531d6af56ffc9d32b52a18b01885cf"],["/tags/成长之路/page/2/index.html","20139916a3d2258cfbeabe9b0a1d32c8"],["/tags/成长之路/page/3/index.html","ec4f70fb9ac4d45e8b9f13ed4f03eb4b"],["/tags/成长之路/page/4/index.html","09cbb7f6ee00361b97673d00a4bff1e2"],["/tags/指纹识别/index.html","face26d1a72c7f32f51cd92354b64cb4"],["/tags/插入排序/index.html","7be3d8f600a56d2399891335d528bc5b"],["/tags/数据结构/index.html","9bf2d939d7215f42fc03571a70d44e57"],["/tags/数据结构/page/2/index.html","e13b348c5c44d3f79765e25978a39b87"],["/tags/无线wifi密码破解/index.html","3efe4d4b178fb46ce9422422078c180f"],["/tags/标签的使用/index.html","166225b127ffd8f37937b3577f5eabb8"],["/tags/渗透测试/index.html","80b31c9e37f4dfb420d2c7e75e1de5f4"],["/tags/渗透测试基础/index.html","0b4cbd9053179c71fbd03f936c9f5211"],["/tags/渗透测试工具/index.html","4016d0a77339d8e90e5c5c1cc17adb10"],["/tags/漏洞工具/index.html","291b88670d20d410a817dc2227dfc977"],["/tags/爆破工具/index.html","e530138187e03f204a31e9294e322c5d"],["/tags/版本共存/index.html","3dcb821639227afb572ba8896199cba1"],["/tags/知识拓展/index.html","22cc80462dc4791cbb7250563ea18f6d"],["/tags/知识拓展/page/2/index.html","84ac1e890602700740934d5467fb6c29"],["/tags/网络攻防工具/index.html","256dfc7fa8b524c6aad612e33b6a4148"],["/tags/英语四级/index.html","fab0d414a2f7b74279f3e0ced7ebc59a"],["/tags/议论文万能模板/index.html","37bfc0c8371a49de43bc75d1c21a5c7a"],["/tags/谷歌语法/index.html","3712d99fb5b6cb6f484404374327b2c1"],["/tags/选择排序/index.html","390e68bbecf3fca68ab2db9066ba9df9"],["/tags/链表实现队列/index.html","930aec868e5000b1e29c29f9f2a26b69"],["/tags/链表的增删改查/index.html","9ff825f24c0f03bd0c62f14ab3c433e5"],["/tags/镜头/index.html","645a410c86e33166d50cb6debbb6bd38"],["/top/index.html","84866d19c2ac5d493ffa53b0dee070d0"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
