import React from 'react';
const Image = (props) => {
    const { src } = props;
    return (
        <img src={src} />
    );
};

export default Image;