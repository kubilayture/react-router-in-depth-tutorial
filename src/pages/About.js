import { Navigate } from "react-router-dom";
import { useState } from "react";

export default function About() {
  const [user, setUser] = useState("kubilay");

  if (!user) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div className="about">
      <h2>About Us</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex iusto
        accusantium velit deleniti totam veniam? Dolorem ipsam, corporis
        temporibus quasi vel voluptatibus neque impedit tempora odio eum,
        perspiciatis excepturi sapiente? Perferendis rerum nihil ipsam eligendi
        necessitatibus ut iste minus sapiente, placeat nam tempora impedit
        labore reprehenderit est aperiam enim cumque velit, praesentium dolore
        molestias facilis iure. Voluptates officiis nobis sit? Incidunt placeat
        quos animi expedita quisquam, iure architecto harum, suscipit labore
        nulla nisi dignissimos quibusdam officiis id odit ipsa maxime ut
        reprehenderit nam ad odio. Sed nisi modi excepturi accusantium!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex iusto
        accusantium velit deleniti totam veniam? Dolorem ipsam, corporis
        temporibus quasi vel voluptatibus neque impedit tempora odio eum,
        perspiciatis excepturi sapiente? Perferendis rerum nihil ipsam eligendi
        necessitatibus ut iste minus sapiente, placeat nam tempora impedit
        labore reprehenderit est aperiam enim cumque velit, praesentium dolore
        molestias facilis iure. Voluptates officiis nobis sit? Incidunt placeat
        quos animi expedita quisquam, iure architecto harum, suscipit labore
        nulla nisi dignissimos quibusdam officiis id odit ipsa maxime ut
        reprehenderit nam ad odio. Sed nisi modi excepturi accusantium!
      </p>

      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  );
}
