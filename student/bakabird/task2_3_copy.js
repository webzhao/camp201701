Vue.component("grid", {
    props: ["data"],
    template: heredoc(function() {
        /*
        <div class="grid">
            <div class="img">
                <p class="category"><i class="iconfont" :class="data.class" role="category-city"></i><span>城市</span></p>
                <img v-bind:src="data.src" v-bind:alt="data.text" width="245" height="185">
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

Vue.component("mid-grid", {
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


Vue.component("min-grid-activity", {
    props: ["data"],
    template: heredoc(function() {
        /*
        <div class="mid-grid mid-grid-activity" :style="data.style">
            <div class="activity-categiry"><img v-bind:src="data.catagoryUrl" alt="activity-categiry" width="44" height="44"></div>
            <div class="count">
                <i class="iconfont icon-join"></i>
                <span class="num">{{data.joinNum}}</span>
                <span>人已参加</span>
            </div>
            <div class="activity-headline">
                <p class="headline">{{data.headline}}</p>
                <p class="neckline">{{data.neckline}}</p>
            </div>
        </div>
        */
    })
})


var test = new Vue({
    el: "#test",
    data: {
        testdata: {
            "class": "icon-city",
            "text": "越来越多已经长大的“年轻人”不愿离家，是你吗？丨好奇心小数据",
            "src": "http://img.qdaily.com/article/article_show/20161214194203rAwEVkHj4pSoLCRZ.jpg?imageMogr2/auto-orient/thumbnail/!368x278r/gravity/Center/crop/368x278/quality/85/format/webp/ignore-error/1"
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
            },
        }
    },
})



var gridItems = $(".packery-item .category span.iconfont")
var gridData = {};

for (var i = 0; i < gridItems.length; i++) {
    gridData[i] = {};
    // class
    gridData[i].class = gridItems[i].parentNode.parentNode.parentNode.parentNode.getElementsByClassName("category")[0].children[0].classList[1]
        // category
    gridData[i].category = gridItems[i].parentNode.parentNode.parentNode.parentNode.getElementsByClassName("category")[0].children[1].innerText
        // src
    gridData[i].src = gridItems[i].parentNode.parentNode.parentNode.parentNode.getElementsByClassName("pic")[0].children[0].dataset.src
        // headline
    gridData[i].headline = gridItems[i].parentNode.parentNode.parentNode.parentNode.getElementsByClassName("pic")[0].children[0].alt
        // time
    gridData[i].time = gridItems[i].parentNode.parentNode.parentNode.parentNode.getElementsByClassName("smart-date")[0].innerText
        // messNum
    if (gridItems[i].parentNode.parentNode.parentNode.parentNode.getElementsByClassName("icon-message")[0]) {
        gridData[i].messNum = gridItems[i].parentNode.parentNode.parentNode.parentNode.getElementsByClassName("icon-message")[0].innerText
    } else {
        gridData[i].messNum = "0";
    }
        // heartNum
    if (gridItems[i].parentNode.parentNode.parentNode.parentNode.getElementsByClassName("icon-heart")[0]) {
        gridData[i].heartNum = gridItems[i].parentNode.parentNode.parentNode.parentNode.getElementsByClassName("icon-heart")[0].innerText
    } else {
        gridData[i].heartNum = "0";
    }
}
JSON.stringify(gridData)


