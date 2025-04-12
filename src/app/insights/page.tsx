"use client";
import { useState } from "react";
import { PostCard } from "@/components/cards/PostCard";
import { SimpleCard } from "@/components/cards/SimpleCard";
import insightsData from "@/data/insights.json";
import { Insight } from "@/types/insight";
import { MdOutlineDoubleArrow } from "react-icons/md";

const InsightsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [visiblePostsCount, setVisiblePostsCount] = useState(5);

  const filteredPosts = insightsData
    .filter((post) => post.title.toLowerCase().includes(searchQuery.toLowerCase()));

  const featuredPosts = filteredPosts
    .filter((post) => post.image)
    .slice(0, 6);

  const allPostsToDisplay = filteredPosts;

  const handleLoadMore = () => {
    setVisiblePostsCount(visiblePostsCount + 5);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-semibold mb-4">Insights</h1>
        <p className="text-gray-600 mb-4">Welcome to my insights page. Here, I share my thoughts and experiences on various topics related to technology, programming, and more. Use the search bar below to find specific insights.</p>
        <input
          type="text"
          placeholder="Search insights"
          className="bg-gradient-gray bg-transparent border border-gray-300/[0.5] rounded-md px-4 py-2 w-full"
          value={searchQuery}
          onInput={(e) => setSearchQuery(e.currentTarget.value)}
        />
      </div>

      {filteredPosts.length === 0 && (
        <p className="text-gray-600">No insights found.</p>
      )}

      {featuredPosts.length > 0 && (
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Featured Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <PostCard key={post.title} post={post} />
            ))}
          </div>
        </div>
      )}

      {allPostsToDisplay.length > 0 && (
        <div>
          <h2 className="text-3xl font-semibold mb-4">All Posts</h2>
          <div className="grid grid-cols-1 gap-4">
            {allPostsToDisplay.slice(0, visiblePostsCount).map((post) => (
              <SimpleCard key={post.title} post={post} />
            ))}
          </div>
          {visiblePostsCount < allPostsToDisplay.length && (
            <button
              className="text-blue-600 hover:text-purple-600 mt-8 flex items-center group"
              onClick={handleLoadMore}
            >
              <span className="text-sm underline group-hover:no-underline">
                Load More
              </span>
              <MdOutlineDoubleArrow className="ml-2" />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default InsightsPage;