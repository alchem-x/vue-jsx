import { defineComponent } from 'vue'

export default defineComponent({

    render() {
        return (
            <div>
                Special: {this.$scopedSlots.special?.() || 'No Special'}
                <br/>
                Default: {this.$scopedSlots.default?.(Date.now()) || ''}
            </div>
        )
    },
})
