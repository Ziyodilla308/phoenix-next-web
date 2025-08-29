import React from 'react'
import PageHeader from '@/components/sections/pageHeader'
import Newsletter from '@/components/sections/newsletter'
import InstagramGallery from '@/components/sections/instagramGallery'
import BlogArtical from './blogArtical'
import RelatedBlogs from './RelatedBlogs'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Blog Single",
    description: "Detailed view of a single blog post."
}

const BlogSingle = () => {
    return (
        <main>
            <PageHeader
                pageTitle='Blog'
                currentPage='The Ultimate Guide to Choosing a Perfect Furniture for Your Home.'
                breadcrumbLabel='Blog'
                breadcrumbLink='blog-1'
            />
            <BlogArtical />
            <RelatedBlogs />
            <Newsletter />
            <InstagramGallery />
        </main>
    )
}

export default BlogSingle