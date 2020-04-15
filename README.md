# Tweet Extractor Sample Application

## Requirements (Tested on Mac)

- Docker 18
- npm 1.25.4

## How To Run step by step

- Clone 'containerized' branch:
`git clone -b containerized https://github.com/awmpietro/tweet-extractor.git`

- Update **Dockerfile** from line 17 to line 20 to include your twitter api credentials:
```
ENV API_KEY = YOUR_TWITTER_API_KEY
ENV API_SECRET = YOUR_TWITTER_API_SECRET
ENV ACCESS_TOKEN = YOUR_TWITTER_ACCESS_TOKEN
ENV ACCESS_TOKEN_SECRET = YOUR_TWITTER_ACCESS_TOKEN_SECRET

```

- Build image:
`docker build -t tweet-extractor .`

- Run docker-compose:
`docker-compose up`

###  The command above will:
- Start an HTTP server for the API (localhost:4000);
- Start an HTTP server (powered by react-scripts) for the front-end (localhost:3000).

## Export CSV

After you submit a search, you can export data in a CSV file by clicking **Export CSV** button below the search box input.

## Statistics

After you submit a search, a new tab called **Statistics** will be enabled.