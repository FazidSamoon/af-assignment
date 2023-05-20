import Head from 'next/head';
// import Footer from './Footer';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import jwtDecode from 'jwt-decode';
import { CartSolid, ProfileSolid } from '@/utils/iconData';
import { Menu } from '@headlessui/react';
import { userLogout } from '../atoms/Common';
import Navbar from '../organisms/navbar/Navbar';

export default function Layout({ title, children }) {
    const [cartData, setCartData] = useState([]);
    const [userRole, setUserRole] = useState();
    const [page, setPage] = useState(true);
    const [isLogin, setIsLogin] = useState(false);

    const router = useRouter();
    const { pathname } = router;

    const inactiveLink = 'mx-1';
    const activeLink = inactiveLink + ' border-b-2 border-b-zinc-800';

    useEffect(() => {
        const interval = setInterval(() => {
            setCartData(JSON.parse(localStorage.getItem('cart_data')));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('user_data'));
        if (userData?.role == 'SELLER') router.push('/unauthorized');
    }, [router]);

    useEffect(() => {
        const accessToken = JSON.parse(localStorage.getItem('access_token'));
        const userData = JSON.parse(localStorage.getItem('user_data'));
        setUserRole(userData?.role);
        if (accessToken != null) {
            const decodedToken = jwtDecode(accessToken);
            if (decodedToken.exp * 1000 < new Date().getTime()) localStorage.removeItem('access_token');
            else setIsLogin(true);
        }
    }, []);

    const checkPage = () => {
        if (pathname.includes('/login') || pathname.includes('/register') || pathname.includes('/profile') || pathname.includes('/dashboard') || pathname.includes('/shipping') || pathname.includes('/payment')) {
            setPage(false);
        }
    };

    const onIconClick = (res) => {
        if (isLogin) {
            if (res == 'c') router.push('/cart');
            if (res == 'p' && userRole == 'SELLER') router.push('/dashboard/profile');
        } else {
            if (res == 'c' || res == 'p') router.push('/login');
        }
    };

    const LogoutHandle = () => {
        userLogout();
        router.push('/login');
    };

    return (
        <>
            <Head>
                <title>{title ? title + ' - VP STORES' : 'VP STORES'}</title>
                <meta name="description" content="Ecommerce Website" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <ToastContainer position="bottom-center" limit={1} className="text-center" />

            <div className="flex min-h-screen flex-col justify-between">
                {/* HEADER */}
                {page && (
                    <header className="bg-zinc-100 py-4">
                        <Navbar />
                        {checkPage()}
                    </header>
                )}

                {/* CONTENT */}
                <main className="min-h-screen w-full bg-black">{children}</main>

                {/* FOOTER */}
                {page && (
                    <footer className="flex justify-center items-center">
                        {/* <Footer /> */}
                    </footer>
                )}
            </div>
        </>
    );
}
