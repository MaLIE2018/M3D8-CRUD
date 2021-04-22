export const endpoint = "https://striveschool-api.herokuapp.com/api/product/"

export const getData = async(endpoin) => {
    try {
        let response = await fetch(endpoin, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMGI3MmIxZjBmYjAwMTVkOTE3MDAiLCJpYXQiOjE2MTkwMDQyNzQsImV4cCI6MTYyMDIxMzg3NH0.C6LGxQFIwmN7ecSmR8_ZefUgIWs2joADg2P6BVYiA0c'
            },
        })
        return response.json()
    } catch (error) {
        alert(error.message)
    }
}

export const postData = async(object, id) => {
    let endpoint = "https://striveschool-api.herokuapp.com/api/product/"
    if (id) {
        endpoint += id
        method = "PUT"
    } else {
        method = "POST"
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
        if (!response.ok) throw new Error("failed to post")

        const data = await response.json()
        alert(`Product with ${data._id} got created`)
    } catch (error) {
        alert(error.message, error)
    }

}