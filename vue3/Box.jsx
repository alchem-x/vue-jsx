import { defineComponent } from 'vue'

export default defineComponent({


    render() {
        console.log(this.$slots,this.$scopedSlots)
        return (
            <div>
                Special: {this.$slots.special?.() || 'No Special'}
                <br/>
                Default: {this.$slots.default?.(Date.now()) || ''}
            </div>
        )
    },
})
