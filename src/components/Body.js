import React from 'react'
import Row from './Row'
import requests from '../request'

function Body() {
    return (
        <div>
            <Row title="popular" fetchURL={requests.fetchPopular} />
            <Row title="trending" fetchURL={requests.fetchTrending} />
        </div>
    )
}

export default Body
