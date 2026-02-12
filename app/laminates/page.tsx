import CategoryPageLayout from '@/components/CategoryPageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Decorative Laminates | Plywood Stores',
    description: 'Wide range of decorative laminates from Merino, Greenlam, and Century. Transform your interiors with premium surfacing solutions.',
};

export default function LaminatesPage() {
    return <CategoryPageLayout categoryKey="laminates" />;
}
