const baseURL = 'http://localhost:3500';
export default async function Connect(payload) {
    try {

            let response = await fetch(
                baseURL + "/send",
                {
                    method: "post",
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                })

            return response

    }
    catch (error) {
        console.error(error);
    }
}