import { App, createVNode, VNode, render } from 'vue'


import Loading from './index.vue'

export default {
    install(app: App){
        const vNode: VNode = createVNode(Loading)
        render(vNode, document.body)
        // console.log(vNode.component?.exposed)
        app.config.globalProperties.$loading = {
            show: vNode.component?.exposed?.show,
            hide: vNode.component?.exposed?.hide
        }
        // app.config.globalProperties.$loading.show()
    }
}