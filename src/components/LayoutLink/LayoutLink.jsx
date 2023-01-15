import { useRouter } from "next/router";
import React from "react";

const LayoutLink = ({ handlePageChange, children, href }) => {
  const { asPath } = useRouter();

  return <div>{children}</div>;
};

export default LayoutLink;
