import React, { Component, Suspense } from 'react';
import './Blog.css';
import { Route, NavLink, Switch } from 'react-router-dom';
import Posts from '../Blog/Posts/Posts';
// import NewPost from './NewPost/NewPost';
// import FullPost from './FullPost/FullPost';
// import asyncComponent from '../hoc/asyncComponent';

// const AsyncNewPost = asyncComponent(() => {
// 	return import('./NewPost/NewPost');
// });

const NewPost = React.lazy(() => import('./NewPost/NewPost'));

class Blog extends Component {
	state = {
		auth: true,
	};

	render() {
		return (
			<div className="Blog">
				<header>
					<ul>
						<li>
							<NavLink
								to="/posts/"
								exact
								activeClassName="my-active"
								activeStyle={{
									textDecoration: 'underline',
								}}>
								POSTS
							</NavLink>
						</li>
						<li>
							<NavLink
								to={{
									pathname: '/new-post',
								}}>
								New Post
							</NavLink>
						</li>
					</ul>
				</header>
				<Switch>
					<Route
						path="/new-post"
						render={() => (
							<Suspense fallback={<div>Loading...</div>}>
								<NewPost />
							</Suspense>
						)}
					/>
					<Route path="/posts" component={Posts} />
					<Route
						render={() => (
							<h1
								style={{
									textAlign: 'center',
								}}>
								This page was not found .. I SAAWWWWWYYY
							</h1>
						)}
					/>
				</Switch>
			</div>
		);
	}
}

export default Blog;
