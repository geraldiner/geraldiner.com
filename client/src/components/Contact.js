import React, { useState } from "react";

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = async e => {
		e.preventDefault();
		let formData = new FormData();
		formData.append("form-name", "contact");
		formData.append("name", name);
		formData.append("email", email);
		formData.append("message", message);
		console.log(formData);
		try {
			const response = await fetch("/", {
				method: "POST",
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body: formData,
			});
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<div className="bg-white rounded-md p-3 mx-4 lg:mx-16">
				<h3 className="text-2xl lg:text-3xl my-3">Let's chat!</h3>

				<form
					name="contact"
					action="/thanks"
					className="space-y-5"
					onSubmit={handleSubmit}
					data-netlify-honeypot="bot-field"
					data-netlify-recaptcha="true"
					data-netlify="true"
				>
					<div className="hidden">
						<label className="block mb-1 font-bold text-gray-500" htmlFor="bot-field">
							Don’t fill this out if you’re human: <input name="bot-field" />
						</label>
					</div>
					<div>
						<label htmlFor="name" className="block mb-1 font-bold text-gray-500">
							Name
						</label>
						<input
							name="name"
							type="text"
							className="form-input w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-blue"
							value={name}
							onChange={e => setName(e.target.value)}
						/>
					</div>

					<div>
						<label htmlFor="email" className="block mb-1 font-bold text-gray-500">
							Email
						</label>
						<input
							type="email"
							name="email"
							className="form-input w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-blue"
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
					</div>

					<div>
						<label htmlFor="message" className="block mb-1 font-bold text-gray-500">
							Message
						</label>
						<textarea
							name="message"
							className="form-textarea w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-blue"
							value={message}
							onChange={e => setMessage(e.target.value)}
							rows="3"
						></textarea>
					</div>
					<div data-netlify-recaptcha="true"></div>
					<button className="block w-full bg-blue hover:bg-yellow p-4 rounded text-white font-bold hover:text-gray-900 transition duration-300">
						Send
					</button>
				</form>
			</div>
		</>
	);
};

export default Contact;
