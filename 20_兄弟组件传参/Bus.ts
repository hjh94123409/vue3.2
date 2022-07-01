type BusClass = {
    emit: (arg: string) => void;
    on: (arg: string, callback: Function) => void
}

type PramsKey = string | number | symbol

type List = {
    [key: PramsKey]: Array<Function>
}

class Bus {
    list: List
    constructor() {
        this.list = {}
    }
    emit(arg: string, ...args: Array<any>){
        let eventArg: Array<Function> = this.list[arg]
        eventArg.forEach(fn => {
            fn.apply(this.emit, args)
        })
    }
    on(arg: string, callback: Function){
        let fn:Array<Function> = this.list[arg] || []
        fn.push(callback)
        this.list[arg] = fn
    }
}

export default new Bus()