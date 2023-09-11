import { Link } from "react-router-dom"

function NotFound() {
  return (
    <div>
      <h2>404</h2>
      <p>Pagen not found</p>
      <p> Go back to <Link to="/">Home</Link> </p>
    </div>
  );
}

export default NotFound;
