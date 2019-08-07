export default {
    /**
     * 电话号码/手机号正则验证
     */
    number(){
        return /^1[3|4|5|6|7|8][0-9]\d{8}$/
    },
    /**
     * 身份证号码正则验证
     */
    idCard(){
        return /(^\\d{15}$)|(^\\d{18}$)|(^\\d{17}(\\d|X|x)$)/
    },
    /**
     * 匹配以字母开头字母开头，英文和数字混合的6-20位(密码/用户名)数字正则验证
     */
    passwordReg(){
        return /^[a-zA-Z]([a-zA-Z0-9]{5,20})$/
    },

    /**
     * 只能输入数字正则
     */
    num(){
        return /^[+-]?(0|([1-9]\d*))(\.\d+)?$/
    },

    numComma(){
        return /^[\d,]*$/
    },

    /**
     * element-ui自定义验证函数
     *
     */

    /**
     * 输入的电话号码验证
     * @param rule
     * @param value
     * @param callback
     */
    validateNumber(rule, value, callback){
        if (value === '') {
            callback(new Error('请输入您的手机号'));
        } else if (!/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(value)) {
            callback(new Error('手机号码格式不正确'));
        } else {
            callback();
        }
    },

    /**
     * 身份证校验
     * @param rule
     * @param value
     * @param callback
     */
    validateIDcard(rule, value, callback) {
        let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        if (value === '') {
            callback(new Error('请输入身份证号码'));
        }else if(!reg.test(value)){
            callback(new Error('请确认您的身份证号码是否正确'));
        } else {
            callback();
        }
    },

    /**
     * 密码验证
     * @param rule
     * @param value
     * @param callback
     */
    validatePass(rule, value, callback) {
        let reg = /^[a-zA-Z]([a-zA-Z0-9]{5,20})$/;
        if (value === '') {
            callback(new Error('请输入密码'));
        }else if(!reg.test(value)){
            callback(new Error('请输入字母开头，英文和数字混合的6-20位数字'));
        } else {
            callback();
        }
    },

    /**
     * 银行卡号码验证
     * @param rule
     * @param value
     * @param callback
     */
    validateBank(rule, value, callback) {
        let reg = /^([1-9]{1})(\d{14}|\d{18}|\d{19})$/;
        if (value === '') {
            callback(new Error('请输入您的银行卡号'));
        }else if(!reg.test(value)){
            callback(new Error('请输入正确的银行卡位数'));
        } else {
            callback();
        }
    },

    /**
     * 验证数字+逗号+点
     */
    validateNumComma(rule, value, callback){
        let reg = /^[\d,.]*$/;
        if (value === '') {
            callback();
        }else if(!reg.test(value)){
            callback(new Error('请输入正确的格式！'));
        } else {
            callback();
        }
    },

    /**
     * 验证是否是数字类型和长度必须为10位
     */
    validateNumLength(rule, value, callback){
        let reg = /^[\d,.]*$/;
        if (value === '') {
            callback();
        }else if(!reg.test(value) && value.length !== 10){
            callback(new Error('长度必须为10位且类型必须为数字！'));
        } else {
            callback();
        }
    },
    /**
     * 验证是否包含大写字母和数字
     */
    validateNumUpperase(rule, value, callback){
        let reg1 = /^[A-Z][A-Z0-9_]*$/;
        if (value === '') {
            callback(new Error('不能为空！'));
        }else if(value.length < 2){
            callback(new Error('长度不能少于2位！'));
        }else if(!reg1.test(value)){
            callback(new Error('必须以大写字母开头包含大写字母，数字，下划线'));
        }else {
            callback();
        }
    },
    /**
     * 验证只能输入大写字母^[A-Z]
     */
    validateZiMuUpperase(rule, value, callback){
        let reg = /^[A-Z]+$/;
        if (value === '') {
            callback(new Error('不能为空！'));
        }else if(!reg.test(value)){
            callback(new Error('只能输入大写字母！'));
        }else {
            callback();
        }
    },
    /**
     * 验证只能输入大写字母^[A-Z]
     */
    validateNumberLength(rule, value, callback){
        let reg = /^[\d]*$/;
        if (value === '') {
            callback(new Error('不能为空！'));
        }else if(!reg.test(value) || value.length <1  || value.length >3 || value === '0' ){
            callback(new Error('长度必须为1-3位且类型且必须为数字且不为零！'));
        } else {
            callback();
        }
    },
    /**
     * 验证只能输入数字而且14位
     */
    validateNumberFourth(rule, value, callback){
        let reg = /^[\d]*$/;
        if (value === '') {
            callback(new Error('不能为空！'));
        }else if(!reg.test(value) || value.length <1  || value.length >14 ){
            callback(new Error('长度必须为1-14位且类型且必须为数字'));
        } else {
            callback();
        }
    },
    /***
     * 验证大写英文字母和数字
     */
    validateDaZiMuNum(rule, value, callback){
        let reg = /^[0-9A-Z]*$/;
        if (value === '') {
            callback(new Error('不能为空！'));
        }else if(!reg.test(value) || value.length <1 ){
            callback(new Error('纯数字、纯大写字母或者数字加大写字母！'));
        } else {
            callback();
        }
    },
    /***
     * 验证只能输入1-3位数字或者,
     */
    validateNumberLengthDouhao(rule, value, callback){
        let reg = /^[\d,]*$/;
        if (value === '') {
            callback(new Error('不能为空！'));
        } else if(!reg.test(value) || value.length <1 || value === '0' ){
            callback(new Error('长度必须大于1位且类型且必须为数字且不为零！'));
        } else if(value.substring(0,1) === ',' || value.substring(0,1) === '0' || value.split(',').length-1 >3){
            callback(new Error('不能以逗号或者0开头或者逗号不能超过两位！'));
        } else if(value.split(',').length-1 >1){
            callback(new Error('逗号不能超过两位！'));
        }else {
            callback();
        }
    },
    /**
     * 验证字母数字下划线
     */
    validateZimuXhx(rule, value, callback){
        let reg = /^[0-9A-Z_]*$/;
        if (value === '') {
            callback(new Error('不能为空！'));
        }else if(!reg.test(value)){
            callback(new Error('输入只能包含字母或者下划线'));
        } else {
            callback();
        }
    },
    /**
     * 验证英文字母/数字/下划线
     */
    validateZimuNumberXhx(rule, value, callback){
        let reg = /^[0-9a-zA-Z_]*$/;
        if (value === '') {
            callback(new Error('不能为空！'));
        }else if(!reg.test(value)){
            callback(new Error('输入只能包含字母、数字或者下划线'));
        } else {
            callback();
        }
    },
    /**
     * 验证只能输入数字
     */
    validateNum(rule, value, callback){
        let reg = /^[\d.]*$/;
        if (value === '') {
            callback(new Error('不能为空！'));
        }else if(!reg.test(value) || value.length <1  || value.length >14 ){
            callback(new Error('必须为数字!'));
        } else {
            callback();
        }
    },

}