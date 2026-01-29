---
description: Generate content from markdown to platform visualization
---

# Content Generation Workflow

This workflow automates the process of creating content for GitHub Coffee posts and generating topic insights, transferring from static markdown in the `document` repository to interactive visualization in the `githubcoffee-platform`.

## Prerequisites

- Source content exists in `/Users/minhpham/aminhp93-workspace/document/areas/github-coffee/content/`
- Platform is at `/Users/minhpham/aminhp93-workspace/githubcoffee-platform/`

## Phase 1: Create Post Content in Document Repository

### 1. Create Post Directory Structure

```bash
cd /Users/minhpham/aminhp93-workspace/document/areas/github-coffee/content
mkdir post-[NUMBER]-[slug-name]
cd post-[NUMBER]-[slug-name]
```

### 2. Create Required Files

Create the following files in the post directory:

**source.md** - Main content
```markdown
# [Post Title]
*[Subtitle or tagline]*

**By [Author]**

[Introduction paragraph]

### [Section 1]
[Content]

### [Section 2]
[Content]

---
*Next week: [Teaser for next post]*
```

**visualize.md** - Visualization concept
```markdown
# Visualization: [Post Title]

> **Concept**: [Describe the interactive component or chart]

\`\`\`tsx
// Placeholder for custom component
<div className="p-4 bg-zinc-50 border border-zinc-200 rounded-lg">
  <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-2">Concept Visualization</h3>
  <p className="text-zinc-800">Interactive element coming soon...</p>
</div>
\`\`\`
```

**spokes.md** - Content distribution strategy
```markdown
# ☕ Post Spokes: [Post Title]

> **Strategy Note**: [Add specific strategy here]

---

## 🗓️ MONDAY: [Topic]
### 🎥 TikTok Script
- **Hook**: ""
- **Visual**: 
- **Body**: ""
- **Insight**: ""
- **CTA**: ""

### 📓 Substack Note
[Note content]
```

**README.md** - Post metadata
```markdown
# [Post Title]

**Category**: [Tech/Mindful Engineering/BAS]
**Read Time**: [X] min
**Status**: Draft/Published
**Published**: YYYY-MM-DD

## Summary
[Brief summary]

## Key Takeaways
1. [Takeaway 1]
2. [Takeaway 2]
3. [Takeaway 3]
```

## Phase 2: Generate Platform Entry (TSX)

### 3. Run Sync Script (if available) or Manual Creation

**Option A: Using sync-content.js**
```bash
cd /Users/minhpham/aminhp93-workspace/githubcoffee-platform
node scripts/sync-content.js
```

**Option B: Manual Creation**

Create file at `src/features/github-coffee/data/entries/[slug-name].tsx`:

```tsx
import type { KnowledgeEntry } from '@/components/knowledge-viewer/types';

export const [camelCaseName]: KnowledgeEntry = {
  id: 'post-[NUMBER]-[slug-name]',
  type: 'ARTICLE',
  title: "[Post Title]",
  category: 'Tech', // or 'Mindful Engineering' or 'BAS'
  readTime: '[X] min',
  source: 'github-coffee',
  sourceUrl: 'https://github.com/aminhp93/document/tree/main/areas/github-coffee/content/post-[NUMBER]-[slug-name]',
  summary: (
    <div className="prose prose-zinc max-w-none px-1">
      <p className="italic">Auto-generated from markdown source.</p>
    </div>
  ),
  fullSource: (
    <div className="prose prose-zinc max-w-none whitespace-pre-wrap">
      {`[Paste content from source.md here]`}
    </div>
  ),
  visualize: (
    <div className="prose prose-zinc max-w-none whitespace-pre-wrap">
      {`[Paste content from visualize.md here]`}
    </div>
  ),
  spokes: (
    <div className="prose prose-zinc max-w-none whitespace-pre-wrap">
      {`[Paste content from spokes.md here]`}
    </div>
  ),
};
```

### 4. Update Index File

Add to `src/features/github-coffee/data/index.ts`:

**At the top (exports):**
```typescript
export * from './entries/[slug-name]';
```

**In imports section:**
```typescript
import { [camelCaseName] } from './entries/[slug-name]';
```

**In githubCoffeeEntries array:**
```typescript
export const githubCoffeeEntries = [
  // ... existing entries
  [camelCaseName], // Add in chronological order
];
```

## Phase 3: Update Topic Insights

### 5. Review All Posts in Category

Identify which category the new post belongs to:
- **Tech**: Building automation, protocols, hierarchy, software-first
- **Mindful Engineering**: Presence, observation, continuous refinement
- **BAS**: Building automation systems concepts

