import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav>
			<div className="list-group">
				<Link to="/" className="list-group-item">Home</Link>
				<Link to="/add" className="list-group-item">Add</Link>
				<Link to="/view" className="list-group-item">View</Link>
			</div>
		</nav>
	);
};

export default NavBar;