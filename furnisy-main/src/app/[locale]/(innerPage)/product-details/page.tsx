import React from 'react'
import { Metadata } from 'next'
import InstagramGallery from '@/components/sections/instagramGallery'
import Newsletter from '@/components/sections/newsletter'
import ProductDetailsTabView from '@/components/sections/shopDetails/productDetailsTabView'
import ProductShortInfo from '@/components/sections/shopDetails/productShortInfo'
import ProductPreview from '@/components/sections/shopDetails/productPreview'
import RelatedProducts from '@/components/sections/shopDetails/relatedProducts'

export const metadata: Metadata = {
    title: "Product Details",
    description: "View product details."
}

const ProductDetailsOne = () => {
    return (
        <main>
            <div className='container'>
                <div className='grid lg:grid-cols-[40.9%_auto] md:grid-cols-2 grid-cols-1 xl:gap-15 gap-10 lg:mt-25 mt-15'>
                    <ProductPreview />
                    <ProductShortInfo
                        id={1}
                        isSiteMapShow={true}
                        price={219}
                        title='modern dark wood chair'
                        thumbnail='/images/product-details/img-1.webp'
                        stock={99}
                        discountPercentage={0}
                    />
                </div>
                <ProductDetailsTabView />
            </div>
            <RelatedProducts />
            <Newsletter />
            <InstagramGallery />
        </main>
    )
}

export default ProductDetailsOne