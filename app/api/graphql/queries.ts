import { DocumentNode, gql } from '@apollo/client';

const GET_HOME_PAGE: DocumentNode = gql`
  query {
    home {
      data {
        attributes {
          Hero {
            media {
              data {
                attributes {
                  url
                }
              }
            }
            title
            description
            button {
              title
              link
            }
          }
          Categories {
            title
            categories {
              data {
                attributes {
                  name
                  description
                  slug
                }
              }
            }
          }
          Sections {
            title
            description
            media {
              data {
                attributes {
                  url
                }
              }
            }
            properties {
              name
              description
            }
          }
        }
      }
    }
  }
`;

const GET_HOME_BLOGS: DocumentNode = gql`
  query {
    blogPosts(
      filters: { published: { eq: true } }
      sort: "createdAt:desc"
      pagination: { limit: 3 }
    ) {
      data {
        attributes {
          title
          slug
          description
          thumbnail {
            data {
              attributes {
                url
              }
            }
          }
          publishedAt
          author {
            data {
              attributes {
                fullname
              }
            }
          }
        }
      }
    }
  }
`;

const GET_ABOUT_US_PAGE: DocumentNode = gql`
  query {
    aboutUs {
      data {
        attributes {
          title
          description
          Cover {
            data {
              attributes {
                url
              }
            }
          }
          Formation {
            History(sort: "order:asc") {
              name
              description
            }
            historyImage {
              data {
                attributes {
                  url
                }
              }
            }
          }
          Development {
            name
            description
            details(sort: "order:asc") {
              name
              description
            }
            media {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;

const GET_BLOG_POSTS: DocumentNode = gql`
  query {
    blogPosts(filters: { published: { eq: true } }, sort: "publishedAt:desc") {
      data {
        attributes {
          title
          slug
          thumbnail {
            data {
              attributes {
                url
              }
            }
          }
          description
          publishedAt
          author {
            data {
              attributes {
                fullname
              }
            }
          }
        }
      }
    }
  }
`;

const GET_BLOG_POST: DocumentNode = gql`
  query ($slug: String!) {
    blogPosts(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          title
          slug
          author {
            data {
              attributes {
                fullname
              }
            }
          }
          description
          thumbnail {
            data {
              attributes {
                url
              }
            }
          }
          publishedAt
          content
        }
      }
    }
  }
`;

const GET_CATEGORIES_PRODUCTS: DocumentNode = gql`
  query {
    categories {
      data {
        attributes {
          name
          products {
            data {
              attributes {
                name
                slug
              }
            }
          }
        }
      }
    }
  }
`;

const GET_PRODUCTS_DETAILS: DocumentNode = gql`
  query ($slug: String!) {
    products(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          name
          thumbnail {
            data {
              attributes {
                url
              }
            }
          }
          source
          contents(sort: "order:asc") {
            name
            description
            media {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;

const GET_SOLUTION_DETAILS: DocumentNode = gql`
  query ($slug: String!) {
    solutions(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          name
          thumbnail {
            data {
              attributes {
                url
              }
            }
          }
          source
          contents(sort: "order:asc") {
            name
            description
            media {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;

export {
  GET_HOME_PAGE,
  GET_HOME_BLOGS,
  GET_ABOUT_US_PAGE,
  GET_BLOG_POST,
  GET_BLOG_POSTS,
  GET_CATEGORIES_PRODUCTS,
  GET_PRODUCTS_DETAILS,
  GET_SOLUTION_DETAILS,
};
