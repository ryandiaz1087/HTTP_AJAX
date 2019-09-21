import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from '../../../src/axios';

class Blog extends Component {
	state = {
		posts: [],
		selectedId: null,
	};

	componentDidMount() {
		axios.get('/posts').then(response => {
			const posts = response.data.slice(0, 4);
			const updatedPosts = posts.map(post => {
				return {
					...post,
					author: 'Max',
				};
			});
			this.setState({ posts: updatedPosts });
			// console.log(response);
		});
	}

	postSelectedHandler = id => {
		this.setState({ selectedId: id });
	};

	render() {
		const posts = this.state.posts.map(post => {
			return (
				<Post
					key={post.id}
					title={post.title}
					author={post.author}
					clicked={() => this.postSelectedHandler(post.id)}
				/>
			);
		});

		return (
			<div className="Blog">
				<header>
					<ul>
						<li>
							<a href="/">HOME</a>
						</li>
						<li>
							<a href="/">New Post</a>
						</li>
					</ul>
				</header>
				<section className="Posts">{posts}</section>
			</div>
		);
	}
}

export default Blog;
