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
          hero {
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
            buttons {
              label
              link
            }
          }
          categories {
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
                        alternativeText
                      }
                    }
                  }
                }
              }
            }
          }
          brands {
            title
            description
            brands {
              name
              href
              media {
                data {
                  attributes {
                    url
                    alternativeText
                  }
                }
              }
            }
          }
          sections {
            title
            description
            media {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
            properties {
              name
              description
            }
          }
          blogs {
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
                        alternativeText
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
          hero {
            media {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
            tag
            title
            description
            buttons {
              label
              link
            }
          }
          socialProof {
            proofs(sort: "order:asc") {
              title
              description
            }
          }
          formation {
            title
            milestones(sort: "order:asc") {
              time
              name
              description
            }
            historyImage {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
          }
          features {
            title
            description
            features {
              name
              description
              media {
                data {
                  attributes {
                    url
                    alternativeText
                  }
                }
              }
            }
          }
          brands {
            title
            description
            brands {
              name
              href
              media {
                data {
                  attributes {
                    url
                    alternativeText
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
                alternativeText
              }
            }
          }
          publishedAt
          content
          relatedBlogs {
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
                        alternativeText
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

const GET_PRODUCT_DETAILS: DocumentNode = gql`
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
                  alternativeText
                }
              }
            }
          }
          relatedSolutions {
            title
            solutions {
              data {
                attributes {
                  name
                  slug
                  description
                  thumbnail {
                    data {
                      attributes {
                        url
                        alternativeText
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
                  alternativeText
                }
              }
            }
          }
          relatedProducts {
            title
            products {
              data {
                attributes {
                  name
                  slug
                  description
                  thumbnail {
                    data {
                      attributes {
                        url
                        alternativeText
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
                alternativeText
              }
            }
          }
          groupedByCategory {
            title
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
          navs(sort: "order") {
            name
            path
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
								alternativeText
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
          facebookLink
          websiteLink
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
          description
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
          description
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
  GET_PRODUCT_DETAILS,
  GET_SOLUTION_DETAILS,
  GET_HEADER,
  GET_FOOTER,
  GET_POPULAR_PRODUCTS,
  GET_POPULAR_SOLUTIONS,
  UPDATE_BLOG_POST_VIEWS,
  GET_BLOG_PAGE,
  GET_CONTACT_PAGE,
};
