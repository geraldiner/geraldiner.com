import React from "react";
import Social from "./Social";

const Contact = () => {
	return (
		<section id="contact" className="wrapper style1 fade-up">
			<div className="inner">
				<h2>Let's chat!</h2>
				<h4>Optional conversation starters:</h4>
				<ul>
					<li>What's your preference when it comes to frontend vs. backend?</li>
					<li>What are your thoughts around CS education?</li>
					<li>What are 5 things on your bucket list?</li>
					<li>What's the theme for your Animal Crossing: New Horizons island?</li>
				</ul>
				<div className="split style1">
					<section>
						<form name="contact" method="post" netlify-honeypot="bot-field" data-netlify="true" action="#">
							<input type="hidden" name="form-name" value="contact" />

							<div className="fields">
								<div className="hidden" style={{ display: "none" }}>
									<label>
										Don’t fill this out if you’re human: <input name="bot-field" />
									</label>
								</div>
								<div className="field half">
									<label htmlFor="name">Name</label>
									<input type="text" name="name" id="name" />
								</div>
								<div className="field half">
									<label htmlFor="email">Email</label>
									<input type="text" name="email" id="email" />
								</div>
								<div className="field">
									<label htmlFor="message">Message</label>
									<textarea name="message" id="message" rows="5"></textarea>
								</div>
							</div>
							<button type="submit" className="button primary submit">
								Send Message
							</button>
						</form>
					</section>
					<section>
						<ul className="contact">
							<li>
								<h3>Email</h3>
								<p>hello [at] geraldiner [dot] com</p>
							</li>
							<li>
								<h3>Social</h3>
								<Social />
							</li>
						</ul>
					</section>
				</div>
			</div>
		</section>
	);
};

export default Contact;
