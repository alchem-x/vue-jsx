import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup() {
        const count = ref(0)
        return {
            count,
            onClick() {
                count.value++
            },
        }
    },
    render() {
        return (<button onClick={this.onClick}>Count: {this.count}</button>)
    },
})
