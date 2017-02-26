function heredoc(fn) {
    return fn.toString().replace(/^[^\/]+\/\*!?\s?/, '').
    replace(/\*\/[^\/]+$/, '').trim().replace(/>\s*</g, '><')
}

function clone(myObj) {
    if (typeof(myObj) != 'object' || myObj == null) return myObj;
    var newObj = new Object();
    for (var i in myObj) {
        newObj[i] = clone(myObj[i]);
    }
    return newObj;
}

Vue.component("qdaily-nav", {
    template: heredoc(function() {
        /*
    <header>
        <div class="logo">
            <img src="http://ww4.sinaimg.cn/large/006uTN7Kjw1fasxly8zz8j307803cq2t.jpg" alt="好奇心日报logo" width="130" height="60">
        </div>
        <nav>
            <div class="left nav-feature">
                <a href="" alt="">好奇心研究所</a>
                <a href="" alt="">项目中心</a>
            </div>
            <div class="right nav-other">
                <a href="" alt="" class="app">APP</a>
                <a href="" alt="" class="search">🔍</a>
                <a href="" alt="" class="aboutus">关于我们</a>
                <a href="" alt="" class="weibo">博</a>
                <a href="" alt="" class="weixin">信</a>
            </div>
            <div class="middle nav-categorys">
                <ul>
                    <li><a href="" alt="">长文字</a></li>
                    <li><a href="" alt="">10个图</a></li>
                    <li><a href="" alt="">Top 15</a></li>
                    <li><a href="" alt="">商业</a></li>
                    <li><a href="" alt="">智能</a></li>
                    <li><a href="" alt="">设计</a></li>
                    <li><a href="" alt="">时尚</a></li>
                </ul>
                <a href="" alt="">全部分类</a>
            </div>
        </nav>
    </header>
        */
    })
})

Vue.component("qdaily-footer", {
    template: heredoc(function() {
        /*
    <footer>
        <div class="footer-body">
            <div class="right search">
                <input type="search">
            </div>
            <div class="middle lotslinks">
                <ul>
                    <li>首页</li>
                    <li>长文字</li>
                    <li>TOP 15</li>
                    <li>10个图</li>
                    <li>好奇心研究所</li>
                    <li>100个有想法的人</li>
                    <li>Medium</li>
                </ul>
                <ul>
                    <li>大公司头条</li>
                    <li>Q Business</li>
                    <li>今日应用</li>
                    <li>这世界</li>
                    <li>Best on the web</li>
                    <li>商业</li>
                    <li>游戏</li>
                </ul>
                <ul>
                    <li>设计</li>
                    <li>时尚</li>
                    <li>娱乐</li>
                    <li>城市</li>
                    <li>游戏</li>
                </ul>
                <ul>
                    <li>下载APP</li>
                    <li>登录/注册</li>
                    <li>订阅</li>
                    <li>微博</li>
                    <li>微信</li>
                    <li>用户协议</li>
                </ul>
                <ul>
                    <li>关于好奇心</li>
                    <li>联系我们</li>
                    <li>工作机会</li>
                    <li>版权声明</li>
                </ul>
            </div>
        </div>
        <div class="copyright">
            <div class="setmiddle">
                <i class="iconfont icon-logo"></i>
                <p>2014 北京酷睿奥思科技发展有限公司</p>
                <p>京ICP备14027177号-1 <img src="http://www.beian.gov.cn/file/ghs.png" alt="京公网安备 11010502030071号" width="16" height="16">京公网安备 11010502030071号</p>
            </div>
        </div>
    </footer>
        */
    })
})

Vue.component("qdaily-grid", {
    props: ["data"],
    template: heredoc(function() {
        /*
        <div class="grid">
            <div class="img">
                <p class="category"><i class="iconfont" :class="data.class" role="data.class"></i><span>{{data.category}}</span></p>
                <img v-bind:src="data.src" v-bind:alt="data.headline" width="245" height="185">
            </div>
            <div class="headline">
                <a>{{data.headline}}</a>
            </div>
            <div class="moreinfo">
                    <time>{{data.time}}</time>
                    <p><i class="iconfont icon-message"></i> {{data.messNum}} <i class="iconfont icon-heart"></i> {{data.heartNum}}</p>
            </div>
        </div>
        */
    })
})

