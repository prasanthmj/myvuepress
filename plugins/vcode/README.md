## Usage Example

```html
<v-code>
<template v-slot:html>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
</template>
<template v-slot:css>
.someClass
{
    font-weight:bold;
}
</template>
<template v-slot:js>
var b= 100;
function onClick()
{
  return 200;
}
</template>
</v-code>
```
