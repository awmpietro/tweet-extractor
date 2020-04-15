# Tweet Extractor Sample Application

## Requirements

- Node.js LTS
- npm ^6.4.1

## How To Run

- Clone:
`git clone https://github.com/awmpietro/tweet-extractor.git`

- cd project folder
`cd tweet-extractor`

- Install dependencies:
`npm install`

- Create a .env file in the root of project with the contents:
```
#Server
API_KEY = YOUR_TWITTER_API_KEY
API_SECRET = YOUR_TWITTER_API_SECRET
ACCESS_TOKEN = YOUR_TWITTER_ACCESS_TOKEN
ACCESS_TOKEN_SECRET = YOUR_TWITTER_ACCESS_TOKEN_SECRET

#Client
REACT_APP_API_URL = http://localhost:4000/api
```
- Run it locally:
`npm start`

###  The command above will:
- Start an HTTP server for the API (localhost:4000);
- Start an HTTP server (powered by react-scripts) for the front-end (localhost:3000).

## Export CSV

After you submit a search, you can export data in a CSV file by clicking **Export CSV** button below the search box input.

## Statistics

After you submit a search, a new tab called **Statistics** will be enabled.

## Docker

There's a branch name 'containerized' with instructions to run on Docker