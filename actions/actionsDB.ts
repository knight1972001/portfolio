'use server'

import { MongoClient, ObjectId } from 'mongodb'

const MONGODB_URI = process.env.MONGODB_URI
if (!MONGODB_URI) {
    throw new Error('MONGODB_URI not set in environment')
}

// Re-use connection across hot reloads (Next.js dev)
declare global {
    // eslint-disable-next-line no-var
    var _mongoClientPromise: Promise<MongoClient> | undefined
}

let clientPromise: Promise<MongoClient>
if (!global._mongoClientPromise) {
    const client = new MongoClient(MONGODB_URI)
    global._mongoClientPromise = client.connect()
}
clientPromise = global._mongoClientPromise

async function getDb(name = 'portfolio') {
    const client = await clientPromise
    return client.db(name)
}

async function findAll(collection: string, database = 'portfolio') {
    const db = await getDb(database)
    return db.collection(collection).find({}).sort({ _id: -1 }).toArray()
}

async function findOne(collection: string, id: string, database = 'portfolio') {
    if (!ObjectId.isValid(id)) return null
    const db = await getDb(database)
    return db.collection(collection).findOne({ _id: new ObjectId(id) })
}

// Public API (keep same signatures / error swallowing)
export const getAllExperience = async () => {
    try {
        const experiences = await findAll('experiences')
        return experiences
    } catch (e) {
        console.error('getAllExperience - Error:', e)
        return []
    }
}

export const getAllTech = () =>
    findAll('tech').catch(e => (console.error(e), []))

export const getAllProject = () =>
    findAll('projects').catch(e => (console.error(e), []))

export const getProjectById = (id: string) =>
    findOne('projects', id).catch(e => (console.error(e), null))

export const getAllFeedback = () =>
    findAll('feedback').catch(e => (console.error(e), []))

export const getAllIdeas = () =>
    findAll('ideas', 'ideas').catch(e => (console.error(e), []))

export const getIdeaById = (id: string) =>
    findOne('ideas', id, 'ideas').catch(e => (console.error(e), null))
