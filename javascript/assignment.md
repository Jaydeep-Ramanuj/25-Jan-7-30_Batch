# Heading1

## Heading 2

<b>Bold</b>

**Bold**

<i>Italic</i>
_italic_

<img src="https://images.pexels.com/photos/694587/pexels-photo-694587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">

![](https://images.pexels.com/photos/694587/pexels-photo-694587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)

| Name | City   | Course |
| ---- | ------ | ------ |
| Jay  | Rajkot | WD     |

`<b>` this is will make text bold

```javascript
fetch('https://randomuser.me/api/?results=50')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.results);
  })
  .catch((err) => {
    console.log(er);
  });
```

```html
<div class="parent">
  <div class="child">
    child1
    <div class="sub-child">sub-child1</div>
    <div class="sub-child">sub-child2</div>
    <div class="sub-child">sub-child3</div>
  </div>
  <div class="child">
    child2
    <div class="sub-child">sub-child1</div>
    <div class="sub-child">sub-child2</div>
    <div class="sub-child">sub-child3</div>
  </div>
  <div class="child">
    child3
    <div class="sub-child">sub-child1</div>
    <div class="sub-child">sub-child2</div>
    <div class="sub-child">sub-child3</div>
  </div>
</div>
```

<div class="child">This is child</div>

<style>
    .child{
        color:red;
        border:1px solid black;
    }
</style>

- This
  - else
    - some

1. first 2. some

> This is some thing