Vue.component("qdaily-mid-grid", {
    props: ["data"],
    template: heredoc(function() {
        /*
        <div class="mid-grid">
            <div class="img">
                <p class="category"><i class="iconfont" :class="data.class" role="category-city"></i><span>城市</span></p>
                <img v-bind:src="data.src" v-bind:alt="data.text" width="500" height="185">
            </div>
            <div class="headline">
                <a>{{data.text}}</a>
            </div>
            <div class="moreinfo">
                    <time>昨天</time>
                    <p><i class="iconfont icon-message"></i> 28 <i class="iconfont icon-heart"></i> 170</p>
            </div>
        </div>
        */
    })
})

Vue.component("qdaily-qusitive", {
    template: heredoc(function() {
        /*
      <div class="qusitive">
        <div class="radar"></div>
        <button>登录</button>
        <p>登录查看你的好奇心指数</p>
    </div>
        */
    })
})

Vue.component("qdaily-adverise", {
    template: heredoc(function() {
        /*
        <div class="adverise">
            <img src="http://www.qdaily.com/images/web/homes/download-banner-x640.png" alt="好奇心日报3.0全新改版来下载吧！" width="245" height="160">
        </div>
        */
    })
})

Vue.component("qdaily-banner", {
    props: ["data"],
    template: heredoc(function() {
        /*
        <div class="banner" :style="data.style">
            <div class="banner-headline banner-catagory banner-catagory-business"><p>{{data.headline}}</p></div>
        </div>
        */
    })
})

Vue.component("qdaily-nowactivity", {
    props: ["data"],
    template: heredoc(function() {
        /*
        <div class="nowactivity" :style="data.style">
            <div class="activity-categiry"><img v-bind:src="data.catagoryUrl" alt="activity-categiry" width="60" height="60"></div>
            <div class="count">
                <i class="iconfont icon-join"></i>
                <span class="new">NEW</span>
            </div>
            <div class="activity-headline">
                <p class="headline">{{data.headline}}</p>
                <p class="neckline">{{data.neckline}}</p>
            </div>
        </div>
        */
    })
})

Vue.component("Man100", {
    template: heredoc(function() {
        /*
        <div class="Man100">
            <img src="http://www.qdaily.com/images/web/homes/100person-banner-x660.gif" alt="100个有想法的人／they made the world" width="330" height="320">
        </div>
        */
    })
})

