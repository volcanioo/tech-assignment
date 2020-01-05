# tech-assignment
If you want to learn How I did it? You can click [here.](#development-process)

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

Hey, I'll explain how I did  it in here.

## Interface Planning Process
Actually, I felt uncomfortable while creating this app. Because I had 2 elements for the design of the app. I was should create a strong user experience. But whatever I do, I couldn't fill all screen on desktop. I fixed this problem by using big sizes on fonts.

* You can see all elements on the screen at a glance.
* You can use <Tab> and <Enter> on keyboard for use app. I checked the tab indexes.
* You can do a selection on the dropdown with <Tab> key.
* You can see some placeholders and loading indicator on the screen.

## Implementation Process
When I created the first template, I just created 2 components for the app. Actually, When I started I didn't want to use a router or views. Because I had just 1 page for the app. I could use `App.vue` for implementation. But I created a router and views structure for sustainability. When a developer wants to add detail for anything can create their own templates.

### Dependencies
* [Axios](https://github.com/axios/axios): I used Axios for exceeding to Allow-Cross origin problem and doing server requests in an easier way.
* [Vue Multiselect](https://vue-multiselect.js.org/): I used for Multiselect for creating a typehead dropdown in an easier way. I chose that thing because Multiselect gives a custom template for dropdowns, In that way, developers can create their templates. Same time, Multiselect has so many properties for a dropdown. You can discover new things for UX from Multiselect and you can implement. 
* [VueChartJS](https://vue-chartjs.org/): I am using vue-awesome repo when I want to create hot solutions on Vue. I checked the Chart Plugins list on the vue-awesome and I found VueChartJS. I checked to VueChartJS issues, commits, and stars after that, I added to my app.

### Loading and Placeholders
I created a component for the loading indicator. I am using this component when the user searches anything. I was should fill the screen for UX and I had an empty chart when the user searches anything. I changed chart styles when it's empty. In that way, when the user selects a repository from typehead dropdown I changed CSS and showing with filled data.

### Error Handling
I am using `then` and `catch` functions for that. If the server lives any problem, I can show a message for the user.

I created a variable as `error type`. I am checking the content of the variable on the HTML side while checking the type on the Vue side. In that way, we can manage all error handlers on a variable!
 

## Testing Process
I used BrowserStack for All UI Tests. IE11+ and the other browsers supporting in this project.
