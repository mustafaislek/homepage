import Link from 'next/link'
import Container from '../components/container'

export default function Header() {
  return (
    <header className="py-6">
      <Container>
        <nav className="flex space-x-4">
          <Link href="/">About</Link>
          <Link href="/posts">Posts</Link>
          <Link href="/resume.pdf" target='_blank'>Resume</Link>
        </nav>
      </Container>
    </header>
  )
}
