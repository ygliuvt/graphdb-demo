# graphdb-demo

Nodejs application to perform graphdb operations in CMR

# Development Environment

## Prerequisites
* [Nodejs](https://nodejs.org/en/)
* [Docker](https://docs.docker.com/install/)
* [Tinkerpop](https://tinkerpop.apache.org/)

### Node
CMR Graph runs on Node.js, in order to run the application you'll need to install it.

Recommended: Use Homebrew

```
brew install node
```

### NPM
npm is a separate project from Node.js, and tends to update more frequently. As a result, even if you’ve just downloaded Node.js (and therefore npm), you’ll probably need to update your npm. Luckily, npm knows how to update itself! To update your npm, type this into your terminal:

```
npm install -g npm@latest
```

### Docker
Download docker on https://docs.docker.com/get-docker/

### Gremlin Server
Gremlin Server provides a way to remotely execute Gremlin against one or more Graph instances hosted within it. We use the default Gremlin Server TinkerGraph db as our local development graph db. To start it, replace the <path_to_cmr_graphdb> with the path to your local cmr-graphdb directory and run:

```
docker run -it -p 8182:8182 -v <path_to_cmr_graphdb>/data:/data tinkerpop/gremlin-server
```

### Gremlin Console
The Gremlin Console is a REPL environment that allows user to experiment with a variety of TinkerPop-related activities, such as loading data, administering graphs and working out complex traversals. We use Gremlin Console to connect to the Gremlin Server and explore the graphdb in local development. To start it, run:

```
docker run -it -p 8182:8182 --network host tinkerpop/gremlin-console
```

### Graphexp
Graphexp is a lightweight web interface to explore and display a graph stored in a Gremlin graph database, via the Gremlin server.

Clone the graphexp repository at https://github.com/bricaud/graphexp

## Build

npm install

## Run

npm start

## Invoking

To load some testing data in graphdb, in Cremlin Console: `graph.io(graphml()).readGraph('/data/missions-instruments-and-collections-042820.graphml')`

To view collections in graph db, http://localhost:3000/datasets

To make one collection connect to another, http://localhost:3000/datasets/connect/<coll_concpet_id_1>/<coll_concpet_id_2>
