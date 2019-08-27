# A Complete, Dead-Simple Guide to SEO for Static Site Generators

## Introduction

- A couple of sentences on what static site generators (SSGs) are
- A couple of sentences on what SEO is and why we need it
- How is SEO for static site generators different from normal sites (why this article is important to read)

## Challenges posed by SSGs with respect to SEO

- SSGs use a common template for all pages across the site. SEO HTML tags need to be tailored towards the page
- Sitemap needs to be generated dynamically
- In many SSGs, since the output is generated dynamically, we need to verify the source code for the pages once they are generated

## SEO strategies for SSGs

Descriptions of the below tasks:

- Adding meta titles and descriptions
- Adding open graph image and summary tags (for showing rich formatted cards when sharing on twitter or facebook)
- How to verify the source code for pages once they are generated

Following this will be the implementation for each of these tasks in 4 of the most popular SSGs - Gatsby, Next.js, Jekyll, and Hugo

## SEO strategies for React based SSGs

This will cover the strategies used for libraries like Next.js and Gatsby, which are React based

### The React-helmet library

How to integrate SEO tags into your HTML head element using [React Helmet](https://github.com/nfl/react-helmet)

- Adding meta titles and descriptions in React
- Adding open graph image and summary tags (for showing rich formatted cards when sharing on twitter or facebook)
- How to verify the source code for pages once they are generated

## SEO strategies for Jekyll sites

- Using ERB templates to define the meta titles and descriptions in Jekylls head element
- Adding open graph image and summary tags (for showing rich formatted cards when sharing on twitter or facebook)
- How to verify the source code for pages once they are generated

## SEO strategies for Hugo based sites

- Using Hugos Go templates to define the meta titles and descriptions in Jekylls head element
- Adding open graph image and summary tags (for showing rich formatted cards when sharing on twitter or facebook)
- How to verify the source code for pages once they are generated

## Conclusion

Recap of the tasks we performed, and a few sentences on how these concepts can be carried forward to other SSGs of the readers choice.