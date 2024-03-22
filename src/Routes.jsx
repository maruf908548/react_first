import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "pages/NotFound";
import Users from "pages/Users";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Users /> },
    { path: "*", element: <NotFound /> },
    {
      path: "users",
      element: <Users />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
