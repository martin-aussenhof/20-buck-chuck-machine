# 5-buck-chuck-machine

This application showcases some of the Algolia search engine features with a wine finding platform as an example.

## Get started

To run this project locally, install the dependencies and run the local server:

```sh
npm install
npm start
```

Open http://localhost:3000 to see your app.

##

To become more familar with the Algolia search engine, I decided to create a platform where come features could easily be implemented (e.g.: Refinement, priotisation, sorting). In order to accomplish this, I created an app the could be used as a search engine for wines. As a dataset I used the wine index provided by Algolia. I then added a basic searchbox, refinements, the actual results, an option to sort in three ways, as well as some basic configuration for the index and its two replicas themselves. The two replicas are used to offer the option to sort by price in descending and ascending order. The default order is the default order provided by Algolia, which I titled "by relevance".
