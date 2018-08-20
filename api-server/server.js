require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const config = require('./config')
const categories = require('./categories')
const posts = require('./posts')
const comments = require('./comments')
const log = require('./log')

const app = express()

app.use(express.static('public'))
app.use(cors())


app.get('/', (req, res) => {
  const help = `
  <pre>
    Welcome to the Udacity Readable API!

    Use an Authorization header to work with your own data:

    fetch(url, { headers: { 'Authorization': 'whatever-you-want' }})

    The following endpoints are available:

    GET /categories
      USAGE:
        Get all of the categories available for the app. List is found in categories.js.
        Feel free to extend this list as you desire.

    GET /:category/posts
      USAGE:
        Get all of the posts for a particular category

    GET /posts
      USAGE:
        Get all of the posts. Useful for the main page when no category is selected.

    POST /posts
      USAGE:
        Add a new post

      PARAMS:
        id - UUID should be fine, but any unique id will work
        timestamp - timestamp in whatever format you like, you can use Date.now() if you like
        title - String
        body - String
        author - String
        category: Any of the categories listed in categories.js. Feel free to extend this list as you desire.

    GET /posts/:id
      USAGE:
        Get the details of a single post

    POST /posts/:id
      USAGE:
        Used for voting on a post
      PARAMS:
        option - String: Either "upVote" or "downVote"

    PUT /posts/:id
      USAGE:
        Edit the details of an existing post
      PARAMS:
        title - String
        body - String

    DELETE /posts/:id
      USAGE:
        Sets the deleted flag for a post to 'true'.
        Sets the parentDeleted flag for all child comments to 'true'.

    GET /posts/:id/comments
      USAGE:
        Get all the comments for a single post

    POST /comments
      USAGE:
        Add a comment to a post

      PARAMS:
        id: Any unique ID. As with posts, UUID is probably the best here.
        timestamp: timestamp. Get this however you want.
        body: String
        author: String
        parentId: Should match a post id in the database.

    GET /comments/:id
      USAGE:
        Get the details for a single comment

    POST /comments/:id
      USAGE:
        Used for voting on a comment.
      PARAMS:
        option - String: Either "upVote" or "downVote"

    PUT /comments/:id
      USAGE:
        Edit the details of an existing comment

      PARAMS:
        timestamp: timestamp. Get this however you want.
        body: String

    DELETE /comments/:id
      USAGE:
        Sets a comment's deleted flag to 'true'
 </pre>
  `

  res.send(help)
})

app.use((req, res, next) => {
  const token = req.get('Authorization')

  if (token) {
    req.token = token
    next()
  } else {
    res.status(403).send({
      error: 'Please provide an Authorization header to identify yourself (can be whatever you want)'
    })
  }
})


app.get('/categories', (req, res) => {
    log('get', '/categories')

    categories.getAll(req.token)
      .then(
          (data) => {
              log('success', `All (${data.length}) categories have been provided`)
              return res.send(data)
          },
          (error) => {
              log('error', error)
              res.status(500).send({
                  error: 'There was an error.'
              })
          }
      )
})

app.get('/:category/posts', (req, res) => {
    log('get', `/${req.params.category}/posts`)

    posts.getByCategory(req.token, req.params.category)
      .then(
          (data) => {
              log('success', `All (${data.length}) posts of the ${req.params.category} category have been provided`)
              return res.send(data)
          },
          (error) => {
              log('error', error)
              res.status(500).send({
                  error: 'There was an error.'
              })
          }
      )
})

app.get('/posts', (req, res) => {
    log('get', '/posts')

    posts.getAll(req.token)
      .then(
          (data) => {
              log('success', `All (${data.length}) posts have been provided`)
              return res.send(data)
          },
          (error) => {
              log('error', error)
              res.status(500).send({
                 error: 'There was an error.'
          })
        }
      )
})

app.post('/posts', bodyParser.json(), (req, res) => {
    log('post', '/posts')

    posts.add(req.token, req.body)
      .then(
          (data) => {
              log('success', 'A new post has been added')
              log('', data)
              return res.send(data)
          },
          (error) => {
              log('error', error)
              res.status(500).send({
                 error: 'There was an error.'
          })
        }
      )
})