### 6. Update Category Insight

Edit `src/features/github-coffee/data/insights/github-coffee.tsx`:

**Update the relevant category object:**

```tsx
"[Category Name]": {
  category: "[Category Name]",
  title: "[Updated Title if needed]",
  overview: (
    <p className="text-zinc-600 leading-relaxed">
      [Update to reflect new post's contribution]
    </p>
  ),
  keyThemes: [
    // Add new theme if post introduces one
    "[New theme from post]",
    // ... existing themes
  ],
  actionItems: [
    // Add new action item if applicable
    "[New actionable insight from post]",
    // ... existing items
  ],
  synthesis: (
    <div className="space-y-4 text-zinc-600">
      <p>
        <strong>[New Section if needed]:</strong> [Synthesis of new post's core message]
      </p>
      {/* ... existing synthesis */}
    </div>
  ),
  // visualization: usually stays the same unless major update
},
```

## Phase 4: Verification

### 7. Build and Test

```bash
cd /Users/minhpham/aminhp93-workspace/githubcoffee-platform
npm run build
pnpm run lint
```

### 8. Manual Verification

1. Start dev server: `npm run dev`
2. Navigate to `/goal-tracker/detail`
3. Verify:
   - New post appears in the list
   - Post content displays correctly in all tabs (Summary, Full Source, Visualize, Spokes)
   - Category filter works
   - Selecting the category shows updated insights

## Phase 5: Generate Unified Topic Insight (Optional)

### 9. Create/Update Unified Insight Document

Only when you want to create a comprehensive insight document:

**Create**: `document/areas/github-coffee/content-insight/github-coffee-insights.md`

```markdown
# Insights - GitHub Coffee: Software-First Facilities

## Core Philosophy: The Intersection of Three Principles

[Synthesize all posts into unified philosophy]

## The Problem: Fragmentation at Every Level

### In Software Engineering
[Common problems across posts]

### In Building Management
[Common problems across posts]

## The Solution: Unified Architecture

### 1. [Principle 1]
[Synthesis from relevant posts]

### 2. [Principle 2]
[Synthesis from relevant posts]

## Practical Applications

### For Software Engineers
[Actionable insights from all posts]

### For Building Owners
[Actionable insights from all posts]

## Key Takeaways
1. [Overarching takeaway 1]
2. [Overarching takeaway 2]
...
```

## Quick Reference Checklist

### For Each New Post:
- [ ] Create post directory in `document/areas/github-coffee/content/`
- [ ] Write `source.md`, `visualize.md`, `spokes.md`, `README.md`
- [ ] Create TSX entry in `src/features/github-coffee/data/entries/`
- [ ] Update `src/features/github-coffee/data/index.ts` (export, import, array)
- [ ] Review and update category insight in `insights/github-coffee.tsx`
- [ ] Run `npm run build` and `pnpm run lint`
- [ ] Verify in browser at `/goal-tracker/detail`

### For Topic Insight Updates:
- [ ] Identify which category(ies) the new content affects
- [ ] Update `keyThemes` if new theme emerges
- [ ] Update `actionItems` if new actionable insight exists
- [ ] Update `synthesis` to incorporate new post's core message
- [ ] Keep `visualization` unless major conceptual shift
- [ ] Verify insights display correctly when category is selected

## Common Patterns

### Category Assignment
- **Tech**: Anything about building automation, protocols, sensors, AI, energy
- **Mindful Engineering**: Anything about presence, observation, shipping to learn, mental models
- **BAS**: Specific building automation system concepts and patterns

### Content Structure
- **source.md**: Problem → Solution → Why It Works → Conclusion
- **visualize.md**: Interactive concept that illustrates the core principle
- **spokes.md**: Distribution strategy for social media and newsletter

### Insight Synthesis
- Extract the **core principle** (what's the fundamental truth?)
- Identify **practical applications** (how do you use this?)
- Connect to **GitHub Coffee philosophy** (how does this relate to the three principles?)

## Troubleshooting

### "No analysis available" in insights
- Check that category name in entry matches category key in insights
- Verify `allKnowledgeInsights` exports the category
- Ensure `categoryInsights` prop is passed to `KnowledgeViewer`

### Build fails
- Check for TypeScript errors in TSX entry
- Verify all imports are correct
- Ensure no duplicate exports in index.ts

### Content not showing
- Verify entry is added to `githubCoffeeEntries` array
- Check that `source` field is set to `'github-coffee'`
- Ensure entry is exported from index.ts
