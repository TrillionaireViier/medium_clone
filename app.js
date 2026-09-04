/* ============================================
   Medium Clone — Application Logic
   ============================================ */

const trendingArticles = [
    {
        rank: "01",
        author: "Sarah Drasner",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop",
        title: "The End of Localhost: How Cloud Environments are Changing Development",
        date: "Oct 15",
        readTime: "6 min read"
    },
    {
        rank: "02",
        author: "Addy Osmani",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop",
        title: "Image Optimization in 2026: WebP, AVIF, and Beyond",
        date: "Oct 12",
        readTime: "9 min read"
    },
    {
        rank: "03",
        author: "UX Collective",
        avatar: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=50&h=50&fit=crop",
        title: "Why Minimalist Design is Failing Us",
        date: "Oct 10",
        readTime: "5 min read"
    },
    {
        rank: "04",
        author: "Towards Data Science",
        avatar: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=50&h=50&fit=crop",
        title: "Training Small Language Models on Your Laptop",
        date: "Oct 14",
        readTime: "12 min read"
    },
    {
        rank: "05",
        author: "Dan Abramov",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop",
        title: "My Decade with React: Lessons Learned",
        date: "Oct 08",
        readTime: "15 min read"
    },
    {
        rank: "06",
        author: "The Startup",
        avatar: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=50&h=50&fit=crop",
        title: "How to Bootstrap a SaaS to $10k MRR in 6 Months",
        date: "Oct 11",
        readTime: "8 min read"
    }
];

const feedArticles = [
    {
        author: "David Chen",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop",
        title: "The Architecture of Tomorrow: Building Scalable Systems in 2026",
        snippet: "The landscape of software engineering has shifted dramatically over the past few years. What used to be considered best practices are now viewed as legacy patterns.",
        date: "Oct 12",
        readTime: "8 min read",
        tag: "Architecture",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop"
    },
    {
        author: "Elena Rodriguez",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop",
        title: "Why I Stopped Using To-Do Lists and Started Time Blocking",
        snippet: "After years of struggling with endless lists of tasks that just kept growing, I decided to fundamentally change how I approach productivity. Here is exactly what I did.",
        date: "Oct 14",
        readTime: "5 min read",
        tag: "Productivity",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop"
    },
    {
        author: "Marcus Johnson",
        avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=50&h=50&fit=crop",
        title: "Understanding CSS Grid Subgrid Once and For All",
        snippet: "Subgrid has finally landed in all major browsers. It is time to stop avoiding it and learn how it can drastically simplify your complex layouts.",
        date: "Oct 09",
        readTime: "7 min read",
        tag: "CSS",
        image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=400&h=300&fit=crop"
    },
    {
        author: "AI Perspectives",
        avatar: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=50&h=50&fit=crop",
        title: "The Ethical Implications of Sentient Code",
        snippet: "As our models become more complex, the lines between simulation and sentience blur. How do we regulate systems we no longer fully understand?",
        date: "Oct 16",
        readTime: "11 min read",
        tag: "Artificial Intelligence",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=300&fit=crop"
    }
];

// Initialize Home Page
function initHome() {
    // 1. Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    if (navbar && !navbar.classList.contains('reading-nav')) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 350) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // 2. Render Trending
    const trendingGrid = document.getElementById('trending-grid');
    if (trendingGrid) {
        trendingGrid.innerHTML = trendingArticles.map(article => `
            <div class="trending-card">
                <div class="trending-rank">${article.rank}</div>
                <div class="trending-content">
                    <div class="author">
                        <img src="${article.avatar}" alt="${article.author}">
                        <span>${article.author}</span>
                    </div>
                    <h3><a href="article.html">${article.title}</a></h3>
                    <div class="meta">${article.date} · ${article.readTime}</div>
                </div>
            </div>
        `).join('');
    }

    // 3. Render Feed
    const articleFeed = document.getElementById('article-feed');
    if (articleFeed) {
        articleFeed.innerHTML = feedArticles.map(article => `
            <article class="feed-card">
                <div class="feed-card-content">
                    <div class="author">
                        <img src="${article.avatar}" alt="${article.author}">
                        <span>${article.author}</span>
                    </div>
                    <a href="article.html">
                        <h2>${article.title}</h2>
                        <p>${article.snippet}</p>
                    </a>
                    <div class="meta">
                        <div class="meta-left">
                            <span>${article.date}</span>
                            <span>·</span>
                            <span>${article.readTime}</span>
                            <span>·</span>
                            <span class="tag">${article.tag}</span>
                        </div>
                        <button class="icon-btn" title="Save"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg></button>
                    </div>
                </div>
                <a href="article.html" class="feed-card-image">
                    <img src="${article.image}" alt="${article.title}">
                </a>
            </article>
        `).join('');
    }

    // 4. Hero Animation (Floating M's)
    const animContainer = document.getElementById('hero-animation');
    if (animContainer) {
        const letters = "MMM MMM M MM MMM M MM M M M MM MMM M MM M M M MMM".split(' ');
        letters.forEach((l, i) => {
            const span = document.createElement('span');
            span.textContent = l;
            span.style.fontSize = Math.random() * 20 + 14 + 'px';
            span.style.margin = '4px 8px';
            span.style.opacity = Math.random() * 0.5 + 0.1;
            span.style.transition = 'opacity 2s ease';
            
            // Randomly pulse opacity
            setInterval(() => {
                span.style.opacity = Math.random() * 0.5 + 0.1;
            }, Math.random() * 3000 + 2000);
            
            animContainer.appendChild(span);
        });
    }
}

// Initialize Article Page
function initArticle() {
    const clapBtn = document.getElementById('clap-btn');
    const clapCount = document.getElementById('clap-count');
    
    if (clapBtn && clapCount) {
        let claps = 4200;
        let hasClapped = false;
        
        clapBtn.addEventListener('click', () => {
            if (!hasClapped) {
                claps += 1;
                clapBtn.classList.add('clapped');
                hasClapped = true;
            } else {
                claps += 1; // Medium lets you clap multiple times!
            }
            
            // Formatting
            if (claps >= 1000) {
                clapCount.textContent = (claps / 1000).toFixed(1) + 'K';
            } else {
                clapCount.textContent = claps;
            }
            
            // Tiny animation
            clapBtn.style.transform = 'scale(1.2)';
            setTimeout(() => {
                clapBtn.style.transform = 'scale(1)';
            }, 150);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initHome();
    initArticle();
});
