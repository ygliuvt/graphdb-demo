const gremlin = require('gremlin');
const traversal = gremlin.process.AnonymousTraversalSource.traversal;
const DriverRemoteConnection = gremlin.driver.DriverRemoteConnection;
const column = gremlin.process.traversal.column;
const direction = gremlin.process.traversal.direction;
const p = gremlin.process.traversal.P;
const pick = gremlin.process.traversal.pick;
const pop = gremlin.process.traversal.pop;
const order = gremlin.process.traversal.order;
const scope = gremlin.process.traversal.scope;
const t = gremlin.process.traversal.t;

const g = traversal().withRemote(new DriverRemoteConnection('ws://' + 'localhost' + ':8182/gremlin'));

//const https = require('https');c
const { http, https } = require('follow-redirects');

async function getDatasets() {
    let datasets = await g.V().valueMap().toList();
    return datasets;
}

async function connectDatasets(coll1, coll2) {
    const v1 = await g.V().has('concept-id', coll1);
    const v2 = await g.V().has('concept-id', coll2);
    let x = await v1.addE('related-to').to(v2).iterate();
    return x;
}

async function getConnections(coll1) {
    let connections = await g.V().has('concept-id', coll1).out('related-to').valueMap().toList();
    return connections;
}

module.exports.getDatasets = getDatasets;
module.exports.connectDatasets = connectDatasets;
module.exports.getConnections = getConnections;
