var if_else_condition = new Vue({
    el:'#app',
    data:{
        name: true,
        age: true
    },
    methods:{
        ShowName(){
            this.name = !this.name
        },
        ShowAge(){
            this.age = !this.age
        }
    }
})