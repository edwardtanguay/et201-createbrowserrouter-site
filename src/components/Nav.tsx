import { NavLink } from "react-router-dom";

export const Nav = () => {
	return (
		<nav>
			<ul className="flex gap-3 bg-red-200 py-2 px-4 rounded">
				<li><NavLink className={'[&.active]:text-red-800'} to="/welcome">Welcome</NavLink></li>
				<li><NavLink className={'[&.active]:text-red-800'} to="/about">About</NavLink></li>
			</ul>
		</nav>
	);
};
