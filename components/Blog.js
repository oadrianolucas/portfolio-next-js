import React, { useState, useEffect } from "react";
const axios = require("axios");
const Blog = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/medium")
      .then((res) => res.data)
      .then((res) => {
        setPosts(res);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold pb-2">Artigos</h1>
      {isLoading && <p>Carregando API Medium...</p>}
      {posts.slice(0, 10).map((p, index) => (
        <a className="hover:text-gray-500" href={p.link} target="_blank">
          <div className="border rounded-xl m-2 ml-0 p-4 dark:border-gray-700 hover:border-gray-300">
            <div key={index} className="card">
              <h3 className="text-2xl font-medium">{p.title}</h3>
              <div class="font-thin	text-xl mt-2">
                {new Date(p.pubDate).toLocaleDateString()}
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};
export default Blog;
