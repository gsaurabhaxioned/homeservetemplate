---
layout: layouts/childlayout.njk
titleTag: Child2
eleventyNavigation:
  key: childpage2
  parent: homepage

---

# This is child page 2

::::: breadcumb

{{ collections.all | eleventyNavigation | eleventyNavigationToMarkdown }}

:::::
