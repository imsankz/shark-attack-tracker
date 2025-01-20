import { Helmet } from 'react-helmet'

export default function SEO({ 
  title = "Global Shark Attack Tracker",
  description = "Comprehensive shark attack data and analysis from around the world",
  keywords = "shark attack, shark data, marine biology, shark conservation",
  image = "https://www.thesharksattacks.com/og-image.jpg",
  url = "https://www.thesharksattacks.com",
  type = "website"
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={url} />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon-192.png" />
      <link rel="manifest" href="/manifest.json" />
    </Helmet>
  )
}
