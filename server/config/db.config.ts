import {MongoClient} from 'mongodb';
import {ShoppyDbName, ShoppyCollection} from "../data/types/shoppy-collection";

/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

// const filter = {};
// const coll = client.db('shoppy').collection('users');
// const cursor = coll.find(filter);
// const result = await cursor.toArray();


/**
 * @description returns a connection to the database
 * @returns {Promise<MongoClient>}
 */
export async function getConnection(): Promise<MongoClient> {
    return await MongoClient.connect(
            'mongodb+srv://d9777834:Dani0406@cluster0.5abjvbt.mongodb.net/test',
    );
}


/**
 * @description disconnect from the database
 * @param client: the client to disconnect
 */
export async function disconnect(client: MongoClient) {
    await client.close();
}

export async function getCollection(collectionName: ShoppyCollection) {
    debugger;
    const client = await getConnection();
    return client.db(ShoppyDbName).collection(collectionName.toString());
}
