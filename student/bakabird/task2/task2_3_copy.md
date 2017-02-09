# task2-3-copy

## 好奇心日报-首页

### 收集

为了临摹起来更像样，到 好奇心首页 在控制台用js抓了一下小豆腐的文本和对应的图片链接。

**以下js代码：**

```javascript
const breakNode = document.getElementsByClassName(" lazyloaded")
let dataObj = {}
let i;
for (i = 0; i < breakNode.length; i++) {
    dataObj[i] = {}
    dataObj[i].text = breakNode[i].alt;
    dataObj[i].src = breakNode[i].src
}
dataObj.length = i;
JSON.stringify(dataObj);

// {
//   "0": {
//     "text": "",
//     "src": "http://www.qdaily.com/images/web/homes/download-banner-x640.png"
//   },
//   "1": {
//     "text": "我说",
//     "src": "http://img.qdaily.com/paper_category/icon_white/20160722174309beUs7l6nN5RZkEyV.png?imageMogr2/auto-orient/thumbnail/!128x128r/gravity/Center/crop/128x128/quality/85/ignore-error/1"
//   },
//   "2": {
//     "text": "现如今，哪些关键词已经失去了（用来筛选商品）意义？",
//     "src": "http://img.qdaily.com/paper/paper_show/20161212130748xHGcnmNuoTBekaRb.jpg?imageMogr2/auto-orient/thumbnail/!1005x480r/gravity/Center/crop/1005x480/quality/85/format/webp/ignore-error/1"
//   },
//   "3": {
//     "text": "",
//     "src": "http://www.qdaily.com/images/web/homes/100person-banner-x660.gif"
//   },
//   "4": {
//     "text": "越来越多已经长大的“年轻人”不愿离家，是你吗？丨好奇心小数据",
//     "src": "http://img.qdaily.com/article/article_show/20161214194203rAwEVkHj4pSoLCRZ.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1"
//   },
//   "5": {
//     "text": "茶叶如何影响了人类文明？翻翻这本人类学著作",
//     "src": "http://img.qdaily.com/article/article_show/20161214183959haAT09vfpmiySGEb.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1"
//   },
//   "6": {
//     "text": "这个发现和记录了敦煌的人，到底是学者、特务还是强盗？",
//     "src": "http://img.qdaily.com/article/article_show/20161214180440MNtyg2vfa5bxzSTc.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1"
//   },
//   "7": {
//     "text": "连肯德基上校都出唱片了，吃个炸鸡到底要搭配多少东西啊？",
//     "src": "http://img.qdaily.com/article/article_show/20161214173803kCEswfOemgP1AxDL.png?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1"
//   },
//   "8": {
//     "text": "为了形容那些沉迷于手机的人，这个世界都创造出了哪些词汇？",
//     "src": "http://img.qdaily.com/article/article_show/20161214080207rPlvth2nBpDx1OQ4.gif?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/ignore-error/1"
//   },
//   "9": {
//     "text": "微软终于发布第一件智能家居，挺像亚马逊的 Echo",
//     "src": "http://img.qdaily.com/article/article_show/20161214130834cCukTKiNnGUolMp7.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1"
//   },
//   "10": {
//     "text": "买了金丝猴后就一直是个拖累，营养豆干能帮上好时忙么？",
//     "src": "http://img.qdaily.com/article/article_show/20161214161836viQB1FZrAtjf70l5.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1"
//   },
//   "11": {
//     "text": "Jo Malone创始人说，“后悔把这个品牌卖给雅诗兰黛”",
//     "src": "http://img.qdaily.com/article/article_show/20161214143449lMd6ASUJe2y8qvrZ.png?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1"
//   },
//   "12": {
//     "text": "除了平台和主播，网络直播的游戏内容也受到限制了",
//     "src": "http://img.qdaily.com/article/article_show/20161214160538CGKqX2IObQ3uUJpx.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1"
//   },
//   "13": {
//     "text": "海航开通了北京直飞拉斯维加斯的航班，除了赌还能干啥？",
//     "src": "http://img.qdaily.com/article/article_show/20161214134803qBYgGdfe6V1FME54.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1"
//   },
//   "14": {
//     "text": "在大阪的这家罗森，机器会自动扫描并把东西装袋子里",
//     "src": "http://img.qdaily.com/article/article_show/20161214134553fWVZ0UCxoKEnzeQd.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1"
//   },
//   "15": {
//     "text": "《罗曼蒂克消亡史》本周上映，来听听看过的人怎么说",
//     "src": "http://img.qdaily.com/article/article_show/20161214135653Xrz1BLMh5GHljNJC.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1"
//   },
//   "16": {
//     "text": "这家被 Google 收购的初创公司，不做智能手表只做系统",
//     "src": "http://img.qdaily.com/article/article_show/20161214003408YXmBr9ZOFo1lMj0L.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1"
//   },
//   "17": {
//     "text": "失去苹果订单，三星正考虑分拆芯片制造业务",
//     "src": "http://img.qdaily.com/article/article_show/20161214130858zI7kPCSYL1rBlDc4.png?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1"
//   },
//   "18": {
//     "text": "滴滴继续扩张公交服务，现在接入了天津",
//     "src": "http://img.qdaily.com/article/article_show/20161214130232DIFMqUNiRCn3om09.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1"
//   },
//   "19": {
//     "text": "好莱坞黑名单揭晓，这是一份抢手的“剧本购买清单”",
//     "src": "http://img.qdaily.com/article/article_show/20161214125114kVRMGghFsA4t3Kc0.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1"
//   },
//   "20": {
//     "text": "「这世界」传说中的德国食人杀手，还有一个诡异的故事",
//     "src": "http://img.qdaily.com/article/article_show/20161214122607KTh1XONsxzo2QSIE.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1"
//   },
//   "21": {
//     "text": "再看一个幼儿园设计，它藏了很多玩乐小心思",
//     "src": "http://img.qdaily.com/article/article_show/20161214005656DYp096Tbfth1jAVK.png?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1"
//   },
//   "22": {
//     "text": "金球奖公布提名，奥斯卡前哨战役越来越激烈了",
//     "src": "http://img.qdaily.com/article/article_show/20161214082706yiDQRUodvaOb5g6M.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1"
//   },
//   "23": {
//     "text": "特朗普的科技峰会还没开，科技界已经开始示好了",
//     "src": "http://img.qdaily.com/article/article_show/201612141300424r8RW250fSm1gqPX.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1"
//   },
//   "24": {
//     "text": "爱科学的少年们，这个应用可以把旅行者号捧在手里",
//     "src": "http://img.qdaily.com/article/article_show/20161214042318ETHcCW9VY7JFIi6U.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1"
//   },
//   "25": {
//     "text": "Jo Malone 推出新香调，以及，Nike在上海办展 | 浮华日报",
//     "src": "http://img.qdaily.com/article/article_show/201612141010395JU2PSamxNYlIynh.jpg?imageMogr2/auto-orient/thumbnail/!750x278r/gravity/Center/crop/750x278/quality/85/format/webp/ignore-error/1"
//   },
//   "26": {
//     "text": "看图：这里是过去24小时内发生的重要的事",
//     "src": "http://img.qdaily.com/article/article_show/201612140947428ov9kPzEjDtdswGV.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1"
//   },
//   "27": {
//     "text": "今日娱乐：阿黛尔拿 BBC 音乐大奖，美队是好莱坞性价比最高演员",
//     "src": "http://img.qdaily.com/article/article_show/20161214095630if5sTexFjHP3qtUI.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1"
//   },
//   "28": {
//     "text": "30%的智能手表买来都闲置了，可穿戴设备的市场怎么了？",
//     "src": "http://img.qdaily.com/article/article_show/201612131748146VhBfpFmNj0XxcdL.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1"
//   },
//   "29": {
//     "text": "大公司头条：Google 无人车项目独立出来，但不造车了；拖了两个月的苹果 AirPods 耳机终于开卖；Space X 的载人航天计划也推迟了一年",
//     "src": "http://img.qdaily.com/article/article_show/201612140800140eZ6YUbksJFlcpQG.jpeg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1"
//   },
//   "30": {
//     "text": "阿里星球剥离音乐服务，这是终于折腾不下去了吗",
//     "src": "http://img.qdaily.com/article/article_show/20161214082408lVmBFSzepyI4DwqO.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1"
//   },
//   "31": {
//     "text": "这个发明流行色的公司说：任何颜色都有积极的一面，你得一视同仁",
//     "src": "http://img.qdaily.com/article/article_show/2016121305421494PZeqBiwXCu5FOx.png?imageMogr2/auto-orient/thumbnail/!750x278r/gravity/Center/crop/750x278/quality/85/format/webp/ignore-error/1"
//   },
//   "32": {
//     "text": "70 岁的北欧航空增长乏力，它的年轻化打算从设计开始",
//     "src": "http://img.qdaily.com/article/article_show/20161214012008y3N6P5IKCtkboLsB.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1"
//   },
//   "33": {
//     "text": "在买花袜子这件事上，男性会比女性更痴迷吗？",
//     "src": "http://img.qdaily.com/article/article_show/20161213170530Z3nfNylCvebiBV7w.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1"
//   },
//   "34": {
//     "text": "Netflix 的新悬疑剧《先见之明》，主角是一位失踪的盲女",
//     "src": "http://img.qdaily.com/article/article_show/20161213122332o7RmTQeCabjAPug6.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1"
//   },
//   "35": {
//     "text": "Instagram 正式推出了直播功能，还支持“阅后即焚”",
//     "src": "http://img.qdaily.com/article/article_show/20161213162128JEpML45gtzOYkSoQ.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1"
//   },
//   "36": {
//     "text": "下次去日本奈良旅行的话，不妨带上这个 72 历",
//     "src": "http://img.qdaily.com/article/article_show/20161213175337JfwXrC4mTydaDib7.png?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1"
//   },
//   "37": {
//     "text": "她们做有机棉条的生意，还拉来了美剧 Girls 原创做背书",
//     "src": "http://img.qdaily.com/article/article_show/20161213184536Wa6tsuTdDHnx3kQm.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1"
//   },
//   "38": {
//     "text": "转瞬即逝的时间，都“刻”在了这面“石板”上｜这个设计了不起",
//     "src": "http://img.qdaily.com/article/article_show/20161213172954t2DvgB1pnlNS0FK4.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1"
//   },
//   "39": {
//     "text": "他开了个店，想为喜欢时尚但不哗众取宠的男人服务一切",
//     "src": "http://img.qdaily.com/article/article_show/20161213211957MlbYa3uq4HP9wyzR.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1"
//   },
//   "40": {
//     "text": "设计师Tom Ford拍的那部电影，拿了金球奖两项提名",
//     "src": "http://img.qdaily.com/article/article_show/20161213220607A8D9nuYmybVk0GaT.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1"
//   },
//   "41": {
//     "text": "做芯片的都在做人工智能，AMD 也加入了进来",
//     "src": "http://img.qdaily.com/article/article_show/20161213165217LiRBuUnSAgX0HbWC.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1"
//   },
//   "42": {
//     "text": "现如今，你会被什么样的包装吸引？",
//     "src": "http://img.qdaily.com/paper/paper_show/20161213005422H6YPOKL9083sTtbS.jpg?imageMogr2/auto-orient/thumbnail/!750x420r/gravity/Center/crop/750x420/quality/85/format/webp/ignore-error/1"
//   },
//   "43": {
//     "text": "投票",
//     "src": "http://img.qdaily.com/paper_category/icon_white/20160722174257B2WUkThIMQqz10YS.png?imageMogr2/auto-orient/thumbnail/!128x128r/gravity/Center/crop/128x128/quality/85/ignore-error/1"
//   },
//   "44": {
//     "text": "别指望在这本书里找到“完美的艺术之旅”指南",
//     "src": "http://img.qdaily.com/article/article_show/20161213144748RqrKC75FSJbz0vxy.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1"
//   },
//   "45": {
//     "text": "J.K. 罗琳这本新书，是个黑暗惊悚的推理故事",
//     "src": "http://img.qdaily.com/article/article_show/20161213150500MkpJjVrHha3t1iqv.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1"
//   },
//   "46": {
//     "text": "专车政策还没落地，每天用滴滴的人已经少了近三成丨好奇心小数据",
//     "src": "http://img.qdaily.com/article/article_show/20161213162120YQko1qN8XM4H9PC2.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1"
//   },
//   "47": {
//     "text": "无论你捐献多少钱，也别想给一颗恒星正式冠上你的名字",
//     "src": "http://img.qdaily.com/article/article_show/20161213112400nP1VBdGSzbDqvkx7.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1"
//   },
//   "48": {
//     "text": "怎么宣传“火烤”？汉堡王推出了带“动画”的圣诞丑毛衣",
//     "src": "http://img.qdaily.com/article/article_show/201612131720215DJ41vocqVEy6FdG.png?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1"
//   },
//   "49": {
//     "text": "都说英国零售寒冬，但时尚电商 ASOS 活得相当好",
//     "src": "http://img.qdaily.com/article/article_show/20161213170235KgfEFQ0OjeTuk34L.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1"
//   },
//   "50": {
//     "text": "默多克要全资收购天空广播，反垄断依然是最大阻碍",
//     "src": "http://img.qdaily.com/article/article_show/20161213153939WIHzZDOf3li50Lqp.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1"
//   },
//   "51": {
//     "text": "《天才麻将少女》真人电影公布预告，剧情进入全国篇",
//     "src": "http://img.qdaily.com/article/article_show/20161213170154uY16s7VyrvIJzpbH.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1"
//   },
//   "52": {
//     "text": "苹果堆在海外的千亿现金有了新出路，投资",
//     "src": "http://img.qdaily.com/article/article_show/20161213105217bfPh6XnzEGoNFjtI.png?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1"
//   },
//   "53": {
//     "text": "银联也做起了二维码支付，发布了一套标准",
//     "src": "http://img.qdaily.com/article/article_show/20161213131242E35o6sP27XGCBVl4.jpeg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1"
//   },
//   "54": {
//     "text": "扎克伯格找有20年媒体经验的新闻人来管业务，为啥不靠谱？",
//     "src": "http://img.qdaily.com/article/article_show/20161213121246FiZ2X0wdPSBTWI9q.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1"
//   },
//   "55": {
//     "text": "C 罗如愿拿到金球奖，他还有什么可烦心的？",
//     "src": "http://img.qdaily.com/article/article_show/20161213133423xpTNkEi5Jd0qZrXz.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1"
//   },
//   "56": {
//     "text": "你分得清楚各种媒体平台上的“原生广告”吗？这并不容易",
//     "src": "http://img.qdaily.com/article/article_show/201612131337055S4k6DLJ0iPUNBQc.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1"
//   },
//   "57": {
//     "text": "如果你是个电商，你在和传统零售商合作时会考虑什么？",
//     "src": "http://img.qdaily.com/article/article_show/2016121312183335ARfnYydeUxMuTH.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1"
//   },
//   "58": {
//     "text": "在这里，你可以随意调看瑞士爵士音乐节 50 年的精彩遗产",
//     "src": "http://img.qdaily.com/article/article_show/20161212234036QyGLetFugrj4RSaW.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1"
//   },
//   "59": {
//     "text": "MUJI 在中国大陆开了第 200 家店，谈得更多的是价格",
//     "src": "http://img.qdaily.com/article/article_show/20161213145409VdEN43Is1oFnr5fK.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1"
//   },
//   "60": {
//     "text": "任天堂第一座主题乐园，要和东京奥运会一起来了",
//     "src": "http://img.qdaily.com/article/article_show/20161213111308c2K5oQr0JqfkuM14.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1"
//   },
//   "61": {
//     "text": "建在“风洞”中的数学馆，想让你发现数学之美",
//     "src": "http://img.qdaily.com/article/article_show/20161213131259Ry6WK2o3aO570PIZ.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1"
//   },
//   "62": {
//     "text": "「这世界」麦当劳这个圣诞杯图案，你是看到了白手套还是看到了……",
//     "src": "http://img.qdaily.com/article/article_show/20161213123236x267beLZvqh0Owkt.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1"
//   },
//   "63": {
//     "text": "这个头盔，想把 iPhone 变成 HoloLens",
//     "src": "http://img.qdaily.com/article/article_show/20161212182647wZon2NpSvVgk0HKP.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1"
//   },
//   "64": {
//     "text": "这个应用让人工智能选图和修图，还挺好用的",
//     "src": "http://img.qdaily.com/article/article_show/20161213100528qPg67QTIMGseEcbX.jpeg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1"
//   },
//   "65": {
//     "text": "",
//     "src": "http://www.beian.gov.cn/file/ghs.png"
//   },
//   "length": 66
// }
```

### 笔记

#### 实现串串🍢排布
```css
@font-face{
	...set... something;
}
.category {
    position: absolute;
    left: 15px;
    top: 15px;
    height: 22px;
    line-height: 22px;
    margin: 0;
}

.category span {
    font-size: 12px;
    color: #fff;
    vertical-align: middle;
}

.category i {
    color: #fff;
    margin-right: 5px;
    font-size: 22px;
    vertical-align: middle;
}
```

```html
<p class="category">
	<i class="iconfont icon-city" role="category-city"></i>
	<span>城市</span>
</p>
```

#### Vue的组件的`template`中标签的属性设置

貌似不能能够像`avalon`那样 在设置某个标签的属性的值 的时候 使用 `"字符串" + @avalon数据`

**只能**直接通过变量名来引用设置在 `Vue` 中的 `data`。

如：
`<div v-bind:class="dataInVue"></div>`

> 应该可以通过使用函数来比较绕地实现对数据的fix。（不过暂时没有去尝试）

