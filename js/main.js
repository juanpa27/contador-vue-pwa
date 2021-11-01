const app = Vue.createApp({
    data() { 
        return{
            title:"CONTADOR APP - VUE",
            count:0,

        }
    }, 
    methods:{
        modCount(instruction = "add",limit = 1){
            if(instruction ==="dis") this.count-=limit
            else this.count+=limit 
        }

    }
})