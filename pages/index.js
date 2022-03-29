import client from "../graphql"
import { GET_MENUS } from "../graphql/queries/getMenus"

export default function Home({menus}) {
  return (
    <div>
      <h3 className="text-lg leading-6 font-medium text-gray-900">
        Applicant Information
      </h3>
    </div>
  )
}


export async function getStaticProps(context) {
  const {data, loading, networkStatus} = await client.query({
    query: GET_MENUS
  })
  console.log(data);
  return {
    props: {
      menus: {
        headerMenus: data?.headerMenus?.edges,
        footerMenus: data?.footerMenus?.edges
      }
    },
  }
}