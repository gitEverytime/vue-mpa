var state = {
    //示例状态
    oinfo: '',
    equipList:'',
    equip_info:{},
    gate:[],
    gate_string:'',
    equip_info_string:'',
    pro_type_name:'',
    channels:{},
    real_data:[],
    real_data_string:'',
    start_id:'',
    auth_token:{},
    patrolRow:{},
    task_preview:{},
    is_super:'',
    isRead:false,
    alarmVisible:false,
    searchBoxVisile:false,
    areaTreeVisile:false
};


var getters = {
    getInfo(state){
        return state.oinfo;
    },
    getEquipInfo(state){
        return state.equip_info;
    },
    getGate(state){
        return state.gate;
    },
    getGateString(state){
        return state.gate_string;
    },
    getEquipInfoString(state){
        return state.equip_info_string;
    },
    getEquipList(state){
        return state.equipList;
    },
    getProTypeName(state){
        return state.pro_type_name;
    },
    getChannels(state){
        return state.channels;
    },
    getRealData(state){
        return state.real_data;
    },
    getRealDataString(state){
        return state.real_data_string;
    },
    getStartId(state){
        return state.start_id;
    },
    getAuthToken(state){
        return state.auth_token;
    },
    getPatrolRow(state){
        return state.patrolRow;
    },
    getTaskPreview(state){
        return state.task_preview;
    },
    getIsSuper(state){
        return state.is_super;
    },
    getIsRead(state){
        return state.isRead;
    },
    getAlarmVisible(state){
        return state.alarmVisible;
    },
    getSearchBoxVisile(state){
        return state.searchBoxVisile;
    },
    getAreaTreeVisile(state){
        return state.areaTreeVisile;
    }
};

var actions = {};

var mutations = {
    setInfo(state, data) {
        state.oinfo = data;
    },
    setEquipInfo(state, data) {
        let isPush = true;
        Object.keys(state.equip_info).forEach((item) => {
           if(data[item]){
               state.equip_info[item] = data[item];
               isPush = false;
           }
        });
        if(isPush) state.equip_info[Object.keys(data)[0]] = data[Object.keys(data)[0]];
    },
    setGate(state, data) {
        let isPush = true;
        let isPushIds = true;
        if(data.gate_id){    //最外层数组元素
            state.gate.forEach((item) => {
                if(item.gate_id === data.gate_id && item.gate_addr === data.gate_addr) isPush = false;
            });
            if(isPush) state.gate.push(data);
        }

        if(data.parent_id) {
            state.gate.forEach((item) => {                //循环gate
                if(item.gate_id === data.parent_id) {     //判断当前网关id是否等于当前通道的父级id
                    item.equip_ids.forEach((child) => {     //去重
                        if(child === data.id) isPushIds = false;
                    });
                    if(isPushIds) item.equip_ids.push(data.id);
                }
            });
        }
    },
    setGateString(state, data) {
        state.gate_string = data;
    },
    setEquipInfoString(state, data) {
        state.equip_info_string = data;
    },
    setEquipList(state, data) {
        state.equipList = data;
    },
    setProTypeName(state, data) {
        state.pro_type_name = data;
    },
    setChannels(state, data) {
        state.channels[Object.keys(data)[0]] = data[Object.keys(data)[0]];
    },
    setRealData(state, data) {
        state.real_data = data;
    },
    setRealDataString(state, data) {
        state.real_data_string = data;
    },
    setStartId(state, data) {
        state.start_id = data;
    },
    setAuthToken(state, data) {
        state.auth_token = data;
    },
    setPatrolRow(state, data) {
        state.patrolRow = data;
    },
    setTaskPreview(state, data) {
        state.task_preview = data;
    },
    setIsSuper(state, data){
        state.is_super = data;
    },
    setIsRead(state, data){
        state.isRead = data;
    },
    setAlarmVisible(state, data){
        state.alarmVisible = data;
    },
    setSearchBoxVisile(state, data){
        state.searchBoxVisile = data;
    },
    setAreaTreeVisile(state, data){
        state.areaTreeVisile = data;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}