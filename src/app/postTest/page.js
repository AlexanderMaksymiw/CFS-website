"use client";
import { useState, useEffect } from "react";
import Post from "../components/Post";

export default function PostTest() {
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (author === "Ryan") alert("Not allowed!");
  }, [author]);

  function addPost() {
    const newPost = {
      author: author,
      content: content,
      title: title,
      following: false,
    };

    setPosts([...posts, newPost]);
    setContent("");
    setTitle("");
    setAuthor("");
  }
  return (
    <div>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
        />
        <button onClick={addPost}>Add Post</button>
      </div>
      <div className="posts">
        {posts.map((post, idx) => (
          <Post {...post} key={idx} />
        ))}
      </div>
    </div>
  );
}
