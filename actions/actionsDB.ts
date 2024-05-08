'use server'

export const getAllExperience = async () => {
    try {
        console.log("Getting all Experience")
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

        // Assuming you want to parse the response as JSON
        const responseData = await response.json();
        // console.log(responseData.documents)
        return responseData.documents
    } catch (err) {
        console.error(err);
    }
}


export const getAllTech = async () => {
    try {
        console.log("Getting all Techs")
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
            collection: 'tech',
            sort: { _id: -1 }
        };

        const response = await fetch(apiURL, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(requestBody),
        });

        // Assuming you want to parse the response as JSON
        const responseData = await response.json();
        // console.log(responseData.documents)
        return responseData.documents
    } catch (err) {
        console.error(err);
    }
}

export const getAllProject = async () => {
    try {
        console.log("Getting all Projects")
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
            collection: 'projects',
            sort: { _id: -1 }
        };

        const response = await fetch(apiURL, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(requestBody),
        });

        // Assuming you want to parse the response as JSON
        const responseData = await response.json();
        // console.log(responseData.documents)
        return responseData.documents
    } catch (err) {
        console.error(err);
    }
}

export const getProjectById = async (id: string) => {
    try {
        console.log("Getting Project by id: " + id)
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

        // Assuming you want to parse the response as JSON
        const responseData = await response.json();
        // console.log(responseData.documents)
        return responseData.document
    } catch (err) {
        console.error(err);
    }
}

export const getAllFeedback = async () => {
    try {
        console.log("Getting all Feedback")
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

        // Assuming you want to parse the response as JSON
        const responseData = await response.json();
        // console.log(responseData.documents)
        return responseData.documents
    } catch (err) {
        console.error(err);
    }
}

export const getAllIdeas = async () => {
    try {
        console.log("Getting all Ideas")
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

        // Assuming you want to parse the response as JSON
        const responseData = await response.json();
        // console.log(responseData.documents)
        return responseData.documents
    } catch (err) {
        console.error(err);
    }
}

export const getIdeaById = async (id: string) => {
    try {
        console.log("Getting Idea by id: " + id)
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

        // Assuming you want to parse the response as JSON
        const responseData = await response.json();
        // console.log(responseData.documents)
        return responseData.document
    } catch (err) {
        console.error(err);
    }
}
