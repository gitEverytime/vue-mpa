import Vue from 'vue'
let vm  = new Vue;

export default {
    /**
     * 倒计时效果  disabled:button置灰    value:button值
     */

    countDownFunc(disabled,valuecode){
        let s = 60;
        disabled = true;
        const timer = setInterval(() =>{
            if(s>-1) {
                valuecode = `再次发送(${s})s`;
            }else{
                valuecode = '获取验证码';
                disabled = false;
                clearInterval(timer);
            }
            s --;
        },1000)
    }
}