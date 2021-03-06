import React from 'react'
import { connect } from 'react-redux'
import { SPRITE_SIZE } from '../../config/constants'

import './styles.css'

function getTileSprite(type) {
    switch(type) {
        case 0:
            return 'grass'
        case 4:
            return 'bomb'
        case 1:
            return 'grass-2'
        case 5:
            return 'rock'
        case 6:
            return 'tree'
    }
}

let idIndex = 0

function getNewId(){
    // let prefix = 'tile-'
    // return prefix + (++idIndex) 
    return ++idIndex
}

function MapTile(props) {
    return <div 
    className={`tile ${getTileSprite(props.tile)}`}
    id = {`${getNewId()}`}
    style={{
        height: SPRITE_SIZE,
        width: SPRITE_SIZE,
         
    }}
    >
        {props.tile}
        </div>

}

function MapRow(props) {
    return <div className="row">
        {
            props.tiles.map( tile => <MapTile tile={tile}/>)
        }
    </div>
}

function Map(props) {
    return (
        <div
            style={{
                position: 'relative',
                top: '0px',
                left: '0px',
                width: '800px',
                height: '400px',
                backgroundColor: 'black',
                border: '4px solid white'
            }}
        >
        {
            props.tiles.map( row => <MapRow tiles={row}/>)
        }
        </div>
    )
}

function mapStateToProps(state) {
    return{
        tiles: state.map.tiles
    }
}

export default connect(mapStateToProps)(Map)