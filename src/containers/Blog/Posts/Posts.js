import React, { Component } from 'react';
import axios from '../../../axios';
import { Route } from 'react-router-dom';

import Post from '../../../components/Post/Post';
import './Posts.css';
import FullPost from '../FullPost/FullPost';

export class Posts extends Component {
	state = {
		posts: [],
		selectedId: null,
		error: false,
	};

	componentDidMount() {
		console.log(this.props);
		axios
			.get('/posts')
			.then(response => {
				const posts = response.data.slice(0, 4);
				const updatedPosts = posts.map(post => {
					return {
						...post,
						author: 'Max',
					};
				});
				this.setState({ posts: updatedPosts });
				console.log(response);
			})
			.catch(error => {
				console.log(error);
			});
	}

	postSelectedHandler = id => {
		this.props.history.push('/posts/' + id);
		// this.setState({ selectedId: id });
	};
	render() {
		let posts = <p style={{ textAlign: 'center' }}>Something went Wrong</p>;
		if (!this.state.error) {
			posts = this.state.posts.map(post => {
				return (
					<Post
						title={post.title}
						author={post.author}
						clicked={() => this.postSelectedHandler(post.id)}
						key={post.id}
					/>
				);
			});
		}
		return (
			<div>
				<section className="Posts">{posts}</section>
				<Route path={`${this.props.match.url}/:id`} component={FullPost} />
			</div>
		);
	}
}

export default Posts;
