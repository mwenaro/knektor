import React from "react";

interface BlogPost {
  title: string;
  description: string;
  imageUrl: string;
  readMoreLink: string;
}

const BlogCard: React.FC<BlogPost> = ({
  title,
  description,
  imageUrl,
  readMoreLink,
}) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-6 mb-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={imageUrl}
          alt="Blog Post Image"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
          <a href={readMoreLink} className="text-blue-500 hover:underline">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

const BlogSection: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor accumsan elit a feugiat.",
      imageUrl: "https://placeimg.com/500/500/nature",
      readMoreLink: "#",
    },
    {
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor accumsan elit a feugiat.",
      imageUrl: "https://placeimg.com/500/500/animals",
      readMoreLink: "#",
    },
    {
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor accumsan elit a feugiat.",
      imageUrl: "https://placeimg.com/500/500/architecture",
      readMoreLink: "#",
    },
    {
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor accumsan elit a feugiat.",
      imageUrl: "https://placeimg.com/500/500/tech",
      readMoreLink: "#",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Recent Blog Posts
        </h2>
        <div className="flex flex-wrap justify-center -mx-6">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
