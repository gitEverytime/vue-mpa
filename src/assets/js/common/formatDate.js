//hh:mm
function HM(timeStamp) {
    const date = new Date(timeStamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const zero1 = hours < 10 ? '0' : '';
    const zero2 = minutes < 10 ? '0' : '';
    return `${zero1}${hours}:${zero2}${minutes}`;
}

//MM:dd hh:mm
function MDHM(timeStamp) {
    const date = new Date(timeStamp);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const zero1 = month < 10 ? '0' : '';
    const zero2 = day < 10 ? '0' : '';
    const zero3 = hours < 10 ? '0' : '';
    const zero4 = minutes < 10 ? '0' : '';
    return `${zero1}${month}-${zero2}${day} ${zero3}${hours}:${zero4}${minutes}`
}

//YYYY-MM-dd hh:mm:ss
function YMDHM(timeStamp) {
    const date = new Date(timeStamp);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const zero1 = month < 10 ? '0' : '';
    const zero2 = day < 10 ? '0' : '';
    const zero3 = hours < 10 ? '0' : '';
    const zero4 = minutes < 10 ? '0' : '';
    const zero5 = seconds < 10 ? '0' : '';
    return `${year}-${zero1}${month}-${zero2}${day} ${zero3}${hours}:${zero4}${minutes}:${zero5}${seconds}`
}
//YYYY-MM-dd hh:mm
function YMDHM_new(timeStamp) {
    const date = new Date(timeStamp);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const zero1 = month < 10 ? '0' : '';
    const zero2 = day < 10 ? '0' : '';
    const zero3 = hours < 10 ? '0' : '';
    const zero4 = minutes < 10 ? '0' : '';
    return `${year}-${zero1}${month}-${zero2}${day} ${zero3}${hours}:${zero4}${minutes}`
}
//YYYY-MM-dd
function YMD(timeStamp) {
    const date = new Date(timeStamp);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const zero1 = month < 10 ? '0' : '';
    const zero2 = day < 10 ? '0' : '';
    return `${year}-${zero1}${month}-${zero2}${day}`
}
//YYYY-MM-dd
function YMD_NEW(timeStamp) {
    const date = new Date(timeStamp);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const zero1 = month < 10 ? '0' : '';
    const zero2 = day < 10 ? '0' : '';
    return `${year}/${zero1}${month}/${zero2}${day}`
}
//YYYY-MM-dd HH:MM:SS
function formatNotZero(timeStamp) {
    const date = new Date(timeStamp);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const zero1 = month < 10 ? '0' : '';
    const zero2 = day < 10 ? '0' : '';
    return `${year}/${month}/${day}`
}
// 时间格式化
function formatDate (date, fmt) {
    let o = {
        'M+': date.getMonth() + 1, // 月份
        'd+': date.getDate(), // 日
        'h+': date.getHours(), // 小时
        'm+': date.getMinutes(), // 分
        's+': date.getSeconds(), // 秒
        'S': date.getMilliseconds() // 毫秒
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    for (var k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
        }
    }
    return fmt
}

//

export default {
    MDHM,
    HM,
    YMDHM,
    YMD,
    YMD_NEW,
    YMDHM_new,
    formatDate,
    formatNotZero
}