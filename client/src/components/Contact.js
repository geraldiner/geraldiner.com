import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SOCIALS } from "./constants/links";

const Contact = () => {
	return (
		<>
			<div className="bg-white rounded-md p-8 mx-4 lg:mx-16">
				<h3 className="text-2xl lg:text-3xl my-3">Let's chat!</h3>
				<div className="mb-3">
					<p>Optional conversation starters:</p>
					<ul className="list-disc ml-8">
						<li>What's your preference when it comes to frontend vs. backend?</li>
						<li>What are your thoughts around CS education?</li>
						<li>What are 5 things on your bucket list?</li>
						<li>What's the theme for your Animal Crossing: New Horizons island?</li>
					</ul>
				</div>
				<div className="mb-3">
					<p>You can also find me online on my socials: </p>
					<ul className="list-none">
						{SOCIALS.map(s => {
							return (
								<li className="inline-block px-4 py-2">
									<a
										href={s.link}
										target="_blank"
										rel="noopener noreferrer"
										className={s.icon ? `social-${s.name}` : `social-${s.name} social-default`}
									>
										<FontAwesomeIcon icon={s.icon ? ["fab", s.name] : s.replacement} /> {s.name}
									</a>
								</li>
							);
						})}
					</ul>
				</div>
				<form name="contact" method="post" className="space-y-5" netlify-honeypot="bot-field" data-netlify="true" action="/thanks/">
					<input type="hidden" name="form-name" value="contact" />
					<p className="hidden">
						<label>
							Don’t fill this out if you’re human: <input name="bot-field" />
						</label>
					</p>
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
					<button
						type="submit"
						className="block w-full bg-blue hover:bg-yellow p-4 rounded text-white font-bold hover:text-gray-900 transition duration-300"
					>
						Send
					</button>
				</form>
			</div>
		</>
	);
};

export default Contact;
