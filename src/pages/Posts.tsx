import { Link } from "react-router-dom";
import { getAllPosts } from "@/data/posts";

const Posts = () => {
  const posts = getAllPosts();

  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <header className="mb-12">
        <Link to="/" className="text-muted-foreground hover:text-foreground">
          &larr; back
        </Link>
        <h1 className="text-lg mt-4">Posts</h1>
      </header>

      <section>
        {posts.map((post) => (
          <article key={post.slug} className="mb-8 pb-8 border-b border-border last:border-0">
            <Link to={`/posts/${post.slug}`} className="block group">
              <time className="text-muted-foreground text-sm">{post.date}</time>
              <h2 className="text-base mt-1 group-hover:underline">{post.title}</h2>
              <p className="text-muted-foreground mt-2">{post.excerpt}</p>
            </Link>
          </article>
        ))}
      </section>

      {posts.length === 0 && (
        <p className="text-muted-foreground">No posts yet.</p>
      )}
    </main>
  );
};

export default Posts;
