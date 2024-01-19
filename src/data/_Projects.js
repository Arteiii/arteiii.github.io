import React from "react";

const projects = [
  {
    category: "Project",
    title: "Authly",
    slug: "#authly",
    subtitle:
      "User Management and Subscription System",
    period: "November 2023",
    tech: "FastAPI",
    description: (
      <>
        <p>
          Authly is a user management application built on{" "}
          <a href="https://fastapi.tiangolo.com/">
            FastAPI
          </a>
          , designed to provide user authentication and access control for various applications.
        </p>
        <p>
          I worked on this project to learn more about {" "}
          <a href="https://fastapi.tiangolo.com/">
            FastAPI and Python
          </a>{" "}

        </p>
      </>
    ),
    links: [
      {
        name: "GitHub repository",
        link: "https://github.com/wavy42/Authly",
      },
    ],
  },
];

export default projects;