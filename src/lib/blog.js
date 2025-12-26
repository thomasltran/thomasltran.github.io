/**
 * Blog utilities for loading and managing markdown posts
 */

const POSTS_PER_PAGE = 10;

/**
 * Load all posts for a given category (tech or gym)
 * @param {string} category - 'tech' or 'gym'
 * @returns {Promise<Array>} Array of post metadata sorted by date (newest first)
 */
export async function loadPosts(category) {
    // Import all markdown files from the specified category
    const modules = import.meta.glob('/src/routes/**/*.md', { eager: false });
    
    const posts = [];
    
    for (const path in modules) {
        // Check if this post belongs to the requested category
        // Path will be like: /src/routes/tech/my-post.md
        if (path.includes(`/routes/${category}/`) && !path.includes('[slug]')) {
            const module = await modules[path]();
            // Extract filename without extension as slug
            const slug = path.split('/').pop().replace('.md', '');
            
            posts.push({
                slug,
                category,
                ...module.metadata,
                // Ensure we have a date for sorting
                date: module.metadata.date || new Date().toISOString(),
            });
        }
    }
    
    // Sort by date, newest first
    return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

/**
 * Paginate posts array
 * @param {Array} posts - Array of posts
 * @param {number} page - Page number (1-indexed)
 * @returns {Object} Paginated data with posts and pagination info
 */
export function paginatePosts(posts, page = 1) {
    const totalPosts = posts.length;
    const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
    const currentPage = Math.max(1, Math.min(page, totalPages));
    
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    
    return {
        posts: posts.slice(startIndex, endIndex),
        pagination: {
            currentPage,
            totalPages,
            totalPosts,
            hasNextPage: currentPage < totalPages,
            hasPrevPage: currentPage > 1,
        }
    };
}

/**
 * Generate excerpt from content
 * @param {string} content - Full post content
 * @param {number} maxLength - Maximum length of excerpt
 * @returns {string} Excerpt
 */
export function generateExcerpt(content, maxLength = 150) {
    if (!content) return '';
    
    // Remove markdown formatting for a cleaner excerpt
    const cleanContent = content
        .replace(/#{1,6}\s+/g, '') // Remove headers
        .replace(/\*\*|__/g, '') // Remove bold
        .replace(/\*|_/g, '') // Remove italic
        .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1') // Remove links but keep text
        .replace(/```[\s\S]*?```/g, '') // Remove code blocks
        .replace(/`[^`]+`/g, '') // Remove inline code
        .trim();
    
    if (cleanContent.length <= maxLength) {
        return cleanContent;
    }
    
    return cleanContent.substring(0, maxLength).trim() + '...';
}
