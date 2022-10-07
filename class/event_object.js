var event_object = new Vue({
    el: '#app',
    data: {
        name: 'Shahidul',
        log:{
           x:0,
           y:0
        }
    },
    methods: {
        Me(event){
           console.log(event)
        },
        over(e){
        //    alert('done')
        this.log.x = e.offsetX,
        this.log.y = e.offsetY
        }
    }
});