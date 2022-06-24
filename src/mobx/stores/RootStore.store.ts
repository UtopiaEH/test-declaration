import { Instance, onSnapshot, types } from 'mobx-state-tree'
import { TestModel } from '../models/Test.model'
import { createInjectableContext } from './StorePovider'


interface IRoot$ extends Instance<typeof RotStore> {}

export const RotStore = types.model({
    someMode: types.optional(TestModel, {})
})

export const root$ = RotStore.create()

onSnapshot(root$, (snapshot) => {
    localStorage.setItem('main$', JSON.stringify(snapshot))
})

export const { StoreProvider, useStore } = createInjectableContext<IRoot$>()
