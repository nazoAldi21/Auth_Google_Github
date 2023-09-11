"use-client"
import React from 'react'
import SignInButton from './SignInButton'

const Navbar = () => {
  return (
    <header className="flex gap-4 p-4">
      <SignInButton />
    </header>
  )
}

export default Navbar