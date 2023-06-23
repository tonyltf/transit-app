"use client"

import { signIn, signOut } from 'next-auth/react'

export const GoogleSignInButton = () => {
  return <button className="p-4 m-4 text-white bg-blue-500 rounded-lg" onClick={() => signIn('google')}>Sign In with Google</button>
}

export const SignOutButton = () => {
  return <button className="p-4 m-4 text-white bg-blue-500 rounded-lg" onClick={() => signOut()}>Sign Out</button>
}

