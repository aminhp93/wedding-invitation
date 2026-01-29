# Content Generation Rules

## Post Content Structure

### Required Files for Each Post
Every post in `document/areas/github-coffee/content/post-[N]-[slug]/` must have:
1. **source.md** - Main content (Problem → Solution → Why → Conclusion)
2. **visualize.md** - Interactive visualization concept
3. **spokes.md** - Content distribution strategy
4. **README.md** - Metadata and summary

### Platform Entry (TSX) Requirements
Every entry in `src/features/github-coffee/data/entries/[slug].tsx` must have:
1. **id**: Format `'post-[N]-[slug]'` or `'[slug]'`
2. **type**: Usually `'ARTICLE'`, can be `'REPORT'`, `'GOAL'`, `'METRIC'`
3. **title**: Clear, descriptive title
4. **category**: One of `'Tech'`, `'Mindful Engineering'`, `'BAS'`
5. **readTime**: Estimate in minutes
6. **source**: Always `'github-coffee'`
7. **sourceUrl**: Link to document repository
8. **summary**: React component with brief overview
9. **fullSource**: React component with full markdown content
10. **visualize**: React component with visualization concept
11. **spokes**: React component with distribution strategy

## Category Insights Structure

### Required Categories
GitHub Coffee insights must include these categories:
1. **"GitHub Coffee"** - Overall philosophy and unified vision
2. **"Tech"** - Building automation, protocols, software-first facilities
3. **"Mindful Engineering"** - Presence, observation, continuous refinement

### Required Fields for Each Category Insight
```typescript
{
  category: string;
  title: string;
  overview: ReactNode;
  keyThemes: string[];      // 5-6 core themes
  actionItems: string[];    // 5 actionable next steps
  synthesis: ReactNode;     // Comprehensive explanation
  visualization: ReactNode; // Interactive visual component
}
```

## Content Flow Rules

### Rule 1: Single Source of Truth
- Markdown files in `document` repository are the source
- TSX files in `githubcoffee-platform` are the presentation layer
- Never edit content in TSX files directly - update markdown first

### Rule 2: Category Consistency
- Each post belongs to exactly ONE category
- Category in entry must match a category key in insights
- Categories are case-sensitive

### Rule 3: Insight Synthesis
- Topic insights synthesize ALL posts in that category
- Update insights when adding posts that introduce new themes
- Keep insights focused on actionable principles, not post summaries

### Rule 4: Index Management
- Every new entry must be exported from `index.ts`
- Every new entry must be imported in `index.ts`
- Every new entry must be added to `githubCoffeeEntries` array
- Maintain chronological order in the array

## Naming Conventions

### File Names
- **Markdown**: `post-[NUMBER]-[kebab-case-slug]/`
- **TSX entries**: `[kebab-case-slug].tsx`
- **Export names**: `[camelCaseSlug]`

### Examples
- Directory: `post-1-pause-before-code/`
- TSX file: `pause.tsx` (can be shortened)
- Export: `export const pause: KnowledgeEntry`

## Content Quality Standards

### Markdown Content
- Use clear headings (###) for sections
- Include concrete examples
- End with actionable takeaway
- Link to related posts when relevant

### TSX Content
- Wrap markdown in template literals with proper indentation
- Use `prose prose-zinc max-w-none` for styling
- Preserve markdown formatting (don't convert to JSX)
- Include `whitespace-pre-wrap` for proper line breaks

### Insights
- Extract principles, not just summaries
- Focus on "why" and "how", not just "what"
- Connect to GitHub Coffee philosophy
- Provide specific, actionable items

## Verification Checklist

### Before Committing
- [ ] Build passes: `npm run build`
- [ ] Lint passes: `pnpm run lint`
- [ ] Entry appears in `/goal-tracker/detail`
- [ ] All tabs work (Summary, Full Source, Visualize, Spokes)
- [ ] Category filter shows the entry
- [ ] Selecting category shows relevant insights
- [ ] Insights include themes from new post

## Anti-Patterns to Avoid

### ❌ Don't
- Create individual insight files per post
- Use different category names in entry vs insights
- Edit TSX content directly without updating markdown
- Skip updating category insights when adding posts
- Forget to add entry to `githubCoffeeEntries` array

### ✅ Do
- Create one unified insight per category
- Ensure category consistency across entry and insights
- Update markdown first, then regenerate TSX
- Update insights to reflect new post's contribution
- Always update index.ts when adding entries

## Automation Opportunities

### Scripts to Consider
1. **sync-content.js** - Convert markdown to TSX entries
2. **update-insights.js** - Suggest insight updates based on new posts
3. **validate-structure.js** - Verify all required files exist
4. **generate-index.js** - Auto-generate index.ts exports

### Manual Steps (Cannot Automate)
- Writing quality content
- Designing visualizations
- Synthesizing insights across posts
- Determining category assignments
