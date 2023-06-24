import { getServerSession } from 'next-auth'
import { signIn } from 'next-auth/react'
import { GoogleSignInButton, SignOutButton } from './login/buttons.component'
import { authOptions } from '../lib/auth'

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log({ session });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        {session?.user?.email ? ( 
          <div className="flex flex-col items-center justify-between">
            <h1 className="text-4xl font-bold text-center">Welcome</h1>
            <p className="text-center">You are signed in as {session.user.email}.</p>
            <SignOutButton />
          </div>
        ) : (
          <GoogleSignInButton />
        )}
      </div>
    </main>
  )
}
