'use client'
import React from 'react'
import Image from 'next/image'
import currencyFormatter from 'currency-formatter';
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { Close } from '@/lib/icon'
import { Button } from '@/components/ui/button'
import { useAppSelector } from '@/lib/reduxHooks'
import calcluteDiscount from '@/lib/calcluteDiscount'
import { useDispatch } from 'react-redux';
import { addToCart } from '@/lib/features/AddToCartSlice';
import Link from 'next/link';
import { removeToWishlist } from '@/lib/features/AddToWishlistSlice';

const WishlistPopup = () => {
    const products = useAppSelector((product) => product.addToWishlist.products)
    const dispatch = useDispatch()
    return (
        <Dialog>
            <DialogTrigger className='text-primary-foreground'>Wishlist</DialogTrigger>
            <DialogContent className='bg-background p-15 sm:rounded-none max-w-[1080px]'>
                <div className='border-[1.5px] border-[#E5E2E1] py-7.5 overflow-x-auto'>
                    <div className='border-b-[1.5px] border-[#E5E2E1] px-7.5 pb-5 flex justify-between'>
                        <DialogTitle className='text-secondary-foreground font-inter text-xl font-medium leading-[150%]'>Wishlist(3)</DialogTitle>
                        <DialogClose className='w-7.5 h-7.5 rounded-full bg-background shadow-3xl flex justify-center items-center text-gray-2-foreground hover:text-secondary-foreground transition-all duration-500'>
                            <Close className='w-[18px] h-[18px]' />
                        </DialogClose>
                    </div>
                    <div className='overflow-x-auto'>
                        {
                            products.length ?

                                <div className='min-w-[600px]'>
                                    {
                                        products.map(({ date, id, price, discountPercentage, thumbnail, title, color, size }) => {
                                            const finalPrice = discountPercentage ? calcluteDiscount(price, discountPercentage) : price;

                                            return (
                                                <div key={id} className='px-7.5 py-5 flex items-center gap-5  border-b-[1.5px] border-[#E5E2E1]'>
                                                    <p
                                                        onClick={() => dispatch(removeToWishlist(id))}
                                                        className='text-gray-1-foreground cursor-pointer hover:text-secondary-foreground transition-all duration-500'
                                                    >
                                                        <Close className='size-7.5' />
                                                    </p>
                                                    <div className='bg-home-bg-1 p-1.5'>
                                                        <Image width={87} height={87} sizes='100vw' src={thumbnail} alt='img' className='max-h-[87px] object-contain' />
                                                    </div>
                                                    <div>
                                                        <p className='text-secondary-foreground capitalize'>{title}</p>
                                                        <span className='text-secondary-foreground text-base block mt-1'>
                                                            {discountPercentage ? <del className='text-gray-3-foreground font-normal'>{currencyFormatter.format(price, { code: 'USD' })}</del> : null} {' '}
                                                            <span>{currencyFormatter.format(finalPrice, { code: 'USD' })}</span>
                                                        </span>
                                                        <span className='text-gray-3-foreground text-base block mt-1'>{date}</span>
                                                    </div>
                                                    <Button
                                                        variant={"outline"}
                                                        onClick={() => dispatch(addToCart({ id, price: finalPrice, quantity: 1, thumbnail, title, color, size }))}
                                                        className='lg:py-3 lg:px-6 lg:text-lg text-gray-1-foreground border-gray-1 ml-auto'
                                                    >
                                                        Add To cart
                                                    </Button>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                :
                                <p className='text-secondary-foreground font-semibold text-2xl text-center capitalize py-20'>No Products in your Wishlist Popup</p>
                        }
                    </div>
                    <div className='flex flex-wrap justify-between gap-5 px-7.5 pt-7.5'>
                        <Button  asChild className='lg:py-3 lg:px-6 lg:text-lg'>
                            <Link href={"/wishlist"}>Open Wishlist Page</Link>
                        </Button>
                        <Button variant={"outline"} asChild className='lg:py-3 lg:px-6 lg:text-lg'>
                            <Link href={"/furnisy-main/public"}>Continue Shopping</Link>
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>

    )
}

export default WishlistPopup