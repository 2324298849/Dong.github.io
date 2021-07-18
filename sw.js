/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/07/01/hexo博客/index.html","1bc8b1f481d85908052892ad6b9fd184"],["/2020/08/18/强调句/index.html","433dcf1e8084cf29a882088bb502e043"],["/2020/08/31/JAVA编程起步/index.html","2784efd409c7d083167543693746d6ca"],["/2020/09/02/名词性从句/index.html","7a7933f0ee12969e0dec4edb13797618"],["/2020/09/02/定语从句/index.html","a7a7be1936911aa86e58c09bd9063719"],["/2020/09/02/状语从句/index.html","a85602ac6fd8f0f01c94aeee47292fff"],["/2020/09/02/简单句的补充/index.html","d7ef57cc855c7409a415a14c8459e6ec"],["/2020/09/16/MySql数据库/index.html","4e611a1f16a7ec95496245eec779f043"],["/2020/09/18/JShell交互式工具/index.html","958d66c787b3f4fb9eb53ad81d08618d"],["/2020/09/19/CLASSPATH环境属性/index.html","3ac26eb9196b3f6ecc6114413b68eb37"],["/2020/09/19/JAVA代码集合/index.html","97008f83733f8aa5b7e64ecccde34570"],["/2020/09/21/JAVASE/index.html","0636aff4cbd239c4f19da50db40ce4d9"],["/2020/09/21/MySql表的结构/index.html","0e5b985f28afa8c468a5bf6093808a40"],["/2020/10/04/分组查询 Group By/index.html","2452df8bcf6292ecf5cad2861b09584b"],["/2020/10/05/MySQL查询/index.html","baab96439680a25a1f5a18b78626ddee"],["/2020/10/12/MYSQL表的使用/index.html","2f32371111012914095fc6fec5ff7a45"],["/2020/10/15/MYSQL——27道练习题/index.html","3fc401336565a978fc55f8dde7cc7e28"],["/2020/10/26/Monster的口语方法/index.html","dacea7aec2de04976924e288dafe0c14"],["/2020/10/27/拍摄/index.html","39a563ce1774d56d2c8c1823b5467f6b"],["/2020/12/04/详细阅读之策略/index.html","c0e5a17e014e50c48b88eac5e8dbfbe9"],["/2021/01/07/长难句分析/index.html","8ebfd6f50ffcf466d3949b34be76f13a"],["/2021/04/11/unserialize反序列化漏洞/index.html","5a031d44425fa92f8a82b562cc0b7eaf"],["/2021/04/11/代码审计--Duomicms变量覆盖函数/index.html","1718c16938cd4249df7df070b0814c8f"],["/2021/04/12/0day审计实战案例/index.html","f2c4b7204451777fe962fcf495c1974f"],["/2021/04/15/bypass-绕过阻挡我们的WAF/index.html","7974a57262b626b085f59cce8102d388"],["/2021/04/19/内网渗透/index.html","3891b16290ed9884e30fa6019243accc"],["/2021/04/20/SQL注入实战/index.html","917b80666ee40e3932df7b1ed63e064c"],["/2021/05/02/注入漏洞1/index.html","a38571aba4e21d548529d22fc92f21d8"],["/2021/05/05/App渗透测试原理/index.html","cff907e1259c0ead93a302981c98e910"],["/2021/05/07/网络攻防工具/index.html","213e827ad6aae49a5e23eed0c18a0bcd"],["/2021/05/09/【kali linux】基础知识/index.html","dfcff3829d91c1a3c3450ec68e193bbb"],["/2021/05/12/Movavi Screen Recorder v21.2.0汉化破解/index.html","989a30a9c029fef9236db2f55659927f"],["/2021/05/15/第十四届全国大学生CTF比赛/index.html","dddc0fd28fa74fd21603b48fd88955fa"],["/2021/05/17/谷歌语法搜索关键字（打包）/index.html","b12a37953a605dd90bc7ff1292a8c510"],["/2021/05/19/[buuctf]web SQL注入篇/index.html","ae74e6f3ebe7e9ae19ca0fd2268dc5cb"],["/2021/05/21/[C语言]学习之路/index.html","202ee82b335d04d26cc24547e578669a"],["/2021/05/25/[C]哈夫曼编码器和译码器（C语言）/index.html","730b0813cca80426921ca6b9dbc6bbd4"],["/2021/05/27/Gitee pages自动部署/index.html","ca4200fa5c9ce1301955723bc1577225"],["/2021/05/28/议论文的基本万能模板/index.html","0358103fb01efff1badfdc910f737fb1"],["/2021/06/13/[VC]无向图遍历（邻接矩阵和邻接表）/index.html","79df4b461455e89e57c001f254424560"],["/2021/06/14/【信息收集】Google hack语法基础/index.html","d3b163d570c0a6b3718a16a5a202bbc4"],["/2021/06/14/【信息收集】基础模板/index.html","2c30bf68cdd413171a183ebf54afdd97"],["/2021/06/14/【信息收集工具】Nmap基础使用/index.html","5435e320aedaeb11e8c23be84d4fe37b"],["/2021/06/15/【信息收集】CMS指纹识别/index.html","a8ce92c6bdbd19e496c8d2870614d059"],["/2021/06/15/【信息收集】子域名收集和目录扫描/index.html","355c94cffd3acc5bc2acc278855c23ce"],["/2021/06/15/【注入工具】SQLmap实践手册/index.html","e97bff7800e3935dfc0ac7868a1cd4ba"],["/2021/06/15/【漏洞工具】BEEF基本启动方式/index.html","06e8caec67e1ec974629bd4e367b1765"],["/2021/06/16/【入侵工具】webshell管理工具基础使用/index.html","af6dd075038afe77a30ae1427605ef85"],["/2021/06/16/【漏洞工具】Metasploit框架基本命令/index.html","8b859c3da5579894a510eaaa73c235f6"],["/2021/06/17/【破解工具】Hashcat加密破解/index.html","df45261749bcf3ac9bd57a41fa4b0e21"],["/2021/06/18/【嗅探工具】wireshark初步认识/index.html","4a848a29e03962de8804b74e96ebe330"],["/2021/06/18/【漏洞工具】Metasploit框架永恒之蓝/index.html","903baf635e3b99c836848806cbe2e6ae"],["/2021/06/18/【漏洞工具】Metasploit框架爆破模块/index.html","daa2388d4d64fc78f6694e3f7546aff6"],["/2021/06/19/【嗅探工具】Dns劫持 - Ettercap/index.html","fc93112a3f1ce7217bfdd98db626547d"],["/2021/06/21/【嗅探工具】无线WIFI密码破解/index.html","19958dab7d8f1b938d2fd134fa75ea66"],["/2021/06/23/【后门攻击】后门生成模块免杀/index.html","7072d68cf2e558d27facb5f2ffd4029a"],["/2021/06/24/【Java】数据结构-插入排序法/index.html","9f73f068f0df1126f00e0dc9b43b4e86"],["/2021/06/24/【Java】数据结构-线性查找法/index.html","f954c43c5881eaf9da7ed16626bdcac2"],["/2021/06/24/【Java】数据结构-选择排序法/index.html","b15e3ae72ee8b53c700739eba1b28d23"],["/2021/06/25/【Java】leetcode题解-有效括号利用栈LIFO实现/index.html","839b80de246f6de68b5f41fcd43b7ec8"],["/2021/06/25/【Java】数据结构-利用动态数组自定义栈LIFO/index.html","a91738b03a22dcfa7c8859aa6d5091e2"],["/2021/06/25/【Java】数据结构-循环队列/index.html","95aa178a0b9bec33da6eef9aaacbdde8"],["/2021/06/25/【Java】数据结构-自定义数组的数据结构/index.html","f7cfc6ae27c858d21f6c07b409e44f7b"],["/2021/06/26/【Java】LeetCode题答-203移除链表元素/index.html","e5a9708114b53962ac55ff812d8750eb"],["/2021/06/26/【Java】数据结构-链表实现栈(完整代码)/index.html","cbccad9783ea3197497d1c2c9b2572ae"],["/2021/06/26/【Java】数据结构-链表实现队列(完整代码)/index.html","11a0b431c77f414c94c1a81a1619f9e9"],["/2021/06/26/【Java】数据结构-链表的增删改查(完整代码)/index.html","4a08558fce876f414117300ed5cba669"],["/2021/06/27/【Java】数据结构-归并排序（完整代码）/index.html","83905fbbb04c68a90b6994a9f83d5b71"],["/2021/06/30/【Java】LeetCode题答-704二分查找/index.html","1ed34269729775619991fc0f53c732e3"],["/2021/06/30/【Java】数据结构-二分搜索树前中后序遍历和增查改（完整代码）/index.html","2cb33444b9c7d055b39cd5892bd0b8e5"],["/2021/06/30/【Java】数据结构-冒泡排序（完整代码）/index.html","34fa9ffed685e156570c7364237aef7f"],["/2021/06/30/【Java】数据结构-堆排序（完整代码）/index.html","35a42e57e86d66523f7dcda45a27e286"],["/2021/06/30/【Java】数据结构-快速排序（完整代码）/index.html","c850d40870db852ab66ec295580909c5"],["/2021/07/05/【小知识】windows中java同时两个版本java8和java16混用/index.html","cd93f37a8c65a6a379aa19e39751d13a"],["/2021/07/07/【HTML】Form表单中Input的使用/index.html","c5bd90c85fe9854606812a6a5b31a2e8"],["/2021/07/07/【HTML】a标签，src标签，table标签使用/index.html","b214e036dda9fdf604d13d6eee959416"],["/2021/07/07/【HTML】列表list使用/index.html","eda92d539dd2362b1cc46a49e3856ebd"],["/2021/07/07/【HTML】框架frame的使用/index.html","07630f36542f784644ed1cf4981fa85a"],["/2021/07/07/【HTML】选择框、复选框、单选框、文本域/index.html","e53991358126a21ce5250a5abdee30b6"],["/2021/07/08/【HTML】CSS基础学习之列表和超链接伪类/index.html","3efad010c1d2052ec682d73d4a7eefbc"],["/2021/07/08/【HTML】CSS基础学习之引用样式和选择器的使用/index.html","368d260a88d452813a2eff678c299115"],["/2021/07/08/【HTML】CSS基础学习之背景边框文字文本的学习/index.html","f2c6886e4bd50e8880735b25f874628f"],["/2021/07/09/【HTML】CSS基础学习之float浮动块级元素行内元素/index.html","c592e55ab3e8a9f2110734393ca9a0ad"],["/2021/07/09/【HTML】CSS基础学习之盒子模型margin和padding的使用/index.html","5e26e199b257d2f89fa13fd8c71a7fb8"],["/2021/07/13/【HTML】实战阿里云src页面css模仿基础学习/index.html","84f4e3dbbf817e91034a1d4d49a4da02"],["/2021/07/13/【ctfshow】web篇wp记录（持续更新）/index.html","ba2951a3b2ee87b1060b289374d4b197"],["/2021/07/18/【PHP】基础知识整理/index.html","6f394b43a527eacc1cd9c899360c6156"],["/about/index.html","ccd3123502707727841679076ff60ee3"],["/archives/2020/07/index.html","aeadbdb3eff08932b9f42f9d465f27e4"],["/archives/2020/08/index.html","8b5c9250f529e01b31ee486609f75879"],["/archives/2020/09/index.html","f9613334f890a83b9f93c2cebcdfbb79"],["/archives/2020/10/index.html","d4038c3e0cb59d2ad4745fb7140a5207"],["/archives/2020/12/index.html","3c601c20de4f3e9747d4501bfcebccbe"],["/archives/2020/index.html","62436b4c1a7c2574572293f934ace51e"],["/archives/2020/page/2/index.html","6f3a1f4aaa12d5d89b32dea70ed77036"],["/archives/2021/01/index.html","4722d135370fa9a6a25f69c240f5c69d"],["/archives/2021/04/index.html","588a2a176b9ed0a5326a6a728c1b0745"],["/archives/2021/05/index.html","3fdadb69d4953ce39542ce2442c18c18"],["/archives/2021/05/page/2/index.html","dc5a289c8a03bb8366f466784d8d5693"],["/archives/2021/06/index.html","4bca82f699cefbaaed1b416b6d25ef92"],["/archives/2021/06/page/2/index.html","8d5da4aeee0a71c5fc8bd69897ff4fb8"],["/archives/2021/06/page/3/index.html","cdfd17adcefa070d052ae8d53142bc88"],["/archives/2021/06/page/4/index.html","5b9c175d9b16a8b99a4bcdf327969714"],["/archives/2021/07/index.html","a4f3976292572face6b483f2d8eb8d83"],["/archives/2021/07/page/2/index.html","a0b9ce2c54a62beb09d6f23a48cc02ad"],["/archives/2021/index.html","de24298496074732080d74cb037d4be6"],["/archives/2021/page/2/index.html","b2e340954f17c08e682e38484233146f"],["/archives/2021/page/3/index.html","09ea785b9a33f4eae40dfe566bfae366"],["/archives/2021/page/4/index.html","109d3e0b3a26c147cb6571af4bc1e70a"],["/archives/2021/page/5/index.html","189fb938fd9e1890be689ecaf4050d8e"],["/archives/2021/page/6/index.html","b079f9e8c8c0011fb1ba06be63c3bf9a"],["/archives/2021/page/7/index.html","d8bcac8724fb2b5d7a4a5781bc04b4a1"],["/archives/index.html","0f5e09a8cc536e95637212e9e90781b4"],["/archives/page/2/index.html","3caca612abff91bd7e4fbbeebc1b024c"],["/archives/page/3/index.html","28ff0519afe407876630073053547a52"],["/archives/page/4/index.html","46f1d92ced527d992915dbd4afc69722"],["/archives/page/5/index.html","1df70bb7765571cfd1eafc2417a03f89"],["/archives/page/6/index.html","bcb2af7db8579c8ba18da8fc193eea1e"],["/archives/page/7/index.html","2bbaa202a070d85f97382499be8ada8a"],["/archives/page/8/index.html","3410abe7b5e28d40ffb057cfa8c0eb24"],["/archives/page/9/index.html","c8c636a472055796cefbc3d51262b822"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Buuctf/index.html","115a59e6fc3858a5f16a364a40b7096d"],["/categories/CISCN/index.html","9ded32975f53c2f7ee9605187cb6cbe7"],["/categories/CTF/index.html","3991a1e783c3549c21f7d0f319d79293"],["/categories/C语言/index.html","124f9be7579adb62a0b2b67a99e9cf39"],["/categories/English/index.html","3ccaddd6d860efbd67ae78d03a0ad0e7"],["/categories/HTML/index.html","ad0eeadb3e122e1aea78ead421c9e648"],["/categories/HTML/page/2/index.html","e9ef800c273aaf90ff43d32fa90dcb14"],["/categories/Java/index.html","a35a4b313df18972d90b58a3e4cf64fb"],["/categories/MySQL/index.html","687172fb4d9469c3ceb46630c6223498"],["/categories/hexo博客搭建/index.html","b542fd92e4a3a0ddf47026b7026b1e5b"],["/categories/index.html","9fc945be7e5c11e41f9c04b9aa92c5f8"],["/categories/kali/index.html","7a2232fe0767e4615bbea641cddad04d"],["/categories/php/index.html","bd429d4ad948ae703ba27221e8bcdc99"],["/categories/工具/index.html","96676dc3cf61d29bee4e5eb4930f6f3e"],["/categories/摄影/index.html","633f3fa477e6d575a1f8cc26e8dd4bc9"],["/categories/渗透测试/index.html","e61ea97f8ee9c7ce8a810a9a6b5f29f3"],["/categories/漏洞挖掘/index.html","3f4c0c9bbda269a5e707ee94676c7e15"],["/categories/知识积累/index.html","184017ed1ab2f062dc2d01c25db56ae1"],["/categories/算法与数据结构/index.html","b6c55432efefaf327886bac18d63d71a"],["/categories/算法与数据结构/page/2/index.html","cdd3af3ccd14de3760bc32abe7a87837"],["/categories/黑客工具/index.html","21a2b3994efeae303af1d9fda76fd664"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","394ccd2db7c8dbf1200bd0f98363d158"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","a87485aa75e5177ef2b06bf948e31075"],["/figlet/fetch.min.js","350d73710c8e7facd458e74b17b96c27"],["/figlet/figlet.js","0dcd07654130a5de80d46793553ba41b"],["/flash/flash/index.html","a2029ffe30b3c955ac684486bb8d0d1d"],["/flash/index.html","e88c5ef98da19972be60a46a2f7c117c"],["/help/index.html","28ef72b5db4ba78e2de893945d464518"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","d9452503de1e4195e67028f073c5addb"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","c6e949a6226bcf46b24676d7ff90de88"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next .png","cb9f23934fe03bc9d284da68e659d847"],["/images/favicon-32x32-next.png","896f4eb152b3798ed17bfc57d1d3e505"],["/images/head.jpg","c6e949a6226bcf46b24676d7ff90de88"],["/images/hot.png","a90be0de558143aabf0acc9cfa0a8688"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","f5f5a1ff80b9f2403d76d0092128df19"],["/images/linkcard_bak.png","e1f9f6973a3d2c38b0b2b7317bd7b317"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/qq.png","5c481dffe0f706b9666f6ca18bd4d2c6"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","4462c81055423c8d2db56a77b51c5cb8"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","641c2d396a563ddafa6fed34a9984a03"],["/images/subscribe1.png","d4accaba47d6e791ce0cd6365735992f"],["/images/subscribe~1.png","e147141e7f29ff2bb46356cc8ca7c831"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechat.svg","2ef3f3696267249c4372a5e3f9db36f2"],["/images/wechatpay.jpg","d9dbc02b5f7c379adac84eeb7f6f51b6"],["/images/xiaohutong.png","14589dbb580ac44e4c04e4e94f22ab0f"],["/index.html","fccc7cd955cb4da6c0c75eba03d9db9c"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","fbe111a3ab258f224f8c4b41c9b3e886"],["/js/src/Valine.min.js","1479b73139a463e6147164e7dc880d9c"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/bubble.js","8fdcf8ca4941000b226b2e7535bf1af8"],["/js/src/clipboard-use.js","6245c44a33b72d0b5d04562b6808a309"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","a9f0920c901ee43e163479111c874163"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/linkcard.js","da6cb85a2c1d36027ca414459c8dd58f"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ee7e149030931501fa19b0ab74b46b34"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","27ae19ac3377c81f62dd5735b8d80646"],["/live2d-widget/README.html","db79a3bbfd794941c59b40a2f16ec8b1"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","fdff49a1ea5efd0d3bbd7ac8748b51f2"],["/live2d-widget/demo/demo1.html","a6cda8b39bd7f7afe7ba4b27f5d07dfb"],["/live2d-widget/demo/demo2.html","0575a50b61776525f57f71742be28c28"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["/page/2/index.html","f37166b3fe9698364ddbf97b4334fd3a"],["/page/3/index.html","8512ad3eae6d8d83626ff02cdabc67dc"],["/page/4/index.html","3f5464d82f45e8e06741a59447879b4c"],["/page/5/index.html","f7edc9165edb4c9e3d4f4ded105b1248"],["/page/6/index.html","3a7e4e5b82e5495438abcdccb4c9f545"],["/page/7/index.html","a51fa9d2d7537c548d1f806c044f33e5"],["/page/8/index.html","fa2b76fcb688d5fdadd63e45a6e31dcf"],["/page/9/index.html","97ecc4b2c4e85bf0b7ab754d97b37b2a"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","be21b85fc5f1508a83439d45c99b3203"],["/tags/AWVS/index.html","b3f5c28023577848272b53c8f7c6c42b"],["/tags/CMS/index.html","6ac076fba4c8006c86491d46073df607"],["/tags/C语言/index.html","d6b466c8778cd9062f69a7d2d0f7f121"],["/tags/Dns劫持/index.html","cbe907ac5dd3c0912b901b1c6288bda7"],["/tags/Ettercap/index.html","d1ebb467cb837b0ff9490ed396ccc314"],["/tags/Form/index.html","5af94ca880aa380a4b6dd02d3526c45b"],["/tags/Gitee自动部署/index.html","0e019b17a2cc65e81c51ee250d3e93cb"],["/tags/Google-hack语法/index.html","4d137bd8f6e00a54936a7fe489474252"],["/tags/Hashcat/index.html","a22deda8a7fc89be010c41b78f51ed16"],["/tags/JAVA/index.html","23b7a862abe8abd94f369122649fa914"],["/tags/JAVA/page/2/index.html","c2bf3db75f30ec7e3ed7d96c29874a47"],["/tags/LeetCode/index.html","30950d42e5f854c65b20cf951465ac0e"],["/tags/Nmap/index.html","9fdf5699ce866b3216406da6a08a71aa"],["/tags/SQL注入/index.html","85e53216aa8b5c4cb5e5674f3f74e8d3"],["/tags/aircrack/index.html","4e0586a8146f4e51f1fcb9a86a6b10c2"],["/tags/css/index.html","b3ba8f060c5c0de88279993b5877275b"],["/tags/ctf/index.html","05f8bdd3d9bce272ac1a15304a613de6"],["/tags/html/index.html","342d369bd72bf910f9088e2bdfa4e612"],["/tags/html/page/2/index.html","e269ae34fd57008b1c9716c0f5f4174f"],["/tags/index.html","621602084894543c6d938087a5f93058"],["/tags/input/index.html","ce42be804f4c0abcca0bb1b303057325"],["/tags/kali基础/index.html","5a29fa9dddf89c0a594c2fcce1a6fb2b"],["/tags/list的使用/index.html","77c3e93d618206990bbb8424159b6dec"],["/tags/msf/index.html","a8a6d5cabefec65e6f8b73f7e37257e7"],["/tags/php/index.html","ff87733eefa4418b1ac5534de4b77462"],["/tags/python脚本/index.html","d2eeb53a870408fb52167708758cbd62"],["/tags/sqlmap/index.html","54320be02da0276505ff1cfdfe1074a4"],["/tags/web/index.html","e33fd22aa25f7db3a08d13dc47d9e66d"],["/tags/web安全/index.html","0928c7173d305105c1b0a3fa1c5dcaba"],["/tags/wireshark/index.html","903582dc3d9ea946d10d49c2ef071e77"],["/tags/wp/index.html","116ec434a1b10aaa5a0ca95b980095b5"],["/tags/二分搜索树/index.html","9214c78dc30c9a717583217f4aa1d5c0"],["/tags/信息收集/index.html","840a09d371ae29511d1cb76557ac572e"],["/tags/免杀/index.html","1a9fa1be38ed628ef1ab18c12e629c49"],["/tags/博客搭建/index.html","f754790288d322c63d14bda349172c4c"],["/tags/嗅探工具/index.html","fd4a058fe88a007a8a07a000a34a3b12"],["/tags/堆排序/index.html","eee6d79fd215bdce35326ad512853c84"],["/tags/子域名/index.html","c0803282c0d42fd4ea99b9d6280f4dd5"],["/tags/学习记录/index.html","bd88c9e966d505316b5f0787ab8ff8ec"],["/tags/工具/index.html","82ccd081b8414047fad8de122acbd70f"],["/tags/归并排序/index.html","f751c4d2428e98280d6e49e1e6b02a1c"],["/tags/录屏/index.html","cd7e9e8db768c14dd55d0b4db17b0f8d"],["/tags/快速排序/index.html","7fdd512e732db83bb2f189bbecb1c35f"],["/tags/成长之路/index.html","b145fc9bdd4888c2998b06f3e1e9f494"],["/tags/成长之路/page/2/index.html","1db642723ec7d956b78a48d79d8ac005"],["/tags/成长之路/page/3/index.html","04784b2f766ba9b0d15f915bb92392de"],["/tags/成长之路/page/4/index.html","78387c3686faaccdb45743737d91d9e0"],["/tags/指纹识别/index.html","07650362c627feb531289c2dbf4f1c14"],["/tags/插入排序/index.html","036c18de60f0885e3a741cb3069f107e"],["/tags/数据结构/index.html","9bb899c1e9ff2df6907fc8972976b00e"],["/tags/数据结构/page/2/index.html","365483dcd5b9317a20f015c6a5ff3df2"],["/tags/无线wifi密码破解/index.html","fa5cdb35d498a7bd3cec48d1d6b4bd61"],["/tags/标签的使用/index.html","2cf1b493e4ab93051ca6de798407b8d1"],["/tags/渗透测试/index.html","53fa2ccc62ba489389e66e93d14c1d86"],["/tags/渗透测试基础/index.html","79829b88a7a1010fd8ca5b87e52a4e8a"],["/tags/渗透测试工具/index.html","8f3bf1943bba407edc484ce35134d4a0"],["/tags/漏洞工具/index.html","57b1473fc08f14403df15dbc3b77fcb9"],["/tags/爆破工具/index.html","eff43a7bf1687cd3fc840a51debdb463"],["/tags/版本共存/index.html","1c5c0ed46d41e20ed7ace513014a51a2"],["/tags/知识拓展/index.html","9906fc50a95ef6a4e3e5f7e58df22369"],["/tags/知识拓展/page/2/index.html","926c76481e3a85aa38f5e85f4245a72a"],["/tags/网络攻防工具/index.html","99268be6d91110c4de0fea6cfb7d0da4"],["/tags/英语四级/index.html","ab02c7aa1e4f4fc5f212edc178d6a0fe"],["/tags/议论文万能模板/index.html","63c10eb5302aa65d38e7ef96614f41a7"],["/tags/谷歌语法/index.html","fa3504eb972e6a8c6e836104f2a65130"],["/tags/选择排序/index.html","04dec72fda6ee6d6226acff8a2beae94"],["/tags/链表实现队列/index.html","59057db5a41c88889e892dafb11da52a"],["/tags/链表的增删改查/index.html","3bf069294307237d635dc69a41282698"],["/tags/镜头/index.html","e89e4a502b91506dc14c7aef85fbdd13"],["/top/index.html","e1d5162cefcfa1969ef706b4d834d6d1"]];
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
