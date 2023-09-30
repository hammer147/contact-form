import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center p-24'>
      Home Page
      <Link
        className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'
        href='/contact'
      >
        Contact
      </Link>
    </main>
  )
}
