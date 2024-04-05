import React, { useState } from 'react';
import axios from 'axios'; 

interface FormData {	
	firstName: string;
	lastName: string;
	email: string;
}

const InputForm: React.FC = () => {
	const [formData, setFormData] = useState<FormData>({
		firstName: '',
		lastName: '',
		email: '',
	});

	const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		try {
			await axios.post('http://localhost:3000/subscribers', formData);

			setFormData({
				firstName: '',
				lastName: '',
				email: '',
			});
			} catch (error) {
				console.error('error:', error);
				// TODO: 409 email address conflict
			}
		};
	// TODO: Add success message

	return (
		<div className="wrapper-container">
			<div className="container">
				<h3>Add New subscriber</h3>
			<div className="mb-4 mt-2">

			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="firstName">First Name:</label>
					<input
						type="text"
						id="firstName"
						name="firstName"
						className="form-control"
						value={formData.firstName}
						onChange={handleChange}
					/>
				</div>

				<div className="form-group">
					<label htmlFor="lastName">Last Name:</label>
					<input
						type="text"
						id="lastName"
						name="lastName"
						className="form-control"
						value={formData.lastName}
						onChange={handleChange}
					/>
				</div>

				<div className="form-group">
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						id="email"
						name="email"
						className="form-control"
						value={formData.email}
						onChange={handleChange}
					/>
				</div>

				<div className="p-2">
					<button type="submit">Submit</button>
				</div>
			</form>
		</div>
		</div>
	</div>
	);
};

export default InputForm;