"use client";
import { useState } from "react";
import { PostCard } from "@/components/cards/PostCard";
import { SimpleCard } from "@/components/cards/SimpleCard";
import insightsData from "@/data/insights.json";
import { MdOutlineDoubleArrow } from "react-icons/md";
import Maintenance from "@/components/ui/Maintenance";
import { MAINTENANCE } from "@/config/maintenance";

export default function InsightsClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [visiblePostsCount, setVisiblePostsCount] = useState(5);

  if (MAINTENANCE.insights) {
    return (
      <Maintenance
        title="Insights is under maintenance"
        description="This section is being updated. Please check back soon."
      />
    );
  }

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
        <p className="text-muted-foreground mb-4">Welcome to my insights page. Here, I share my thoughts and experiences on various topics related to technology, programming, and more. Use the search bar below to find specific insights.</p>
        <input
          type="text"
          placeholder="Search insights"
          className="bg-gradient-gray bg-background/60 border border-border text-foreground placeholder:text-muted-foreground rounded-md px-4 py-2 w-full"
          value={searchQuery}
          onInput={(e) => setSearchQuery(e.currentTarget.value)}
        />
      </div>

      {filteredPosts.length === 0 && (
        <p className="text-muted-foreground">No insights found.</p>
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
}
