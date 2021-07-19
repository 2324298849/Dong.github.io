/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/07/01/hexo博客/index.html","ca93445e434ec636727843e75c519c53"],["/2020/08/18/强调句/index.html","96bcc412750415d9be8249ee2a000762"],["/2020/08/31/JAVA编程起步/index.html","b299705753593e42d0f8214323e07e47"],["/2020/09/02/名词性从句/index.html","467d6acd0237990655ca7d0643ac9a84"],["/2020/09/02/定语从句/index.html","c81b06fc0319c817f9c3af59d22e6d60"],["/2020/09/02/状语从句/index.html","8f82f3532d5920caba5ab15023df6838"],["/2020/09/02/简单句的补充/index.html","10e9b001f4a748bcd7fd8bf5e545bc95"],["/2020/09/16/MySql数据库/index.html","1e9a54a11467e48f9bbdf58b8d6c38ad"],["/2020/09/18/JShell交互式工具/index.html","e4500644bf10bd8ab15dcbde2875a774"],["/2020/09/19/CLASSPATH环境属性/index.html","c399211f7fbf21d8603cedd83a8fcff5"],["/2020/09/19/JAVA代码集合/index.html","bfab7899159053eb94ebf57bb5f7bf2d"],["/2020/09/21/JAVASE/index.html","236cf1b9635488b4f8270b98550d0f68"],["/2020/09/21/MySql表的结构/index.html","9ad3789febc822739c86c2b819a8520d"],["/2020/10/04/分组查询 Group By/index.html","93bfc782dd64cd2f71eaa27809cfa96c"],["/2020/10/05/MySQL查询/index.html","9dfb61bc93751036aebccd050f4640d6"],["/2020/10/12/MYSQL表的使用/index.html","da32247e2d59081a999b522dd896cc07"],["/2020/10/15/MYSQL——27道练习题/index.html","c700a525dc1c0914eb0ba40d30909905"],["/2020/10/26/Monster的口语方法/index.html","89d8d7fb989f58611887c0a60ab8bca3"],["/2020/10/27/拍摄/index.html","b8e660faee2fa0c8033a760e98a5087a"],["/2020/12/04/详细阅读之策略/index.html","a6ee08d209fa262b19ce7c324dd670db"],["/2021/01/07/长难句分析/index.html","fbc2d48df5e6a067706097167304c49d"],["/2021/04/11/unserialize反序列化漏洞/index.html","1445a9fa4fdf44a48fd3dfbd7d17d17e"],["/2021/04/11/代码审计--Duomicms变量覆盖函数/index.html","a6de322fffa6f7d9a630dbed31ba5d8f"],["/2021/04/12/0day审计实战案例/index.html","acfa15794ffd0424e7e74c2d88721703"],["/2021/04/15/bypass-绕过阻挡我们的WAF/index.html","3007d9915b402543d20f81f5f258e07e"],["/2021/04/19/内网渗透/index.html","dc887072e86d97043cde19ed08b3ab5a"],["/2021/04/20/SQL注入实战/index.html","963f6746ed67b4440ad3b32625ed549e"],["/2021/05/02/注入漏洞1/index.html","371464efc9785cdfa6d627df82921930"],["/2021/05/05/App渗透测试原理/index.html","11727db6e5cd9aa81e8b35810f022b90"],["/2021/05/07/网络攻防工具/index.html","71f2f236e02adcd24185dffa2225ebd0"],["/2021/05/09/【kali linux】基础知识/index.html","bd54cde712c786ae8e41c462755898a0"],["/2021/05/12/Movavi Screen Recorder v21.2.0汉化破解/index.html","5f4188f8cdd7df7ded0d9f57b139e73f"],["/2021/05/15/第十四届全国大学生CTF比赛/index.html","b8967b4647ecca4679278a075d84d863"],["/2021/05/17/谷歌语法搜索关键字（打包）/index.html","550447653cc2bf64fe72352eeea3312c"],["/2021/05/19/[buuctf]web SQL注入篇/index.html","dae826bff165f1c083efdf35fe2ad0a6"],["/2021/05/21/[C语言]学习之路/index.html","85fbd7503f236e8932d5cb0bebe076f4"],["/2021/05/25/[C]哈夫曼编码器和译码器（C语言）/index.html","2070ace1223d544c29496adfdad3ba74"],["/2021/05/27/Gitee pages自动部署/index.html","3883fca0df7817a373769b67fd6ce749"],["/2021/05/28/议论文的基本万能模板/index.html","b756597686ce0a5a95f27bc4783fb04f"],["/2021/06/13/[VC]无向图遍历（邻接矩阵和邻接表）/index.html","e3a09f1463604dcdb7b1ce54e3613bd1"],["/2021/06/14/【信息收集】Google hack语法基础/index.html","218e2d6b550173ffed3b238aabd09bd1"],["/2021/06/14/【信息收集】基础模板/index.html","62f4483ce19d06840d3f084dd3945ca4"],["/2021/06/14/【信息收集工具】Nmap基础使用/index.html","275865309d978610763305e3c299b351"],["/2021/06/15/【信息收集】CMS指纹识别/index.html","5970e5fef1ece91e42e47538d84ff5d2"],["/2021/06/15/【信息收集】子域名收集和目录扫描/index.html","75e52f2558d3ca8f388c9380fee9083d"],["/2021/06/15/【注入工具】SQLmap实践手册/index.html","fadc8e8371288bf7a364a0da5cf4b8ff"],["/2021/06/15/【漏洞工具】BEEF基本启动方式/index.html","75fbf8c634ba9e8a7d08049b66b74ce5"],["/2021/06/16/【入侵工具】webshell管理工具基础使用/index.html","0bbb3482aa6e94fdaecacc0a1c3287cc"],["/2021/06/16/【漏洞工具】Metasploit框架基本命令/index.html","5c132d18f99298e04065512b0439ca67"],["/2021/06/17/【破解工具】Hashcat加密破解/index.html","9007faa36f3878dae50dd713210e61b7"],["/2021/06/18/【嗅探工具】wireshark初步认识/index.html","8a8b29c09910fae60e640813836a464a"],["/2021/06/18/【漏洞工具】Metasploit框架永恒之蓝/index.html","92446f260d065c65146442c3cc3bdf38"],["/2021/06/18/【漏洞工具】Metasploit框架爆破模块/index.html","cd198ee2965540d978fed095525f6a3d"],["/2021/06/19/【嗅探工具】Dns劫持 - Ettercap/index.html","f8c335630af27a06e7b0b9b6a7b7fcd4"],["/2021/06/21/【嗅探工具】无线WIFI密码破解/index.html","880bc63fe442ed690c0092eed44a07f2"],["/2021/06/23/【后门攻击】后门生成模块免杀/index.html","6ef0a1007c23230269d95dc5b9d0989f"],["/2021/06/24/【Java】数据结构-插入排序法/index.html","a51d7e093e7039373c134dc994aa663e"],["/2021/06/24/【Java】数据结构-线性查找法/index.html","9ce51210dbe05b8f411325fd98fba982"],["/2021/06/24/【Java】数据结构-选择排序法/index.html","3316bf89748724b7aa94c0b3aff98c77"],["/2021/06/25/【Java】leetcode题解-有效括号利用栈LIFO实现/index.html","ee731911d8ff125f163795b94d5cf89e"],["/2021/06/25/【Java】数据结构-利用动态数组自定义栈LIFO/index.html","6248581c091405a736a4c6fee60addae"],["/2021/06/25/【Java】数据结构-循环队列/index.html","95816e119666dd4e4b1622948e2a96ea"],["/2021/06/25/【Java】数据结构-自定义数组的数据结构/index.html","7657508e85e19e7d9a2afe25cd5bdee4"],["/2021/06/26/【Java】LeetCode题答-203移除链表元素/index.html","2b57359b96f635ff5929dc52d0cd852d"],["/2021/06/26/【Java】数据结构-链表实现栈(完整代码)/index.html","74957d8558d65317dba2114e5dceee3b"],["/2021/06/26/【Java】数据结构-链表实现队列(完整代码)/index.html","be081148c4dd9cbd21edfbd4e7be9828"],["/2021/06/26/【Java】数据结构-链表的增删改查(完整代码)/index.html","020a03b2f6b128c0ed5f09490f448a28"],["/2021/06/27/【Java】数据结构-归并排序（完整代码）/index.html","d6fbda0c1e4b931c648b58e96691a5c4"],["/2021/06/30/【Java】LeetCode题答-704二分查找/index.html","81e9f789462c01929e3fd4a332636006"],["/2021/06/30/【Java】数据结构-二分搜索树前中后序遍历和增查改（完整代码）/index.html","dfbfcfc72d3bda547e27ca24e331ea66"],["/2021/06/30/【Java】数据结构-冒泡排序（完整代码）/index.html","3914a7f0c566f3cfae8b57d86a71b761"],["/2021/06/30/【Java】数据结构-堆排序（完整代码）/index.html","b2d8c0ee2395a4b5266279cede74b1e8"],["/2021/06/30/【Java】数据结构-快速排序（完整代码）/index.html","c047c38b08657c4d6b4b9395715bbfba"],["/2021/07/05/【小知识】windows中java同时两个版本java8和java16混用/index.html","55aeb76da4e7a02b44e7c12361036a8e"],["/2021/07/07/【HTML】Form表单中Input的使用/index.html","b16935d7d920399b801807f9ee7fdc69"],["/2021/07/07/【HTML】a标签，src标签，table标签使用/index.html","1b3ac53a2e1105bb30fa89be7d232c24"],["/2021/07/07/【HTML】列表list使用/index.html","7a838aa8a575a282643ae69f3ae01732"],["/2021/07/07/【HTML】框架frame的使用/index.html","b17ce73eaf161bec1a7005aeb07b50e9"],["/2021/07/07/【HTML】选择框、复选框、单选框、文本域/index.html","9fa23763d2c9bca07158e1074e40dc60"],["/2021/07/08/【HTML】CSS基础学习之列表和超链接伪类/index.html","9b49e83c60a457361bd40335eba6520c"],["/2021/07/08/【HTML】CSS基础学习之引用样式和选择器的使用/index.html","edd744b68e6739267ae7c7573679c062"],["/2021/07/08/【HTML】CSS基础学习之背景边框文字文本的学习/index.html","528c60565129b5c279e1db8a3cae8309"],["/2021/07/09/【HTML】CSS基础学习之float浮动块级元素行内元素/index.html","4fae57c9d0bb31681cdc112f65b9279a"],["/2021/07/09/【HTML】CSS基础学习之盒子模型margin和padding的使用/index.html","55340231cd1a1870f8ab96563923128e"],["/2021/07/13/【HTML】实战阿里云src页面css模仿基础学习/index.html","cf705c1c747c9fd63e1ace831fafd30f"],["/2021/07/13/【ctfshow】web篇wp记录（持续更新）/index.html","896e2105c0a9bb426aa624eb03f88546"],["/2021/07/18/【PHP】基础知识整理/index.html","140b4c98857937334210bcd001e5cd7b"],["/about/index.html","0f587a30e18fa7d523f847f28f34fff8"],["/archives/2020/07/index.html","74396ee65fe28ff7bab9e306bbb879e7"],["/archives/2020/08/index.html","f1c9838d929dc5f3e89a7ec60826d4e6"],["/archives/2020/09/index.html","55c13d916003379795b79f911a5c75cd"],["/archives/2020/10/index.html","43afe2f8da926ad1526c3ab8b3fabb77"],["/archives/2020/12/index.html","7993fa705c395c5f47c390423d74dccf"],["/archives/2020/index.html","f5e014608de714916d9b658d117d4f2e"],["/archives/2020/page/2/index.html","6795e32d3587530c21dbd6c246828a92"],["/archives/2021/01/index.html","ff57571e9e6c5a11d11441c3a2491c1a"],["/archives/2021/04/index.html","86915aaba18a7126cba4826aef32f88a"],["/archives/2021/05/index.html","764353d4d792df29bce0a92723698106"],["/archives/2021/05/page/2/index.html","411b44e7fcde5fc443fa0f5a74705cd3"],["/archives/2021/06/index.html","288c5f07d50451fc7faf98e06b2ab11f"],["/archives/2021/06/page/2/index.html","fd70be439ef581d4c082e53fc90d85f2"],["/archives/2021/06/page/3/index.html","6ddcb6fd29d2e8313f51d7da3939a797"],["/archives/2021/06/page/4/index.html","1cc407d09fc2e1f1be696e916f50d801"],["/archives/2021/07/index.html","20d6aabb83a25de37b9868a97bc0ee23"],["/archives/2021/07/page/2/index.html","9a64a0e16745e870414e40c97e9d3bc3"],["/archives/2021/index.html","99b918dacf9cccbe891e74f5c9a1787e"],["/archives/2021/page/2/index.html","f607f8cda4064e69a1481c12047054de"],["/archives/2021/page/3/index.html","26bdb6b818d41d510fdf3704d1ac4013"],["/archives/2021/page/4/index.html","d735c37b6caa1cc2fff3ce2dca92f0aa"],["/archives/2021/page/5/index.html","bdecfb877e2b3a283fb17f75131f0a10"],["/archives/2021/page/6/index.html","a9f9f353e5e32dd8aaca1eba68952f9c"],["/archives/2021/page/7/index.html","a003f8f1582596e61665389ce4105757"],["/archives/index.html","54813957fc816cade63e1a4454b56051"],["/archives/page/2/index.html","f32ec9399991ce099a99531279e606d8"],["/archives/page/3/index.html","43bc8698b534c3294db69277537cd57a"],["/archives/page/4/index.html","161a37c609b1dce5b16b9a9c4ac2a903"],["/archives/page/5/index.html","269bb44e01378cb7e91cc7ff8b80cfe1"],["/archives/page/6/index.html","a726ed5057747d1b9e892114874fc19f"],["/archives/page/7/index.html","349aa8646c4c197984e094ff7f225691"],["/archives/page/8/index.html","148ca348e0ecca6ea50c2d4d22eeeef1"],["/archives/page/9/index.html","53b9e033a1dbd6d404004adec2d83d99"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Buuctf/index.html","b75700ed1c4d10adeefae75600f05c27"],["/categories/CISCN/index.html","c2f7446e979577f278427b04ce853adb"],["/categories/CTF/index.html","c3742f64711d3d340f1c3ee3eba06321"],["/categories/C语言/index.html","e772289b38d3adc755b854b178598f6b"],["/categories/English/index.html","4136ba520c13efaffa0e2d7ea2c7584c"],["/categories/HTML/index.html","41d9e3a0917012b21f04ba618af721d0"],["/categories/HTML/page/2/index.html","d5386abffd44a16210cc1498a1f6a595"],["/categories/Java/index.html","91b97b95072c823c7b19ac58d99735b4"],["/categories/MySQL/index.html","0b99aec7329b989f1a65346395e9ba85"],["/categories/hexo博客搭建/index.html","87df7d365409a978b27bf03162618ace"],["/categories/index.html","eccbd7718ee60d0bf44b3ed019e8d196"],["/categories/kali/index.html","a179217d5c911e9d6e47bd74775c89dc"],["/categories/php/index.html","1a61771a180a982004aa8a768cebb426"],["/categories/工具/index.html","fd0b30ce98415b0125e92075f1292703"],["/categories/摄影/index.html","c2014ce8ba40c0dbae5e15a7eecbe667"],["/categories/渗透测试/index.html","306de9f6205689214887916b17100e1c"],["/categories/漏洞挖掘/index.html","2ebc931c42e0a76d3cc2ca8bb6dc53fa"],["/categories/知识积累/index.html","c386af64b2c8d4785efdfc758c8fb0c6"],["/categories/算法与数据结构/index.html","2380d23d9bd0e51248e492ba58537070"],["/categories/算法与数据结构/page/2/index.html","066f7f356258238bc5e94b5cdf6a5f2d"],["/categories/黑客工具/index.html","3f2d52ec555691098e2813ce97756d26"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","1396b8a107df64cc7a0b167fb776dae5"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","a87485aa75e5177ef2b06bf948e31075"],["/figlet/fetch.min.js","350d73710c8e7facd458e74b17b96c27"],["/figlet/figlet.js","0dcd07654130a5de80d46793553ba41b"],["/flash/flash/index.html","0fb7dc64969377d208e5ce80980c0af1"],["/flash/index.html","067f5832af2df5c94350d7da9b8c63a2"],["/help/index.html","2704491f580fbb7ae855e903313b9f3d"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","d9452503de1e4195e67028f073c5addb"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","c6e949a6226bcf46b24676d7ff90de88"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next .png","cb9f23934fe03bc9d284da68e659d847"],["/images/favicon-32x32-next.png","896f4eb152b3798ed17bfc57d1d3e505"],["/images/head.jpg","c6e949a6226bcf46b24676d7ff90de88"],["/images/hot.png","a90be0de558143aabf0acc9cfa0a8688"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","f5f5a1ff80b9f2403d76d0092128df19"],["/images/linkcard_bak.png","e1f9f6973a3d2c38b0b2b7317bd7b317"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/qq.png","5c481dffe0f706b9666f6ca18bd4d2c6"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","4462c81055423c8d2db56a77b51c5cb8"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","641c2d396a563ddafa6fed34a9984a03"],["/images/subscribe1.png","d4accaba47d6e791ce0cd6365735992f"],["/images/subscribe~1.png","e147141e7f29ff2bb46356cc8ca7c831"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechat.svg","2ef3f3696267249c4372a5e3f9db36f2"],["/images/wechatpay.jpg","d9dbc02b5f7c379adac84eeb7f6f51b6"],["/images/xiaohutong.png","14589dbb580ac44e4c04e4e94f22ab0f"],["/index.html","f3a60a33cf7588f4b7068d8f3d38ab9a"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","fbe111a3ab258f224f8c4b41c9b3e886"],["/js/src/Valine.min.js","1479b73139a463e6147164e7dc880d9c"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/bubble.js","8fdcf8ca4941000b226b2e7535bf1af8"],["/js/src/clipboard-use.js","6245c44a33b72d0b5d04562b6808a309"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","a9f0920c901ee43e163479111c874163"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/linkcard.js","da6cb85a2c1d36027ca414459c8dd58f"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ee7e149030931501fa19b0ab74b46b34"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","56befe932a9fbebe0c88868d4eeb2254"],["/live2d-widget/README.html","db79a3bbfd794941c59b40a2f16ec8b1"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","fdff49a1ea5efd0d3bbd7ac8748b51f2"],["/live2d-widget/demo/demo1.html","a6cda8b39bd7f7afe7ba4b27f5d07dfb"],["/live2d-widget/demo/demo2.html","0575a50b61776525f57f71742be28c28"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["/navigation/index.html","b1908edb59edf4e6d07952cebd7465bf"],["/page/2/index.html","9cfe549fedcef41fadd69604aa2e0cfb"],["/page/3/index.html","db85cfc844509e6cc111f443f568ad84"],["/page/4/index.html","35cae26b97b3dd20bd5216ff4a101c9d"],["/page/5/index.html","413d70284a67315829fba72d250aaee8"],["/page/6/index.html","07a2d84d70c86d09cd217e0c27203481"],["/page/7/index.html","97d82bcce59cba97ac2e8d98cb869d5b"],["/page/8/index.html","3f038302a3296b102829ca5d8c719291"],["/page/9/index.html","d80e60035b0ecf4ed7df16018aa961ab"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","36b42eeb46d7dce54c6a2069fbabb1ef"],["/tags/AWVS/index.html","ecc92f3b2976de2bd74d0dfe3451afbc"],["/tags/CMS/index.html","b097478f263b9211c6e575362a6ea45d"],["/tags/C语言/index.html","e149a11f99a357230f324b21c42e163c"],["/tags/Dns劫持/index.html","08fb142adc5b43ba1261fb47c566c0a0"],["/tags/Ettercap/index.html","da9daa687d14a0a34a856467ad5b2bf2"],["/tags/Form/index.html","b049046b5a160c7632bb62c450ce827a"],["/tags/Gitee自动部署/index.html","3f8fec65b9caf53a8b0f45345931b015"],["/tags/Google-hack语法/index.html","f27c54ac3cb72267717c2ff885a6dfc7"],["/tags/Hashcat/index.html","a474953018fa855c774b4ad1d2d3387c"],["/tags/JAVA/index.html","1880e23e795b2785a18ea9aeba9f5ed9"],["/tags/JAVA/page/2/index.html","a8efd9dd72063b560614c219ef58a2a9"],["/tags/LeetCode/index.html","345824f722209a4e4b161fe66e4663a1"],["/tags/Nmap/index.html","e4c4c2ebafc1569f5550943505043449"],["/tags/SQL注入/index.html","e3936c53fd9f4fd0e5f53da1d7f50ebc"],["/tags/aircrack/index.html","ce8ba131ee1e968e5122abe94e2f2a0f"],["/tags/css/index.html","acff62924eb6637e1d6e23ed133ba883"],["/tags/ctf/index.html","6dc1ba7708fa3c06302e978af5f57546"],["/tags/html/index.html","90328de49a72376058cc59acfc94256e"],["/tags/html/page/2/index.html","cd677b0d53876301559aaf735c9287ad"],["/tags/index.html","fd71f02c1c55a781d25bb1bdb067e334"],["/tags/input/index.html","77d48a4a6dfb4fc43e4aaf1d9290f907"],["/tags/kali基础/index.html","13f82837049d329f209dc5988204ef8e"],["/tags/list的使用/index.html","4726323c03a7abe3300b8c7e9aac41c0"],["/tags/msf/index.html","65056c07cddb826a436a44f908be9049"],["/tags/php/index.html","cbc77624b6de54a18c442b4dbaeca219"],["/tags/python脚本/index.html","d61b49b069eae7873f41f56e099dfc6a"],["/tags/sqlmap/index.html","b0228db1951dfed4f0023a640062e58f"],["/tags/web/index.html","97f8439efb48c3836d4d3f91dda80fe4"],["/tags/web安全/index.html","66e69d1739659236cc5d2870971e8719"],["/tags/wireshark/index.html","2e69eddc65af3f94a004291c6690ccb8"],["/tags/wp/index.html","ab3624eca3d1894bf61f649171613eca"],["/tags/二分搜索树/index.html","f64f2ac179de39dac2ebe13e6de2f6b3"],["/tags/信息收集/index.html","c3cd4b25bca82e3a7f61e082e8ef0539"],["/tags/免杀/index.html","0599a89575f63e6725cee4ccb2eab8e9"],["/tags/博客搭建/index.html","0d238afafeaffee72e6cba004abf839f"],["/tags/嗅探工具/index.html","b7e544552950ba83dc49dfa88bbb214b"],["/tags/堆排序/index.html","755719ed1f0fa66d201f15dd804bb8d2"],["/tags/子域名/index.html","8ce5626355429fe6b310b1f22c44edc3"],["/tags/学习记录/index.html","69e3c4fc43604f3640d52e2ea21e83c7"],["/tags/工具/index.html","8a3acf96d1235c221f5c14980190ec1d"],["/tags/归并排序/index.html","1e2b490af66f790749864449b0923259"],["/tags/录屏/index.html","e70e59f07ddbbfa6b69cb83eb31425b3"],["/tags/快速排序/index.html","5f8daebd6ee6067ce5038590cfb22066"],["/tags/成长之路/index.html","d00e8592f4909f7f8c99ea2aa9017b1a"],["/tags/成长之路/page/2/index.html","6a39becc814466bfd8f285444072e06d"],["/tags/成长之路/page/3/index.html","28e2327361fd4b28c9f4e4040a89db38"],["/tags/成长之路/page/4/index.html","4ee6d5d09472622a49b75360a375830e"],["/tags/指纹识别/index.html","01d4ff31331418c179223cef91a65e9a"],["/tags/插入排序/index.html","9d797d561cc5dc7875fa40cec817251a"],["/tags/数据结构/index.html","56860ea6dc9ab16798a1c70ed3b69272"],["/tags/数据结构/page/2/index.html","4dcf48ae86336341769f6e5bbce908a2"],["/tags/无线wifi密码破解/index.html","0292a83862681ed449a8c103e2d74772"],["/tags/标签的使用/index.html","2f01c917985d9d97c9efb3e34b827db4"],["/tags/渗透测试/index.html","b1878857731fcabec4bbeef729434b18"],["/tags/渗透测试基础/index.html","9d8490fdee1b890817e9271820bc1ebb"],["/tags/渗透测试工具/index.html","245083b7112eeba0c5d8abaf10e36416"],["/tags/漏洞工具/index.html","31bd899e048b02344fb5dbf95a96e52b"],["/tags/爆破工具/index.html","20c5de7480ccfc48b6e28b576e75c1fa"],["/tags/版本共存/index.html","f26023a5e5aed3435665b8de455447d7"],["/tags/知识拓展/index.html","c902d7e6d12c2b3c712a65fdc838f370"],["/tags/知识拓展/page/2/index.html","a44907d0bb240293e553e16339332485"],["/tags/网络攻防工具/index.html","9477ac123c472bd47825e16508757308"],["/tags/英语四级/index.html","03bf2ae426ce0c96928143776381b861"],["/tags/议论文万能模板/index.html","6f606a4d8e81a64540c829a221770e7f"],["/tags/谷歌语法/index.html","f8f09f0c6cd647262924f78594a35369"],["/tags/选择排序/index.html","e44a6267a2f05c79e04b31738994809d"],["/tags/链表实现队列/index.html","43f5c7a11dfc59ab53b23045fa1db99f"],["/tags/链表的增删改查/index.html","84ff3ed294a955763836b287a7d4a802"],["/tags/镜头/index.html","29f71b81c716d5e47c1f97d9aa6f420c"],["/top/index.html","931c9133d65347ddeea0a4077a0c836f"]];
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
