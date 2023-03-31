import { notFound } from 'next/navigation';
import { allBlogs } from '@/.contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { getMDXComponents } from '@/components/ui/MdxComponents';
import type { Blog } from '@/.contentlayer/generated';

export const generateStaticParams = () => {
    return allBlogs.map((post) => ({
        slug: post.slug,
    }));
};

const Render = ({
    props,
    params,
}: {
    props: Blog;
    params: {
        slug: string;
    };
}) => {
    const MDXComponents = getMDXComponents({ params });
    const Component = useMDXComponent(props.body.code);

    return (
        <div className="flex flex-col w-full max-w-4xl pb-3 space-y-9 text-isSystemLightTertiary ">
            <Component components={{ ...MDXComponents }} />
        </div>
    );
};

const BlogPage = async ({ params }: { params: { slug: string } }) => {
    const content = allBlogs.find((post) => post.slug === params.slug);

    if (!content) return notFound();
    else {
        return (
            <section className="p-3">
                <Render props={content} params={params} />
            </section>
        );
    }
};

export default BlogPage;
