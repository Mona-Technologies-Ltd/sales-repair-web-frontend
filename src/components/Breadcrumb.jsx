import React from "react";
import { Breadcrumb } from "antd";
import { Link, useLocation } from "react-router-dom";
import { HomeFilled } from "@ant-design/icons";

const BreadcrumbComponent = () => {
  const location = useLocation();

  // Parse the path and generate breadcrumb items
  const pathSnippets = location.pathname.split("/").filter((i) => i);

  // Don't show breadcrumbs on dashboard page
  if (location.pathname === "/" || location.pathname === "/dashboard") {
    return null;
  }

  const breadcrumbItems = [];

  // Build breadcrumb items based on current path
  let url = "";
  pathSnippets.forEach((snippet, index) => {
    url += `/${snippet}`;

    let formattedTitle = snippet;

    // Check if this is a team member profile page
    if (
      pathSnippets[0] === "team-members" &&
      index === 1 &&
      location.state?.memberName
    ) {
      formattedTitle = location.state.memberName;
    } else {
      formattedTitle = snippet
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    }

    breadcrumbItems.push({
      title:
        index === pathSnippets.length - 1 ? (
          formattedTitle
        ) : (
          <Link to={url}>{formattedTitle}</Link>
        ),
    });
  });

  return <Breadcrumb items={breadcrumbItems} style={{ margin: "16px 0" }} />;
};

export default BreadcrumbComponent;
