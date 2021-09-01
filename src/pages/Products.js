import { Link, useParams } from "react-router-dom";

const Products = () => {
  const params = useParams();

  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to="/products/p1">Prod One</Link>
        </li>
        <li>
          <Link to="/products/p2">Prod Two</Link>
        </li>
        <li>
          <Link to="/products/p3">Prod Three</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
