import React from 'react';
const Author = (props) => {
    const { authContent } = props;
    return (
        <h4>{authContent}</h4>
    );
};

export default Author;