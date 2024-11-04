import axios from 'axios'

const STRAPI_URL = process.env.STRAPI_API_URL
// const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN

export const fetchExperienceList = async () => {
    try {
        const response = await axios.get(STRAPI_URL + "experiences?populate=companyLogo")
        console.log("---------Axios Response List---------")
        console.log(response.data)
        return response.data
    }  catch (error) {
        console.error("Error in fetching experienceList: " + error)
    }
}
