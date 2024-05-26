import Container from '../components/container'
import Image from 'next/image'

function HomePage() {
  return (
    <>
      <Container>
        <div className="space-y-6">
           {/* <Image
              priority
              src="/images/m.png"
              style={{ borderRadius: '99px' }}
              height={144}
              width={144}
              alt="profile picture"
            /> */}
          <h1 className="text-2xl font-bold">
            Hey, I'm Mustafa, a developer who enjoys building things.
          </h1>
          <p>
            An engineer with over 5 years of software development experience, I am passionate about
            problem-solving, constantly learning, creating, and sharing things using the knowledge I
            acquire. I have a strong motivation to continuously improve myself and thrive on tackling
            bigger and more complex problems.
          </p>
        <footer>
          {` • `}
        <a href="https://linkedin.com/in/mustafaislek/" target="_blank">
          LinkedIn
          </a>
          {` • `}
        <a href="https://github.com/mustafaislek/" target="_blank">
          GitHub
        </a>
          </footer>
        </div>
      </Container>

      {/* <div className="container max-w-4xl m-auto px-4 mt-20">
        <Image
          src="/desk.jpg"
          alt="my desk"
          width={1920 / 2}
          height={1280 / 2}
        />
      </div> */}
    </>
  )
}

export default HomePage
