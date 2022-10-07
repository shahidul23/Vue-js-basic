var method = new Vue({
    el: '#app',
    data: {
        name: 'shahidul',
        age : 23
    },
    methods: {
        learn(){
            return 'learn Vue ja'
        },
        myName(){
            return `My name is ${this.name} `
        },
        myAge(age){
            return `My age is ${this.age}/${age}`
        }

    }
});