import axios from 'axios'

const create = () => {
    let instance
    return () => {
        if (!instance) {
            instance = axios.create({
                timeout: 300000
            })
            instanceRequest(instance)
            instanceResponse(instance)
        }
        return instance
    }
}

const instanceRequest = (instance) => {
    instance.interceptors.request.use(config => {
        return config
    }, error => {
        return Promise.reject(error)
    })
}

const instanceResponse = (instance) => {
    instance.interceptors.response.use(response => {
        return response
    }, err => {
        const { status } = err.response
        switch (status) {
            case 400:
                // Message.error('参数错误！')
                break
            case 401:
                // Message.error('未授权的请求！')
                break
            case 403:
                // Message.error('服务端拒绝授权访问！')
                break
            case 404:
                // Message.error('该接口不存在！')
                break
            case 405:
                // Message.error('请求方法不正确！')
                break
            case 500:
                // Message.error('服务器错误!')
                break
            case 503:
                // Message.error('服务器停机或者已超载！')
                break
            case 504:
                // Message.error('网关超时！')
                break
        }
        return Promise.reject(err)
    })
}

const ajax = create()

export {
    ajax as default
}