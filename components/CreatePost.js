// const [hook, setHooks] = useState()

// components/CreatePost.justify
import React, { useState } from "react";
import fire from '../config/fire-config';

const averageReading = 200;

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');
  const [minutes, setMinutes] = useState('');

  const [notification, setNotification] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();

    setDate(new Date());
    setMinutes(Math.round(content / averageReading));

    // firebase: create new blog
    fire.firestore()
    .collection('blog')
    .add({
        title : title,
        content: content,
        date: date,
        minutes: minutes
    });

    setTitle('');
    setContent('');

    setNotification('Blogpost created');

    setTimeout(() => {
        setNotification('')
    }, 2000)
  }

  return (
    <div>
      <h2>Add Blog</h2>

      {notification}

      <form onSubmit={handleSubmit}>
        <div>
          Title
          <br />
          <input
            type="text"
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>
        <div>
          Content
          <br />
          <textarea
            value={content}
            onChange={({ target }) => setContent(target.value)}
          />
        </div>
        <button stype="submit">Save</button>
      </form>
    </div>
  );
};

export default CreatePost;