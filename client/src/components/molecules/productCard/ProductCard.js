/* eslint-disable @next/next/no-img-element */
import { addToCart } from '@/components/atoms/Common';
import Link from 'next/link';
import React from 'react';
// import { addToCart } from './Common';

export default function ProductCard(props) {
    // function RatingStars() {
    //     let ratings = props.product.ratings.toFixed(1);
    //     const stars = [];

    //     for (let i = 0; i < ratings; i++) {
    //         stars.push(
    //             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    //                 <path
    //                     fillRule="evenodd"
    //                     d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
    //                     clipRule="evenodd"
    //                 />
    //             </svg>
    //         );
    //     }
    //     for (let i = 0; i < 5 - ratings; i++) {
    //         stars.push(
    //             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    //                 <path
    //                     strokeLinecap="round"
    //                     strokeLinejoin="round"
    //                     d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
    //                 />
    //             </svg>
    //         );
    //     }

    //     return stars;
    // }

    return (
        <>
            <div className="rounded-lg w-52">
                <Link href={{ pathname: '/product', query: { id: props.product._id } }}>
                    <div className="relative group">
                        <img src={props.product.image} alt={props.product.name} className="rounded-lg h-32 w-full object-cover" />
                    </div>
                </Link>
                <div className="px-4 py-4 rounded-lg mt-4 border-2 border-zinc-800">
                    <Link href={{ pathname: '/product', query: { id: props.product._id } }}>
                        <h1 className="font-medium text-lg">{props.product.name}</h1>
                    </Link>

                    <div className="flex justify-between">
                        <div className="flex">
                            <h1 className="text-sm mt-0.5">
                                <s>LKR: {props.product.price}</s>
                            </h1>
                            <h1 className="ml-2 text-lg text-green-600 font-medium">LKR: {props.product.price - (props.product.price * props.product.discount) / 100}</h1>
                        </div>
                        <div className="flex text-yellow-500">{/* <RatingStars /> */}</div>
                    </div>
                    <button className="btn-primary flex mt-2" onClick={() => addToCart(props.product, 1)}>
                    {/* <button className="btn-primary flex mt-2" onClick={() => addToCart(props.product, 1)}> */}
                        ADD TO CART
                    </button>
                </div>
            </div>
        </>
    );
}
