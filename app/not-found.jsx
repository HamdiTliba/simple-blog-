import Link from "next/link";
import React from "react";

const notFound = () => {
  return (
    <div>
      <h1>Not Found Page</h1>
      <p>Sorry, the page you are looking for do not exist.</p>
      <Link href="/">return to Home</Link>
    </div>
  );
};

export default notFound;
