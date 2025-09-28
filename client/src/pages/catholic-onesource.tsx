import { ExternalLink, Heart, Book, Radio, Tv, Globe, Church, Cross } from "lucide-react";
import { useState } from "react";

interface CatholicSiteCard {
  id: number;
  title: string;
  description: string;
  url: string;
  category: string;
  icon: React.ReactNode;
  color: string;
}

// Function to generate website preview URL using Thum.io
const getWebsitePreview = (url: string, width: number = 300): string => {
  return `https://image.thum.io/get/width/${width}/crop/600/noanimate/${url}`;
};

export default function CatholicOneSource() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const catholicSites: CatholicSiteCard[] = [
    {
      id: 1,
      title: "Vatican.va",
      description: "Official Vatican website with papal documents, news, and teachings from the Holy See.",
      url: "https://www.vatican.va/",
      category: "Official",
      icon: <Church className="w-6 h-6" />,
      color: "from-yellow-400 to-yellow-600"
    },
    {
      id: 2,
      title: "EWTN",
      description: "Global Catholic Television Network providing news, shows, and spiritual content 24/7.",
      url: "https://www.ewtn.com/",
      category: "Media",
      icon: <Tv className="w-6 h-6" />,
      color: "from-blue-400 to-blue-600"
    },
    {
      id: 3,
      title: "Catholic Answers",
      description: "Catholic Answers providing apologetics, Q&A, and resources for defending the faith.",
      url: "https://www.catholic.com/",
      category: "Apologetics",
      icon: <Book className="w-6 h-6" />,
      color: "from-green-400 to-green-600"
    },
    {
      id: 4,
      title: "Catholic News Agency",
      description: "Leading source for Catholic news and analysis from around the world.",
      url: "https://www.catholicnewsagency.com/",
      category: "News",
      icon: <Globe className="w-6 h-6" />,
      color: "from-purple-400 to-purple-600"
    },
    {
      id: 5,
      title: "Formed",
      description: "Catholic streaming service with movies, books, audiobooks, and study programs.",
      url: "https://formed.org/",
      category: "Media",
      icon: <Tv className="w-6 h-6" />,
      color: "from-indigo-400 to-indigo-600"
    },
    {
      id: 7,
      title: "USCCB",
      description: "United States Conference of Catholic Bishops with resources and official statements.",
      url: "https://www.usccb.org/",
      category: "Official",
      icon: <Cross className="w-6 h-6" />,
      color: "from-teal-400 to-teal-600"
    },
    {
      id: 8,
      title: "Aleteia",
      description: "Catholic lifestyle magazine covering faith, culture, and daily Christian living.",
      url: "https://aleteia.org/",
      category: "Lifestyle",
      icon: <Heart className="w-6 h-6" />,
      color: "from-pink-400 to-pink-600"
    },
    {
      id: 9,
      title: "Catholic World Report",
      description: "News, commentary, and analysis on Catholic Church and world affairs.",
      url: "https://www.catholicworldreport.com/",
      category: "News",
      icon: <Globe className="w-6 h-6" />,
      color: "from-orange-400 to-orange-600"
    },
    {
      id: 10,
      title: "Pints with Aquinas",
      description: "Matt Fradd's podcast and resources exploring Catholic philosophy, theology, and culture.",
      url: "https://pintswithaquinas.com/",
      category: "Podcasts",
      icon: <Radio className="w-6 h-6" />,
      color: "from-amber-400 to-amber-600"
    },
    {
      id: 11,
      title: "Catholic T-Shirt Club",
      description: "Faith-inspired apparel and accessories for modern Catholics living their faith boldly.",
      url: "https://www.catholictshirtclub.com/",
      category: "Lifestyle",
      icon: <Heart className="w-6 h-6" />,
      color: "from-rose-400 to-rose-600"
    },
    {
      id: 12,
      title: "SENT",
      description: "Empowering Catholic entrepreneurs and professionals to live out their faith in the marketplace.",
      url: "https://www.sentventures.com/",
      category: "Lifestyle",
      icon: <Heart className="w-6 h-6" />,
      color: "from-cyan-400 to-cyan-600"
    },
    {
      id: 13,
      title: "St. Paul Center",
      description: "Dr. Scott Hahn's center for biblical theology, offering courses and resources for deeper Scripture study.",
      url: "https://my.stpaulcenter.com/",
      category: "Apologetics",
      icon: <Book className="w-6 h-6" />,
      color: "from-emerald-400 to-emerald-600"
    }
  ];

  // Filter sites based on selected category
  const filteredSites = selectedCategory === 'All' 
    ? catholicSites 
    : catholicSites.filter(site => site.category === selectedCategory);

  const handleCardClick = (url: string, title: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="w-full max-w-7xl h-full max-h-[85vh] glass-morphism rounded-2xl shadow-2xl border border-white/20 overflow-hidden" 
         style={{ backgroundColor: "var(--glass-bg)" }}>
      
      {/* Header */}
      <div className="p-6 border-b border-white/20">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center">
            <Church className="text-white w-5 h-5" />
          </div>
          <div>
            <h1 className="text-white font-semibold text-2xl" data-testid="page-title">Catholic OneSource</h1>
            <p className="text-white/70 text-sm">Your Gateway to Catholic Resources Online</p>
          </div>
        </div>
      </div>
      
      {/* Categories Filter */}
      <div className="p-6 pb-4">
        <div className="flex flex-wrap gap-2">
          {['All', 'Official', 'Media', 'News', 'Apologetics', 'Podcasts', 'Lifestyle'].map((category) => (
            <button 
              key={category}
              onClick={() => handleCategoryFilter(category)}
              className={`px-4 py-2 rounded-lg transition-all duration-200 text-sm border ${
                selectedCategory === category
                  ? 'bg-white/20 text-white border-white/40'
                  : 'text-white/70 hover:text-white hover:bg-white/10 border-white/20 hover:border-white/30'
              }`}
              data-testid={`filter-${category.toLowerCase()}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {/* Website Cards Grid */}
      <div className="flex-1 overflow-y-auto scrollbar-hide p-6 pt-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSites.map((site) => (
            <div 
              key={site.id}
              onClick={() => handleCardClick(site.url, site.title)}
              className="group cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
              data-testid={`card-${site.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
            >
              <div className="message-bubble bg-white/15 border border-white/20 rounded-2xl p-6 h-full flex flex-col space-y-4 hover:border-white/30">
                
                {/* Website Preview & Category */}
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-white/50 text-xs font-medium px-3 py-1 rounded-full border border-white/20">
                      {site.category}
                    </span>
                  </div>
                  <div className="w-full h-40 bg-white/10 rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300 border border-white/20">
                    <img
                      src={getWebsitePreview(site.url)}
                      alt={`Preview of ${site.title}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                      data-testid={`preview-${site.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    />
                    <div 
                      className={`w-full h-full bg-gradient-to-br ${site.color} rounded-xl hidden items-center justify-center`}
                      style={{ display: 'none' }}
                    >
                      <div className="text-center">
                        {site.icon}
                        <p className="text-white text-xs mt-2">Preview unavailable</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Site Title */}
                <div>
                  <h3 className="text-white font-semibold text-lg group-hover:text-blue-200 transition-colors duration-200">
                    {site.title}
                  </h3>
                </div>
                
                {/* Site Description */}
                <p className="text-white/70 text-sm leading-relaxed flex-1">
                  {site.description}
                </p>
                
                {/* Visit Link */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-white/50 text-xs">Click to visit</span>
                  <ExternalLink className="w-4 h-4 text-white/50 group-hover:text-white/70 transition-colors duration-200" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Footer spacing */}
        <div className="h-6" />
      </div>
    </div>
  );
}