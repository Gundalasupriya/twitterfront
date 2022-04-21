export { default as CreatePost } from '../..\\components\\CreatePost.vue'
export { default as Header } from '../..\\components\\Header.vue'
export { default as Login } from '../..\\components\\Login.vue'
export { default as Posts } from '../..\\components\\Posts.vue'
export { default as RegisterHeader } from '../..\\components\\RegisterHeader.vue'
export { default as SinglePost } from '../..\\components\\SinglePost.vue'
export { default as UserHome } from '../..\\components\\UserHome.vue'
export { default as UserLogin } from '../..\\components\\UserLogin.vue'
export { default as UserProfile } from '../..\\components\\UserProfile.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
