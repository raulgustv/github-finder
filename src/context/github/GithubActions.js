


const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

//SEARCH RESULTS
export const searchUsers = async (input) => {
    

    const params = new URLSearchParams({
        q: input
    })

    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
        headers: {
            Authorization: `token ${GITHUB_TOKEN}`
        }
    });

    const {
        items
    } = await response.json();

    //console.log(items);

    return items;
}