import React from 'react';
import { Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

const Img = (props) => {
    const { src } = props;
    return (
        <Image
            rounded
            src={src}
            size='medium'


        />
        //<img src={src} />
    );
};

export default Img;