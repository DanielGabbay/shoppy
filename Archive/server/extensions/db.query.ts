// export function

// const filter = {};
// const coll = client.db('shoppy').collection('users');
// const cursor = coll.find(filter);
// const result = await cursor.toArray();

import {Collection, WithId} from "mongodb";


// TODO: specify the type of the collection (e.g. User)
export async function getAll(collection: Collection): Promise<WithId<Document>[]> {
    const cursor = collection.find({});
    return cursor.toArray();
}
