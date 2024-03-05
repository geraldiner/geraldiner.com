import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layouts/layout";

const NotFoundPage = () => {
  return (
    <Layout>
      <h2>Page not found</h2>
      <p>Sorry 😔, we couldn’t find what you were looking for.</p>
      <p>
        <Link to="/">Go home</Link>.
      </p>
    </Layout>
  );
};
export const Head = () => <title>Not found</title>;

export default NotFoundPage;
