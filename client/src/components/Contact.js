import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
	return (
		<>
			<div className="bg-white rounded-md p-3 mx-4 lg:mx-16">
				<h3 className="text-2xl lg:text-3xl my-3">Let's chat!</h3>
				<form name="contact" method="post" data-netlify="true" onSubmit={handleSubmit}">
					<input type="hidden" name="form-name" value="contact" />
					<div>
						<label htmlFor="first-name">First Name</label>
						<input id="first-name" type="text" name="first-name" />
					</div>
					<div>
						<label htmlFor="last-name">Last Name</label>
						<input id="last-name" type="text" name="last-name" />
					</div>
					<div>
						<label>Email</label>
						<input id="email" type="email" name="email" />
					</div>
					<div>
						<label htmlFor="message">Message</label>
						<textarea id="message" name="message"></textarea>
					</div>
					<button type="submit">Send Message</button>
				</form>
				{/* <form
					name="contact"
					method="post"
					action="/thanks/"
					className="space-y-5"
					data-netlify-honeypot="bot-field"
					data-netlify-recaptcha="true"
					data-netlify="true"
				>
					<input type="hidden" name="form-name" value="contact" />
					<div className="hidden">
						<label className="block mb-1 font-bold text-gray-500" htmlFor="bot-field">
							Don’t fill this out if you’re human: <input name="bot-field" />
						</label>
					</div>
					<div>
						<label htmlFor="name" className="block mb-1 font-bold text-gray-500">
							Name
						</label>
						<input name="name" type="text" className="form-input w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-blue" />
					</div>

					<div>
						<label htmlFor="email" className="block mb-1 font-bold text-gray-500">
							Email
						</label>
						<input type="email" name="email" className="form-input w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-blue" />
					</div>

					<div>
						<label htmlFor="message" className="block mb-1 font-bold text-gray-500">
							Message
						</label>
						<textarea
							name="message"
							className="form-textarea w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-blue"
							rows="3"
						></textarea>
					</div>
					<div data-netlify-recaptcha="true"></div>
					<button
						type="submit"
						className="block w-full bg-blue hover:bg-yellow p-4 rounded text-white font-bold hover:text-gray-900 transition duration-300"
					>
						Send
					</button>
				</form> */}
			</div>
		</>
	);
};

export default Contact;
