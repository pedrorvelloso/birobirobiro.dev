import { styled } from '../stitches.config'
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { parseISO, format, intervalToDuration } from 'date-fns'
import Base from '../layouts/Base'
// import { ButtonPrimary } from '../components/ButtonPrimary'
// import { ButtonPrimaryIcon } from '../components/ButtonPrimaryIcon'
import Pronunciation from '../components/Pronunciation'
import stripHtml from '../lib/strip-html'
import items from '../data/about'

export async function getStaticProps() {
  const meta = {
    title: 'About // Biro³',
    description:
      "Me chamo João, mas pode me chamar de Biro ✌🏻.",
    tagline: 'Sobre mim.',
    image: '#',
    primaryColor: 'pink',
    secondaryColor: 'purple',
  }

  return { props: meta }
}

function About(props) {
  const { title, description, image } = props

  const renderIntro = () => {
    return (
      <Container>
        <Section>
          <Image
            alt="Biro"
            src="/static/images/birobirobiro.jpg"
            width="680"
            height="920"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAP0lEQVQImQE0AMv/AFBQUJKSkqmpqaOjowCurq7v7+/Jycm5ubkA////jIyMn5+fg4ODADAwMD09PWlpaQAAAApRGnEHblMWAAAAAElFTkSuQmCC"
            priority
          />
        </Section>
        <Section>
          <Paragraph
            css={{
              marginTop: '16px',
              '@bp2': { marginTop: '-6px' },
            }}
          >
            Me chamo João, mas pode me chamar de <strong>Biro</strong>
            {/* <Pronunciation /> */}

          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptate corporis hic quasi quia qui dolor optio veritatis, quas vitae repudiandae iusto, ex praesentium atque est fugiat nobis nesciunt eum corrupti vero. Cupiditate necessitatibus eligendi non dolore aliquid nemo vel dolores consequuntur? Alias dolorem inventore corrupti iste animi nam saepe!
          </Paragraph>

          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptate corporis hic quasi quia qui dolor optio veritatis, quas vitae repudiandae iusto, ex praesentium atque est fugiat nobis nesciunt eum corrupti vero.
          </Paragraph>
        </Section>
      </Container>
    )
  }

  const renderBio = () => {
    return (
      <div>
        <blockquote>
          <p>{description}</p>
        </blockquote>
        {/* <p>
          <ButtonPrimary as="button" onClick={copyBio}>
            <ButtonPrimaryIcon className="ri-file-copy-line" /> Copy to
            Clipboard
          </ButtonPrimary>
          <span style={{ margin: '0 20px 0 10px' }}>•</span>
          <ButtonPrimary
            as="a"
            download
            role="button"
            href="/static/images/#.png"
          >
            <ButtonPrimaryIcon className="ri-download-2-line" /> Download
            Headshot
          </ButtonPrimary>
        </p> */}
      </div>
    )
  }

  const renderAll = () => {
    return items.map((item, index) => {
      return (
        <div style={{ marginBottom: 40 }} key={index}>
          <h3>{item.jobTitle}</h3>
          <p style={{ margin: 0 }}>
            <a href={item.companyUrl} target="_blank">
              {item.company}
            </a>
            <span> • {item.location}</span>
          </p>
          <p style={{ margin: 0 }}>
            <span>{format(parseISO(item.startDate), 'LLL yyyy')}</span>
            <span> – </span>
            <span>
              {item.endDate
                ? format(parseISO(item.endDate), 'LLL yyyy')
                : 'Present'}
            </span>
            <span> • </span>
            <span>{getDuration(item.startDate, item.endDate)}</span>
          </p>
        </div>
      )
    })
  }

  const getDuration = (startDate, endDate) => {
    const durationObj = intervalToDuration({
      start: parseISO(startDate),
      end: endDate ? parseISO(endDate) : new Date(),
    })

    let durationStr = ''

    if (durationObj.years > 1) {
      durationStr = `${durationObj.years} yrs `
    } else if (durationObj.years === 1) {
      durationStr = `${durationObj.years} yr `
    }

    durationStr += `${durationObj.months} mos`

    return durationStr
  }

  const copyBio = e => {
    e.preventDefault()
    navigator.clipboard.writeText(description)
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://birobirobiro.dev/about" property="og:url" />
        <meta content={`https://birobirobiro.dev${image}`} property="og:image" />
      </Head>

      {renderIntro()}

      <h2>Bio</h2>
      {renderBio()}

      <h2>Carreira</h2>
      {renderAll()}
    </>
  )
}

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  '@bp2': { flexDirection: 'row' },
})

const Paragraph = styled('p', {
  '@bp2': { margin: '15px 0' },
})

const Section = styled('div', {
  marginTop: '0px',
  width: 'auto',
  '@bp2': { width: '48%' },
})

About.Layout = Base

export default About
