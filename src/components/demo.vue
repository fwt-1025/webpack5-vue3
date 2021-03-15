<template>
    <div>
        {{data.msg}}
    </div>
    <div>{{activeMenu}}</div>
    <van-button type="primary">hello world</van-button>
</template>

<script>
    import { reactive, computed } from 'vue'
    import { useStore } from 'vuex'
    import { useRoute, useRouter } from 'vue-router'
    export default {
        setup () {
            const store = useStore()
            const route = useRoute()
            const router = useRouter()
            console.log(route, router)
            const data = reactive({
                msg: '我是首页'
            })
            let activeMenu = computed(() => store.state.activeMenu)
            return {
                data,
                activeMenu
            }
        }
    }
</script>

<style scoped>
div{
    color: red;
}
</style>