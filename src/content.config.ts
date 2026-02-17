import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			tags: z.array(z.string()),
			link: z.string().url().optional(),
			featured: z.boolean().default(false),
		}),
});

const tools = defineCollection({
	loader: glob({ base: './src/content/tools', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			category: z.enum(["Frontend", "Backend", "Others"]),
			icon: image(),
			url: z.string().url().optional(),
			order: z.number().optional(),
		}),
});

const journey = defineCollection({
	loader: glob({ base: './src/content/journey', pattern: '**/[!_]*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		kind: z.enum(["job", "school", "project", "other"]),
		period: z.string().optional(),
		startDate: z.coerce.date().optional(),
		endDate: z.coerce.date().optional(),
		location: z.string().optional(),
		order: z.number().optional(),
	}),
});

export const collections = { blog, tools, journey };
