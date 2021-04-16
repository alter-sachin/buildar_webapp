import React, { Component } from 'react'
import { Fragment } from 'react';
import SideBar from '../sidebar';
import BlogLayout from './components/BlogLayout'

class BlogPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            blogs: [
                {
                    title: "Title",
                    thumbnail: "/images/Logo_BuildAR.png",
                    description: "Description",
                    author: "Author"
                },
                {
                    title: "Title",
                    thumbnail: "images/Logo_BuildAR.png",
                    description: "Description",
                    author: "Author"
                },
                {
                    title: "Title",
                    thumbnail: "images/Logo_BuildAR.png",
                    description: "Description",
                    author: "Author"
                },
                {
                    title: "Title",
                    thumbnail: "images/Logo_BuildAR.png",
                    description: "Description",
                    author: "Author"
                },
                {
                    title: "Title",
                    thumbnail: "images/Logo_BuildAR.png",
                    description: "Description",
                    author: "Author"
                },
                {
                    title: "Title",
                    thumbnail: "images/Logo_BuildAR.png",
                    description: "Description",
                    author: "Author"
                }
            ]
        }
        this.w3_open = this.w3_open.bind(this);
        this.w3_close = this.w3_close.bind(this);
    }
    w3_open = () => {
        document.getElementById("main").style.marginLeft = "20%";
        document.getElementById("mySidebar").style.width = "15%";
        document.getElementById("mySidebar").style.display = "block";
        document.getElementById("openNav").style.visibility = 'hidden';
    }
    w3_close = () => {
        document.getElementById("main").style.marginLeft = "10%";
        document.getElementById("mySidebar").style.display = "none";
        document.getElementById("openNav").style.display = "inline-block";
        document.getElementById("openNav").style.visibility = "visible";
    }
    render() {
        const blogs = this.state.blogs
        return (
            <Fragment>
                <SideBar />
                <button id="openNav" className="w3-button w3-xlarge" onClick={this.w3_open}>&#9776;</button>
                <div id="main" className="blog">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 blog-header">
                                <h1>Blogs</h1>
                            </div>
                            {blogs.map((blog, index) => {
                                return (
                                    <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                                        <BlogLayout
                                            key={index}
                                            title={blog.title}
                                            thumbnail={blog.thumbnail}
                                            description={blog.description}
                                            author={blog.author}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default BlogPage
