<template>
    <div>
        我是我的页面噢
    </div>
</template>

<script>
import {useStore} from 'vuex'
export default {
    setup () {
        const store = useStore()
        store.commit('setActiveMenu', 'mine')
    }
}
</script>

<style lang="scss" scoped>

</style>