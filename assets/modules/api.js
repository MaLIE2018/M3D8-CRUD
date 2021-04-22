export let endpoint = "https://striveschool-api.herokuapp.com/api/product/"

export const getData = async(url) => {
    try {
        const response = await fetch(url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMGI3MmIxZjBmYjAwMTVkOTE3MDAiLCJpYXQiOjE2MTkwMDQyNzQsImV4cCI6MTYyMDIxMzg3NH0.C6LGxQFIwmN7ecSmR8_ZefUgIWs2joADg2P6BVYiA0c'
            },
        })
        if (response.status !== 200) throw new Error(response.status + " " + response.statusText)
        return response.json()
    } catch (error) {
        alert(error)
    }

}

export const manipulateData = async(object, id = undefined, del = false) => {
    let method
    let alertmessage
        // Check if ID is passed a parameter if true then check if the product should be deleted or changed if false then create a new product
    if (id) {
        endpoint += id;
        del ? (method = "DELETE", alertmessage = `Product with ${id} got deleted`) : (method = "PUT", alertmessage = `Product with ${id} got updated`)
    } else {
        method = "POST"
        alertmessage = `Product ${object.name} got created`
    }

    try {
        let response = await fetch(endpoint, {
            method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMGI3MmIxZjBmYjAwMTVkOTE3MDAiLCJpYXQiOjE2MTkwMDQyNzQsImV4cCI6MTYyMDIxMzg3NH0.C6LGxQFIwmN7ecSmR8_ZefUgIWs2joADg2P6BVYiA0c'
            },
            body: JSON.stringify(object)
        })
        if (!response.ok) throw new Error(response.status + " " + response.statusText)
        const data = await response.json()
        alert(alertmessage)
    } catch (error) {
        alert(error)
    }

}