# React Avatar Selector

<img src='https://github.com/belferink1996/react-avatar-selector/blob/main/docs/preview-no-value.png' width='150' ><img src='https://github.com/belferink1996/react-avatar-selector/blob/main/docs/preview-with-value.png' width='150' >

## Installation and usage

Install from npm:

```bash
npm i --save react-avatar-selector
```

Then use it in your app:

```jsx
import React from 'react'
import AvatarSelector from 'react-avatar-selector'

function App(){
  const [pic, setPic] = React.useState(null)

  return (
    <AvatarSelector onChange={(value) => setPic(value)} value={pic} />
  )
}
```

## File data format

This is an example object that is retrieved by the `onChange` prop, and the same object that should be passed as the `value` prop.

```javascript
const value = {
  name: "me_profile.jpeg",
  type: "image/jpeg",
  size: "840 kB",
  base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/...",
}
```

## Props

Common props you may want to include:

| Prop     | Requirement | Default Value   | Description                                                      |
| -------- | ----------- | --------------- | ---------------------------------------------------------------- |
| onChange | Required    | (value) => null | Callback function, will recieve the image object as a value      |
| value    | Required    | undefined       | The object given by the onChange handler                         |
| size     | Optional    | 200             | Must be of type number, defines the size of the elemtn in pixels |
