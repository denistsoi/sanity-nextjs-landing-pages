export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e213888db2442c0ede5a078',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-hiwddk5i',
                  apiId: '089f6714-2bbf-4709-8d4c-d43498b55abc'
                },
                {
                  buildHookId: '5e2138880dee4eda979158f5',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-1fnbhdpb',
                  apiId: 'b7a3818b-8e58-46ad-8f3f-c209b29699ce'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/denistsoi/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-1fnbhdpb.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
