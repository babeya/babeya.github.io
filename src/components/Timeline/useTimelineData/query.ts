import { graphql } from "gatsby";

export const TIMELINE_QUERY = graphql`
  query allJobs {
    allProjectsJson {
      nodes {
        desc {
          en {
            id
            childrenMarkdownRemark {
              html
              rawMarkdownBody
            }
          }
          fr {
            id
            childMarkdownRemark {
              html
              rawMarkdownBody
            }
          }
        }
        name
        id
        from
        tags
        type
        link
        typename
      }
    }
    allJobsJson {
      nodes {
        link
        id
        from
        to
        title
        tags
        type
        typename
        company
        colors
        desc {
          en {
            id
            childMarkdownRemark {
              html
              rawMarkdownBody
            }
          }
          fr {
            id
            childMarkdownRemark {
              html
              rawMarkdownBody
            }
          }
        }
      }
    }
    allSchoolsJson {
      nodes {
        diploma
        from
        id
        link
        school
        tags
        to
        typename
        validated
      }
    }
  }
`;
