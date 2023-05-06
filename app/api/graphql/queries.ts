import { DocumentNode, gql } from '@apollo/client';

const GET_HOME_PAGE: DocumentNode = gql`
  query {
    home {
      data {
        attributes {
          Metadata {
            title
            description
          }
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
          }
          Categories {
            title
            categories(sort: "order:asc") {
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
          Metadata {
            title
            description
          }
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
        id
        attributes {
          title
          slug
          translator
          source
          views
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
          description
          products {
            data {
              attributes {
                name
                description
                slug
                thumbnail {
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
    }
  }
`;

const GET_PRODUCTS_DETAILS: DocumentNode = gql`
  query ($slug: String!) {
    products(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          name
          description
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
          description
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

const GET_HEADER: DocumentNode = gql`
  query {
    header {
      data {
        attributes {
          logo {
            data {
              attributes {
                url
              }
            }
          }
          navs(sort: "order") {
            name
            path
          }
          categories {
            data {
              attributes {
                name
                slug
                products {
                  data {
                    attributes {
                      name
                      slug
                    }
                  }
                }
                solutions {
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
      }
    }
  }
`;

const GET_FOOTER: DocumentNode = gql`
  query {
    footer {
      data {
        attributes {
          logo {
            data {
              attributes {
                url
              }
            }
          }
          text
          facebookLink
          gmailLink
          sections {
            name
            Navs(sort: "order:asc") {
              name
              path
            }
          }
        }
      }
    }
  }
`;

const GET_SOLUTIONS_RELATED_CONTENTS: DocumentNode = gql`
  query ($slug: String!) {
    solutions(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          products(pagination: { limit: 6 }) {
            data {
              attributes {
                name
                slug
                thumbnail {
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
    }
  }
`;

const GET_PRODUCTS_RELATED_CONTENT: DocumentNode = gql`
  query ($slug: String!) {
    products(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          solutions(pagination: { limit: 6 }) {
            data {
              attributes {
                name
                slug
                thumbnail {
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
    }
  }
`;

const GET_POPULAR_PRODUCTS: DocumentNode = gql`
  query {
    products(filters: { popular: { eq: true } }, pagination: { limit: 6 }) {
      data {
        attributes {
          name
          slug
          thumbnail {
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
`;

const GET_POPULAR_SOLUTIONS: DocumentNode = gql`
  query {
    solutions(filters: { popular: { eq: true } }, pagination: { limit: 6 }) {
      data {
        attributes {
          name
          slug
          thumbnail {
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
`;

const UPDATE_BLOG_POST_VIEWS: DocumentNode = gql`
  mutation ($id: ID!, $views: Int) {
    updateBlogPost(id: $id, data: { views: $views }) {
      data {
        attributes {
          views
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
  GET_HEADER,
  GET_FOOTER,
  GET_SOLUTIONS_RELATED_CONTENTS,
  GET_PRODUCTS_RELATED_CONTENT,
  GET_POPULAR_PRODUCTS,
  GET_POPULAR_SOLUTIONS,
  UPDATE_BLOG_POST_VIEWS,
};
