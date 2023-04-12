import React from 'react';
import ResourceTile from '../ResourceTile/ResourceTile';

const CategoryTile = ({ url, title, id }) => {

    return (
        <ResourceTile resource="categories" imageUrl={url} title={title} id={id}/>
    )
};


export default CategoryTile;