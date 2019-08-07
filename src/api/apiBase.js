export default {
    /**
     *   参数： pageNum:页码数
     pageSize:每页显示条数
     cond:模糊查询字段，可为编码、名称
     */
    archivesPanoTypeList:'/a_api/archives/pano_type/list/',  //全景图类型
    /**
     *   参数：name:名称
     方法：post
     示例：data:{"name":"测试全景图新增"}
     */
    archivesPanoTypeEdit:'/a_api/archives/pano_type/edit/',
    /**
     *   data:{"id":15}
     */
    archivesPanoTypeDel:'/a_api/archives/pano_type/del/',
    /**
     *   pageNum:页码数
     pageSize:每页显示条数
     cond:模糊查询字段，可为编码、名称
     */
    archivesPersonTypeList:'/a_api/archives/person_type/list/',  //人员类型
    /**
     *"name":"测试修改"}
     */
    archivesPersonTypeEdit:'/a_api/archives/person_type/edit/',
    /**
     *
     */
    archivesPersonTypeDel:'/a_api/archives/person_type/del/',

    /**
     *  pageNum:页码数
     pageSize:每页显示条数
     cond:模糊查询字段，可为编码、名称、
     */
    archivesProjectTypeList:'/a_api/archives/project_type/list/',
    /**
     *
     */
    archivesProjectTypeEdit:'/a_api/archives/project_type/edit/',

    /**
     *
     */
    archivesProjectTypeDel:'/a_api/archives/project_type/del/',

    /**
     *
     */
    archivesProjectTypeListSub:'/a_api/archives/person_type/list_sub/',

    /**
     *
     */
    archivesConfDiagramList:'/a_api/archives/conf_diagram/list/', //组态图列表
    /**
     *
     */
    archivesConfDiagramEdit:'/a_api/archives/conf_diagram/edit/',

    /**
     *
     */
    archivesConfDiagramDel:'/a_api/archives/conf_diagram/del/',

    /**
     *
     */
    archivesFileUpload:'/a_api/file/upload/',
    archivesFileDelete:'/a_api/file/delete/',//?ids=[]
    /**
     *
     */
    archivesProjectInfoList:'/a_api/archives/project_info/list/',   //工程基本信息


    /**
     *
     */
    archivesProjectTypeListAll:'/a_api/archives/project_type/list_all/',
    archivesProjectBasicList:'/a_api/archives/project_basic/list/',
    archivesAreaTree:'/a_api/archives/area/tree/',   //行政区划树型图
    archivesAreaTreeAsyn:'/a_api/archives/area/tree/get/',   //异步加载行政区划树型图
    archivesStatisticalUnit:'/a_api/back_manage/statistical_unit/',   //根据用户查询

    archivesAreaTreeEdit:'/a_api/archives/area/tree/edit/',
    archivesAreaTreeDel:'/a_api/archives/area/tree/del/',

    archivesDeviceTypeList:'/a_api/archives/device_type/list/',
    archivesDeviceTypeEdit:'/a_api/archives/device_type/edit/',
    archivesDeviceTypeDel:'/a_api/archives/device_type/del/',

    archivesSchEquipment:'/a_api/conf_diagram/equip_project/',  //设备信息列表
    archivesSchEquipList:'/a_api/archives/sch_equipment/',
    archivesAuEquipment:'/a_api/archives/au_equipment/',     //设备信息新增/修改
    archivesDelEquipment:'/a_api/archives/del_equipment/',       //设备信息删除
    archivesProjectBasicEdit:'/a_api/archives/project_basic/edit/',
    archivesProjectBasicDel:'/a_api/archives/project_basic/del/',

    archivesProjectPersonList:'/a_api/archives/project_person/list/',       //根据项目id获取项目的所属全部人员
    archivesProjectPersonCreate:'/a_api/archives/project_person/create/',   //为项目增加选择人员
    archivesProjectPersonDel:'/a_api/archives/project_person/del/',         //从项目中移除人员

    archivesProjectBunpList:'/a_api/archives/project_bunp/list/',      //工程业务信息获取
    archivesProjectBunpEdit:'/a_api/archives/project_bunp/edit/',
    archivesProjectBunpDel:'/a_api/archives/project_bunp/del/',

    archivesProjectImageList:'/a_api/archives/project_image/list/',   //根据工程id获取所有图片
    archivesProjectImageCreate:'/a_api/archives/project_image/create/',
    archivesProjectImageDel :'/a_api/archives/project_image/del/',

    archivesProjectPanoList:'/a_api/archives/project_pano/list/',   //获取工程下的全景图
    archivesProjectPanoEdit:'/a_api/archives/project_pano/edit/',   //新增/修改
    archivesProjectPanoDel:'/a_api/archives/project_pano/del/',     //删除

    personalList:'/a_api/account/personal/list/',           //查询列表
    personalEdit:'/a_api/account/personal/edit/',           //修改/
    personCreate:'/a_api/account/personal/create/',         //添加
    personDel:'/a_api/account/personal/del/',               //删除

    equipManage:'/a_api/conf_diagram/equip_manage/',        //组态图设备配置
    equipDelete:'/a_api/conf_diagram/equip_delete/',
    equipSearch:'/a_api/conf_diagram/equip_search/',
    equipChannel:'/a_api/conf_diagram/get_equip_channel/',
    getEquipChannel:'/a_api/conf_diagram/get_equip_channel/', //获取设备下面的通道
    /*一张图start*/
    getMenuInfo:'/a_api/back_manage/menu_info/',//获取左侧菜单
    projectDetailList:'/a_api/archives/project_detail/list',//获取工程
    projectCountList:'/a_api/archives/project_count/list',//获取带标注工程
    videoInfo:'/a_api/one_diagram/video_info/',//获取视频监控点
    alarmInfo:'/a_api/one_diagram/alarm_info/',//获取预警列表
    stationInfo:'/a_api/one_diagram/station_info/',//获取弹窗数据
    areaTree:'/a_api/archives/area/tree/',//获取区域树
    fuzzySearch:'/a_api/one_diagram/fuzzy_sch',//模糊搜索请求
    /*一张图end*/
    /*工程管理*/
    archivesProInfo:'/a_api/archives/pro_info/',
    archivesProDetail:'/a_api/archives/pro_detail/',
    confDiagramEquipProject:'a_api/conf_diagram/equip_project/',

    /*运维知识库start*/
    getPlanList:'/a_api/back_manage/plan_list/',    //方案列表
    planEdit:'/a_api/back_manage/plan_edit/',    //新增、修改方案
    planSingle:'/a_api/back_manage/plan_single/',    //方案修改反查
    planDel:'/a_api/back_manage/plan_del/',    //方案删除
    /*运维知识库end*/
    /*设备管理start*/
    equipmentDeviceType:'/a_api/lot_api/device_type/',    //网关类型
    equipmentDeviceInfo:'/a_api/lot_api/device_info/',    //网关配置
    equipmentDeviceEdit:'/a_api/lot_api/edit_device/',    //网关配置修改
    equipmentDeviceBeat:'/a_api/lot_api/get_device_beat/',    //智能设备管控
    cmtCommit:'a_api/lot_api/cmt_commit/',    //下发指令
    serverCall:'a_api/lot_api/server_call/',    //服务器召测
    serverCtl:'a_api/lot_api/server_ctl/',    //服务器召测修改
    alarmCall:'a_api/lot_api/alarm_call/',    //告警召测
    alarmCtl:'a_api/lot_api/alarm_ctl/',    //告警召测修改
    waterMeterCall:'a_api/lot_api/water_meter_call/',    //T188水表地址
    waterMeterSetAddr:'a_api/lot_api/water_meter_set_addr/',    //T188水表地址设置
    waterMeterCtlCall:'a_api/lot_api/water_meter_ctl_call/',    //联户水表开关状态招测
    waterMeterStatusSet:'a_api/lot_api/water_meter_status_set/',    //联户水表所有开关状态修改
    highLowCall:'a_api/lot_api/high_low_ctl_call/',    //高低位水池召测
    highLowCtl:'a_api/lot_api/high_low_ctl/',    //高低位水池参数设置命令
    channelCall:'a_api/lot_api/channel_call/',    //通道指令下发召测
    channelCtl:'a_api/lot_api/channel_ctl/',    //通道指令下发修改
    openPumpCloseValve:'a_api/lot_api/open_pump_close_valve/',    //开泵关阀
    closePumpOpenValve:'a_api/lot_api/close_pump_open_valve/',    //关泵开阀
    waterMeterOpenClose:'a_api/lot_api/water_meter_open_close/',    //单水表开关状态修改
    realDataEquip:'a_api/conf_diagram/real_data_equip/',    //查看实时数据
    /*设备管理end*/
    /*用水户管理start*/
    waterUserList:'/a_api/water_user/list/',    //用水户列表
    priceType:'/a_api/water_user/water_type/',    //用水类型获取
    getunitList:'/a_api/water_user/unit_list/',    //获取工程列表
    getwaterMeterList:'/a_api/water_user/water_meter_list/',    //获取水表号列表
    waterUserAdd:'/a_api/water_user/edit/',    //用水户新增、修改
    waterUserDelete:'/a_api/water_user/del/',    //用水户删除
    waterUserExport:'/a_api/water_user/export/',    //用水户导出
    waterUserDetail:'/a_api/water_user/get/',    //用水户档案左侧详情
    waterUserreChargeRecord:'/a_api/water_user/recharge_record/',    //用水户档案充值记录
    waterUserreBillRecord:'/a_api/water_user/bill_record/',    //用水户档案用水账单
    waterUserreAnalyzeRecord:'/a_api/water_user/analyze_record/',    //用水户档案用水分析
    waterUserreEditRecord:'/a_api/water_user/edit_record/',    //用水户档案变更记录
    waterUserRecordList:'/a_api/water_user/record_list/',    //用水户档案发票记录
    /*用水户管理end*/

    /*水费管理start*/
    compensateList:'/a_api/quantity/compensate_list/',    //水费补偿列表
    compensateEdit:'/a_api/quantity/compensate_edit/',    //水费补偿新增、修改
    getMeter:'/a_api/quantity/meter_get/',  //根据水表号获取用水户和水费
    compensateDelete:'/a_api/quantity/compensate_del/',    //水费补偿删除
    networksList:'/a_api/quantity/gain_list/',    //网点管理列表
    networksEdit:'/a_api/quantity/gain_edit/',    //网点管理新增、修改
    networksDelete:'/a_api/quantity/gain_del/',    //网点管理删除
    invoicesList:'/a_api/water_user/invoices_list/',    //发票管理列表
    billList:'/a_api/quantity/bill_list/',    //账单管理列表
    /*水费管理end*/

    /*监控管理start*/
    qualityAutoList:'/a_api/archives/quality/auto_list/',    //水质监控/在线监测列表
    unitList:'/a_api/archives/unit/list/',    //水质监控/监测统计获取工程
    qualityStatistics:'/a_api/archives/quality/statistics/',    //水质监控/监测统计
    vidioList:'/a_api/archives/video_alarm/list/',    //视频监控列表
    /*监控管理end*/

    /*服务管理start*/
    getMsgList:'/a_api/server/msg_list/',    //留言管理列表
    msgReply:'/a_api/server/msg_reply/',    //留言管理回复
    noticeList:'/a_api/server/notice/list/',    //停水管理列表
    noticeEdit:'/a_api/server/notice/edit/',    //停水管理新增、修改
    noticeGet:'/a_api/server/notice/get/',    //停水管理修改内容获取
    noticeDel:'/a_api/server/notice/del/',    //停水管理删除
    getInstallList:'/a_api/server/install/list/',    //报装管理列表
    /*服务管理end*/

    /*系统消息start*/
    getNewsList:'/a_api/server/news/list/',    //系统消息列表
    newsDel:'/a_api/server/news/del/',    //系统消息删除
    newsAlter:'/a_api/server/news/alter/',    //系统消息变为已读
    /*系统消息end*/

    maintainTaskAou:'/a_api/maintain/task_aou/',   //修改或创建任务
    maintainTaskSch:'/a_api/maintain/task_sch/',   //任务列表
    maintainType:'/a_api/maintain/maintain_type/',
    maintainProjectType:'/a_api/maintain/project_type/',   //工程类型
    maintainProjectInfo:'/a_api/maintain/project_info/',   //工程信息
    maintainPeopleType:'/a_api/maintain/people_type/',     //人员类型
    maintainPeopleinfo:'a_api/maintain/people_info/',      //人员信息
    maintainTaskDel:'/a_api/maintain/task_del/',           //任务删除

    maintainThreshManage:'/a_api/maintain/thresh_manage/',  //阈值配置
    maintainDeviceConfig:'/a_api/maintain/device_config/',  //阈值配置查询，
    maintainThreshDel:'/a_api/maintain/thresh_del/',        //删除阈值记录
    maintainThreshSearch:'/a_api/maintain/thresh_sch/',  //阈值报警信息查询
    maintainDeviceAlarm:'a_api/maintain/device_alarm/',  //设备报警信息列表
    maintainSchMaintain:'a_api/maintain/sch_maintain/', //查询维护记录
    maintainAddMaintain:'a_api/maintain/create_maintain/', //新增维护记录
    maintainDelMaintain:'a_api/maintain/del_maintain/', //删除维护记录

    archivesProjectVideoEdit:'/a_api/archives/project_video/edit',
    archivesProjectVideoList:'/a_api/archives/project_video/list/',
    archivesProjectVideoDel:'/a_api/archives/project_video/del/',


    /******************  组态图接口 ********************/
    confDiagramRealData:'/a_api/conf_diagram/real_data/',   //实时数据
    confDiagramRealEnergySignal:'/a_api/conf_diagram/real_energy_signal/',
    confDiagramGetEquipInfo:'/a_api/conf_diagram/get_equip_info/',   //设备信息
    confDiagramGetEquipHeart:'/a_api/conf_diagram/get_equip_heart/', //信号强度
    confDiagramRealDataMany:'/a_api/conf_diagram/real_data_many/',
    confDiagramRealDataAlarm:'/a_api/conf_diagram/real_data_alarm/',
    confDiagramAlarm:'/a_api/conf_diagram/alarm_list/',
    confDiagramSwitch:'/a_api/conf_diagram/switch/',
    /**
     * 登录接口
     */
    login:'/a_api/login/',                //登录
    logout:'/a_api/logout/',               //登出
    permissionInfo:'/a_api/account/permission/info/',   //权限控制

    /**
     * 用户管理
     */
    userList:'/a_api/account/user/list/',   //列表
    accountGroupUserList:'/a_api/account/group/user_list/',
    editUser:'/a_api/account/user/edit/',   //增 改 ?data={'username':'guowei', 'nickname':'郭伟', 'phone':'15105216680', 'sex':'男',, 'password':'guowei1110' 'email':'32928527@qq.com'}  # 修改时不修改密码
    delUser:'/a_api/account/user/del/',     //删 ?ids=[1,2]
    setPassword:'/a_api/account/user/password/set/',  //修改密码 ?user_id=1&new_password=guowei1110&new_password_confirm=guowei1110
    editUserInfo:'/a_api/account/edit_phone/',//?user_id=86&phone=17602887777&password=12345&password_confirm=12345&nickname=&email=&sex=


    /**
     * 群组管理
     */
    groupList:'/a_api/account/group/list/',   //列表   type:'只读/读写'
    editGroup:'/a_api/account/group/edit/',   //增 改 ?data={base_data:{'id':1, 'name':'名称', 'type':'读写', 'user': ['1', '2'], 'menu': ['1', '2']}
    delGroup:'/a_api/account/group/del/',     //删 ?ids=[1,2]

    /**
     * 菜单管理
     */
    menuList:'/a_api/account/menu/list/',   //列表
    menuTree:'/a_api/account/menu/tree/',   //树
    projectCount:'/a_api/archives/project_detail/list/',   //一张图经纬度获取
    /**
     * type: VIEW：视图 QUERY：检索 EDIT：修改 DELETE：删除
     */
    editMenu:'/a_api/account/menu/edit/',   //增 改 ?data={'name':'名称', 'icon':'图标', 'type':'VIEW', 'url':'/device/', 'write_log':'1', 'parent_id':''}  #parent_id在有父级时传入
    delMenu:'/a_api/account/menu/del/',     //删 ?ids=[1,2]

    /**
     * 行政区划
     */
    adTree:'/a_api/archive/area/tree/',   //树?id=1
    editAd:'/a_api/archive/area/tree/edit/',   //增 改 ?data={"id":282,"name":"甘肃省","code":"620000000000","level":2,"abbreviation":"甘", 'parent_id':''}
    delAd:'/a_api/archive/area/tree/del/',     //删 ?ids=[1,2]

    /**
     * 获取所有表
     */
    DBTableGetAll:'/a_api/database/table/get_all/',

    /**
     * 获取当前群组下表列表
     */
    accountTableList:'/a_api/account/table/list/',
    /**
     * 获取该群组下，表空间下的表列表
     */
    accountGroupGetExist:'/a_api/account/group/get_exist/',
    accountTableEdit:'/a_api/account/table/edit/',
    accountGroupUser:'/a_api/account/group/user/',   //获取该群组下的人员列表
    shiftsPeople:'/a_api/back_manage/shifts_people/',   //获取当前登录人所在组织机构下的人员列表
    accountDetail:'/a_api/account/detail/',//我的信息
    /**
     * 维修管理 记录单
     */
    maintainRepairList:'/a_api/maintain/repair_list/',
    /**
     * 维修管理 维修工单 列表
     */
    maintainOrderList :'/a_api/maintain/order_list/',
    /**
     * 新增维修记录单
     */
    maintainRepairAdd:'/a_api/maintain/repair_add/',
    maintainPollingCheck:'/a_api/maintain/polling_check/',
    maintainRepairJudge:'/a_api/maintain/repair_judge/',
    maintainRepairStatusEdit:'/a_api/maintain/repair_status_edit/',
    maintainRepairDel:'/a_api/maintain/repair_del/',
    maintainRepairStart:'/a_api/maintain/repair_start/',//修改维修状态
    maintainRepairCommit:'/a_api/maintain/repair_commit/',//修改维修前后
    maintainRepairCheck:'/a_api/maintain/repair_check/',//修改维修是否解决
    maintainRepairFlow:'/a_api/maintain/repair_get/',//修改获取维修流程

    maintainRepairEdit:'/a_api/maintain/repair_edit/',
    /**
     * 巡检管理 记录单
     */
    maintainPollingList:'/a_api/maintain/polling_list/',
    maintainPollingRow:'/a_api/maintain/polling_get/',//获取单个巡检记录
    maintainPollingTrack:'/a_api/maintain/polling_start/',//轨迹提交
    maintainPollingTask:'/a_api/maintain/polling_add/',//提交报告
    maintainPollingAudit:'/a_api/maintain/polling_check/',//提交审核

    /**
     * 交接班管理
     */
    backManageShiftsEdit:'/a_api/back_manage/shifts_edit/',
    backManageShiftsList :'/a_api/back_manage/shifts_list/',
    backManageShiftsDel:'/a_api/back_manage/shifts_del/',
    /**
     * 发票管理
     */
    systemInvoiceEdit:'/a_api/admin_manage/system/invoice_edit/',   //开票
    systemInvoiceList:'/a_api/admin_manage/system/invoice_list/',

    /**
     * 查询工程下面的设备
     */
    equipAnalysisList:'/a_api/back_manage/equip_analysis_list/',   //查询工程下绑定的设备和配的通道
    dataAnalysisList:'/a_api/back_manage/data_analysis_list/',     //查询通道数据
    dataAnalysisDownLoad:'/a_api/back_manage/data_analysis_download/',  //下载通道数据
    alarmAnalysisList:'/a_api/back_manage/alarm_analysis_list/',    //警情分析
    alarmAnalysisDownload:'/a_api/back_manage/alarm_analysis_download/',   //下载警情

    /**
     * 岗位管理
     */
    systemPostEdit:'/a_api/system/post_edit/',                 //岗位添加/修改
    systemPostDataList:'/a_api/system/post_dataList/',         //岗位列表
    systemPostDataDelete:'/a_api/system/post_delete/',         //岗位删除

    /**
     * 组织机构
     */
    systemOrganizationEdit:'/a_api/system/organizationstrut_edit/', //添加/修改
    systemOrganizationDelete:'/a_api/system/organizationstrut_delete/',  //删除
    systemOrganizationList:'/a_api/system/organizationstrut_datalist_root/',

    /**
     * 水质监测
     */
    archivesQualityList:'/a_api/archives/quality/list/',  //列表
    archivesQualityEdit:'/a_api/archives/quality/edit/',  //添加/修改
    archivesQualityDel:'/a_api/archives/quality/del/',    //删除

    /**
     *参数配置
     */
    deviceCrontabList:'/a_api/lot_api/device_crontab_list/',  //列表
    deviceCrontabEdit:'/a_api/lot_api/device_crontab_edit/',  //新增/编辑
    deviceCrontabDel:'/a_api/lot_api/device_crontab_del/',    //删除
    deviceFormulaList:'/a_api/lot_api/device_formula_list/',  //列表
    deviceFormulaEdit:'/a_api/lot_api/device_formula_edit/',  //新增/编辑
    deviceFormulaDel:'/a_api/lot_api/device_formula_del/',    //删除

    /**
     * 统计页
     */
    StatisticalShifts:'/a_api/back_manage/statistical_shifts/',//交接班统计
    StatisticalList:'/a_api/back_manage/statistical_list/',//统计
    StatisticalAlarmproportion:'/a_api/back_manage/statistical_alarmproportion/',//报警占比


    /**
     * 控制密码
     */
    confDialogConfirmPassword:'/a_api/conf_diagram/confirm_password/',
    lotApiPlcPumpSwitch:'/a_api/lot_api/plc_pump_switch/'  //开泵
}
/**
 * 调用规则说明  变量前缀post：提交  fetch  拉取
 * import http from './axios'
 postLoginData: async function() {
    let vm=this;
    let params = {}
    const res = await http.post(this.api.loginApi.login, params);
    if(!res){
        return
    }
    let result = res.data;
    if( res && result.code === '成功code码'){

    }else{

    }
  },
 调用函数
 postLoginData()
 */