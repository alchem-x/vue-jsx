import { defineComponent, ref } from 'vue'
import Box from './Box.jsx'
import Counter from './Counter.jsx'

const innerHtml = 'Set <span style="color: orange">Inner HTML</span>'

export default defineComponent({
    render() {
        return (
            <main class="markdown-body" style="margin: 0 auto;width: 800px;">
                <h1>vue-jsx-vue3</h1>
                <h2>Slots</h2>
                <Box>
                    {{
                        special: () => 'Special!',
                        default: (n) => `Inbox is ${n}`
                    }}
                </Box>
                <h2>Inner HTML</h2>
                <div v-html={innerHtml}></div>
                <h2>Events</h2>
                <div><Counter style="font-size: 1rem;"/></div>
            </main>
        )
    },
})
