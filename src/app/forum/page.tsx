/**
 * Forum page.
 * Simulated community forum layout with sample categories and posts.
 */
export default function ForumPage() {
  const categories = [
    {
      title: "Welcome & Introductions",
      subtitle: "Welcome to the Juana Díaz Forums – local connections and meet-ups.",
      topics: [
        {
          title: "👋 New Members: Introduce Yourself!",
          author: "Admin",
          replies: 12,
          lastPost: "2h ago",
        },
        {
          title: "Community Rules & Guidelines",
          author: "Moderator",
          replies: 5,
          lastPost: "1d ago",
        },
        {
          title: "Weekly Meet-Ups and Events",
          author: "MarisolPR",
          replies: 8,
          lastPost: "4h ago",
        },
      ],
    },
    {
      title: "Local Life & Recommendations",
      subtitle: "Restaurants • Shops • Things to Do",
      topics: [
        {
          title: "Best Coffee Spots in Downtown Juana Díaz ☕",
          author: "CarlosR",
          replies: 24,
          lastPost: "3h ago",
        },
        {
          title: "Hidden Beaches Near Ponce",
          author: "Traveler86",
          replies: 9,
          lastPost: "5h ago",
        },
        {
          title: "Family-Friendly Weekend Ideas?",
          author: "TaniaS",
          replies: 4,
          lastPost: "1d ago",
        },
      ],
    },
    {
      title: "Community Help & New Residents",
      subtitle: "Questions • Housing • Moving Support",
      topics: [
        {
          title: "Coming Soon: 'New to the Area?' Welcome Thread",
          author: "System",
          replies: 0,
          lastPost: "Pending",
        },
        {
          title: "Looking for Apartment Rentals near Town Center",
          author: "MiguelD",
          replies: 3,
          lastPost: "8h ago",
        },
        {
          title: "Moving Here – What Should I Know?",
          author: "AnnaV",
          replies: 10,
          lastPost: "6h ago",
        },
      ],
    },
  ];

  return (
    <section className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-600 mb-2">
            Juana Díaz Community Forum
          </h1>
          <p className="text-gray-600 text-sm italic">
            Welcome to the Juana Díaz forums — local connections, meet-ups, and community conversation.
          </p>
        </header>

        {/* Forum Boards */}
        <div className="space-y-10">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-white shadow rounded-lg overflow-hidden">
              <div className="border-b border-gray-200 bg-gray-100 px-6 py-4">
                <h2 className="text-xl font-semibold text-gray-800">{cat.title}</h2>
                <p className="text-sm text-gray-500">{cat.subtitle}</p>
              </div>
              <div className="divide-y divide-gray-100">
                {cat.topics.map((topic, tIdx) => (
                  <div
                    key={tIdx}
                    className="flex justify-between items-center px-6 py-4 hover:bg-gray-50 transition"
                  >
                    <div>
                      <h3 className="text-gray-800 font-medium">{topic.title}</h3>
                      <p className="text-sm text-gray-500">
                        Posted by {topic.author}
                      </p>
                    </div>
                    <div className="text-right text-sm text-gray-500">
                      <p>{topic.replies} replies</p>
                      <p>{topic.lastPost}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="mt-16 text-center bg-indigo-50 rounded-xl py-10">
          <h2 className="text-2xl font-semibold text-indigo-700">
            Coming Soon: Interactive Forum Tools
          </h2>
          <p className="text-gray-600 mt-2">
            Create accounts, post updates, and message local members.  
            Features for “New to the Area?” and “Moving Here?” discussions are under development.
          </p>
          <div className="mt-6">
            <a
              href="/explore"
              className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition"
            >
              Back to Explore →
            </a>
          </div>
        </div>

        {/* Placeholder for Hero Image */}
        <div className="mt-16">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=60"
            alt="Juana Díaz community hero"
            className="w-full h-72 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
