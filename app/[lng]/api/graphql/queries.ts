import { DocumentNode, gql } from '@apollo/client';

const GET_HOME_PAGE: DocumentNode = gql`
  query ($locale: I18NLocaleCode) {
    home(locale: $locale) {
      data {
        attributes {
          seo {
            metaTitle
            metaDescription
            metaImage {
              data {
                attributes {
                  url
                }
              }
            }
            keywords
            metaViewport
            metaRobots
            canonicalURL
            metaSocial {
              socialNetwork
              title
              description
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
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
            tag
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
          Brands {
            title
            description
            brands {
              name
              href
              media {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
          Blogs {
            title
            blogs {
              data {
                attributes {
                  title
                  description
                  slug
                  thumbnail {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                  author {
                    data {
                      attributes {
                        fullname
                      }
                    }
                  }
                  publishedAt
                }
              }
            }
          }
        }
      }
    }
  }
`;

const GET_ABOUT_US_PAGE: DocumentNode = gql`
  query ($locale: I18NLocaleCode) {
    aboutUs(locale: $locale) {
      data {
        attributes {
          seo {
            metaTitle
            metaDescription
            metaImage {
              data {
                attributes {
                  url
                }
              }
            }
            keywords
            metaViewport
            metaRobots
            canonicalURL
            metaSocial {
              socialNetwork
              title
              description
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
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
            title
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
          Features {
            title
            description
            features {
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
          Team {
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

const GET_BLOG_POSTS: DocumentNode = gql`
  query ($locale: I18NLocaleCode) {
    blogPosts(
      filters: { published: { eq: true } }
      locale: $locale
      sort: "publishedAt:desc"
    ) {
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
  query ($locale: I18NLocaleCode, $slug: String!) {
    blogPosts(filters: { slug: { eq: $slug } }, locale: $locale) {
      data {
        id
        attributes {
          seo {
            metaTitle
            metaDescription
            metaImage {
              data {
                attributes {
                  url
                }
              }
            }
            keywords
            metaViewport
            metaRobots
            canonicalURL
            metaSocial {
              socialNetwork
              title
              description
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
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
  query ($locale: I18NLocaleCode) {
    categories(locale: $locale) {
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
  query ($locale: I18NLocaleCode, $slug: String!) {
    products(filters: { slug: { eq: $slug } }, locale: $locale) {
      data {
        attributes {
          seo {
            metaTitle
            metaDescription
            metaImage {
              data {
                attributes {
                  url
                }
              }
            }
            keywords
            metaViewport
            metaRobots
            canonicalURL
            metaSocial {
              socialNetwork
              title
              description
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
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
  query ($locale: I18NLocaleCode, $slug: String!) {
    solutions(filters: { slug: { eq: $slug } }, locale: $locale) {
      data {
        attributes {
          seo {
            metaTitle
            metaDescription
            metaImage {
              data {
                attributes {
                  url
                }
              }
            }
            keywords
            metaViewport
            metaRobots
            canonicalURL
            metaSocial {
              socialNetwork
              title
              description
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
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
  query ($locale: I18NLocaleCode) {
    header(locale: $locale) {
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
  query ($locale: I18NLocaleCode) {
    footer(locale: $locale) {
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
  query ($locale: I18NLocaleCode, $slug: String!) {
    solutions(filters: { slug: { eq: $slug } }, locale: $locale) {
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
  query ($locale: I18NLocaleCode, $slug: String!) {
    products(filters: { slug: { eq: $slug } }, locale: $locale) {
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
  query ($locale: I18NLocaleCode) {
    products(
      filters: { popular: { eq: true } }
      pagination: { limit: 6 }
      locale: $locale
    ) {
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
  query ($locale: I18NLocaleCode) {
    solutions(
      filters: { popular: { eq: true } }
      pagination: { limit: 6 }
      locale: $locale
    ) {
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

const GET_BLOG_PAGE: DocumentNode = gql`
  query ($locale: I18NLocaleCode) {
    blogPage(locale: $locale) {
      data {
        attributes {
          seo {
            metaTitle
            metaDescription
            metaImage {
              data {
                attributes {
                  url
                }
              }
            }
            keywords
            metaViewport
            metaRobots
            canonicalURL
            metaSocial {
              socialNetwork
              title
              description
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
          title
          description
        }
      }
    }
  }
`;

const GET_CONTACT_PAGE: DocumentNode = gql`
  query ($locale: I18NLocaleCode) {
    contact(locale: $locale) {
      data {
        attributes {
          seo {
            metaTitle
            metaDescription
            metaImage {
              data {
                attributes {
                  url
                }
              }
            }
            keywords
            metaViewport
            metaRobots
            canonicalURL
            metaSocial {
              socialNetwork
              title
              description
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
          title
          description
          source
        }
      }
    }
  }
`;

export {
  GET_HOME_PAGE,
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
  GET_BLOG_PAGE,
  GET_CONTACT_PAGE,
};
