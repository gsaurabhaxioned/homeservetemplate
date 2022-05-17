---
layout: layouts/childlayout.njk
titleTag: Child1
eleventyNavigation:
  key: childpage
  parent: homepage
---

# This is child page

::::: breadcumb

{{ collections.all | eleventyNavigation | eleventyNavigationToMarkdown }}

:::::