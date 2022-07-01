import { ref } from "vue"

let v = ref<string>('')
let flag = true
let Arr = [1, 2, 3, 4, 5]
type Props = {
    title: string
}
const renderDom = (props: Props, ctx: any) => {
    return (
        <>
            <h2>Hello TSX</h2>
            <input v-model={v.value} type="text" />
            <div>{v.value}</div>
            <hr />
            <div v-show={flag}>景天</div>
            <div v-show={!flag}>雪见</div>
            <hr />
            {
                flag ? <div>景天</div> : <div>雪见</div>
            }
            <hr />
            {
                Arr.map((d) => {
                    return <div onClick={clickTap.bind(this, ctx, d)}>$--{d}</div>
                })
            }
            <hr />
            <div>{props.title}</div>
        </>
    )
}

const clickTap = (ctx: any, d: number) => {
    // console.log('我被点了', ctx);
    ctx.emit('on-click', d)
}

export default renderDom