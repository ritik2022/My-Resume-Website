import { useEffect, useState } from "react";
import { posts } from "../data/portfolio";

const STORAGE_KEY = "rk-feed";

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { liked: {}, comments: {} };
  } catch {
    return { liked: {}, comments: {} };
  }
}

function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Local-only enhancement; ignore storage failures.
  }
}

function ago(timestamp) {
  const minutes = Math.floor((Date.now() - timestamp) / 60000);
  if (minutes < 1) return "Just now";
  if (minutes < 60) return `${minutes} min ago`;
  const hours = Math.floor(minutes / 60);
  return hours < 24 ? `${hours} h ago` : new Date(timestamp).toLocaleDateString("en-IN");
}

export default function Blog() {
  const [state, setState] = useState(loadState);

  useEffect(() => {
    saveState(state);
  }, [state]);

  const toggleLike = (id) => {
    setState((current) => ({
      ...current,
      liked: { ...current.liked, [id]: !current.liked[id] }
    }));
  };

  const addComment = (event, id) => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.name.value.trim().slice(0, 40);
    const text = form.comment.value.trim().slice(0, 500);
    if (!text) return;

    setState((current) => ({
      ...current,
      comments: {
        ...current.comments,
        [id]: [
          ...(current.comments[id] || []),
          { n: name, t: text, d: Date.now() }
        ]
      }
    }));
    form.reset();
  };

  return (
    <section className="surface-section blog-page">
      <div className="wrap blog-wrap">
        <h1>Blog</h1>
        <p className="muted">Notes on requirements, process and Agile delivery. Scroll the feed, like a post or leave a comment.</p>
        <p className="muted small">Preview note: likes and comments are saved in your own browser only. Sharing them between visitors needs a small backend on the live site.</p>

        <div className="feedbox" role="feed" aria-label="Blog posts" tabIndex="0">
          {posts.map((post, index) => (
            <Post
              key={post.id}
              post={post}
              index={index}
              liked={!!state.liked[post.id]}
              comments={state.comments[post.id] || []}
              onLike={() => toggleLike(post.id)}
              onComment={(event) => addComment(event, post.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Post({ post, index, liked, comments, onLike, onComment }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="fpost" aria-posinset={index + 1} aria-setsize={posts.length}>
      <div className="fhead">
        <div className="avatar">RK</div>
        <div>
          <b>Ritik Kumar</b>
          <div className="small muted">
            {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
            {" · "} {Math.max(1, Math.ceil(post.body.join(" ").split(/\s+/).length / 200))} min read
          </div>
        </div>
      </div>

      <h3>{post.title}</h3>
      <div className="fbody">
        {post.body.map((part, index) => {
          const [heading, text] = Array.isArray(part) ? part : [null, part];
          const hidden = index > 0 && !expanded;
          return (
            <div key={index} hidden={hidden}>
              {heading ? <h4>{heading}</h4> : <p>{text}</p>}
              {heading && <p>{text}</p>}
            </div>
          );
        })}
      </div>

      <button
        className="more"
        aria-expanded={expanded}
        onClick={() => setExpanded((value) => !value)}
      >
        {expanded ? "Show less" : "Read more"}
      </button>

      <ul className="tags">{post.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>

      <p className="stat" aria-live="polite">
        {(liked ? 1 : 0)} {liked ? "like" : "likes"} · {comments.length} {comments.length === 1 ? "comment" : "comments"}
      </p>

      <div className="acts">
        <button aria-pressed={liked} onClick={onLike}>{liked ? "Liked" : "Like"}</button>
        <button onClick={() => document.getElementById(`comment-${post.id}`)?.focus()}>Comment</button>
      </div>

      <div>
        {comments.map((comment, index) => (
          <div className="cm" key={`${comment.d}-${index}`}>
            <div className="avatar">{(comment.n || "V")[0].toUpperCase()}</div>
            <div className="bubble">
              <b>{comment.n || "Visitor"}</b>
              <span>{comment.t}</span><br />
              <small>{ago(comment.d)}</small>
            </div>
          </div>
        ))}
      </div>

      <form className="cf" onSubmit={onComment}>
        <label className="vh" htmlFor={`name-${post.id}`}>Your name</label>
        <input id={`name-${post.id}`} name="name" maxLength="40" placeholder="Your name (optional)" />
        <label className="vh" htmlFor={`comment-${post.id}`}>Comment</label>
        <textarea id={`comment-${post.id}`} name="comment" maxLength="500" required placeholder="Write a comment" />
        <button className="btn p" type="submit">Post comment</button>
      </form>
    </article>
  );
}
