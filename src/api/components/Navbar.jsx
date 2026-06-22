export default function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <span className="navbar-brand">
                    React Movies Dashboard
                </span>
                <Link to="/">Home</Link>
                <Link to="about">About</Link>
            </div>
        </nav>
    );
}