var test = new Vue({
    el: "#test",
    data: {
        gridDatas: {
            "0": {
                "class": "icon-shangye-bg",
                "category": "商业",
                "src": "http://img.qdaily.com/article/article_show/20161216183007kjMl43cTByCV1NJd.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1",
                "headline": "除了巨无霸，这5个商品你在中国买哪个都不划算|好奇心小数据",
                "time": "3 小时前",
                "messNum": "37",
                "heartNum": "96"
            },
            "1": {
                "class": "icon-sheji-bg",
                "category": "设计",
                "src": "http://img.qdaily.com/article/article_show/20161215144225EC8NIHLRFsjYyc3x.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1",
                "headline": "人们用色彩表达一切，这本书里几乎都能找到",
                "time": "4 小时前",
                "messNum": "2",
                "heartNum": "28"
            },
            "2": {
                "class": "icon-yule-bg",
                "category": "娱乐",
                "src": "http://img.qdaily.com/article/article_show/20161215154026pWa41F9c8ymkNb2P.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1",
                "headline": "52 年间的 10 首摇滚歌曲，构成了一部特别的历史",
                "time": "4 小时前",
                "messNum": "0",
                "heartNum": "9"
            },
            "3": {
                "class": "icon-zhineng-bg",
                "category": "智能",
                "src": "http://img.qdaily.com/article/article_show/20161216165808XK3WQDu2dhRtYLo1.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1",
                "headline": "微博上线了一个文字付费问答，让微博大 V 做主讲",
                "time": "4 小时前",
                "messNum": "4",
                "heartNum": "4"
            },
            "4": {
                "class": "icon-yule-bg",
                "category": "娱乐",
                "src": "http://img.qdaily.com/article/article_show/20161215153328nEPeC3jTuhI7l2xJ.gif?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/ignore-error/1",
                "headline": "你们说的休息，根本不是我想要的休息丨好奇心研究所",
                "time": "4 小时前",
                "messNum": "9",
                "heartNum": "47"
            },
            "5": {
                "class": "icon-zhineng-bg",
                "category": "智能",
                "src": "http://img.qdaily.com/article/article_show/20161216171631u3jLOZxa60E9iT4J.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1",
                "headline": "被乐视控股的专车公司易到，又被传出来欠款 600 多万元",
                "time": "5 小时前",
                "messNum": "5",
                "heartNum": "5"
            },
            "6": {
                "class": "icon-zhineng-bg",
                "category": "智能",
                "src": "http://img.qdaily.com/article/article_show/20161216160357m8fslgxIdyiOXU5S.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1",
                "headline": "今日头条又想收购海外公司，这次是视频制作应用 Flipagram",
                "time": "6 小时前",
                "messNum": "7",
                "heartNum": "4"
            },
            "7": {
                "class": "icon-sheji-bg",
                "category": "设计",
                "src": "http://img.qdaily.com/article/article_show/20161216140444QiacTsj3FXerWqLh.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1",
                "headline": "你能看出这些数字里的潜台词吗？它可代表了各种大事件",
                "time": "6 小时前",
                "messNum": "13",
                "heartNum": "92"
            },
            "8": {
                "class": "icon-shangye-bg",
                "category": "商业",
                "src": "http://img.qdaily.com/article/article_show/20161216151813dyVtYOcaHSN5sZJ7.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1",
                "headline": "这个号称以色列版的“星巴克”，去欧美市场有机会么？",
                "time": "6 小时前",
                "messNum": "5",
                "heartNum": "24"
            },
            "9": {
                "class": "icon-zhineng-bg",
                "category": "智能",
                "src": "http://img.qdaily.com/article/article_show/201612161100482Bcxqs5TFQJNe1RG.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1",
                "headline": "三星想把手机支付做大，但机会已经很小了",
                "time": "6 小时前",
                "messNum": "5",
                "heartNum": "6"
            },
            "10": {
                "class": "icon-chengshi-bg",
                "category": "城市",
                "src": "http://img.qdaily.com/article/article_show/20161216141547iF5terpj1AOhBVqD.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1",
                "headline": "北京的“雾霾”是“气象灾害”吗？",
                "time": "7 小时前",
                "messNum": "39",
                "heartNum": "23"
            },
            "11": {
                "class": "icon-shangye-bg",
                "category": "商业",
                "src": "http://img.qdaily.com/article/article_show/201612161244343P7cn2KYJ4CLw8ki.JPG?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1",
                "headline": "美国麦当劳终于要开始提供外卖服务了",
                "time": "7 小时前",
                "messNum": "2",
                "heartNum": "7"
            },
            "12": {
                "class": "icon-zhineng-bg",
                "category": "智能",
                "src": "http://img.qdaily.com/article/article_show/20161216134939fqB7lhKRmdGM2CJT.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1",
                "headline": "货车司机 Uber在路上，亚马逊用它来提高货运效率",
                "time": "8 小时前",
                "messNum": "0",
                "heartNum": "8"
            },
            "13": {
                "class": "icon-yule-bg",
                "category": "娱乐",
                "src": "http://img.qdaily.com/article/article_show/20161216130443ylvM06SceHBEX43V.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1",
                "headline": "「本周新片」什么片都不想看的话，你找点别的事做",
                "time": "9 小时前",
                "messNum": "39",
                "heartNum": "17"
            },
            "14": {
                "class": "icon-shishang-bg",
                "category": "时尚",
                "src": "http://img.qdaily.com/article/article_show/20161216085215QnLmD8XJMT9yxk7K.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1",
                "headline": "网上卖香水的确很省成本，但怎么卖才能不损伤体验？",
                "time": "9 小时前",
                "messNum": "2",
                "heartNum": "38"
            },
            "15": {
                "class": "icon-zhineng-bg",
                "category": "智能",
                "src": "http://img.qdaily.com/article/article_show/20161216110015EIQqWP1Yu9KSFNv2.jpeg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1",
                "headline": "「这世界」这一年能上头条的事情实在太多了，大家都关心啥？",
                "time": "9 小时前",
                "messNum": "10",
                "heartNum": "17"
            },
            "16": {
                "class": "icon-shangye-bg",
                "category": "商业",
                "src": "http://img.qdaily.com/article/article_show/20161216133405CLPmJgzo4KTyhGiV.jpeg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1",
                "headline": "收购不成，格力“借钱”也要搞新能源车",
                "time": "9 小时前",
                "messNum": "6",
                "heartNum": "5"
            },
            "17": {
                "class": "icon-yule-bg",
                "category": "娱乐",
                "src": "http://img.qdaily.com/article/article_show/20161216132553wIEukCJxSl2zfQa1.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1",
                "headline": "《借东西的小人》导演米林宏昌动画新作曝光，你想到了谁？",
                "time": "9 小时前",
                "messNum": "10",
                "heartNum": "28"
            },
            "18": {
                "class": "icon-yule-bg",
                "category": "娱乐",
                "src": "http://img.qdaily.com/article/article_show/20161216115238QIiqwFNXuYhmK0od.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1",
                "headline": "《老爸老妈浪漫史》衍生剧又一次启动，这次它能走多远？",
                "time": "9 小时前",
                "messNum": "5",
                "heartNum": "15"
            },
            "19": {
                "class": "icon-zhineng-bg",
                "category": "智能",
                "src": "http://img.qdaily.com/article/article_show/20161216104842Xm8jhgGtAPSf1k0o.png?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1",
                "headline": "TCL 也要设计生产黑莓手机了，主要在海外卖",
                "time": "11 小时前",
                "messNum": "4",
                "heartNum": "8"
            },
            "20": {
                "class": "icon-shangye-bg",
                "category": "商业",
                "src": "http://img.qdaily.com/article/article_show/20161215185112bwdaLs34AOT81RBy.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1",
                "headline": "可口可乐这“智能”瓶盖，你会用来送圣诞祝福么？",
                "time": "11 小时前",
                "messNum": "4",
                "heartNum": "44"
            },
            "21": {
                "class": "icon-shishang-bg",
                "category": "时尚",
                "src": "http://img.qdaily.com/article/article_show/20161216102554yNjzqopedOYDf3Wt.jpg?imageMogr2/auto-orient/thumbnail/!750x278r/gravity/Center/crop/750x278/quality/85/format/webp/ignore-error/1",
                "headline": "三叶草发布全新极简系列，BAPE 要开店中店 | 浮华日报",
                "time": "12 小时前",
                "messNum": "3",
                "heartNum": "15"
            },
            "22": {
                "class": "icon-shangye-bg",
                "category": "商业",
                "src": "http://img.qdaily.com/article/article_show/2016121518055702S6hPY17gTkFyHN.png?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1",
                "headline": "这个喜欢在新年祝词里搞怪的 CEO 又来了",
                "time": "12 小时前",
                "messNum": "4",
                "heartNum": "39"
            },
            "23": {
                "class": "icon-zhineng-bg",
                "category": "智能",
                "src": "http://img.qdaily.com/article/article_show/20161215182422kiZLnMcDhR5muAv7.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1",
                "headline": "微软翻译，现在能当你的多国语言实时翻译官",
                "time": "12 小时前",
                "messNum": "0",
                "heartNum": "18"
            },
            "24": {
                "class": "icon-shishang-bg",
                "category": "时尚",
                "src": "http://img.qdaily.com/article/article_show/20161215192934s6iLHyTWbcZzaFC9.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1",
                "headline": "Google今年时尚热搜公布，大家都在关心什么？",
                "time": "12 小时前",
                "messNum": "0",
                "heartNum": "44"
            },
            "25": {
                "class": "icon-yule-bg",
                "category": "娱乐",
                "src": "http://img.qdaily.com/article/article_show/201612160935430WkGTEbs9FOCejVQ.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1",
                "headline": "游戏推出三个多月，《阴阳师》真人电影和剧集都要来了",
                "time": "12 小时前",
                "messNum": "28",
                "heartNum": "10"
            },
            "26": {
                "class": "icon-zhineng-bg",
                "category": "智能",
                "src": "http://img.qdaily.com/article/article_show/20161216101319aK5kVv1IlNumTy3P.png?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1",
                "headline": "亚马逊向全球推视频服务，不再绑着自己的电商生意",
                "time": "12 小时前",
                "messNum": "4",
                "heartNum": "6"
            },
            "27": {
                "class": "icon-yule-bg",
                "category": "娱乐",
                "src": "http://img.qdaily.com/article/article_show/201612160944435RtnAGPLdTxkHOCI.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1",
                "headline": "今日娱乐：马里奥手游多国畅销，中超球队 5 亿欧欲收梅西",
                "time": "12 小时前",
                "messNum": "13",
                "heartNum": "3"
            },
            "28": {
                "class": "icon-chengshi-bg",
                "category": "城市",
                "src": "http://img.qdaily.com/article/article_show/201612161031562ABxfIqdEr3c5Nnz.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1",
                "headline": "看图：这里是过去24小时内发生的重要的事",
                "time": "12 小时前",
                "messNum": "4",
                "heartNum": "8"
            },
            "29": {
                "class": "icon-zhineng-bg",
                "category": "智能",
                "src": "http://img.qdaily.com/article/article_show/20161216081339wILFahAORW8u4sQv.png?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1",
                "headline": "亚马逊无人机第一次送货，送出了一包爆米花",
                "time": "12 小时前",
                "messNum": "0",
                "heartNum": "16"
            },
            "30": {
                "class": "icon-shangye-bg",
                "category": "商业",
                "src": "http://img.qdaily.com/article/article_show/20161216175145JdlaB1eijmuZq6by.png?imageMogr2/auto-orient/thumbnail/!750x278r/gravity/Center/crop/750x278/quality/85/format/webp/ignore-error/1",
                "headline": "我们给今年的广告办了一届奥斯卡，现在请你投票，先来“最佳剧本”奖",
                "time": "13 小时前",
                "messNum": "37",
                "heartNum": "355"
            },
            "31": {
                "class": "icon-shangye-bg",
                "category": "商业",
                "src": "http://img.qdaily.com/article/article_show/20161216080411za7ypMZqldKRjGOt.jpeg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1",
                "headline": "大公司头条：雅虎好不容易找到的买家，因为数据泄露，反悔了；董明珠、万达和京东一起入股新能源客车公司；Facebook 推出了假新闻标记工具",
                "time": "14 小时前",
                "messNum": "17",
                "heartNum": "83"
            },
            "32": {
                "class": "icon-zhineng-bg",
                "category": "智能",
                "src": "http://img.qdaily.com/article/article_show/20161215161800et0OHTEPSNfwkpjR.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1",
                "headline": "这产品给蔬菜水果添了一层“新衣”，存放的时间长好多",
                "time": "15 小时前",
                "messNum": "4",
                "heartNum": "86"
            },
            "33": {
                "class": "icon-shangye-bg",
                "category": "商业",
                "src": "http://img.qdaily.com/article/article_show/20161215175039OGZq5Bk8h0cCwDTy.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1",
                "headline": "素食连锁快餐 Veggie Grill 快速扩张，不止卖给素食主义者",
                "time": "15 小时前",
                "messNum": "7",
                "heartNum": "42"
            },
            "34": {
                "class": "icon-shangye-bg",
                "category": "商业",
                "src": "http://img.qdaily.com/article/article_show/20161215233350ivJnw9Gl8SsQ0O7I.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1",
                "headline": "曾经失败的卷饼店 Taco Bell 重登上海，这次主攻陆家嘴",
                "time": "15 小时前",
                "messNum": "15",
                "heartNum": "45"
            },
            "35": {
                "class": "icon-yule-bg",
                "category": "娱乐",
                "src": "http://img.qdaily.com/article/article_show/20161215231517LE4ecpCuxfXUYbrk.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1",
                "headline": "今年这么多电影，谁家的海报最想让你一探究竟？",
                "time": "15 小时前",
                "messNum": "10",
                "heartNum": "180"
            },
            "36": {
                "class": "icon-youxi-bg",
                "category": "游戏",
                "src": "http://img.qdaily.com/article/article_show/20161216050726Bx0K6JsdiCGSI4OL.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1",
                "headline": "《超级马里奥跑酷》来得晚了些，但是值得一试",
                "time": "15 小时前",
                "messNum": "20",
                "heartNum": "25"
            },
            "37": {
                "class": "icon-sheji-bg",
                "category": "设计",
                "src": "http://img.qdaily.com/article/article_show/20161216073256XNYU9CmZ2lsGIuEb.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1",
                "headline": "这个造型可以调整的边桌，不能更简洁了｜这个设计了不起",
                "time": "15 小时前",
                "messNum": "0",
                "heartNum": "38"
            },
            "38": {
                "class": "icon-shishang-bg",
                "category": "时尚",
                "src": "http://img.qdaily.com/article/article_show/20161216052051G4g7eBZLA5h1FbEy.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1",
                "headline": "欧舒丹翻新了它的纽约旗舰店，主打个性化和数字化",
                "time": "15 小时前",
                "messNum": "1",
                "heartNum": "20"
            },
            "39": {
                "class": "icon-sheji-bg",
                "category": "设计",
                "src": "http://img.qdaily.com/article/article_show/201612160140255zth9I4wYVaJWEGc.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1",
                "headline": "马岩松在广西北海造的“假山”住宅，已基本完工",
                "time": "15 小时前",
                "messNum": "12",
                "heartNum": "41"
            },
            "40": {
                "class": "icon-zhineng-bg",
                "category": "智能",
                "src": "http://img.qdaily.com/article/article_show/20161215164616Hwdv6EaUbpzTeX5R.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1",
                "headline": "Mac 电脑不再显示电量剩余时间，理由好像不太对啊",
                "time": "15 小时前",
                "messNum": "15",
                "heartNum": "27"
            },
            "41": {
                "class": "icon-zhineng-bg",
                "category": "智能",
                "src": "http://img.qdaily.com/article/article_show/20161215174318JfKd8Hkua2q5O3DB.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1",
                "headline": "Uber 在中国出了一个新应用，让你出国打车时候用",
                "time": "15 小时前",
                "messNum": "4",
                "heartNum": "16"
            },
            "42": {
                "class": "icon-chengshi-bg",
                "category": "城市",
                "src": "http://img.qdaily.com/article/article_show/20161215161421OqMDzxVl3KkuHhYi.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1",
                "headline": "20 世纪的维也纳天才成群，维特根斯坦也在其中",
                "time": "昨天",
                "messNum": "1",
                "heartNum": "20"
            },
            "43": {
                "class": "icon-yule-bg",
                "category": "娱乐",
                "src": "http://img.qdaily.com/article/article_show/20161215152403VtEiy0uCmxdDMAvq.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1",
                "headline": "“我没想过成为鲍勃·迪伦最好的朋友，我是他签约公司的总裁”",
                "time": "昨天",
                "messNum": "1",
                "heartNum": "17"
            },
            "44": {
                "class": "icon-shangye-bg",
                "category": "商业",
                "src": "http://img.qdaily.com/article/article_show/20161215143436zeuK5Jn0j62bI7MP.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1",
                "headline": "2016 年全球最贵的商业街，都是哪几条？| 好奇心小数据",
                "time": "昨天",
                "messNum": "7",
                "heartNum": "210"
            },
            "45": {
                "class": "icon-chengshi-bg",
                "category": "城市",
                "src": "http://img.qdaily.com/article/article_show/20161214174552loJ8rWDncOx4zwHA.gif?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/ignore-error/1",
                "headline": "现在令全世界人最困扰的健康问题是啥？背痛！",
                "time": "昨天",
                "messNum": "13",
                "heartNum": "61"
            },
            "46": {
                "class": "icon-sheji-bg",
                "category": "设计",
                "src": "http://img.qdaily.com/article/article_show/20161215155711oPrzqY69A2utcwZW.jpeg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1",
                "headline": "日本茶卖到英国，画了一套简洁灵巧的饮茶仪式",
                "time": "昨天",
                "messNum": "4",
                "heartNum": "188"
            },
            "47": {
                "class": "icon-shangye-bg",
                "category": "商业",
                "src": "http://img.qdaily.com/article/article_show/20161215164051oWuHUpR9sacTCtO0.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1",
                "headline": "Instagram 发布收藏功能，看起来像是搭配购物车的收藏夹",
                "time": "昨天",
                "messNum": "5",
                "heartNum": "31"
            },
            "48": {
                "class": "icon-yule-bg",
                "category": "娱乐",
                "src": "http://img.qdaily.com/article/article_show/20161215150100Sp4mOUWkj2nw5hN6.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1",
                "headline": "代言 vivo 手机后，库里又和一嗨租车签下 800 万合同",
                "time": "昨天",
                "messNum": "16",
                "heartNum": "16"
            },
            "49": {
                "class": "icon-zhineng-bg",
                "category": "智能",
                "src": "http://img.qdaily.com/article/article_show/201612151315251o8baHMQDpPUK97S.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1",
                "headline": "三天发了两个公告，乐视又说它会正常起来",
                "time": "昨天",
                "messNum": "19",
                "heartNum": "15"
            },
            "50": {
                "class": "icon-shishang-bg",
                "category": "时尚",
                "src": "http://img.qdaily.com/article/article_show/20161215150123mqvRGnghtZ3Vjyd9.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1",
                "headline": "他在伦敦生活了 30 多年，把伦敦街头的陌生人集结成册",
                "time": "昨天",
                "messNum": "0",
                "heartNum": "73"
            },
            "51": {
                "class": "icon-zhineng-bg",
                "category": "智能",
                "src": "http://img.qdaily.com/article/article_show/20161215130158hJl6MFVpXLWmNiuE.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1",
                "headline": "特朗普的科技峰会开完了，他们都讨论了什么？",
                "time": "昨天",
                "messNum": "22",
                "heartNum": "73"
            },
            "52": {
                "class": "icon-yule-bg",
                "category": "娱乐",
                "src": "http://img.qdaily.com/article/article_show/20161215130752q3H6AJKmrtyd89fo.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1",
                "headline": "湖南卫视今年的跨年晚会只能网络直播，为什么？",
                "time": "昨天",
                "messNum": "38",
                "heartNum": "39"
            },
            "53": {
                "class": "icon-shishang-bg",
                "category": "时尚",
                "src": "http://img.qdaily.com/article/article_show/201612151112075Eak4uVqtQplTYch.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1",
                "headline": "做了爱马仕男装创意总监 28 年，她有这些思考",
                "time": "昨天",
                "messNum": "3",
                "heartNum": "72"
            },
            "54": {
                "class": "icon-zhineng-bg",
                "category": "智能",
                "src": "http://img.qdaily.com/article/article_show/20161213200348RGHBmUzJC2fkYv9l.png?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1",
                "headline": "共享汽车已经不稀奇，共享私人飞机的生意也已经好起来了",
                "time": "昨天",
                "messNum": "4",
                "heartNum": "41"
            },
            "55": {
                "class": "icon-zhineng-bg",
                "category": "智能",
                "src": "http://img.qdaily.com/article/article_show/2016121510280056RpPAt49KVQJowU.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1",
                "headline": "印象笔记的隐私政策更新，员工可以读取你的笔记内容？",
                "time": "昨天",
                "messNum": "9",
                "heartNum": "15"
            },
            "56": {
                "class": "icon-zhineng-bg",
                "category": "智能",
                "src": "http://img.qdaily.com/article/article_show/20161215111658fcW10KDaYoPTgtbQ.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1",
                "headline": "亚马逊智能音响Echo接了个企业订单，来自豪华度假村",
                "time": "昨天",
                "messNum": "0",
                "heartNum": "15"
            },
            "57": {
                "class": "icon-shangye-bg",
                "category": "商业",
                "src": "http://img.qdaily.com/article/article_show/20161215115501BZSH1UOXcWyk96fn.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1",
                "headline": "百事想多卖点健康产品，但消费者还是想吃薯片",
                "time": "昨天",
                "messNum": "10",
                "heartNum": "24"
            },
            "58": {
                "class": "icon-chengshi-bg",
                "category": "城市",
                "src": "http://img.qdaily.com/article/article_show/20161215101312CQnmROil9UzcwVBF.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1",
                "headline": "「这世界」日本的年度汉字，选了个“金“字",
                "time": "昨天",
                "messNum": "7",
                "heartNum": "18"
            },
            "length": "58",
        },
        bannerdata: {
            "style": {
                "backgroundImage": "url(\"http://img.qdaily.com/article/banner/20161214153410dTlmbvRiEO4wHrj0.jpg?imageMogr2/auto-orient/thumbnail/!755x450r/gravity/Center/crop/755x450/quality/85/format/jpg/ignore-error/1\")"
            },
            "category": "商业",
            "headline": "中国电影市场经历了希望破灭的一年，接下来又要走向何方？｜好奇心2016年度盘点",
        },
        midGridData: {
            "joinNum": "2899",
            "class": "icon-city",
            "text": "这个发明流行色的公司说：任何颜色都有积极的一面，你得一视同仁",
            "src": "http://img.qdaily.com/article/article_show/2016121305421494PZeqBiwXCu5FOx.png?imageMogr2/auto-orient/thumbnail/!750x278r/gravity/Center/crop/750x278/quality/85/format/webp/ignore-error/1"
        },
        actGridData: {
            "headline": "现如今，哪些关键词已经失去了（用来筛选商品）意义？",
            "neckline": "当年你还会用来搜索或筛选东西，现在搜出来的东西根本不愿多看一眼。（题图来自：Stephen Maurice Graham）",
            "catagoryUrl": "http://img.qdaily.com/paper_category/icon_white/20160722174309beUs7l6nN5RZkEyV.png?imageMogr2/auto-orient/thumbnail/!128x128r/gravity/Center/crop/128x128/quality/85/ignore-error/1",
            "style": {
                "backgroundImage": "url(\"http://img.qdaily.com/paper/paper_show/20161212130748xHGcnmNuoTBekaRb.jpg?imageMogr2/auto-orient/thumbnail/!1005x480r/gravity/Center/crop/1005x480/quality/85/format/webp/ignore-error/1\")"
            }
        }
    },
    computed: {
        getHeadGrids1: function() {
            var headGridData = {};
            for (var j = 0, k = 0; j < 4; j++, k++) {
                headGridData[k] = this.gridDatas[j]
            }
            return headGridData;
        },
        getHeadGrids2: function() {
            var headGridData = {};
            for (var j = 4, k = 0; j < 5; j++, k++) {
                headGridData[k] = this.gridDatas[j]
            }
            return headGridData;
        },
        getHeadGrids3: function() {
            var headGridData = {};
            for (var j = 5, k = 0; j < 6; j++, k++) {
                headGridData[k] = this.gridDatas[j]
            }
            return headGridData;
        },
        getRestGrids: function() {
            var headGridData = {};
            for (var j = 6, k = 0; j < this.gridDatas.length; j++, k++) {
                headGridData[k] = this.gridDatas[j]
            }
            return headGridData;
        }
    }
})
