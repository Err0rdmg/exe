import React from 'react';
import { Cube } from 'styled-loaders-react';

const Loader = ({ loading }) => {
    return (
        <div>
            {loading ?
                < Cube color="red" size="60px" duration="5s" />
                : ''}
        </div>
    )
}


export default Loader;