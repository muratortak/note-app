import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Carousel from 'react-material-ui-carousel';
import { Card, CardMedia } from '@material-ui/core';


function Slide() {
    var items = [
        {
            name: 'slide 1',
            decsription: 'desc slie 1',
            image: 'https://cdn.pixabay.com/photo/2018/10/04/13/55/note-3723689_960_720.jpg'
        },
        {
            name: 'slide 2',
            decsription: 'desc slie 2',
            image: 'https://cdn.pixabay.com/photo/2016/08/01/21/06/set-icons-1562158_960_720.png'
        },
        {
            name: 'slide 3',
            decsription: 'desc slie 3',
            image: 'https://cdn.pixabay.com/photo/2017/07/21/23/41/note-2527458_960_720.jpg'
        }
    ]
    return (
        <Carousel>
            {
                items.map(item => {
                    return <Item item={item} key={item.name} />
                })
            }
        </Carousel>
    )
}

function Item(props) {
    return (
        <Card>
            <CardMedia style={{width: 1000, height: 500}} image={props.item.image} />
        </Card>
    )
}

export default Slide;