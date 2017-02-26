function get_promotion_time_data() {
    const timeNow = new Date();
    let data = [];
    const year = 2017

    // 2月的第一天
    const time_temp = new Date(2017, 1, 1);

    // 今天与 2月第一天的距离(天)
    const timeNow_sec = Date.parse(new Date(timeNow.getFullYear(), timeNow.getMonth(), timeNow.getDate()));
    const timeTar_sec = Date.parse(time_temp);
    const timeNow_step = (timeTar_sec - timeNow_sec) / 86400000;

    // 2月第一天 与 第一星期三 的距离
    let time_step = 0;
    time_step = (time_temp.getDay() <= 3) ? time_temp.getDay() - 3 : 3 + 7 - time_temp.getDay();

    // 做加法，所有的距离。
    // 做加法，2月的所有星期三 以及 距离今天的天数
    if (year % 4 == 0) {
        // 因为可能我活不到2100年（笑）
        // 所以不作世纪年判断
        out_flag = 29;
    } else {
        out_flag = 28;
    }

    // 准备工作已经完成，开始制造数据f
    while (time_step < 28) {
        let object_temp = {};
        let time_temp2 = new Date(2017, 1, 1 + time_step);
        let date = time_temp2.getFullYear() + "/" + (time_temp2.getMonth() + 1) + "/" + time_temp2.getDate();
        let daysBefore = timeNow_step + time_step;
        object_temp.date = date;
        object_temp.daysBefore = daysBefore;
        data.push(object_temp);
        time_step = time_step + 7;
    }

    return data;
}