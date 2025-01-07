import { SignInButton } from '@clerk/chrome-extension'

export const Home = () => {
  return (
    <>
      <h1>Clerk + Chrome Extension + React Router</h1>
      <SignInButton mode="modal" />
    </>
  )
}