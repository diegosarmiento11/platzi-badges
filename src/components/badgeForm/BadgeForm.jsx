import React from 'react';
import "./BadgeForm.css";

class BadgeForm extends React.Component {

	handleChange = (e) => {
		console.log({
			value:e.target.value,
			name: e.target.name
		})
	}

	handleClick = (e) => {
		console.log("button was clicked")
	}

	handleSubmit = (e) => {
		e.preventDefault();
	}

	render() {
		return (
			<div>
				<h1>New Attendant</h1>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label htmlFor="">First Name</label>
						<input name="FirstName" onChange={this.handleChange} type="text" className="form-control"/>
					</div>

					<button onClick={this.handleClick} type="button" className="btn btn-primary">
						Save
					</button>
				</form>
			</div>
		)
	}
}


export default BadgeForm;
