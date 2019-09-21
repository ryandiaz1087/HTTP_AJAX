import React, { Component } from 'react';
import './Blog.css';
import { Route } from 'react-router-dom';
import Posts from '../Blog/Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
	render() {
		return (
			<div className="Blog">
				<header>
					<ul>
						<li>
							<a href="/">HOME</a>
						</li>
						<li>
							<a href="/new-post">New Post</a>
						</li>
					</ul>
				</header>
				<Route path="/" exact component={Posts} />
				<Route path="/new-post" component={NewPost} />
			</div>
		);
	}
}

export default Blog;
