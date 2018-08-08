//localStorage 的数据存储与获取，应用于构建的Vue项目中
const STORAGE_KEY= "todos-vuejs";
export default{
    fetch(){
        return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
    },
    save(items){
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    },
}