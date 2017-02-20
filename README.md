Yet Another Hackathon Starter
===========================
A boilerplate for **Node.js** web applications.

I know there are many hackathon starter out there, I also have used some of them and 
found out that not all of the predefined stuff in that starter is what I need.
Within this project I try to put a starter as minimum but also can speed up the process of make the hackathon prototype

Getting Started
---------------
This boilerplace consists of backend and front-end.

The easiest way to get started is to clone the repository:

```bash
# Get the latest snapshot
git clone --depth=1 https://github.com/martindavid/hackathon-starter.git myproject

# Change directory
cd myproject

# Install NPM dependencies for backend
npm install

# Go to client and install NPM dependencies for frontend
cd client && npm install

# Go back to root folder then simply start your app
npm run start-dev
```

Open your browser and go to [http://localhost:3000](http://localhost:3000)


Deploy to Heroku
-----------------
The app is ready to be deployed to Heroku.

In production, Heroku will use `Procfile` which boots just the server:

```
web: npm run server
```

Inside `server.js`, we tell Node/Express we'd like it to serve static assets in production:

```
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
```

You just need to have Webpack produce a static bundle of the React app (below).

### Steps

We assume basic knowledge of Heroku.

**0. Setup your Heroku account and Heroku CLI**

For installing the CLI tool, see [this article](https://devcenter.heroku.com/articles/heroku-command-line).

**1. Build the React app**

Running `npm run build` creates the static bundle which we can then use any HTTP server to serve:

```
cd client/
npm run build
```

**2. Commit the `client/build` folder to source control**

From the root of the project:

```
git add client/build
git commit -m 'Adding `build` to source control'
```

**3. Create the Heroku app**

```
heroku apps:create hackathon-starter
```

**4. Push to Heroku**

```
git push heroku master
```

Heroku will give you a link at which to view your live app.