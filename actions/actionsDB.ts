'use server'
import { Redis } from "@upstash/redis";

const redisClient = new Redis({
    url: "https://advanced-ocelot-51931.upstash.io",
    token: "AcrbAAIjcDE0Y2ZiZmZkZDRiMGU0YTBhYTNmMzAwMDI3MzMzMTcxMHAxMA",
});


export const getAllExperience = async () => {
    try {
        const cacheKey = "experiences:all";
        console.log("Getting all Experience");

        const cached = await redisClient.get(cacheKey);
        if (cached) {
            console.log("Cache hit - Returning from Redis");
            return cached; // No JSON.parse needed
        }

        const apiURL = process.env.MONGODB_API + `action/find?timestamp=${Date.now()}`
        // console.log(apiURL)
        if (!apiURL) {
            throw new Error("API URL is not defined in the config")
        }

        const headers: any = {
            'Content-Type': 'application/ejson',
            'Accept': 'application/json',
            'api-key': process.env.MONGDODB_API_KEY,
            'Cache-Control': 'no-store, max-age=0'
            // Add any other headers as needed
        };

        const requestBody = {
            // Add your request body data here
            dataSource: 'portfolio',
            database: 'portfolio',
            collection: 'experiences',
            sort: { _id: -1 }
        };

        const response = await fetch(apiURL, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        const documents = responseData.documents;

        await redisClient.setex(cacheKey, 3600, documents); // No JSON.stringify
        console.log("Cache miss - Stored in Redis");
        return documents;
    } catch (err) {
        console.error(err);
    }
}


export const getAllTech = async () => {
    try {
        const cacheKey = "tech:all";
        console.log("Getting all Techs")

        const cached = await redisClient.get(cacheKey);
        if (cached) {
            console.log("Cache hit - Returning from Redis");
            return cached; // No JSON.parse needed
        }

        const apiURL = process.env.MONGODB_API + `action/find?timestamp=${Date.now()}`
        if (!apiURL) {
            throw new Error("API URL is not defined in the config")
        }

        const headers: any = {
            'Content-Type': 'application/ejson',
            'Accept': 'application/json',
            'api-key': process.env.MONGDODB_API_KEY,
        };

        const requestBody = {
            // Add your request body data here
            dataSource: 'portfolio',
            database: 'portfolio',
            collection: 'tech',
            sort: { _id: -1 }
        };

        const response = await fetch(apiURL, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        const documents = responseData.documents;

        await redisClient.setex(cacheKey, 3600, documents); // No JSON.stringify
        console.log("Cache miss - Stored in Redis");
        return documents;
    } catch (err) {
        console.error(err);
    }
}

export const getAllProject = async () => {
    try {
        const cacheKey = "project:all";
        console.log("Getting all Projects")

        const cached = await redisClient.get(cacheKey);
        if (cached) {
            console.log("Cache hit - Returning from Redis");
            return cached; // No JSON.parse needed
        }

        const apiURL = process.env.MONGODB_API + `action/find?timestamp=${Date.now()}`
        // console.log(apiURL)
        if (!apiURL) {
            throw new Error("API URL is not defined in the config")
        }

        const headers: any = {
            'Content-Type': 'application/ejson',
            'Accept': 'application/json',
            'api-key': process.env.MONGDODB_API_KEY,
        };

        const requestBody = {
            dataSource: 'portfolio',
            database: 'portfolio',
            collection: 'projects',
            sort: { _id: -1 }
        };

        const response = await fetch(apiURL, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        const documents = responseData.documents;

        await redisClient.setex(cacheKey, 3600, documents); // No JSON.stringify
        console.log("Cache miss - Stored in Redis");
        return documents;
    } catch (err) {
        console.error(err);
    }
}

export const getProjectById = async (id: string) => {
    try {
        const cacheKey = `project:${id}`;
        console.log("Getting Project by id: " + id);

        const cached = await redisClient.get(cacheKey);
        if (cached) {
            console.log("Cache hit - Returning from Redis");
            return cached;
        }

        const apiURL = process.env.MONGODB_API + `action/findOne?timestamp=${Date.now()}`
        // console.log(apiURL)
        if (!apiURL) {
            throw new Error("API URL is not defined in the config")
        }

        const headers: any = {
            'Content-Type': 'application/ejson',
            'Accept': 'application/json',
            'api-key': process.env.MONGDODB_API_KEY,
            'Cache-Control': 'no-store, max-age=0'
            // Add any other headers as needed
        };

        const requestBody = {
            // Add your request body data here
            dataSource: 'portfolio',
            database: 'portfolio',
            collection: 'projects',
            filter: {
                _id: { $oid: id }
            }
        };

        const response = await fetch(apiURL, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        const document = responseData.document;

        await redisClient.setex(cacheKey, 3600, document);
        console.log("Cache miss - Stored in Redis");

        return document;
    } catch (err) {
        console.error(err);
    }
}

export const getAllFeedback = async () => {
    try {
        const cacheKey = "feedback:all";
        console.log("Getting all Feedback")

        const cached = await redisClient.get(cacheKey);
        if (cached) {
            console.log("Cache hit - Returning from Redis");
            return cached; // No JSON.parse needed
        }

        const apiURL = process.env.MONGODB_API + `action/find?timestamp=${Date.now()}`
        // console.log(apiURL)
        if (!apiURL) {
            throw new Error("API URL is not defined in the config")
        }

        const headers: any = {
            'Content-Type': 'application/ejson',
            'Accept': 'application/json',
            'api-key': process.env.MONGDODB_API_KEY,
            'Cache-Control': 'no-store, max-age=0'
            // Add any other headers as needed
        };

        const requestBody = {
            // Add your request body data here
            dataSource: 'portfolio',
            database: 'portfolio',
            collection: 'feedback',
            sort: { _id: -1 }
        };

        const response = await fetch(apiURL, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        const documents = responseData.documents;

        await redisClient.setex(cacheKey, 3600, documents); // No JSON.stringify
        console.log("Cache miss - Stored in Redis");
        return documents;
    } catch (err) {
        console.error(err);
    }
}

export const getAllIdeas = async () => {
    try {
        const cacheKey = "idea:all";
        console.log("Getting all Ideas")


        const cached = await redisClient.get(cacheKey);
        if (cached) {
            console.log("Cache hit - Returning from Redis");
            return cached; // No JSON.parse needed
        }

        const apiURL = process.env.MONGODB_API + `action/find?timestamp=${Date.now()}`
        // console.log(apiURL)
        if (!apiURL) {
            throw new Error("API URL is not defined in the config")
        }

        const headers: any = {
            'Content-Type': 'application/ejson',
            'Accept': 'application/json',
            'api-key': process.env.MONGDODB_API_KEY,
            'Cache-Control': 'no-store, max-age=0'
            // Add any other headers as needed
        };

        const requestBody = {
            // Add your request body data here
            dataSource: 'portfolio',
            database: 'ideas',
            collection: 'ideas',
            sort: { _id: -1 }
        };

        const response = await fetch(apiURL, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        const documents = responseData.documents;

        await redisClient.setex(cacheKey, 3600, documents); // No JSON.stringify
        console.log("Cache miss - Stored in Redis");
        return documents;
    } catch (err) {
        console.error(err);
    }
}

export const getIdeaById = async (id: string) => {
    try {
        const cacheKey = `idea:${id}`;
        console.log("Getting Idea by id: " + id)

        const cached = await redisClient.get(cacheKey);
        if (cached) {
            console.log("Cache hit - Returning from Redis");
            return cached;
        }

        const apiURL = process.env.MONGODB_API + `action/findOne?timestamp=${Date.now()}`
        // console.log(apiURL)
        if (!apiURL) {
            throw new Error("API URL is not defined in the config")
        }

        const headers: any = {
            'Content-Type': 'application/ejson',
            'Accept': 'application/json',
            'api-key': process.env.MONGDODB_API_KEY,
            'Cache-Control': 'no-store, max-age=0'
            // Add any other headers as needed
        };

        const requestBody = {
            // Add your request body data here
            dataSource: 'portfolio',
            database: 'ideas',
            collection: 'ideas',
            filter: {
                _id: { $oid: id }
            }
        };

        const response = await fetch(apiURL, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        const document = responseData.document;

        await redisClient.setex(cacheKey, 3600, document);
        console.log("Cache miss - Stored in Redis");

        return document;
    } catch (err) {
        console.error(err);
    }
}
