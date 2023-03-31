import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import GithubSlugger from 'github-slugger';

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
    slug: {
        type: 'string',
        resolve: (doc) => doc._raw.flattenedPath,
    },
    headings: {
        type: 'json',
        resolve: async (doc) => {
            const slugger = new GithubSlugger();
            const regXHeader = /\n\n(?<flag>#{1,6})\s+(?<content>.+)/g;

            const headings = Array.from(doc.body.raw.matchAll(regXHeader)).map(
                ({ groups }) => {
                    const flag = groups?.flag;
                    const content = groups?.content;
                    return {
                        heading: flag?.length,
                        text: content,
                        slug: content ? slugger.slug(content) : undefined,
                    };
                }
            );

            return headings;
        },
    },
};

export const Blog = defineDocumentType(() => ({
    name: 'Blog',
    filePathPattern: `**/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: {
            type: 'string',
            required: false,
        },
        publishedAt: {
            type: 'string',
            required: false,
        },
        summary: {
            type: 'string',
            required: false,
        },
        image: {
            type: 'string',
        },
    },
    computedFields,
}));

export default makeSource({
    contentDirPath: 'content',
    documentTypes: [Blog],
    mdx: {
        esbuildOptions(options) {
            options.target = 'esnext';
            return options;
        },
        remarkPlugins: [[remarkGfm]],
        rehypePlugins: [
            [rehypeSlug],
            [
                rehypePrettyCode,

                {
                    theme: 'one-dark-pro',
                    tokensMap: {
                        fn: 'entity.name.function',
                        objKey: 'meta.object-literal.key',
                    },
                    onVisitLine(node) {
                        if (node.children.length === 0) {
                            node.children = [{ type: 'text', value: ' ' }];
                        }
                    },
                    onVisitHighlightedLine(node) {
                        node.properties.className.push('line--highlighted');
                    },
                    onVisitHighlightedWord(node) {
                        console.log(node);
                        node.properties.className.push('word--highlighted');
                    },
                },
            ],
            [
                rehypeAutolinkHeadings,
                {
                    behavior: 'wrap',
                    properties: {
                        className: ['anchor'],
                    },
                },
            ],
        ],
    },
});
