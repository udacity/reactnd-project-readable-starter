const api = "http://localhost:3001";
let postId = '8xf0y6ziyjabvozdd253nd'
let token = "authorized!"
let headers = {
  Authorization: token
}

let getPost = (postId) => fetch(`${api}/posts/${postId}`, {
    method: 'GET',
    headers: {
      ...headers
    }
  }).then(
    res => {console.log(res.json())}
  )

let decrementVoteScore = (postId) => fetch(`${api}/posts/${postId}`, {
    method: 'PUT',
    headers: {
      ...headers
    },
    body: JSON.stringify({option: 'downVote'})
  }).then(res => console.log(res.json()))

getPost('8xf0y6ziyjabvozdd253nd')
decrementVoteScore('8xf0y6ziyjabvozdd253nd')
getPost('8xf0y6ziyjabvozdd253nd')
