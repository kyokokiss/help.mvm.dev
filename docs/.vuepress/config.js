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
        text: 'Swap',
        link: '/swap'
      },
      {
        text: 'Withdraw',
        link: '/withdraw'
      },
    ]
  }),
}
