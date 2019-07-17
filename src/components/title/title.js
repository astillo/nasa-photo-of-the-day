import React from 'react';
const Title = (props) => {
    const { titleContent } = props;
    return (
        <h1>{titleContent}</h1>
    );
};

export default Title;