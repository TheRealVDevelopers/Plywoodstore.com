import CategoryPageLayout from '@/components/CategoryPageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Plywood | Best Plywood Store in New Delhi',
    description: 'Explore the best quality Plywood from top brands like Century, Greenply, and Mikasa. Authorized dealers for premium plywood solutions in Delhi.',
};

export default function PlywoodPage() {
    return <CategoryPageLayout categoryKey="plywood" />;
}
