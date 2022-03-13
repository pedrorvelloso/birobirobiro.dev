import { styled } from '../stitches.config'

export default function Footer() {
  const links = [
    {
      title: 'Instagram',
      url: 'https://instagram.com/birobirobiro',
      icon: 'ri-instagram-line',
      color: '#e1306c',
    },
    {
      title: 'GitHub',
      url: 'https://github.com/birobirobiro',
      icon: 'ri-github-line',
      color: '#4078c0',

    },
    {
      title: 'LinkedIn',
      url: 'https://linkedin.com/in/birobirobiro',
      icon: 'ri-linkedin-line',
      color: '#0077b5',

    },
    {
      title: 'Rocketseat',
      url: 'https://app.rocketseat.com.br/me/birobirobiro',
      icon: 'ri-rocket-line',
      color: '#8257E5',

    },
    {
      title: 'Twitch',
      url: 'https://instagram.com/birobirobiro',
      icon: 'ri-twitch-line',
      color: '#9146ff',

    },
    {
      title: 'Youtube',
      url: 'https://youtube.com/birobirobiro',
      icon: 'ri-youtube-line',
      color: '#ff0000',

    },
    {
      title: 'Source',
      url: 'https://github.com/birobirobiro/birobirobiro.dev',
      icon: 'ri-braces-line',
      color: '#fafafa',

    },
  ]

  return (
    <Container>
      {links.map((link, index) => {
        return (
          <Anchor key={index} href={link.url} target="_blank">
            <Title>{link.title}</Title>
            <Icon className={link.icon} />
          </Anchor>
        )
      })}
    </Container>
  )
}

const Container = styled('footer', {
  background: '$background',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px 0',
  zIndex: '1',
})

const Icon = styled('i', {
  color: '$primary',
  opacity: 1,
  marginLeft: '5px',
  marginTop: '1px',
  fontSize: '24px',
  '@bp2': { opacity: 0, fontSize: '16px' },
})

const Anchor = styled('a', {
  color: '$secondary',
  display: 'flex',
  fontSize: '15px',
  border: 0,
  marginLeft: '20px',
  textDecoration: 'none',
  textTransform: 'lowercase',
  transition: 'color $duration ease-in-out',
  '&:hover, &:focus': {
    opacity: 1,
    color: '$primary',
  },
  [`&:hover ${Icon}`]: {
    transition: 'opacity $duration ease-in-out',
    opacity: 1,
  },
  '&:first-child': { margin: '0' },
})

const Title = styled('span', {
  display: 'none',
  '@bp2': { display: 'block' },
})
