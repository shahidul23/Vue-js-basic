var keyboard_event = new Vue({
    el:'#app',
    data:{
        name:'Shahidul'
    },
    methods:{
        nameChange(e){
            // alert('done')
            // console.log(e.target.value)
            this.name = e.target.value
        }
    }
})