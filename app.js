const app = Vue.createApp({
    data(){
        return {
            userName: 'Amal Mohan',
            age: 29,
            randomImg : 'https://picsum.photos/200/300'
        }
    },
    methods : {
        ageIn5 () {
            return this.age + 5
        },
        favRandomNum() {
            return Math.random()
        }
    }

})

app.mount('#assignment')