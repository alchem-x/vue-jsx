import { defineComponent, ref } from 'vue'
import Box from './Box.jsx'
import Counter from './Counter.jsx'
import NoFragments from './NoFragments.jsx'

const innerHtml = 'Set <span style="color: orange">Inner HTML</span>'

export default defineComponent({
    render() {
        return (
            <main class="markdown-body" style="margin: 0 auto;width: 800px;">
                <h1>vue-jsx-vue2</h1>
                <h2>Slots</h2>
                <Box scopedSlots={{
                    special: () => 'Special!',
                    default: (n) => `Inbox is ${n}`
                }}/>
                <h2>Inner HTML</h2>
                <div domPropsInnerHTML={innerHtml}></div>
                <h2>Events</h2>
                <div><Counter style="font-size: 1rem;"/></div>
                <h2>No Fragments</h2>
                <NoFragments/>
            </main>
        )
    },
})
