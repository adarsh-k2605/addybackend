require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const githubData = {
  "login": "adarsh-k2605",
  "id": 181584249,
  "node_id": "U_kgDOCtLBeQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/181584249?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/adarsh-k2605",
  "html_url": "https://github.com/adarsh-k2605",
  "followers_url": "https://api.github.com/users/adarsh-k2605/followers",
  "following_url": "https://api.github.com/users/adarsh-k2605/following{/other_user}",
  "gists_url": "https://api.github.com/users/adarsh-k2605/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/adarsh-k2605/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/adarsh-k2605/subscriptions",
  "organizations_url": "https://api.github.com/users/adarsh-k2605/orgs",
  "repos_url": "https://api.github.com/users/adarsh-k2605/repos",
  "events_url": "https://api.github.com/users/adarsh-k2605/events{/privacy}",
  "received_events_url": "https://api.github.com/users/adarsh-k2605/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 3,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-09-14T15:36:05Z",
  "updated_at": "2025-07-04T22:42:44Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res) => {
    res.send('addydotcom')
})
app.get('/youtube', (req,res) =>{
    res.send('<h1>Chai aur Code</h1>')
})

app.get('/github', (req,res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

