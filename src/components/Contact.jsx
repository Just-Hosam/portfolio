import { useState } from 'react';
import emailjs from 'emailjs-com';
import apiKey from '../helpers/emailkey';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function Contact() {
	const emptyForm = {
		name: '',
		email: '',
		message: '',
	};
	const [form, setForm] = useState(emptyForm);

	const submitForm = (e) => {
		e.preventDefault();

		const submissionDetails = {
			from_name: form.name,
			from_email: form.email,
			message: form.message,
			reply_to: form.email,
		};

		emailjs.init(apiKey.USER_ID);
		emailjs.send(apiKey.SERVICE_ID, apiKey.TEMPLATE_ID, submissionDetails);

		setForm(emptyForm);
	};

	return (
		<div id="contact">
			<h2>Contact</h2>
			<div id="contact-body">
				<div id="contact-name-email">
					<TextField
						className="contact-textfield"
						label="Full Name"
						variant="outlined"
						value={form.name}
						onChange={(event) =>
							setForm((prev) => {
								return { ...prev, name: event.target.value };
							})
						}
					/>
					<TextField
						className="contact-textfield"
						label="Email"
						variant="outlined"
						value={form.email}
						onChange={(event) =>
							setForm((prev) => {
								return { ...prev, email: event.target.value };
							})
						}
					/>
				</div>
				<TextField
					className="contact-textfield"
					fullWidth
					label="Message"
					variant="outlined"
					rows={4}
					multiline
					value={form.message}
					onChange={(event) =>
						setForm((prev) => {
							return { ...prev, message: event.target.value };
						})
					}
				/>
				<Button className="contact-submit" variant="contained" fullWidth onClick={(e) => submitForm(e)}>
					Submit
				</Button>
			</div>
		</div>
	);
}
