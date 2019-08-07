export default {
    changeToDu(du) {
        const arr1 = String(du).split(".");
        const d = arr1[0];
        let tp = "0." + arr1[1]
        tp = String(tp * 60); //这里进行了强制类型转换
        const arr2 = tp.split(".");
        const f = arr2[0];
        tp = "0." + arr2[1];
        tp = tp * 60;
        const m = parseInt(tp);
        const dfm = d + "°" + f + "'" + m;
        return dfm;
    },
    changeToDFM(dfm){
        const arr1 = dfm.split('°');
        const d = arr1[0];
        const arr2 = arr1[1].split("'")
        let f = arr2[0] || 0;
        const m = arr2[1] || 0;
        f = parseFloat(f) + parseFloat(m / 60);
        var du = parseFloat(f / 60) + parseFloat(d);
        return String(du);
    }
}