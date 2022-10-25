import { defaultTheme } from 'vuepress'

export default  {
  theme: defaultTheme({
    // default theme config
    navbar: [
      {
        text: 'Home',
        link: '/',
      },
    ],
    sidebar: [
      {
        text: 'Preparation',
        link: '/preparation'
      },
      {
        text: 'Connect Wallet',
        link: '/connectwallet'
      },
      {
        text: 'Deposit',
        link: '/deposit'
      },
      {
        text: 'swap',
        link: '/swap'
      },
      {
        text: 'withdraw',
        link: '/withdraw'
      },
    ]
  }),
}
