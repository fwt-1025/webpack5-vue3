<template>
    <div>
        <router-view></router-view>
        <van-tabbar v-model="activeMenu" @change="handleChange">
            <van-tabbar-item name='home' icon='home-o'>首页</van-tabbar-item>
            <van-tabbar-item name='list' icon='apps-o'>分类</van-tabbar-item>
            <van-tabbar-item name='mine' icon='friends-o'>我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
    setup () {
        const store = useStore()
        const router = useRouter()
        const activeMenu = computed(() => store.state.activeMenu)
        const handleChange = (index) => {
            store.commit('setActiveMenu', index)
            router.push({
                path: `/${index}`
            })
        }
        return {
            activeMenu,
            handleChange
        }
    }
}
</script>

<style lang="sass" scoped>

</style>