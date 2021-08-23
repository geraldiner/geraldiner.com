import React from "react";

const Contact = () => {
	return (
		<>
			<div className="bg-white rounded-md p-3 mx-4 lg:mx-16">
				<h3 className="text-2xl lg:text-3xl my-3">Let's chat!</h3>
				<form name="contact" method="POST" data-netlify-recaptcha="true" data-netlify="true">
					<p>
						<label>
							Email: <input type="text" name="name" />
						</label>
					</p>
					<p>
						<label>
							Message: <textarea name="message"></textarea>
						</label>
					</p>
					<div data-netlify-recaptcha="true"></div>
					<p>
						<button type="submit">Send</button>
					</p>
				</form>
				{/* <form
					name="contact"
					className="space-y-5"
					action="/thanks"
					method="POST"
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
					<button className="block w-full bg-blue hover:bg-yellow p-4 rounded text-white font-bold hover:text-gray-900 transition duration-300">
						Send
					</button>
				</form> */}
			</div>
		</>
	);
};

export default Contact;
