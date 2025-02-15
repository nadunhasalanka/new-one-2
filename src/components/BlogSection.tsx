import React from "react";
import { motion } from "framer-motion";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
}

interface BlogSectionProps {
  posts?: BlogPost[];
}

const defaultPosts: BlogPost[] = [
  {
    id: "1",
    title: "Structured Layers",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et turpis nunc. Nulla justo nibh, convallis.",
    category: "Design System",
    image:
      "https://cdn.dribbble.com/userupload/13632772/file/original-c0d8c6b0e1e6c6dd56e10f4f3f6d2f2c.png?resize=1504x1128",
  },
  {
    id: "2",
    title: "Build pages with <agent/>",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et turpis nunc. Nulla justo nibh, convallis.",
    category: "<agent/> Product",
    image:
      "https://cdn.dribbble.com/userupload/13632771/file/original-b4eacd3d1e5d5c06b13f6a90ad4f5c9c.png?resize=1504x1128",
  },
  {
    id: "3",
    title: "Structured Layers",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et turpis nunc. Nulla justo nibh, convallis.",
    category: "Design System",
    image:
      "https://cdn.dribbble.com/userupload/13632770/file/original-e0f9a76e4a9c8b8d9d20f4d1e6b6e36d.png?resize=1504x1128",
  },
];

const BlogSection: React.FC<BlogSectionProps> = ({ posts = defaultPosts }) => {
  return (
    <section className="w-full min-h-[600px] bg-[#0A0A0A] py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-[#1A1A1A] rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-teal-500 rounded-full" />
            <span className="text-gray-300 text-sm">
              <agent /> Product Overview
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium text-white mb-4">
            Blog & Articles
          </h2>
          <p className="text-gray-400 max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et
            turpis nunc. Nulla justo nibh, convallis eu metus moricus, ultrices
            elementum risque.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-[#111] rounded-lg overflow-hidden border border-[#222] hover:border-[#333] transition-all duration-300">
                <div className="relative h-[240px] w-full overflow-hidden bg-[#0A0A0A] p-8">
                  <motion.img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-400 mb-3">
                    {post.category}
                  </div>
                  <h3 className="text-xl font-medium text-white mb-3 hover:text-teal-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
