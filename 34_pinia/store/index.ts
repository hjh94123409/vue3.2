import { defineStore } from 'pinia'

import { Names } from './store-name'

type User = {
    name: string
    age: number
}

// let result: User = {
//     name: '飞机',
//     age: 999
// }

const Login = (): Promise<User> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: '飞机',
                age: 999
            })
        }, 2000)
    })
}

export const useTestStore = defineStore(Names.TEST, {
    state: () => {
        return {
            user: <User>{},
            name: '呵呵了'
        }
    },
    getters: {
        newName(): string {
            return `~${this.name}~_____${this.getUserAge}`
        },
        getUserAge(): number {
            return this.user.age
        }
    },
    actions: {
        async setUser() {
            const result = await Login()
            this.user = result

            this.setName('嘿嘿')
        },
        setName(name: string) {
            this.name = name
        }
    }
})

