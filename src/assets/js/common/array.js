export default {
    //数组去重   newArray：得到新的数组名    oldArray：原来没有去重的数组名   ID   根据原数组的什么主键去拿
    duplicateRemoval(newArray,oldArray,key){
        newArray = new Set();
        oldArray.forEach((item) => {
            newArray.add(item[key]);
        });
        newArray = [...newArray];
        return newArray;
    },
    duplicateRemovalFirm(newArray,oldArray,key){
        newArray = new Set();
        oldArray.forEach((item) => {
            newArray.add({id:item[key],owner_id:item.firm_info[0].firm_id});
        });
        newArray = [...newArray];
        return newArray;
    },
}