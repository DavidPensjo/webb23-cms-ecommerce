import React from "react";
import Link from "next/link";

const Custom404 = ({ config }) => {
  return (
    <div className="text-center my-32 py-32">
      <h1 className="text-9xl font-bold text-fill_primary">404</h1>
      <p className="text-2xl mt-4 text-fill_secondary">
        {config.content.not_found_title}
      </p>
      <p className="mt-2 text-fill_secondary">{config.content.not_found_message}</p>
      <Link
        href="/"
        className="mt-6 inline-block bg-fill_primary text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
      >
        Go Home
      </Link>
    </div>
  );
};

export default Custom404;
