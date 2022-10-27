import React from 'react';
import { BreadcrumbItem, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeftSide = () => {
    const items = [
        "Js", 'React', 'Firebase', 'node', 'Express', 'MongoDb',
    ]



    return (
        <ListGroup>

            {
                items.map(item => <ListGroup.Item

                    to={`${item}`}
                    action
                    key={item}
                >
                    {item.toUpperCase()}
                </ListGroup.Item>)
            }
        </ListGroup>
    );
};

export default LeftSide;

