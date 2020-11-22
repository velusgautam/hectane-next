const fs = require('fs')
const RSS = require('rss')
const path = require('path')

const fetch = require('node-fetch')

const API_BASE = 'https://backend.hectane.com/'
//const API_BASE =     'http://localhost:3200/'

const fetcher = async url => fetch(`${API_BASE}${url}`).then(res => res.json())

const getPosts = async () => {
  const post = await fetcher(`posts/rss`)
  return post
}

const blocks = ({ type, data }) => {
  if (type === 'image') {
    const { url } = data
    return `<img src="${url.replace(/\.[^/.]+$/, '')}.jpg" />`
  }
  if (type === 'header') {
    return `<h3> ${data.text}</h3>\n`
  }
  if (type === 'code') {
    return `<pre><code>${JSON.stringify(data.code)}</code></pre>\n`
  }
  if (type === 'paragraph') {
    return `<p>${data.text}</p>\n`
  }
  return ''
}

const renderPost = body => {
  return body.reduce((inc, { type, data }) => {
    return inc + blocks({ type, data })
  }, '')
}

const main = async () => {
  const feed = new RSS({
    title: 'hectane.com',
    site_url: 'https://www.hectane.com/',
    feed_url: 'https://hectane.com/feed.xml',
    language: 'en'
  })

  const posts = await getPosts()
  posts.forEach(post => {
    const url = `https://hectane.com/blog/${post.route}`
    feed.item({
      title: post.title,
      description: renderPost(post.body),
      date: new Date(post.updatedDate),
      author: 'Velu S Gautam',
      url,
      guid: url,
      enclosure: {
        url: `https://assets.hectane.com/${post.route}/title.jpg`,
        type: 'image/jpeg'
      }
    })
  })

  const rss = feed.xml({ indent: true })
  fs.writeFileSync(path.join(__dirname, '../public/feed.xml'), rss)
}

main()
