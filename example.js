import * as analytics from './src'

//   analytics.init() --> load once

const PAGE_LOAD = () => {
  analytics.log('Page Load')
}

const BUTTON_CLICK_VIEW_DEMO = () => {
  analytics.log('View Demo')
}

const BUTTON_CLICK_VISIT_BLOG = () => {
  analytics.log('Visit Blog', { href: 'https://blog.neptunemutual.com' })
}

const ANCHOR_CLICK_VISIT_BLOG = () => {
  analytics.log('Visit Blog', {
    title: 'Decoding BSC Token Hub’s Contract Vulnerability',
    href: 'https://blog.neptunemutual.com/decoding-bsc-token-hubs-contract-vulnerability/'
  })
}

export {
  ANCHOR_CLICK_VISIT_BLOG,
  BUTTON_CLICK_VIEW_DEMO,
  BUTTON_CLICK_VISIT_BLOG,
  PAGE_LOAD,
}
