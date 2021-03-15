<template>
    <div>
        我是分类页面哈
    </div>
</template>

<script>
import {useStore} from 'vuex'
export default {
    setup () {
        const store = useStore()
        store.commit('setActiveMenu', 'list')
    }
}
</script>

<style lang="scss" scoped>

</style>