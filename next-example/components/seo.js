import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Head from 'next/head'

function SEO ({ description, title }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />

      <meta name='og:type' content='website' />
      <meta name='og:title' content={title} />
      <meta name='og:description' content={description} />

      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
    </Head>
  )
}

export default SEO
