import { observer } from 'mobx-react-lite'
import React from 'react'
import logo from './logo.svg'
import './App.css'
import { useStore } from './mobx/stores/RootStore.store'

const App = observer(() => {

    const { someMode } = useStore()

    //then I click someMode go to declaration it needs to go in Test.model.ts

    console.log('>>someMode', someMode)

    return (
        <div className='App'>
            <header className='App-header'>
                <img src={ logo } className='App-logo' alt='logo' />
                <p>
                  Test go to declaration )
                </p>
            </header>
        </div>
    )
})

export default App
