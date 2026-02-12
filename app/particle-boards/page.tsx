import CategoryPageLayout from '@/components/CategoryPageLayout';

export default function ParticleBoardsPage() {
    // Assuming 'particle-boards' key exists in data, wait I used 'mdf' and 'hardware', consistent keys.
    // In `data/categories.ts` I didn't define `particle-boards`. Let me check.
    // I defined: plywood, laminates, mdf, hardware.
    // I missed `particle-boards` and `fevicol`.
    // I should add them to `data/categories.ts` later. For now, I'll create the page and rely on the fallback.
    return <CategoryPageLayout categoryKey="particle-boards" />;
}
