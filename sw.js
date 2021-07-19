/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/07/01/hexo博客/index.html","01eee6ce54f12b487e104b82b798350f"],["/2020/08/18/强调句/index.html","d08b8878b97906707e883045ce13ef31"],["/2020/08/31/JAVA编程起步/index.html","7bbe6ad4bd081b74b0ff0d2f52c27ca8"],["/2020/09/02/名词性从句/index.html","315a90625a8ab35bbceb9c698db3d580"],["/2020/09/02/定语从句/index.html","a5e17bba91910f0716ff6548fb8846ad"],["/2020/09/02/状语从句/index.html","b5ae138e338752918a1a5acf30181788"],["/2020/09/02/简单句的补充/index.html","ad3f97297d6694ca95239c28b83f11ac"],["/2020/09/16/MySql数据库/index.html","96c45b8977e1821eb487c6bf71f294b7"],["/2020/09/18/JShell交互式工具/index.html","221697bdb40ff12d688d46f65ab2b562"],["/2020/09/19/CLASSPATH环境属性/index.html","ca454dbe617f900c3e5b1f786467f601"],["/2020/09/19/JAVA代码集合/index.html","042dca44147b03e99d39388f4883653e"],["/2020/09/21/JAVASE/index.html","9bb3d904dbca5e1f38f89f87497906df"],["/2020/09/21/MySql表的结构/index.html","b1d76ee8b0d76c1e62bf28838b605d6d"],["/2020/10/04/分组查询 Group By/index.html","b909a4c1ee5256f29e39adaebb4e972c"],["/2020/10/05/MySQL查询/index.html","060ddd1ec67b3e53f3f3d88a2a63c154"],["/2020/10/12/MYSQL表的使用/index.html","e9a0b4fa8ce3130d449ca78778dab4ed"],["/2020/10/15/MYSQL——27道练习题/index.html","9b015119f06624a2d7bae160b1f362e3"],["/2020/10/26/Monster的口语方法/index.html","d72bc0f95e3b2d966301d3258f40ea6f"],["/2020/10/27/拍摄/index.html","57d4a422f6b74a57ac3273f3330155a7"],["/2020/12/04/详细阅读之策略/index.html","4a21be1d2aea1c69f297af981e8e3972"],["/2021/01/07/长难句分析/index.html","efad8e6798d232bf04972a712dadceb2"],["/2021/04/11/unserialize反序列化漏洞/index.html","9a6710f7b8bc03671d3c2207ea56b18d"],["/2021/04/11/代码审计--Duomicms变量覆盖函数/index.html","47859ae8c5342a90365914802a6d9555"],["/2021/04/12/0day审计实战案例/index.html","e6bc0f953de5ec2704d10a76a6d8ac62"],["/2021/04/15/bypass-绕过阻挡我们的WAF/index.html","297796212c672744756a5fb0d1a41397"],["/2021/04/19/内网渗透/index.html","03f07e8c9911b37dcb36f082c26c52b2"],["/2021/04/20/SQL注入实战/index.html","cca5af348652462b53c73eb7fc84e5d4"],["/2021/05/02/注入漏洞1/index.html","c231212d575f6854d366848254b32418"],["/2021/05/05/App渗透测试原理/index.html","aeb41f8230b5f8eb85501b623e38cd80"],["/2021/05/07/网络攻防工具/index.html","3143299b42c00eed4c97f4d697738879"],["/2021/05/09/【kali linux】基础知识/index.html","926cf6f9378f661140a3ffdfd54d68da"],["/2021/05/12/Movavi Screen Recorder v21.2.0汉化破解/index.html","ce0e6fc13b44c52d1fa522308c1d2138"],["/2021/05/15/第十四届全国大学生CTF比赛/index.html","97867f694936c4e68afa7b1a9bd5eab3"],["/2021/05/17/谷歌语法搜索关键字（打包）/index.html","8abaf82147b62e0b5b8336025534b197"],["/2021/05/19/[buuctf]web SQL注入篇/index.html","4a226709c7aa308ea0f81a6f12041001"],["/2021/05/21/[C语言]学习之路/index.html","404851c1302eb5407128f7c720481107"],["/2021/05/25/[C]哈夫曼编码器和译码器（C语言）/index.html","992037b3bea4af9bde1585f418bdd451"],["/2021/05/27/Gitee pages自动部署/index.html","923e58b4ce9070eef8d82e4bb2d3225d"],["/2021/05/28/议论文的基本万能模板/index.html","e8c170edb6141478390026170d3a8c00"],["/2021/06/13/[VC]无向图遍历（邻接矩阵和邻接表）/index.html","0d84f4a5a0ca18fa1c56ceb04981366f"],["/2021/06/14/【信息收集】Google hack语法基础/index.html","52679008bcc321cd6ce6f24f5bc5c3b9"],["/2021/06/14/【信息收集】基础模板/index.html","2facc6bddd4c4b1efb9dd629c2ab631d"],["/2021/06/14/【信息收集工具】Nmap基础使用/index.html","c9f9fa82e59b32c5f718250dfbd02908"],["/2021/06/15/【信息收集】CMS指纹识别/index.html","24d6a3b44f61d97e134e8dad26adec8e"],["/2021/06/15/【信息收集】子域名收集和目录扫描/index.html","804130aa0cb1df64de72fe342585f494"],["/2021/06/15/【注入工具】SQLmap实践手册/index.html","a061f8b34858225b66d7f203e53ce61e"],["/2021/06/15/【漏洞工具】BEEF基本启动方式/index.html","6a8b1f968cf1a5958ccb60bf1bcebe35"],["/2021/06/16/【入侵工具】webshell管理工具基础使用/index.html","6824d7a667d6adc127b13649597db9d5"],["/2021/06/16/【漏洞工具】Metasploit框架基本命令/index.html","77876289c33f33c9621f9fdda689c8a1"],["/2021/06/17/【破解工具】Hashcat加密破解/index.html","1924624eda3d06635146b2b87cb90a28"],["/2021/06/18/【嗅探工具】wireshark初步认识/index.html","9afd5cea0e1d28a0cd648e66daf93fbd"],["/2021/06/18/【漏洞工具】Metasploit框架永恒之蓝/index.html","fdfc09e6788cd9aa490def7442e8059f"],["/2021/06/18/【漏洞工具】Metasploit框架爆破模块/index.html","dcc76c2055eca885d819fb152c75474f"],["/2021/06/19/【嗅探工具】Dns劫持 - Ettercap/index.html","94edc2db0f5b001f09c19127a59a483d"],["/2021/06/21/【嗅探工具】无线WIFI密码破解/index.html","273f8e103b0908395cb5cd82c2cde4ae"],["/2021/06/23/【后门攻击】后门生成模块免杀/index.html","e74747266e210d1a71cedd95ff3f2d14"],["/2021/06/24/【Java】数据结构-插入排序法/index.html","e0f2e3ef4bdefc64fbd1bfa267387ce0"],["/2021/06/24/【Java】数据结构-线性查找法/index.html","e3e4445f1135cb39a82c755130759268"],["/2021/06/24/【Java】数据结构-选择排序法/index.html","25caa9ba02d52fccec63863aff25c43c"],["/2021/06/25/【Java】leetcode题解-有效括号利用栈LIFO实现/index.html","943c7fcdc14390c6fa4819cbf91c7d79"],["/2021/06/25/【Java】数据结构-利用动态数组自定义栈LIFO/index.html","487080116754af33119eca321a6b8026"],["/2021/06/25/【Java】数据结构-循环队列/index.html","3636de4f32ecc3e24933018ca5fad6e1"],["/2021/06/25/【Java】数据结构-自定义数组的数据结构/index.html","fb9c31b5056aa52cb4877eaf87d7c7fb"],["/2021/06/26/【Java】LeetCode题答-203移除链表元素/index.html","2ae2f1c8b44bc6810a6364f201e3f459"],["/2021/06/26/【Java】数据结构-链表实现栈(完整代码)/index.html","a6d69349610cd910c64d006bd68b9b46"],["/2021/06/26/【Java】数据结构-链表实现队列(完整代码)/index.html","ef2bea7ca900a1527ace0d079f1798fa"],["/2021/06/26/【Java】数据结构-链表的增删改查(完整代码)/index.html","e69d94e73639991fae9b329ea125141b"],["/2021/06/27/【Java】数据结构-归并排序（完整代码）/index.html","6530f36c3591fc8c43d6bd33399fc820"],["/2021/06/30/【Java】LeetCode题答-704二分查找/index.html","40b86e0c74dd52bd6e1234a8d60064fe"],["/2021/06/30/【Java】数据结构-二分搜索树前中后序遍历和增查改（完整代码）/index.html","2d92c3f371b88a7158782132a4960b47"],["/2021/06/30/【Java】数据结构-冒泡排序（完整代码）/index.html","55ca63bb481cb5395ca3c13530b54a14"],["/2021/06/30/【Java】数据结构-堆排序（完整代码）/index.html","dac8f527447c75a244e44c2fce9c38e9"],["/2021/06/30/【Java】数据结构-快速排序（完整代码）/index.html","b9f6654d56d9eb807e749d380524a8fb"],["/2021/07/05/【小知识】windows中java同时两个版本java8和java16混用/index.html","e80fe49dee2352b601546ca2e6906b34"],["/2021/07/07/【HTML】Form表单中Input的使用/index.html","88ba7a1165d8de1a345ee13b6c557c20"],["/2021/07/07/【HTML】a标签，src标签，table标签使用/index.html","df08bfea10530cff9b4e6b4350679436"],["/2021/07/07/【HTML】列表list使用/index.html","e6812e608004150434a646da810cdf71"],["/2021/07/07/【HTML】框架frame的使用/index.html","1c7cca484dc0a24b35648c4fff1b2bda"],["/2021/07/07/【HTML】选择框、复选框、单选框、文本域/index.html","96b88e4896bc505a9ee9a7e58f3cb891"],["/2021/07/08/【HTML】CSS基础学习之列表和超链接伪类/index.html","8fb8f9e97ed816afd87e583dcbdb78f3"],["/2021/07/08/【HTML】CSS基础学习之引用样式和选择器的使用/index.html","2725cfe77f59677f7bdeb0e03b25eb24"],["/2021/07/08/【HTML】CSS基础学习之背景边框文字文本的学习/index.html","f0bf16f65a795687e42529acc2fc413c"],["/2021/07/09/【HTML】CSS基础学习之float浮动块级元素行内元素/index.html","335d6eadc07d775a3691e9647c152b10"],["/2021/07/09/【HTML】CSS基础学习之盒子模型margin和padding的使用/index.html","080c3e3a61cad1e97d8ceb310bd4b2c6"],["/2021/07/13/【HTML】实战阿里云src页面css模仿基础学习/index.html","19a4c891fca3612aee6b818625f11278"],["/2021/07/13/【ctfshow】web篇wp记录（持续更新）/index.html","710df9802192229ea5b942ac15e32aa8"],["/2021/07/18/【PHP】基础知识整理/index.html","33654c2067fb9753e70e95c4df9f2ee3"],["/about/index.html","f03686070c28634cca2e9db5bd3323d3"],["/archives/2020/07/index.html","fa0e0bcf299d76c37eb23c0bf2ccb5da"],["/archives/2020/08/index.html","63491d9ae9a800048e9ec3551e297ce8"],["/archives/2020/09/index.html","88e96122bbfcd69bdc85ddb1f7cace4a"],["/archives/2020/10/index.html","3536f7f641ae3f5d65fb40b5f962a210"],["/archives/2020/12/index.html","3a8caf628b73f737b138d7857c1647b1"],["/archives/2020/index.html","793d80597c52e496cccf8be78cf04e84"],["/archives/2020/page/2/index.html","a33ee9497f3b58153bac67616ccb5934"],["/archives/2021/01/index.html","917b8de96bce82be92e091926e3d835c"],["/archives/2021/04/index.html","65c13670f527e2853f5bdf4c540768d5"],["/archives/2021/05/index.html","cd38f8ed610d778d3ce032151da381f2"],["/archives/2021/05/page/2/index.html","bb6f883992fb70b9fe74b896f55315bd"],["/archives/2021/06/index.html","2c6d14613ab003b0009381bbf6199d87"],["/archives/2021/06/page/2/index.html","a99a47cf5e67e05611d57f038e77c54c"],["/archives/2021/06/page/3/index.html","8fb6edbf5e4ec161c64d9f0668aec802"],["/archives/2021/06/page/4/index.html","10dfe9ce714873f7ba5fcc2a0c9602e0"],["/archives/2021/07/index.html","1ff2b20239c3a01caa15e20162bb4b7a"],["/archives/2021/07/page/2/index.html","eaaf6eda911a959d666e750ec45da8b6"],["/archives/2021/index.html","d8e293a6e993d4b428c4a6371e341194"],["/archives/2021/page/2/index.html","5ff9f2d901051d28312a8e6defb5804e"],["/archives/2021/page/3/index.html","e22fa5be9636980615cec236ee452e4e"],["/archives/2021/page/4/index.html","2018f6826330b5c5e82718a0a832551b"],["/archives/2021/page/5/index.html","94de70291e4360c792201044f71b4cfa"],["/archives/2021/page/6/index.html","5b82435eb1790e716e8633d2a0761462"],["/archives/2021/page/7/index.html","b6b9e443a04feabef6bf90fd91ebda96"],["/archives/index.html","0e50fcf924f9c02b9126689495217305"],["/archives/page/2/index.html","3aa7e5a7a4b6e6cd1f1c41a646a0f7d7"],["/archives/page/3/index.html","1ecbad911549ab190810e9dda8dc34f1"],["/archives/page/4/index.html","76597f56ce549759245c3382218689a7"],["/archives/page/5/index.html","85fcc15077978ced777bdb4daaef4637"],["/archives/page/6/index.html","9bed31f68e9ad9e44ecc3e24071489fc"],["/archives/page/7/index.html","a5694bb7387deac8e1858a7f7b55740b"],["/archives/page/8/index.html","9f45e578894c2411cfe7bd0a7f78f406"],["/archives/page/9/index.html","3e867ac75e69df222de0e89bf93f48c0"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Buuctf/index.html","9cfcd0d5d482e049dc266099971472b6"],["/categories/CISCN/index.html","871b26e3234131ddc9ee899c0e8a9cf1"],["/categories/CTF/index.html","d2898f538257d614c1ef6d42fb6d6357"],["/categories/C语言/index.html","7e49a9253aa1df870769ba9c33918d2c"],["/categories/English/index.html","e1992fb9907a2c5bbb1cfea26d0d42d1"],["/categories/HTML/index.html","f50c01213e20d703a41fa5a29986e4ae"],["/categories/HTML/page/2/index.html","76df3471a85febf8be2004bf2603366b"],["/categories/Java/index.html","613297be89d97cfe75bfe3030f4e4a9b"],["/categories/MySQL/index.html","44ff7f6ef1a1cc3595a4f8fd356ccdea"],["/categories/hexo博客搭建/index.html","bd1dab535087ebd4f279581afc11ae86"],["/categories/index.html","854be29e97e27581916c4c0d16281778"],["/categories/kali/index.html","488ff896895a30072c4289a3b402b595"],["/categories/php/index.html","d2d4a4668c89e92bb775134cb5bd931f"],["/categories/工具/index.html","4be55620f1cd6d1fbec7cbe5376dd07f"],["/categories/摄影/index.html","ba9ab1c038c9f8258d327f705c459396"],["/categories/渗透测试/index.html","3228b13b23a14c4741ac123c652cb56e"],["/categories/漏洞挖掘/index.html","8309a8d82e43438ce8d301dfb787ef46"],["/categories/知识积累/index.html","fc8294124763e2ce218522036a3e3b88"],["/categories/算法与数据结构/index.html","572ebcc28ac6531d4dbe7699b689ca7b"],["/categories/算法与数据结构/page/2/index.html","90b270d50999e54ac9d6902cfa984d2e"],["/categories/黑客工具/index.html","403404584278e24abb8670ae35d92f08"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","1396b8a107df64cc7a0b167fb776dae5"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","a87485aa75e5177ef2b06bf948e31075"],["/figlet/fetch.min.js","350d73710c8e7facd458e74b17b96c27"],["/figlet/figlet.js","0dcd07654130a5de80d46793553ba41b"],["/flash/flash/index.html","05f239bb0bc3f5cddc3682f0c9e319a8"],["/flash/index.html","64570bcf10dd844c2fcebf27966293e6"],["/help/index.html","51f83600c32fcec37dd7db0bb44e3fbe"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","d9452503de1e4195e67028f073c5addb"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","c6e949a6226bcf46b24676d7ff90de88"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next .png","cb9f23934fe03bc9d284da68e659d847"],["/images/favicon-32x32-next.png","896f4eb152b3798ed17bfc57d1d3e505"],["/images/head.jpg","c6e949a6226bcf46b24676d7ff90de88"],["/images/hot.png","a90be0de558143aabf0acc9cfa0a8688"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","f5f5a1ff80b9f2403d76d0092128df19"],["/images/linkcard_bak.png","e1f9f6973a3d2c38b0b2b7317bd7b317"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/qq.png","5c481dffe0f706b9666f6ca18bd4d2c6"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","4462c81055423c8d2db56a77b51c5cb8"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","641c2d396a563ddafa6fed34a9984a03"],["/images/subscribe1.png","d4accaba47d6e791ce0cd6365735992f"],["/images/subscribe~1.png","e147141e7f29ff2bb46356cc8ca7c831"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechat.svg","2ef3f3696267249c4372a5e3f9db36f2"],["/images/wechatpay.jpg","d9dbc02b5f7c379adac84eeb7f6f51b6"],["/images/xiaohutong.png","14589dbb580ac44e4c04e4e94f22ab0f"],["/index.html","430cba97550da5aae62b2ab431f7f97a"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","fbe111a3ab258f224f8c4b41c9b3e886"],["/js/src/Valine.min.js","1479b73139a463e6147164e7dc880d9c"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/bubble.js","8fdcf8ca4941000b226b2e7535bf1af8"],["/js/src/clipboard-use.js","6245c44a33b72d0b5d04562b6808a309"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","a9f0920c901ee43e163479111c874163"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/linkcard.js","da6cb85a2c1d36027ca414459c8dd58f"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ee7e149030931501fa19b0ab74b46b34"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","dae7fa668016e9cdbf98c59d57c11c31"],["/live2d-widget/README.html","db79a3bbfd794941c59b40a2f16ec8b1"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","fdff49a1ea5efd0d3bbd7ac8748b51f2"],["/live2d-widget/demo/demo1.html","a6cda8b39bd7f7afe7ba4b27f5d07dfb"],["/live2d-widget/demo/demo2.html","0575a50b61776525f57f71742be28c28"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["/page/2/index.html","f81103e2195ccbaabe80e579e5c4428f"],["/page/3/index.html","f639d5b0187390356750b60d9857d0e1"],["/page/4/index.html","337605d862068f6f9a71fe70346e1302"],["/page/5/index.html","d5a3c940eda897f10ad0e09cde680cec"],["/page/6/index.html","49ae54176482a9e73f914e060e32e21e"],["/page/7/index.html","7f3bb6cadeed92e5be8b8d40d22865a2"],["/page/8/index.html","d7302e02b3c925ef337e8f5b06943a0a"],["/page/9/index.html","9153761f7a6cbe2533e9e54e6c53a052"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","e2a421df3c1628fe68fcbabd955a74a2"],["/tags/AWVS/index.html","a7ed44855d3839ddfe21ff36de5b6b77"],["/tags/CMS/index.html","c51a409543cd6a9cb851f6490d8b24ed"],["/tags/C语言/index.html","dcb71e01e5d7d208f7c0fda2b1d05b07"],["/tags/Dns劫持/index.html","ea85f19a5828677448c23e203e9d0a9d"],["/tags/Ettercap/index.html","5fa84d7b31ddc58be83e3c9b3a02a8f9"],["/tags/Form/index.html","62f101e077db88c16da154a428a3b969"],["/tags/Gitee自动部署/index.html","2ff7706e1b7a83697c6da60b69371e1f"],["/tags/Google-hack语法/index.html","5088f992502de1673f91a9eeff9a827e"],["/tags/Hashcat/index.html","1b989a3966043543d0fc6dccc126b126"],["/tags/JAVA/index.html","b5c5956b39ae8bf6c4316b323f0a02cf"],["/tags/JAVA/page/2/index.html","6dbfe751a7bc26f0b1f52331c8d18493"],["/tags/LeetCode/index.html","1672a4599ae3fe02766ddaa9981214b5"],["/tags/Nmap/index.html","5362a8def471224419d7cda4cd84488e"],["/tags/SQL注入/index.html","19a71b56dfd6d5aebdd65c149120a663"],["/tags/aircrack/index.html","2e51b6a38ccad52ee1b730fc618a0948"],["/tags/css/index.html","1b288822ede0c6e3bc49ec83b70947ee"],["/tags/ctf/index.html","438d6945e8cff706b6f54cb5db2a0c23"],["/tags/html/index.html","67813498219834750d791bbee8a98da5"],["/tags/html/page/2/index.html","2922a767dde63538c99e0d963328991b"],["/tags/index.html","9c9f1ea5b5a4f386c7c72fc61bb8f167"],["/tags/input/index.html","5a2c7ecd6d908e400b6717e587a632e3"],["/tags/kali基础/index.html","255478802d25a2fd88778e7aa386811e"],["/tags/list的使用/index.html","96804536bafc352227c14d0d603a27e7"],["/tags/msf/index.html","3fb700f548c66a0c137d7a48d6ae25d0"],["/tags/php/index.html","1d0a206cc805a47377c2dea53107a0db"],["/tags/python脚本/index.html","f65c41a2e23d983a6b1137c91e3dfbfb"],["/tags/sqlmap/index.html","316a805acb5088d8d92febf3fe72ed33"],["/tags/web/index.html","eb0fd8f122e8fc99e29351b432c80682"],["/tags/web安全/index.html","0be7f900b3dd28d4b862a8ad94f7d3f9"],["/tags/wireshark/index.html","fe742b12a851ca4d4eb9f36f263b808f"],["/tags/wp/index.html","16c7d46dc27074f45aba98d6f5dde7cc"],["/tags/二分搜索树/index.html","92c5950896852d1b7b16e2a7dd4dfd98"],["/tags/信息收集/index.html","ed4fcffde9d6e6a2616715f987c765fc"],["/tags/免杀/index.html","2831857f0979f3565d8d8dfb54c61c63"],["/tags/博客搭建/index.html","d26c6b0d9acf13181443389e7b218bff"],["/tags/嗅探工具/index.html","7c661c8532aba5f1e0df3373ee4d7214"],["/tags/堆排序/index.html","138a654c3653c55c0b96824406cedfb3"],["/tags/子域名/index.html","14ff49c70fe430a8e06e5a9b81b1c189"],["/tags/学习记录/index.html","d10d77d671f8918383ec36a1cb34c8c5"],["/tags/工具/index.html","dcc165cffd31a9f3d0a4fbe24be8f5ee"],["/tags/归并排序/index.html","37691245c7e0b9594889a55cd85229f8"],["/tags/录屏/index.html","f2d3fcd176aa6f68946ff582561c0fec"],["/tags/快速排序/index.html","948c8a1758158fd89726529626790d88"],["/tags/成长之路/index.html","9dd2172ccbd335ceb229a260ecbf8ffb"],["/tags/成长之路/page/2/index.html","b465adb681c76ce601d732d3413fa986"],["/tags/成长之路/page/3/index.html","54d6e113ad2bb4b867fa80cecb9cdb6f"],["/tags/成长之路/page/4/index.html","3ef4354cd3e0a2b0842dfb12706b5b46"],["/tags/指纹识别/index.html","61250425e1e73fbc395b751347189c19"],["/tags/插入排序/index.html","33cc67195ab0f8332144eb67a86180dc"],["/tags/数据结构/index.html","305bbce0b9c005d34c700ee13eb673be"],["/tags/数据结构/page/2/index.html","360391399d57a2051b6e181b060592bb"],["/tags/无线wifi密码破解/index.html","d59d1ce54c2d90b9cc6fdcae4a956cbf"],["/tags/标签的使用/index.html","2dba8d880fd907af7c58500f3afb28ac"],["/tags/渗透测试/index.html","911fe8a87e319c3038fde69bb5e104fc"],["/tags/渗透测试基础/index.html","fe8a3015f61f040a2f15daa5d7167df5"],["/tags/渗透测试工具/index.html","7d46bfa20ede606239081d0627195e59"],["/tags/漏洞工具/index.html","fe606a5f234693c0eb6353da8afe0684"],["/tags/爆破工具/index.html","750378855b0818f0974280a206f0906e"],["/tags/版本共存/index.html","bf783b13df73d14667596c2cd9d0fde7"],["/tags/知识拓展/index.html","433a22109417f988a47edf60cb9cb3c7"],["/tags/知识拓展/page/2/index.html","7503ad212993106e19f223378d8a2af9"],["/tags/网络攻防工具/index.html","f46a25511ed0d114cf4a0c9a34fe5591"],["/tags/英语四级/index.html","eff11173951bfedd3181301f3a9b045a"],["/tags/议论文万能模板/index.html","d377ceda1d85fd7dd81d8142223e94f1"],["/tags/谷歌语法/index.html","af97101231cd2409bb783b879d83eccf"],["/tags/选择排序/index.html","0004dad26e710498371511a351b44207"],["/tags/链表实现队列/index.html","a760f746c129eb227efca3a1f9602114"],["/tags/链表的增删改查/index.html","c99f35864889c0e5ae96ff0e0ca1f0e5"],["/tags/镜头/index.html","7eb0babb2f4332784d5486adcf94c4d9"],["/top/index.html","5f92210fdb0290ab391f3c1adab82c41"]];
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
