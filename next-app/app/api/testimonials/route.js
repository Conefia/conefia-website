import { fetchTestimonials } from '@/lib/base44Api';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const testimonials = await fetchTestimonials();
        return NextResponse.json(testimonials);
    } catch (error) {
        console.error('Error fetching testimonials:', error);
        return NextResponse.json([], { status: 500 });
    }
}
