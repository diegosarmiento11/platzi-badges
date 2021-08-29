import React from 'react';
import "./BadgeForm.css";

class BadgeForm extends React.Component {

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
						<label>First Name</label>
						<input 
							name="firstName" 
							onChange={this.props.jejeChange} type="text" className="form-control"
							value={this.props.formValue.firstName}/>
					</div>

					<div className="form-group">
						<label htmlFor="">Last Name</label>
						<input 
							name="lastName" 
							onChange={this.props.jejeChange} type="text" className="form-control"
							value={this.props.formValue.lastName}/>
					</div>

					<div className="form-group">
						<label>Email</label>
						<input 
							name="email" 
							onChange={this.props.jejeChange} type="email" className="form-control"
							value={this.props.formValue.email}/>
					</div>

					<div className="form-group">
						<label>Job Title</label>
						<input 
							name="jobTitle" 
							onChange={this.props.jejeChange} type="text" className="form-control"
							value={this.props.formValue.jobTitle}/>
					</div>

					<div className="form-group">
						<label htmlFor="">Twitter</label>
						<input 
							name="twitter" 
							onChange={this.props.jejeChange} type="text" className="form-control"
							value={this.props.formValue.twitter}/>
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
