'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import currencyFormatter from 'currency-formatter';
import { Eye, Heart, ShopCart, Shuffle } from '@/lib/icon'
import { Button } from '@/components/ui/button'
import Tooltip from '@/components/ui/tooltip'

import ProductSorting from '@/components/sections/shopDetails/productSorting'
import Card, { CardDiscount, CardFooter, CardHeader, CardIcons, CardImg, CardPrice, CardLabel, CardTitle, CardPriceEnhanced } from '@/components/ui/card'
import ProductsCategory from './productsCategory'
import ShopSidebar from './shopSidebar'
import Pagination from '@/components/ui/pagination'
import ProductQuickView from './productQuickView';
import { addToCart } from '@/lib/features/AddToCartSlice';
import { useAppDispatch } from '@/lib/reduxHooks';
import calcluteDiscount from '@/lib/calcluteDiscount';
import { addToCompare } from '@/lib/features/CompareProductsSlice';
import { addToWishlist } from '@/lib/features/AddToWishlistSlice';
import { ProductShortInfoPropsType } from './productShortInfo';
import { ProductType } from '@/types/productType';

type ProductsViewPropsType = {
    isCategoryShow: boolean;
    isSortingProductTop: boolean;
    isGridDefaultView: boolean;
    isSidebarCategoryHide: boolean;
    data: ProductType[];
}


const ProductsView = ({ isCategoryShow, isSortingProductTop, isGridDefaultView, isSidebarCategoryHide, data }: ProductsViewPropsType) => {
    const [isGridView, setIsGridView] = useState<boolean>(isGridDefaultView)
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [product, setProduct] = useState<ProductShortInfoPropsType>({
        id: 0,
        thumbnail: "",
        price: 0,
        discountPercentage: 0,
        title: '',
        stock: 0
    });
    const dispatch = useAppDispatch()

    return (
        <>
            <div className='container lg:pt-25 lg:pb-25 pt-15 pb-15'>
                {
                    isCategoryShow
                    &&
                    <div className='mb-7.5'>
                        <ProductsCategory />
                        <div className='mt-15'>
                            <ProductSorting isGridView={isGridView} setIsGridView={setIsGridView} />
                        </div>
                    </div>
                }
                <div className='grid lg:grid-cols-[23.3%_auto] grid-cols-1 gap-7.5'>
                    <ShopSidebar isSidebarCategoryHide={isSidebarCategoryHide} />
                    <div>
                        {isSortingProductTop && <ProductSorting isGridView={isGridView} setIsGridView={setIsGridView} />}
                        {
                            isGridView ?
                                <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-5 gap-y-10 mt-7.5'>
                                    {
                                        data.map((prd) => {
                                            return (
                                                <Card key={prd.id}>
                                                    <CardHeader>
                                                        <CardImg src={prd.thumbnail} height={400} width={340} />
                                                        <CardLabel isLabel={prd.name ? prd.name : false}>{prd.name}</CardLabel>
                                                        <CardIcons product={prd} />
                                                    </CardHeader>
                                                    <CardFooter>
                                                        <CardTitle path="/product-details">{prd.name}</CardTitle>
                                                        <CardLabel>{prd.description}</CardLabel>
                                                        <CardPriceEnhanced price={prd.price} />
                                                    </CardFooter>
                                                </Card>
                                            )
                                        })
                                    }
                                </div>
                                :
                                <div className='flex flex-col gap-7.5 mt-7.5'>
                                    {
                                        data.map(({ category, id, price, thumbnail, name }) => {
                                             const finalPrice = discountPercentage ? calcluteDiscount(price, discountPercentage) : price;
                                            return (
                                                <div key={id} className='grid sm:grid-cols-[32.2%_auto] grid-cols-1 items-center gap-7.5'>
                                                    <div className='bg-[#F2F2F2] rounded-xl'>
                                                        <Image width={341} height={400} sizes='100vw' src={thumbnail} alt="img" className='w-full rounded-xl' />
                                                    </div>
                                                    <div>
                                                        <Link href={"/product-details"} className='text-[clamp(1.25rem,1.0769rem+0.7692vw,2rem)] leading-[131%] text-secondary-foreground font-medium capitalize line-clamp-1 hover:text-primary-foreground transition-all duration-500'>{title}</Link>
                                                        <p className='text-gray-1-foreground leading-[155%] mt-2.5'>Elevate your dining experience with the Baxter Colette Chair, a perfect blend of modern elegance and timeless craftsmanship.</p>
                                                        <p className='text-secondary-foreground lg:text-2xl md:text-xl text-lg font-medium mt-5'>
                                                            {discountPercentage ? <del className='text-gray-3-foreground font-normal'>{currencyFormatter.format(price, { code: 'USD' })}</del> : null} {' '}
                                                            <span>{currencyFormatter.format(finalPrice, { code: 'USD' })}</span> USD
                                                        </p>
                                                        <div className='flex gap-2.5 mt-5'>
                                                            <Button
                                                                size={"xm"}
                                                                
                                                                onClick={() => dispatch(addToCart({ id, thumbnail, quantity: 1, price: finalPrice, color: "red", size: "m", title }))}
                                                                className='px-4 h-9 lg:text-sm'>
                                                                Add To Cart
                                                            </Button>
                                                            <Tooltip text={"Add To Whitelist"} className='bg-primary text-white' arrowCalss='bg-primary'>
                                                                <div
                                                                    onClick={() => dispatch(addToWishlist({ id, date: "May 14, 2025", price, discountPercentage, thumbnail, title, color: colors[0]?.code || '', size: 'xl', stock }))}
                                                                    className='w-9 h-9 rounded-sm flex items-center justify-center border-[1.5px] border-primary text-secondary-foreground cursor-pointer hover:bg-primary hover:text-white transition-all duration-500'
                                                                >
                                                                    <Heart className='w-5 h-5' strokeWidth={0.5} />
                                                                </div>
                                                            </Tooltip>
                                                            <Tooltip text={"Quick view"} className='bg-primary text-white' arrowCalss='bg-primary'>
                                                                <div
                                                                    onClick={() => { setIsDialogOpen(true), setProduct({ id, thumbnail, price, discountPercentage, title, stock }) }}
                                                                    className='w-9 h-9 rounded-sm flex items-center justify-center border-[1.5px] border-primary text-secondary-foreground cursor-pointer hover:bg-primary hover:text-white transition-all duration-500'
                                                                >
                                                                    <Eye className='w-5 h-5' strokeWidth={0.5} />
                                                                </div>
                                                            </Tooltip>
                                                            <Tooltip text={"Compare Products"} className='bg-primary text-white' arrowCalss='bg-primary'>
                                                                <div
                                                                    onClick={() => dispatch(addToCompare({ id, price, discountPercentage, thumbnail, title, stock, color: colors[0]?.code || '', size: 'xl' }))}
                                                                    className='w-9 h-9 rounded-sm flex items-center justify-center border-[1.5px] border-primary text-secondary-foreground cursor-pointer hover:bg-primary hover:text-white transition-all duration-500'
                                                                >
                                                                    <Shuffle className='w-5 h-5' strokeWidth={0.5} />
                                                                </div>
                                                            </Tooltip>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                        }
                        {data.length > 9 && <Pagination />}
                    </div>
                </div>
                <ProductQuickView isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} product={product} />
            </div>
        </>
    )
}

export default ProductsView