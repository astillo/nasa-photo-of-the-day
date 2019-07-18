import React from 'react';
import { Item } from 'semantic-ui-react';

const Content = (props) => {
    const { Content, Title, Author, DateC, Img } = props;
    return (
        <Item.Group>
            <Item>
                <Item.Content>
                    <Item.Header>
                        {Title}
                    </Item.Header>
                    <Item.Meta>{Author}</Item.Meta>
                    <Item.Meta>{DateC}</Item.Meta>
                    <Item.Image size="medium" src={Img} />

                    <Item.Description>
                        {Content}
                    </Item.Description>
                </Item.Content>
            </Item>
        </Item.Group>
        //<p>{Content}</p>
    );
};

export default Content;