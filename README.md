# PLEASE excuse the code. it was written at 4am.

# example inputs:

## Example 1.

```html
<div class="container">
  <h1 class="title">Hello World</h1>
  <p class="description">This is a paragraph</p>
  <ul class="list">
    <li>List item 1</li>
    <li>List item 2</li>
  </ul>
</div>
```

```scss
.container {
  .title {
  }
  .description {
  }
  .list {
    li {
    }
  }
}
```

---

## Example 2.

```html
<div class="container">
  <h1 class="title">Hello World</h1>
  <p class="description">This is a paragraph</p>
  <ul class="list">
    <li>List item 1</li>
    <li>List item 2</li>
  </ul>
  <div class="image-wrapper">
    <img src="image.png" alt="Image" />
  </div>
</div>
```

```scss
.container {
  .title {
  }
  .description {
  }
  .list {
    li {
    }
  }
  .image-wrapper {
    img {
    }
  }
}
```

---

## Example 3.

```html
<div class="block">
  <h1 class="block__title">Hello World</h1>
  <p class="block__description">This is a paragraph</p>
  <ul class="block__list">
    <li class="block__list-item">List item 1</li>
    <li class="block__list-item">List item 2</li>
  </ul>
</div>
```

```scss
.block {
  .block__title {
  }
  .block__description {
  }
  .block__list {
    .block__list-item {
    }
  }
}
```

# Todo

- BEM nesting support with & ect

# Current bugs:

- Html with no classes will only print the parent div

### example:

```html
<div>
  <h1>Hello World</h1>
  <p>This is a paragraph</p>
  <ul>
    <li>List item 1</li>
    <li>List item 2</li>
  </ul>
</div>
```

outputs:

```scss
div {
}
```

instead of:

```scss
div {
  h1 {
  }
  p {
  }
  ul {
    li {
    }
  }
}
```