app.get('/posts/:id', (req, res) => {
    log('get', `/posts/${req.params.id}`)

    posts.get(req.token, req.params.id)
      .then(
          (data) => {
              log('success', `Details of the post '${data.title}' have been provided`)
              return res.send(data)
          },
          (error) => {
              log('error', error)
              res.status(500).send({
                  error: 'There was an error.'
              })
          }
      )
})

app.delete('/posts/:id', (req, res) => {
    log('delete', `/posts/${req.params.id}`)

    posts.disable(req.token, req.params.id)
      .then(post => comments.disableByParent(req.token, post))
      .then(
          (data) => {
              log('success', `Post has been deleted`)
              return res.send(data)
          },
          (error) => {
              log('error', error)
              res.status(500).send({
                  error: 'There was an error.'
              })
          }
      )
})

app.post('/posts/:id', bodyParser.json(), (req, res) => {
    log('post', `/posts/${req.params.id}`)

    const { option } = req.body
    const id = req.params.id
    posts.vote(req.token, id, option)
      .then(
          data => {
              log('success', `Post has been '${option}'`)
              return res.send(data)
          },
          (error) => {
              log('error', error)
              res.status(500).send({
                  error: 'There was an error.'
              })
          }
      )
})

app.put('/posts/:id', bodyParser.json(), (req, res) => {
    log('put', `/posts/${req.params.id}`)

    posts.edit(req.token, req.params.id, req.body)
      .then(
          (data) => {
              log('success', 'Post has been updated:')
              log('', data)
              return res.send(data)
          },
          (error) => {
              log('error', error)
              res.status(500).send({
                  error: 'There was an error.'
              })
          }
      )
})

app.get('/posts/:id/comments', (req, res) => {
    log('get', `/posts/${req.params.id}/comments`)

    comments.getByParent(req.token, req.params.id)
      .then(
          (data) => {
              log('success', `All (${data.length}) the comments of the post have been provided`)
              return res.send(data)
          },
          (error) => {
              log('error', error)
              res.status(500).send({
                  error: 'There was an error.'
              })
          }
      )
})

app.get('/comments/:id', (req, res) => {
    log('get', `/comments/${req.params.id}`)

    comments.get(req.token, req.params.id)
      .then(
          (data) => {
              log('success', `Details of the author's comment ${data.author} were provided`)
              return res.send(data)
          },
          (error) => {
              log('error', error)
              res.status(500).send({
                  error: 'There was an error.'
              })
          }
      )
})

app.put('/comments/:id', bodyParser.json(), (req, res) => {
    log('put', `/comments/${req.params.id}`)

    comments.edit(req.token, req.params.id, req.body)
      .then(
        (data) => {
            log('success', 'The comment has been updated:')
            log('', data)
            return res.send(data)
        },
        (error) => {
            log('error', error)
            res.status(500).send({
                error: 'There was an error.'
            })
        }
      )
})

app.post('/comments', bodyParser.json(), (req, res) => {
    log('post', '/comments')

    comments.add(req.token, req.body)
      .then(
          (data) => {
              log('success', 'The new comment has been added:')
              log('', data)
              return res.send(data)
          },
          (error) => {
              log('error', error)
              res.status(500).send({
                  error: 'There was an error.'
              })
          }
      )
})

app.post('/comments/:id', bodyParser.json(), (req, res) => {
    log('post', `/comments/${req.params.id}`)

    const { option } = req.body
    comments.vote(req.token, req.params.id, option)
      .then(
          (data) => {
              log('success', `The comment of the author ${data.author} has been '${option}'`)
              return res.send(data)
          },
          (error) => {
              log('error', error)
              res.status(500).send({
                  error: 'There was an error.'
              })
          }
      )
})

app.delete('/comments/:id', (req, res) => {
    log('delete', `/comments/${req.params.id}`)

    comments.disable(req.token, req.params.id)
      .then(
          (data) => {
              log('success', `The comment of the author ${data.author} has been deleted`)
              return res.send(data)
          },
          (error) => {
              log('error', error)
              res.status(500).send({
                  error: 'There was an error.'
              })
          }
      )
})

app.listen(config.port, () => {
  log('init', `Server listening on port ${config.port}, Ctrl+C to stop`)
})
