import { createApp } from 'vue'
import App from './App.vue'

import { createPinia, PiniaPluginContext } from 'pinia'


type Options = {
    key?: string
}

const __piniaKey__: string = 'piniaDefault'

const setStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value))
}

const getStorage = (key: string) => {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) as string) : {}
}

const piniaPlugin = (options: Options) => {
    return (context: PiniaPluginContext) => {
        const { store } = context
        const data = getStorage(`${options?.key ?? __piniaKey__}-${store.$id}`)
        store.$subscribe(() => {
            setStorage(`${options?.key ?? __piniaKey__}-${store.$id}`, toRaw(store.$state))
        })
        return {
            ...data
        }
    }
}

const store = createPinia()

store.use(piniaPlugin({
    key: 'pinia'
}))

const app = createApp(App)

app.use(store)

app.mount('#app')
