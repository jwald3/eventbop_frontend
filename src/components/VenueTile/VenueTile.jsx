import React from 'react';
import ResourceTile from '../ResourceTile/ResourceTile';

const VenueTile = ({ url, title, id }) => {
    return (
        <ResourceTile resource="venues" imageUrl={url} title={title} id={id}/>
    )
};


export default VenueTile;