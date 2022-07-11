import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'

const app = createApp(App)

type Filter = {
    format:<T> (str: T) => string
}

declare module '@vue/runtime-core'{
    export interface ComponentCustomProperties{
        $filters: Filter,
        $env: string
    }
}

app.config.globalProperties.$filters = {
    format<T>(str:T): string{
        return `真*${str}`
    }
}

app.config.globalProperties.$env = 'dev'

app.mount('#app')
