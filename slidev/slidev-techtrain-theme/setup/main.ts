import { defineAppSetup } from '@slidev/types'
import PuruBubble from '../components/PuruBubble.vue'

interface SlideMeta {
  slide?: {
    frontmatter?: {
      layout?: string
    }
  }
}

export default defineAppSetup(({ app, router }) => {
  // Register PuruBubble component
  app.component('PuruBubble', PuruBubble)

  // Set default layout for all slides
  router.beforeEach((to, from, next) => {
    const meta = to.meta as SlideMeta
    if (!meta.slide?.frontmatter?.layout) {
      meta.slide = {
        ...meta.slide,
        frontmatter: {
          ...meta.slide?.frontmatter,
          layout: 'default'
        }
      }
    }
    next()
  })
})