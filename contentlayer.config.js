import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
    slug: {
        type: 'string',
        resolve: (doc) => doc._raw.flattenedPath,
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
