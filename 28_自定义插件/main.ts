import { createApp } from 'vue'
import App from './App.vue'

import Loading from './components/Loading'

const app = createApp(App)

declare module '@vue/runtime-core'{
    export interface ComponentCustomProperties{
        $loading: {
            show: () => void,
            hide: () => void
        }
    }
}


app.use(Loading)

app.mount('#app')
