import React from 'react'
import ReactDOM from 'react-dom'
import classes from './styles.scss'

const Root: React.FC = () => {
    return <div className ={classes.Root}>
        <h1>Welcome Summoner!</h1>
        <p>Some placeholder!</p>
    </div>
}

ReactDOM.render(
    <Root />,
    document.getElementById('app'),
)