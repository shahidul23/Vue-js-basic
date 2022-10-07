var event = new Vue({
    el:'#app',
    data:{
        name : 'Shahidul islam',
        doller : 20
    },
    methods:{
        amount(taka){
            this.doller += taka
        }
    }
});