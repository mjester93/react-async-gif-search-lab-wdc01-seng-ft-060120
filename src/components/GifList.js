import React from 'react'

class GifList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.gifs.map((gif, index) => {return <li key={index}><img src={gif} /></li>})}
            </ul>
        )
    }
}

export default GifList