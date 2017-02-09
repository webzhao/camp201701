    Vue.component("list-test", {
        props: ['item'],
        template: '<li>{{item}}</li>'
    })

    var app = new Vue({
        el: "#timelists",
        data: {
            timelist: [],
        }
    });

    window.onload = function() {
        var getTime = function() {
            var timesEle = document.getElementsByTagName('time');
            var timesObj = {};
            for (var i = 0, timedata = void 0; i < timesEle.length; i++) {
                timedata = timesEle[i].attributes[0].nodeValue;
                if (!timesObj[timedata]) {
                    timesObj[timedata] = i;
                }
            }
            var timesArr = [];
            for (var item in timesObj) {
                timesArr.push(item);
            }
            console.dir(timesArr);
            app.timelist = timesArr;
            // get the time & fix it
        };





        getTime();
    };
