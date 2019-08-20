function deepClone(obj) {
    // 判断当前参数为数组还是对象，并进行定义
    let objArray = Array.isArray(obj)?[]:{};
    if (obj && typeof obj === "object"){
        for (key in obj) {
            console.log(key);
            // 循环遍历内部的参数，判断是否为自己的参数
            if (obj.hasOwnProperty(key)){
                // 如果还是对象，递归调用
                if (obj[key] && typeof obj[key] === "object"){
                    objArray[key] = deepClone(obj[key])
                } else {
                    objArray[key] = obj[key]
                }
            }
        }
    }
    return objArray
}