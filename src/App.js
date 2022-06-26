import React from "react"
import { Cards, Charts, CountryPickers } from './components'
import styles from './App.module.css'
import { fetchData } from './components/api'

class App extends React.Component {
    state = {
        data: {},
    }

    async componentDidMount() {
        const fetchedData = await fetchData()
        
        this.setState({data: fetchedData})
    }


    render() {
        const { data } = this.state

        return (
            <div className={ styles.container }>
                <Cards data={ this.state.data } />
                <Charts />
                <CountryPickers />
            </div>
        )
    }
}

export default App