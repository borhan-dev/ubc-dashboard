import React from "react";

const Dashboard = React.lazy(() => import("./Dashboard"));
const Posts = React.lazy(() => import("./Posts"));
const NotFound = React.lazy(() => import("./404"));
const CreatePost = React.lazy(() => import("./Posts/Create"));

export { Dashboard, Posts, NotFound, CreatePost };
