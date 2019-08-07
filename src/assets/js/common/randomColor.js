export default {
    /**
     * HSL颜色值转换为RGB
     * H，S，L 设定在 [0, 1] 之间
     * R，G，B 返回在 [0, 255] 之间
     * H 色相, S 饱和度, L 亮度
     * 返回RGB色值
     */
    hslToRgb(H, S, L) {
        let R, G, B;
        if (+S === 0) {
            R = G = B = L; // 饱和度为0 为灰色
        } else {
            let hue2Rgb = function(p, q, t) {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1 / 6) return p + (q - p) * 6 * t;
                if (t < 1 / 2) return q;
                if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                return p;
            };
            let Q = L < 0.5 ? L * (1 + S) : L + S - L * S;
            let P = 2 * L - Q;
            // H = H/360;
            R = hue2Rgb(P, Q, H + 1 / 3);
            G = hue2Rgb(P, Q, H);
            B = hue2Rgb(P, Q, H - 1 / 3);
        }
        return [Math.round(R * 255), Math.round(G * 255), Math.round(B * 255)];
    },
    // 获取HSL数组
    getHslArray() {
        // 获取随机HSL
        let H = Math.random();
        let S = Math.random();
        let L = Math.random();
        let ret = [H, S, L];

        ret[1] = 0.7 + ret[1] * 0.2; // [0.7 - 0.9] 排除过灰颜色
        ret[2] = 0.4 + ret[2] * 0.4; // [0.4 - 0.8] 排除过亮过暗色
        // 数据转化到小数点后两位
        ret = ret.map(function(item) {
            return parseFloat(item.toFixed(2));
        });
        let hslItem = this.hslToRgb(ret[0],ret[1],ret[2]);
        return "rgb(" + hslItem.toString() + ")";
    },
}
