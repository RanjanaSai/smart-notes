
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { shadow } from '@/styles/utils';
import { Button } from './ui/button';
import LogOutButton from './LogOutButton';
import { getUser } from '@/auth/server';

async function Header() {
    const user = await getUser();
    return (
        <header className="bg-popover relative flex h-24 w-full items-center justify-between px-3 sm:px-8"
            style={{
                boxShadow: shadow,
            }}
        >
            <Link className="flex items-end gap-2" href="/">
                <Image
                    src="/cnotes.png"
                    height={60}
                    width={60}
                    alt="logo"
                    priority
                />
                <h1 className="flex flex-col pb-1 text-xl font-semibold leading-7">
                    SMART <span>NOTES</span>
                </h1>
            </Link>
            <div className='flex gap-4'>
                {user ? (
                    <LogOutButton />
                ) : (
                    <>
                        <Button asChild>
                            <Link href="/sign-up" className="hidden sm:block">
                                Sign Up
                            </Link>
                        </Button>
                        <Button asChild variant="outline">
                            <Link href="/login">Login</Link>
                        </Button>
                    </>
                )
                }
            </div>
        </header>
    )
}

export default Header