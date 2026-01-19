import { useParams, Link, Navigate } from "react-router-dom";
import { getPostBySlug } from "@/data/posts";

const PostDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/posts" replace />;
  }

  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <header className="mb-8">
        <Link to="/posts" className="text-muted-foreground hover:text-foreground">
          &larr; back to posts
        </Link>
      </header>

      <article>
        <header className="mb-8">
          <time className="text-muted-foreground text-sm">{post.date}</time>
          <h1 className="text-lg mt-2">{post.title}</h1>
        </header>

        <div className="prose prose-invert max-w-none">
          {post.content.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('## ')) {
              return (
                <h2 key={index} className="text-base mt-8 mb-4 border-b border-border pb-1">
                  {paragraph.replace('## ', '')}
                </h2>
              );
            }
            if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
              return (
                <p key={index} className="mt-4 font-normal">
                  {paragraph.replace(/\*\*/g, '')}
                </p>
              );
            }
            if (paragraph.startsWith('- ')) {
              const items = paragraph.split('\n').filter(line => line.startsWith('- '));
              return (
                <ul key={index} className="list-disc list-inside space-y-1 my-4">
                  {items.map((item, i) => (
                    <li key={i}>{item.replace('- ', '')}</li>
                  ))}
                </ul>
              );
            }
            if (paragraph.match(/^\*\*\d+\./)) {
              return (
                <p key={index} className="mt-4">
                  {paragraph.split('\n').map((line, i) => (
                    <span key={i} className="block">
                      {line.replace(/\*\*/g, '')}
                    </span>
                  ))}
                </p>
              );
            }
            return (
              <p key={index} className="mt-4">
                {paragraph}
              </p>
            );
          })}
        </div>
      </article>

      <footer className="mt-12 pt-8 border-t border-border">
        <Link to="/posts" className="text-muted-foreground hover:text-foreground">
          &larr; back to posts
        </Link>
      </footer>
    </main>
  );
};

export default PostDetail;
