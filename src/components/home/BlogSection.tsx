import React from "react";
import Image from "next/image";
import { Calendar, ArrowRight } from "lucide-react";

interface BlogPost {
  id: number;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  href: string;
}

const posts: BlogPost[] = [
  {
    id: 1,
    category: "Medical",
    date: "Jan 2, 2024",
    title: "10 foods to avoid for your heart health",
    excerpt:
      "It’s normal to feel anxiety, worry and grief any time you’re diagnosed with a condition that’s certainly true. Discover key cardiovascular dietary habits.",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=80",
    href: "#",
  },
  {
    id: 2,
    category: "Mental Health",
    date: "Jan 3, 2024",
    title: "How to be relax & calm in hard situations",
    excerpt:
      "Proven mindfulness techniques, breathing exercises, and clinical coping mechanisms to alleviate acute stress and promote nervous system relaxation.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80",
    href: "#",
  },
  {
    id: 3,
    category: "Dental Health",
    date: "Jan 4, 2024",
    title: "Best ways to make your teeth strong",
    excerpt:
      "Maintaining enamel density, selecting fluoride treatments, and daily preventative hygiene protocols recommended by our oral healthcare specialists.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80",
    href: "#",
  },
];

export const BlogSection: React.FC = () => {
  return (
    <section id="latest-blog" className="py-20 lg:py-28 bg-[#fdfefe]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-primary text-xs uppercase tracking-widest font-semibold block mb-2">
              From Our Journal
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark tracking-tight">
              Our Recent Posts
            </h2>
          </div>
          <a
            href="#latest-blog"
            className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-primary hover:text-dark transition-colors"
          >
            <span>View all articles</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </a>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-card hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Post Image & Category Badge */}
                <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute bottom-3 left-3 bg-primary text-white text-[11px] uppercase font-bold tracking-wider px-3 py-1 rounded-md shadow-sm">
                    {post.category}
                  </span>
                </div>

                {/* Body */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-2 text-xs text-cadet font-medium mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.date}</span>
                  </div>

                  <h3 className="text-xl font-bold text-dark group-hover:text-primary transition-colors duration-200 line-clamp-2 mb-3">
                    <a href={post.href}>{post.title}</a>
                  </h3>

                  <p className="text-gray text-sm leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Footer / Read More */}
              <div className="px-6 sm:px-7 pb-6 pt-2 border-t border-gray-50 flex items-center justify-between">
                <a
                  href={post.href}
                  className="text-xs font-semibold uppercase tracking-wider text-primary hover:text-dark transition-colors inline-flex items-center gap-1"
                >
                  <span>Read full story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
