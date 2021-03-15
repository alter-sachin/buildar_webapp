import React, { Component } from 'react'
import Card from "react-bootstrap/Card"

class BlogLayout extends Component {
    render() {
        const { title, thumbnail, description, author } = this.props
        return (
            <div className="blog-card">
                <a href="#blog">
                    <Card>
                        <Card.Title>{title}</Card.Title>
                        <Card.Img variant="top" src={thumbnail} />
                        <Card.Body>
                            <Card.Text>
                                {description}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">By {author}</small>
                        </Card.Footer>
                    </Card>
                </a>
            </div>
        )
    }
}

export default BlogLayout
