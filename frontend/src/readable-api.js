const api = "http://localhost:3001"

//Token
let token = localStorage.token;
if(token === undefined) {
	token = Math.random().toString(36).slice(2);
}

// Headers
const headers = {
	Authorization: token
}

/**
 * getPosts
 */
export const getPosts = () => 
	fetch(`${api}/posts`, {headers}).then(res => res.json())

/**
 * getCategories
 */
export const getCategories = () => 
fetch(`${api}/categories`, {headers}).then(res => res.json())