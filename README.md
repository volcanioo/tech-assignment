# tech-assignment

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Development Process

Hey, I'll explain how I do it in here.

## Interface Planning Process
Actually, I felt uncomfortable while creating this app. Because I had 2 elements for the design of the app. I was should create a strong user experience. But whatever I do, I couldn't fill all screen on desktop. I fixed this problem by using big sizes on fonts.

* You can see all elements on the screen at a glance.
* You can use <Tab> and <Enter> on keyboard for use app. I checked the tab indexes.
* You can do a selection on the dropdown with <Tab> key.
* You can see some placeholders and loading indicator on the screen.

## Implementation Process
When I created the first template, I just created 2 components for the app. Actually, When I started I didn't want to use a router or views. Because I had just 1 page for the app. I could use `App.vue` for implementation. But I created a router and views structure for sustainability. When a developer wants to add detail for anything can create their own templates.

### Error Handling
I am using `then` and `catch` functions for that. If the server lives any problem, I can show a message for the user.

I created a variable as `error type`. I am checking the content of the variable on the HTML side while checking the type on the Vue side. In that way, we can manage all error handlers on a variable!
 

## Testing Process
I used BrowserStack for All UI Tests. IE11+ and the other browsers supporting in this project.
