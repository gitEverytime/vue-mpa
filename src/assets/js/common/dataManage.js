export default {
    projectList:[
        {
            label:'监测点',
            value:'监测点'
        },
    ],
    opations:[
        {
            label:'泵站',
            value:'泵站'
        }, {
            label:'首部',
            value:'首部'
        }, {
            label:'蓄水池',
            value:'蓄水池'
        }, {
            label:'调蓄池',
            value:'调蓄池'
        }, {
            label:'减压池',
            value:'减压池'
        }, {
            label:'联户表井',
            value:'联户表井'
        }, {
            label:'计量井',
            value:'计量井'
        }, {
            label:'检修井',
            value:'检修井'
        }, {
            label:'监测站',
            value:'监测站'
        }, {
            label:'管网',
            value:'管网'
        }, {
            label:'田间',
            value:'田间'
        }, {
            label:'干渠',
            value:'干渠'
        }, {
            label:'干支渠',
            value:'干支渠'
        }, {
            label:'支渠',
            value:'支渠'
        },{
            label:'斗渠',
            value:'斗渠'
        },{
            label:'农渠',
            value:'农渠'
        },{
            label:'毛渠',
            value:'毛渠'
        },{
            label:'闸门',
            value:'闸门'
        },{
            label:'机井',
            value:'机井'
        },{
            label:'水库',
            value:'水库'
        },{
            label:'管理处',
            value:'管理处'
        },{
            label:'水源地',
            value:'水源地'
        }

    ],
    lora_list:[1,2,3, 4, 5, 6, 7, 8],
    lot_list:[9, 10, 11, 12, 13, 14, 15, 16, 17, 23, 24],
    controlList1:[
        '查看日志',
        '注册|心跳信息',
        '实时数据',
        '历史数据',
        '报警数据',
        '下发指令',
        '服务器参数',
        '通道参数',
        '高低位水池控制参数',
        '报警参数',
        'T188水表地址',
        'T188水表阀门控制',
        '联户抄表',
        '控制（开泵关阀）',
        '控制（关泵开阀）',
        '远程升级'
    ],
    controlList2:[
        '查看日志'
    ],
    controlList3:[
        '查看日志',
        '水泵重启',
    ],
    controlList4:[
        '查看日志',
        '网关重启',
        '网关注册信息',
        '网关心跳信息',
        '网关实时信息',
        '网关通用信息召测',
        '网关合法终端召测',
        '网关激活GPS',
        '网关周期设置',
        '网关上报中心设置',
        '网关合法终端设置'
    ],
    controlList5:[
        '查看日志',
        '终端重启',
        '终端注册信息',
        '终端实时信息',
        '终端灌溉计划召测',
        '终端周期设置',
        '终端设备类型设置',
        '终端灌溉计划设置',
        '终端阀门控制'
    ],
    alarmList:[
        {
            name:'通道数据值报警',
            value:'42_01'
        },{
            name:'开关量报警',
            value:'42_02'
        },{
            name:'设备运行报警',
            value:'42_03'
        },{
            name:'供电报警',
            value:'42_04'
        },{
            name:'控制输出报警',
            value:'42_05'
        },{
            name:'外部事件报警',
            value:'42_06'
        }
    ],
    /**
     * 设备类型
     */
    stationTypeList:[
        {
            name: '全部',
            code: ''
        },{
            name: '气象站（01）',
            code: 'MM'
        }, {
            name: '蒸发站（03）',
            code: 'BB'
        }, {
            name: '堰闸水文站（05）',
            code: 'DD'
        }, {
            name: '潮位站（07）',
            code: 'TT'
        }, {
            name: '泵站（09）',
            code: 'DP'
        }, {
            name: '墒情站（10）',
            code: 'SS'
        }, {
            name: '路面积水点水位站（12）',
            code: 'WP'
        }, {
            name: '水质监测站（14）',
            code: 'WQ'
        }, {
            name: '雨量站（02）',
            code: 'PP'
        }, {
            name: '河道水文站（04）',
            code: 'ZQ'
        }, {
            name: '河道水位站（06）',
            code: 'ZZ'
        }, {
            name: '水库水文站（08）',
            code: 'RR'
        }, {
            name: '地下水站（09）',
            code: 'ZG'
        }, {
            name: '分洪水位站（11）',
            code: 'ZB'
        }, {
            name: '管网(井下)水位站（13）',
            code: 'WT'
        },],
    /**
     * 设备类型
     *
     */
    equipList:[
        {
            name: '全部',
            code: ''
        },
        {
            name: '闸门',
            code: 'SG'
        },
        {
            name: '液压泵',
            code: 'HP'
        },
        {
            name: '水泵',
            code: 'WT'
        },
        {
            name: '液位计',
            code: 'LM'
        },
        {
            name: '格栅机',
            code: 'GM'
        },
        {
            name: '闸门',
            code: 'SG'
        },
        {
            name: '电动阀',
            code: 'EV'
        },
        {
            name: '柴油发电机',
            code: 'DG'
        },
        {
            name: '电表',
            code: 'EM'
        },
        {
            name: '智能喷射器',
            code: 'IE'
        },
        {
            name: '智能喷射器',
            code: 'IE'
        },
        {
            name: 'LED显示器',
            code: 'LD'
        },
        {
            name: '雨量监测设备',
            code: 'RM'
        },
        {
            name: '开盖警报器',
            code: 'OC'
        },
        {
            name: '多普勒流速仪',
            code: 'CM'
        },
        {
            name: '四要素',
            code: 'FE'
        },
        {
            name: '水质设备',
            code: 'WQ'
        },
        {
            name:'路面积水点水位站',
            code:'WP'
        }
    ],
    /**
     *
     * 测站类型
     */
    stationTypes:[
        {
            name: '全部',
            code: ''
        },{
            name: '气象站（01）',
            code: 'MM'
        }, {
            name: '蒸发站（03）',
            code: 'BB'
        }, {
            name: '堰闸水文站（05）',
            code: 'DD'
        }, {
            name: '潮位站（07）',
            code: 'TT'
        }, {
            name: '泵站（09）',
            code: 'DP'
        }, {
            name: '墒情站（10）',
            code: 'SS'
        }, {
            name: '路面积水点水位站（12）',
            code: 'WP'
        }, {
            name: '水质监测站（14）',
            code: 'WQ'
        }, {
            name: '雨量站（02）',
            code: 'PP'
        }, {
            name: '河道水文站（04）',
            code: 'ZQ'
        }, {
            name: '河道水位站（06）',
            code: 'ZZ'
        }, {
            name: '水库水文站（08）',
            code: 'RR'
        }, {
            name: '地下水站（09）',
            code: 'ZG'
        }, {
            name: '分洪水位站（11）',
            code: 'ZB'
        }, {
            name: '管网(井下)水位站（13）',
            code: 'WT'
        },
        {
            name: '外江水闸',
            code: 'WS'
        }, {
            name: '阀门',
            code: 'EV'
        }, {
            name: '水库',
            code: 'RR'
        }, {
            name: '水质监测站（14）',
            code: 'WQ'
        }, {
            name: '雨水泵站',
            code: 'RP'
        }, {
            name: '湖体',
            code: 'LB'
        }
    ],
    /**
     * 设备厂家
     */
    deviceCompany:[
        {
            name:'全部',
            code:''
        },
        {
            name:'三鑫隆',
            code:1
        },{
            name:'点云',
            code:2
        },{
            name:'智润',
            code:3
        },{
            name:'福州市气象局',
            code:4
        },{
            name:'闽江二期',
            code:5
        },{
            name:'中海创',
            code:6
        },{
            name:'水文局',
            code:7
        }
    ],
    /**
     * 设备状态
     */
    deviceStatus:[
        {
            name:'全部',
            status:''
        },
        {
            name:'活跃',
            status:'a'
        },
        {
            name:'停用',
            status:'q'
        },
        {
            name:'离线',
            status:'o'
        },
    ],
    /**
     * 要素分类
     */
    elementClass:[
        {
            name:'全部',
        },
        {
            name:'实时监测',
            children:[
                {
                    name:'基本信息类'
                },{
                    name:'实时信息类'
                },{
                    name:'预报信息类'
                },{
                    name:'统计信息类'
                },{
                    name:'交换信息类'
                },{
                    name:'字典信息类'
                },{
                    name:'气象自动化监控类'
                },{
                    name:'采集平台'
                }
            ]
        },{
            name:'公共数据',
            children:[
                {
                    name:'排水设施工程数据'
                },{
                    name:'多媒体数据'
                },{
                    name:'灾情数据'
                },{
                    name:'历史热带气旋'
                },{
                    name:'社会经济数据'
                },{
                    name:'视频监控'
                },
            ]
        },{
            name:'业务共用数据',
            children:[
                {
                    name:'自动化监控系统'
                },{
                    name:'预测预报类'
                },{
                    name:'河长制类'
                },
            ]
        },{
            name:'业务系统数据库',
            children:[
                {
                    name:'微信公众号、APP'
                },
            ]
        },{
            name:'通用数据',
            children:[

            ]
        }
    ],
    /**
     * 服务分类
     */
    serverClass:[
        {
            name:'全部',
        },
        {
            name:'实时监测',
            children:[
                {
                    name:'基本信息类'
                },{
                    name:'实时信息类'
                },{
                    name:'预报信息类'
                },{
                    name:'统计信息类'
                },{
                    name:'交换信息类'
                },{
                    name:'字典信息类'
                },{
                    name:'气象自动化监控类'
                },{
                    name:'采集平台'
                }
            ]
        },{
            name:'公共数据',
            children:[
                {
                    name:'排水设施工程数据'
                },{
                    name:'多媒体数据'
                },{
                    name:'灾情数据'
                },{
                    name:'历史热带气旋'
                },{
                    name:'社会经济数据'
                },{
                    name:'视频监控'
                },
            ]
        },{
            name:'业务共用数据',
            children:[
                {
                    name:'自动化监控系统'
                },{
                    name:'预测预报类'
                },{
                    name:'河长制类'
                },
            ]
        },{
            name:'业务系统数据库',
            children:[
                {
                    name:'微信公众号、APP'
                },
            ]
        },
    ],
    /**
     * 设备管理分类
     */
    deviceTypeClass:[
        {
            name:'全部',
        },
        {
            name:'中海创',
            code:6,
            children:[
                {
                    name:'液位计',
                    code:'LM',
                },{
                    name:'水泵',
                    code:'WT',
                },{
                    name:'水闸',
                    code:'SG',
                },{
                    name:'阀门',
                    code:'EV',
                },
            ]
        },{
            name:'智润',
            code:3,
            children:[
                {
                    name:'液位计',
                    code:'LM',
                },
            ]
        },{
            name:'三鑫隆',
            code:1,
            children:[
                {
                    name:'液位计',
                    code:'LM',
                },
            ]
        },
    ],
    //选择解决方案类型
    solutionOptions:[
        {
            label:'应用场景解决方案',
            value:'场景'
        }, {
            label:'产品应用解决方案',
            value:'产品'
        },
    ],
    //选择方案标签
    marksOptions:[
        {
            name:'页面管理',
            icon:'icon-jejuefangan',
        }, {
            name:'模块1',
            icon:'icon-tubiao_kuaizhuangpailie',
        }, {
            name:'模块2',
            icon:'icon-mokuai',
        }, {
            name:'运维',
            icon:'icon-tuoguanyun-jingjianyunwei',
        },{
            name:'地球',
            icon:'icon-huaban-',
        },{
            name:'人脸识别',
            icon:'icon-renlianshibie',
        },{
            name:'灌溉记录',
            icon:'icon-guangaijilu',
        },{
            name:'河道',
            icon:'icon-hedao',
        },{
            name:'水滴',
            icon:'icon-icon-humidity',
        },{
            name:'人力资源',
            icon:'icon-renliziyuan',
        },{
            name:'地理',
            icon:'icon-guanqudilixinxi',
        },{
            name:'数据库',
            icon:'icon-shujuku',
        },{
            name:'手机',
            icon:'icon-shouji',
        },{
            name:'密码',
            icon:'icon-admin-pass',
        },{
            name:'应用监控',
            icon:'icon-jiankong',
        },{
            name:'用户协议',
            icon:'icon-xieyi',
        },{
            name:'基础数据',
            icon:'icon-xiangmu',
        },{
            name:'位置',
            icon:'icon-zuobiao',
        },{
            name:'地图',
            icon:'icon-ditu',
        },{
            name:'工程',
            icon:'icon-gongchengxiangmuxinxi',
        },{
            name:'信号',
            icon:'icon-xinhao1',
        },{
            name:'清除',
            icon:'icon-qingchuhuancun',
        },{
            name:'通讯',
            icon:'icon-tongxun',
        },
        {
            name:'人员',
            icon:'icon-ren',
        },
        {
            name:'云',
            icon:'icon-yun',
        },
        {
            name:'电池',
            icon:'icon-iconset0250',
        },
        {
            name:'密码',
            icon:'icon-iconfontmima1',
        },
        {
            name:'文本',
            icon:'icon-fenxiangdingqijieshao',
        },
        {
            name:'搜索',
            icon:'icon-sousuo',
        },
        {
            name:'安全',
            icon:'icon-anquan',
        },
        {
            name:'问题',
            icon:'icon-caozuozhinan',
        },
        {
            name:'开关',
            icon:'icon-tuichu',
        },
        {
            name:'循环',
            icon:'icon-shuaxin',
        },
        {
            name:'设置',
            icon:'icon-xitong',
        },
        {
            name:'无线',
            icon:'icon-wangluo',
        },
        {
            name:'人员',
            icon:'icon-rencaizhaopin',
        },
        {
            name:'设置',
            icon:'icon-yunweiguanli',
        },
        {
            name:'云',
            icon:'icon-weather4',
        },
        {
            name:'智能',
            icon:'icon-zhineng',
        },
        {
            name:'设备',
            icon:'icon-shebei',
        },
        {
            name:'水泵',
            icon:'icon-bengzhan',
        },
        {
            name:'商品',
            icon:'icon-lingshi',
        },
        {
            name:'管理',
            icon:'icon-zonglan',
        },
        {
            name:'设备',
            icon:'icon-yunzhuji_hover',
        },
        {
            name:'鼠标',
            icon:'icon-shubiao',
        },
        {
            name:'设置',
            icon:'icon-shezhi',
        },
        {
            name:'防护',
            icon:'icon-anquan1',
        },
        {
            name:'水表',
            icon:'icon-shuibiao',
        },
        {
            name:'信息',
            icon:'icon-tongxun1',
        },
        {
            name:'政府',
            icon:'icon-yunmaxiaoyuanicon_xuexiaojieshao',
        },
        {
            name:'警告',
            icon:'icon-yunmaxiaoyuanicon_wodetixing',
        },
        {
            name:'通知',
            icon:'icon-yunmaxiaoyuanicon_tongzhigonggaofuben',
        },
        {
            name:'管理',
            icon:'icon-yunmaxiaoyuanicon_shiwuzhaoling',
        },
        {
            name:'管理',
            icon:'icon-yunmaxiaoyuanicon_jiaofeidatingfuben',
        },
        {
            name:'管理',
            icon:'icon-yunmaxiaoyuanicon_fuwuzhinanfuben',
        },
        {
            name:'搜索',
            icon:'icon-sousuo1',
        },
        {
            name:'饮水',
            icon:'icon-guangai',
        },
        {
            name:'水泵',
            icon:'icon-bengzhanx',
        },
        {
            name:'电脑',
            icon:'icon-shebei1',
        },
        {
            name:'安全',
            icon:'icon-anquan2',
        },
        {
            name:'终端',
            icon:'icon-yun1',
        },
        {
            name:'植物',
            icon:'icon-nongyeguangai',
        },
        {
            name:'水泵',
            icon:'icon-fadianji',
        },
        {
            name:'水泵',
            icon:'icon-guangaizuoyeguanli',
        },
        {
            name:'终端',
            icon:'icon-zhineng1',
        },
        {
            name:'水泵',
            icon:'icon-shanghushuibiaoguanli',
        },
        {
            name:'水泵',
            icon:'icon-bengzhan1',
        },
        {
            name:'维修',
            icon:'icon-maintain2',
        },
        {
            name:'信号',
            icon:'icon-tongxun2',
        },
        {
            name:'云',
            icon:'icon-yunzhujicopy',
        },
        {
            name:'统计',
            icon:'icon-yunxiangguanwangicon-',
        },
        {
            name:'统计',
            icon:'icon-yunxiangguanwangicon-1',
        },
        {
            name:'视频',
            icon:'icon-yunxiangguanwangicon-2',
        },
        {
            name:'全球',
            icon:'icon-yunxiangguanwangicon-3',
        },
        {
            name:'数据库',
            icon:'icon-shujuku',
        },
        {
            name:'管理',
            icon:'icon-yunquegongnengtubiao-jihe_fanhui-',
        },
        {
            name:'组织',
            icon:'icon-ziyuan',
        },
        {
            name:'公文包',
            icon:'icon-ziyuan1',
        },
        {
            name:'奖励',
            icon:'icon-ziyuan2',
        },
        {
            name:'管理',
            icon:'icon-ziyuan3',
        },
    ],
    //菜单类型
    menuType:[
        {label:'视图',value:'VIEW'},
        {label:'检索',value:'QUERY'},
        {label:'修改',value:'EDIT'},
        {label:'删除',value:'DELETE'},
    ],
    //行政区划简称
    city_name_easy:[
        {label:'中华人民共和国',value:'null'},
        {label:'北京市-京',value:'京'},
        {label:'上海市-沪',value:'沪'},
        {label:'天津市-津',value:'津'},
        {label:'重庆市-渝',value:'渝'},
        {label:'黑龙江省-黑',value:'黑'},
        {label:'吉林省-吉',value:'吉'},
        {label:'辽宁省-辽',value:'辽'},
        {label:'内蒙古-蒙',value:'蒙'},
        {label:'河北省-冀',value:'冀'},
        {label:'新疆-新',value:'新'},
        {label:'甘肃省-甘',value:'甘'},
        {label:'青海省-青',value:'青'},
        {label:'陕西省-陕',value:'陕'},
        {label:'宁夏-宁',value:'宁'},
        {label:'河南省-豫',value:'豫'},
        {label:'山东省-鲁',value:'鲁'},
        {label:'山西省-晋',value:'晋'},
        {label:'安徽省-皖',value:'皖'},
        {label:'湖北省-鄂',value:'鄂'},
        {label:'湖南省-湘',value:'湘'},
        {label:'江苏省-苏',value:'苏'},
        {label:'四川省-川',value:'川'},
        {label:'贵州省-黔',value:'黔'},
        {label:'云南省-滇',value:'滇'},
        {label:'广西省-桂',value:'桂'},
        {label:'西藏-藏',value:'藏'},
        {label:'浙江省-浙',value:'浙'},
        {label:'江西省-赣',value:'赣'},
        {label:'广东省-粤',value:'粤'},
        {label:'福建省-闽',value:'闽'},
        {label:'台湾省-台',value:'台'},
        {label:'海南省-琼',value:'琼'},
        {label:'香港-港',value:'港'},
        {label:'澳门-澳',value:'澳'},
    ],
    //行政区划等级
    city_rank:[
        {label:'等级一',value:1},
        {label:'等级二',value:2},
        {label:'等级三',value:3},
        {label:'等级四',value:4},
        {label:'等级五',value:5},
        {label:'等级六',value:6},
        {label:'等级七',value:7},
    ],
    /**
     * 移动端底部
     * **/
    footerList:[
        {name:'首页',url:'/home',img:require('../../images/mobile/icon1_sy.png'),img_active:require('../../images/mobile/icon1_sy_sel.png')},
        {name:'工程',url:'/engineering',img:require('../../images/mobile/icon2_gc.png'),img_active:require('../../images/mobile/icon2_gc_sel.png')},
        {name:'地图',url:'/map',img:require('../../images/mobile/icon3_dt.png'),img_active:require('../../images/mobile/icon3_dt_sel.png')},
        {name:'监控',url:'/monitoring',img:require('../../images/mobile/icon5_dt.png'),img_active:require('../../images/mobile/icon5_dt_sel.png')},
        {name:'我的',url:'/self',img:require('../../images/mobile/icon4_wd.png'),img_active:require('../../images/mobile/icon4_wd_sel.png')},
    ],
    /**
     * 移动端-首页-card
     * **/
    homeCard:[
        {name:'巡检',img:require('../../images/mobile/index/icon-xj.png'),url:'patrol'},
        {name:'维修',img:require('../../images/mobile/index/icon-wx.png'),url:'repair'},
        {name:'交接班',img:require('../../images/mobile/index/icon-jb.png'),url:'shifting'},
    ],
    shiftingCard:[
        {name:'我的交班',img:require('../../images/mobile/index/shifting/img-myjb.png'),url_name:'put_shifting'},
        {name:'我的接班',img:require('../../images/mobile/index/shifting/img-jieban.png'),url_name:'gain_shifting'},
    ],
    engineeringCard: {
        water_level: {
            name: '水位',
            img: require('../../images/mobile/engineering/detail/icon-shuiwei.png'),
            data: [
                {name: 'PLC34563-S-1', value: 210, unit: 'cm'},
                {name: 'PLC34563-S-2', value: 189, unit: 'cm'},
                {name: 'PLC34563-S-3', value: 190, unit: 'cm'},
            ]
        },
        hydraulic_pressure: {
            name: '水压',
            img: require('../../images/mobile/engineering/detail/icon-shuiya.png'),
            data: [
                {name: 'PLC34563-Y-1', value: 0.7, unit: 'Mpa'},
                {name: 'PLC34563-Y-2', value: 0.46, unit: 'Mpa'},
                {name: 'PLC34563-Y-3', value: 0.6, unit: 'Mpa'},
            ]
        },
        // water_quality: {
        //     name: '水质',
        //     img: require('../../images/mobile/engineering/detail/icon-shuizhi.png'),
        //     status:'合格',
        //     data: [
        //         {name: 'PH值（6.5~8.5）', value: 7.5, unit: ''},
        //         {name: '水温( ℃ )', value: 13.7, unit: ''},
        //         {name: '电导率（0~1000 mg/L）', value: 679, unit: ''},
        //         {name: '浊度（0~1）', value: 1.2, unit: ''},
        //         {name: '余氯（0.05 mg/L以上）', value: 0.06, unit: ''},
        //     ]
        // },
        flow: {
            name: '流量',
            img: require('../../images/mobile/engineering/detail/icon-liuliang.png'),
            data: [
                {name: 'PLC34563-L-1', value: 0.6, unit: 'm³'},
                {name: 'PLC34563-L-2', value: 8265, unit: 'm³'},
                {name: 'PLC34563-L-3', value: 0.2, unit: 'm³'},
                {name: 'PLC34563-L-4', value: 826, unit: 'm³'},
                {name: 'PLC34563-L-5', value: 0.2, unit: 'm³'},
                {name: 'PLC34563-L-6', value: 625, unit: 'm³'},
            ]
        },
        electric_quantity: {
            name: '电量',
            img: require('../../images/mobile/engineering/detail/icon-dianliang.png'),
            data: [
                {name: 'PLC34562', value: 1671.75, unit: 'mA', equip: '25'},
                {name: 'PLC34563', value: 4671.75, unit: 'mA', equip: '29'},
            ]
        },
    },
    engineeringControl:[
        {id:1,name:'加压水泵_0301',type:'水泵',run_time:'2019-04-02',run_electric:'25',status:false},
        {id:2,name:'阀门_0400',type:'阀门',run_time:'2019-05-29',run_electric:'26',status:false},
        {id:3,name:'加压水泵_0302',type:'水泵',run_time:'2019-06-12',run_electric:'15',status:true},
        {id:4,name:'阀门_0401',type:'阀门',run_time:'2019-06-30',run_electric:'23',status:false},
    ],
    argumentsArr:['PH值','电导率','余氯','浊度','温度'],
    patrolStatus:['全部','未开始','进行中','待审核','已完成'],
    repairStatus:['全部','已结单','待审核','未开始','维修中','派单中'],
    patrolTaskType:['全部','日常巡检','临时巡检'],
    warnType:['全部','移动侦测报警','区域入侵'],
    // messageType:['全部消息','工单消息','巡检消息','留言消息','报装消息','报修消息'],
    messageType:['全部消息','工单消息','巡检消息'],
    shiftingContent: [
        '电流电压不正常',
        '配电柜，启动柜不正常',
        '进出水压力，液压阀不正常',
        '水泵轴承,电机漏油',
        '工具、用具、仪表缺损',
        '环境卫生，设备，设施脏乱',
    ],
    taskContent: [
        '工程主体及设备是否有压、埋、占情况',
        '闸、阀是否有漏水情况',
        '水泵电机温度是否正常',
        '泵体是否有震动',
        '泵体是否有渗漏',
    ],
    taskResultTitle: ['本次巡检结果是否正常',],
    taskResult: ['正常', '异常'],
    auditResult: ['通过', '不通过'],
    shiftingResult: ['同意', '不同意'],
    //假数据
    warnList:[
        {
            id:'0',
            name:'丰泽美居大门口',
            type:'移动侦测报警',
            create_time:'2019-07-12 05:27:13',
            img:require('../../../assets/images/mobile/engineering/detail/公道牙中心水厂.png'),
            rtmp:'rtmp://rtmp01open.ys7.com/openlive/48b3020869db459ba182a808cd8069b7',
            http:'http://hls01open.ys7.com/openlive/48b3020869db459ba182a808cd8069b7.m3u8',
        },{
            id:'1',
            name:'丰泽美居东区东南角',
            type:'区域入侵',
            create_time:'2019-07-12 05:27:13',
            img:require('../../../assets/images/mobile/engineering/detail/公道牙中心水厂.png'),
            rtmp:'rtmp://rtmp01open.ys7.com/openlive/175861ff17f44ceda5c798b5ea1944fb',
            http:'http://hls01open.ys7.com/openlive/175861ff17f44ceda5c798b5ea1944fb.m3u8',
        },{
            id:'2',
            name:'丰泽美居西区西北角',
            type:'移动侦测报警',
            create_time:'2019-07-12 05:27:13',
            img:require('../../../assets/images/mobile/engineering/detail/公道牙中心水厂.png'),
            rtmp:'rtmp://rtmp01open.ys7.com/openlive/1714b42688234eaea1d7a2b72b31b91e',
            http:'http://hls01open.ys7.com/openlive/1714b42688234eaea1d7a2b72b31b91e.m3u8',
        },{
            id:'3',
            name:'丰泽美居施工现场入口',
            type:'区域入侵',
            create_time:'2019-07-12 05:27:13',
            img:require('../../../assets/images/mobile/engineering/detail/公道牙中心水厂.png'),
            rtmp:'rtmp://rtmp01open.ys7.com/openlive/643ef3fc78e640198ebe50f67426f83d',
            http:'http://hls01open.ys7.com/openlive/643ef3fc78e640198ebe50f67426f83d.m3u8',
        },{
            id:'4',
            name:'丰泽美居西区东北角',
            type:'区域入侵',
            create_time:'2019-07-12 05:27:13',
            img:require('../../../assets/images/mobile/engineering/detail/公道牙中心水厂.png'),
            rtmp:'rtmp://rtmp01open.ys7.com/openlive/fa9ed9c02a0b4157a1cc3896d04d3f65',
            http:'http://hls01open.ys7.com/openlive/fa9ed9c02a0b4157a1cc3896d04d3f65.m3u8',
        },{
            id:'5',
            name:'丰泽美居西区西北角',
            type:'移动侦测报警',
            create_time:'2019-07-12 05:27:13',
            img:require('../../../assets/images/mobile/engineering/detail/公道牙中心水厂.png'),
            rtmp:'rtmp://rtmp01open.ys7.com/openlive/0398d86b8f804b24bb3c6ef372cfe957',
            http:'http://hls01open.ys7.com/openlive/0398d86b8f804b24bb3c6ef372cfe957.m3u8',
        },{
            id:'6',
            name:'丰泽美居西区东南角',
            type:'区域入侵',
            create_time:'2019-07-12 05:27:13',
            img:require('../../../assets/images/mobile/engineering/detail/公道牙中心水厂.png'),
            rtmp:'rtmp://rtmp01open.ys7.com/openlive/122ead1dc16f4c83ad36c818d44f3807',
            http:'http://hls01open.ys7.com/openlive/122ead1dc16f4c83ad36c818d44f3807.m3u8',
        },{
            id:'7',
            name:'丰泽美居大门口',
            type:'移动侦测报警',
            create_time:'2019-07-12 05:27:13',
            img:require('../../../assets/images/mobile/engineering/detail/公道牙中心水厂.png'),
            rtmp:'rtmp://rtmp01open.ys7.com/openlive/bf606e8846754fd5a52d1656ff8ab944',
            http:'http://hls01open.ys7.com/openlive/bf606e8846754fd5a52d1656ff8ab944.m3u8',
        }],
    messageList:[
        //0:工单消息 1:巡检消息 2:留言消息 3:报装消息 4:报修消息
        {id:1,name:'公道牙中心水厂泵房1#监控点',type:'0',create_date:'2019-05-12T14:20:19',content:'公道牙中心水厂泵房1#监控点公道牙中心水厂泵房1#监控点'},
        {id:2,name:'阿其克中心水厂泵房2#监控点',type:'1',create_date:'2019-05-20T14:20:19',content:'阿其克中心水厂泵房2#监控点阿其克中心水厂泵房2#监控点'},
        {id:3,name:'艾西曼中心水厂泵房1#监控点',type:'2',create_date:'2019-06-02T14:20:19',content:'艾西曼中心水厂泵房1#监控点艾西曼中心水厂泵房1#监控点'},
        {id:4,name:'铁力木中心水厂泵房3#监控点',type:'3',create_date:'2019-06-24T14:20:19',content:'铁力木中心水厂泵房3#监控点铁力木中心水厂泵房3#监控点'},
        {id:5,name:'8村泵站1#监控点',type:'4',create_date:'2019-07-19T14:20:19',content:'8村泵站1#监控点8村泵站1#监控点8村泵站1#监控点8村泵站1#监控点'},
        {id:6,name:'13村泵站2#监控点',type:'0',create_date:'2019-07-20T14:20:19',content:'13村泵站2#监控点13村泵站2#监控点13村泵站2#监控点13村泵站2#监控点'},
    ],
}