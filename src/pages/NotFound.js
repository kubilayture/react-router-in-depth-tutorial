import { Link } from "react-router-dom";

export default function h2() {
  return (
    <div>
      <h2>Page not found</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam,
        fugiat, eum nulla iste dolor ratione aspernatur laborum obcaecati minus
        beatae vitae voluptatibus doloribus voluptas eius sit. Veritatis sunt
        aut ab.
      </p>

      <p>
        Go to the <Link to="/" />
        Homepage
      </p>
    </div>
  );
}
