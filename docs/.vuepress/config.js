module.exports = {
  base:'/gulu/',
  title:'eco-UI',
  dest: './dist',
  description:'一个好用的UI框架',
  repo: 'https://github.com/Lee-star-one/gulu',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '导航', link: '/guide/' },
      { text: '交流', link: 'https://google.com' },
      {
        text: '语言',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      }
    ],
    sidebar: [
      { 
        title:'入门',
        children:[
        '/install/',
        '/get-started/',
      ]
      },
      { 
        title:'组件',
        children:['/components/button',
        '/components/grid',
        '/components/Input',
        '/components/layout',]
      },
    ],
  }
}