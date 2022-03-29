import MenuFragment from "./fragments/menus"
import {
  gql
} from "@apollo/client";

export const GET_MENUS = gql`
query {
  headerMenus: menuItems(where: {location: EXPANDED, parentId: "0"}) {
    edges {
      node {
        ...MenuFragment
        childItems {
          edges {
            node {
              ...MenuFragment
            }
          }
        }
      }
    }
  }
  footerMenus: menuItems(where: {location: EXPANDED, parentId: "0"}) {
    edges {
      node {
        ...MenuFragment
      }
    }
  }
}
${MenuFragment}
`