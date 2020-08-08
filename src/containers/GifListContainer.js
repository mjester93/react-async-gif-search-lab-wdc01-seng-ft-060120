import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends React.Component {

    state = {
        gifs: ['https://media0.giphy.com/media/l0HlNQ03J5JxX6lva/giphy.gif?cid=e1bb72ff5b9fa2866168584b51f13892']
    }

    fetchGifs = (query) => {
        const fixedQuery = query.toLowerCase().replace(/ /,'_');
        const url = `https://api.giphy.com/v1/gifs/search?q=${fixedQuery}&api_key=dc6zaTOxFJmzC&rating=g`
        
        fetch(url)
        .then(response => response.json())
        .then(gifs => this.setState({gifs: gifs.data.slice(0, 3).map(gif => {return gif.images.original.url})}))
    }

    render() {
        return (
            <div>
                <GifSearch fetchGifs={this.fetchGifs} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}

export default GifListContainer