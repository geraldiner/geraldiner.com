import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SOCIALS } from "./constants/links";

const Social = () => {
	return (
		<ul class="icons">
			{SOCIALS.map(s => {
				return (
					<li>
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
