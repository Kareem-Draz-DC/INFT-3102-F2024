import { fetchExperienceList } from "../../lib/strapi"

export async function getStaticProps() {
    const experienceList = await fetchExperienceList();
    return {
        props: { experienceList }
    }
}
export default function Experience({ experienceList }) {

    console.log("experienceList")
    console.dir(experienceList)
    // console.log(experienceList[0].companyLogo.formats.thumbnail.url)

    return (
        <>
            <div>
                <p>Test</p>
                <ul>
                {experienceList.data.map((exp, index) => (
                    <li key={index}>
                        <h1>Role: {exp.role}</h1>
                        <h3>Company Name: {exp.company}</h3>
                        <h3>Years: {exp.duration}</h3>
                        <h3>Details: {exp.description}</h3>
                        <h3>Is currently working there: {exp.isCurrentlyEmployed}</h3>
                        <img src={"http://localhost:1337" + exp.companyLogo?.formats.thumbnail.url} />
                    </li>
                ))}
                </ul>
            </div>
        </>
    )
}