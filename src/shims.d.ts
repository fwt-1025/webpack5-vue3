declare module '*.vue' {
    import { ComponentOptions } from 'vue'
    const componentOptions: ComponentOptions
    export default componentOptions
}

declare module '*.ts' {
    const content: any
    export default content
}

// declare module 'axios'

// declare module '@/request/axios'

declare module 'vue-router'

declare module 'vuex'