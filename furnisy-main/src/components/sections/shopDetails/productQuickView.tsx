import React from 'react'
import Image from 'next/image'
import { Dialog, DialogContent, DialogClose, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Close } from '@/lib/icon'
import ProductShortInfo from './productShortInfo'
import Link from 'next/link'

export type ProductQuickViewType = {
    isDialogOpen: boolean,
    setIsDialogOpen:  (open: boolean) => void,
    product: {
        id: string | number,
        thumbnail: string,
        title: string,
        description?: string,
        price: number,
        discountPercentage: number,
        rating?: number,
        totalRating?: string,
        stock: number,
        category?: string,
        tags?: [""]
    }
}
const ProductQuickView = ({ isDialogOpen, setIsDialogOpen, product }: ProductQuickViewType) => {
    return (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            {/* <DialogTrigger className='text-primary-foreground'>Open</DialogTrigger> */}
            <DialogContent className='max-w-[1230px] p-0 sm:rounded-none rounded-none border-0 overflow-y-auto [&_.close-orginal]:hidden overflow-visible'>
                <DialogTitle className='hidden'></DialogTitle>
                <DialogDescription className='hidden'></DialogDescription>
                <DialogClose className='absolute right-0 -top-10 flex justify-center items-center border-none text-[#E5E2E1] hover:text-white transition-all duration-500'>
                    <Close className='w-8 h-8' />
                </DialogClose>
                <div className='max-h-[667px] h-full flex md:flex-row flex-col items-start gap-10 p-10 overflow-y-auto scrollbar-hidden'>
                    <div className='max-w-[560px] w-full relative bg-[#F2F2F2]'>
                        <Image
                            width={560}
                            height={600}
                            sizes='100vw'
                            style={{ width: "100%", height: "auto" }}
                            src={product.thumbnail}
                            className='object-contain'
                            alt='img'
                        />
                        <Link href="/product-details" className='block w-full bg-primary text-white text-center text-xl font-medium leading-[150%] py-[15px] px-7.5 absolute bottom-0 left-0 cursor-pointer'>View Details</Link>
                    </div>
                    <ProductShortInfo id={product.id} thumbnail={product.thumbnail} title={product?.title} price={product.price} discountPercentage={product.discountPercentage} stock={product.stock} />
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default ProductQuickView