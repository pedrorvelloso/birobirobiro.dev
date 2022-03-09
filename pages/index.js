import { styled } from '../stitches.config'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ShortcutHome from '../components/ShortcutHome'
import { PostMain, PostContent, PostContainer } from '../components/Post'
import { Wrapper } from '../components/Wrapper'

export async function getStaticProps() {
  return {
    props: {
      title: 'João Inácio (Biro)',
      description: 'An instructor focused on helping people start programming.',
      image: 'https://raw.githubusercontent.com/birobirobiro/birobirobiro.dev/572ce4534386893e3c064da603745a68ea4cb051/.github/image.png',
    },
  }
}

export default function Index(props) {
  const { title, description, image } = props

  return (
    <Wrapper>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content="https://birobirobiro.dev" property="og:url" />
        <meta content={`${image}`} property="og:image" />
      </Head>

      <Navbar />
      <Home>
        <PostContent>
          <PostContainer>
            <div>
              <h1>{title}</h1>
              <p>
                <strong>Front-end Developer | Developer Instructor at <a href="https://rocketseat.com.br" target="_blank">Rocketseat</a></strong>.<br />
                {description}.
              </p>
              <ShortcutHome />
            </div>
          </PostContainer>
        </PostContent>
      </Home>
      <Footer />
    </Wrapper>
  )
}

const Home = styled(PostMain, {
  alignItems: 'center',
  display: 'flex',
  margin: '0 auto',
  '@bp2': { width: 800 },
})
