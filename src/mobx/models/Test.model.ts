import { types } from 'mobx-state-tree'


export const TestModel = types.model({
    someFlag: false
})
    .views((self) => ({
        get getThisFlag() {
            return self.someFlag
        }
    }))