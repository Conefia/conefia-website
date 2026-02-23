/**
 * Server-side Base44 API utility.
 * Uses BASE44_API_KEY and BASE44_APP_ID from environment variables.
 */

const BASE44_BASE_URL = 'https://app.base44.com/api/apps';

/**
 * Fetch testimonials from Base44 API.
 * @param {string} [sort='-created_date'] - Sort order
 * @param {number} [limit=10] - Max number of results
 * @returns {Promise<Array>} Array of testimonial objects
 */
export async function fetchTestimonials(sort = '-created_date', limit = 10) {
    const appId = process.env.BASE44_APP_ID;
    const apiKey = process.env.BASE44_API_KEY;

    if (!appId || !apiKey) {
        console.error('Missing BASE44_APP_ID or BASE44_API_KEY environment variables');
        return [];
    }

    const url = `${BASE44_BASE_URL}/${appId}/entities/Testimonial?sort=${encodeURIComponent(sort)}&limit=${limit}`;

    const response = await fetch(url, {
        headers: {
            'api_key': apiKey,
            'Content-Type': 'application/json',
        },
        next: { revalidate: 300 }, // Cache for 5 minutes
    });

    if (!response.ok) {
        console.error(`Base44 API error: ${response.status} ${response.statusText}`);
        return [];
    }

    return response.json();
}
