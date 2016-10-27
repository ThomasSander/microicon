
const { createElement: h } = require('react')
const Pre = require('./Pre')

module.exports = () => (
  h('section', { id: 'usage' },
    h('h2', {}, 'Usage'),
    h(Pre, {}, `<img src='https:icon.now.sh/chevron' alt='chevron icon' />`),
    h('h3', {}, 'Size'),
    h(Pre, {}, `<img src='https:icon.now.sh/chevron/32' alt='chevron icon' />`),
    h('h3', {}, 'Color'),
    h(Pre, {}, `<img src='https:icon.now.sh/chevron/ff0000' alt='chevron icon' />`),
    h('h3', {}, 'Direction'),
    h(Pre, {}, `<img src='https:icon.now.sh/chevron/down' alt='chevron icon' />`)
  )
)

