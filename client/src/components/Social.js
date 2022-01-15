import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SOCIALS } from "./constants/links";

const Social = () => {
	return (
		<ul className="icons">
			{SOCIALS.map((s, i) => {
				return (
					<li key={i}>
						<a href={s.link} target="_blank" className={s.icon ? `social-${s.name}` : `social-${s.name} social-default`} rel="noopener noreferrer">
							<FontAwesomeIcon icon={s.icon ? ["fab", s.name] : s.replacement} />
						</a>
					</li>
				);
			})}
		</ul>
	);
};

export default Social;
