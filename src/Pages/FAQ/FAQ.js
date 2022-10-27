import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
    return (
        <div>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Question#1: What is Node? How does Node work?</Accordion.Header>
                    <Accordion.Body>
                        Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Question#2: Why is node called node?</Accordion.Header>
                    <Accordion.Body>
                        The official name is actually Node . Originally it was designed for use as a web application, but the author realized it could be used for more general purposes and renamed it to node.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>Question#3: What is use of DOM in React?</Accordion.Header>
                    <Accordion.Body>
                        The DOM (Document Object Model) represents the web page as a tree structure. Any piece of HTML that we write is added as a node, to this tree. With JavaScript, we can access any of these nodes (HTML elements) and update their styles, attributes, and so on.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>Question#4: What is JSX and how it works?</Accordion.Header>
                    <Accordion.Body>
                        It is an JavaScript extension where we can embed valid JavaScript objects into HTML elements. JSX makes Code easier to read and understand. Usually, HTML and JavaScript is written separately but react creates components that contain both HTML and JavaScript.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default FAQ;
