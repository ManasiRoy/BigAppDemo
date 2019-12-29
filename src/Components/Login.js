import React, { Component } from 'react'

export default class LoginForm extends Component {
	handleSignIn(e) {
		e.preventDefault()
		let username = this.refs.username.value
		let password = this.refs.password.value
		this.props.onSignIn(username, password)
	}

	render() {
		return (
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-4 align-self-center mt-5">
						<form onSubmit={this.handleSignIn.bind(this)}>
							<h3 className="mb-3">Sign in</h3>
							<input type="text" ref="username" placeholder="enter you username" className="form-control mb-3"/>
							<input type="password" ref="password" placeholder="enter password" className="form-control mb-3"/>
							<input type="submit" value="Login" className="btn btn-lg btn-primary"/>
						</form>
					</div>
				</div>
			</div>

		)
	}

}

