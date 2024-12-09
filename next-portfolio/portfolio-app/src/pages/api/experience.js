import axios from 'axios'
const STRAPI_URL = process.env.STRAPI_API_URL;

export default async function handler(request, response) {
    try {
        // const response = await axios.get("http://localhost:1337/api/experiences?populate=companyLogo")
        const experiences = await axios.get(STRAPI_URL + "experiences?populate=companyLogo")
        response.status(200).json(experiences.data)
    } catch (err) {
        response.status(400).json({error: err})
    }
}