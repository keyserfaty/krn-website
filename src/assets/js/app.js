import { Node } from './helpers'

const url = 'https://api.krn.sh/posts/en'

fetch(url)
  .then(function (response) {
    return response.json()
  })
  .then(function (response) {
    const PostsList = document.querySelector('.post-list')

    Object.keys(response)
      .map(key => {
        const post = Post(response[key])
        PostsList.appendChild(post)
      })
  })

const Post = props => {
  const { title, virtuals, firstPublishedAtDay, firstPublishedAtMonth, uniqueSlug } = props

  return (
    Node('div', { class: 'post' },
      Node('div', { class: 'date' },
        Node('h1', { class: 'day' }, firstPublishedAtDay),
        Node('h2', { class: 'month' }, firstPublishedAtMonth)
      ),
      Node('div', { class: 'content' },
        Node('h1', { class: 'title' },
          Node('a', { href: `https://medium.com/@keyserfaty/${uniqueSlug}`, target: 'blank' }, title)
        ),
        Node('div', { class: 'reading-time' }, `${Math.round(virtuals.readingTime)} min read`)
      )
    )
  )
}
