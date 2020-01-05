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
I felt  a bit uncomfortable while creating this app. Because I had only two elements for the design of the app. I was meant to create a strong user experience. But whatever I do, I couldn't fill all of the screen on desktop. I fixed this problem by using big sizes on fonts.
* You can see all elements on the screen at a glance.
* You can use `<Tab>` and `<Enter>` buttons to use app. I checked the tab indexes.
* You can do a selection on the dropdown with a `<Tab>` key.
* You can see some placeholders and loading indicator on the screen.

## Implementation Process
When I created the first template, I just created two components for the app. When I started I didn't want to use a router or views because I had just one page for the app. I could have used `App.vue` for implementation but I created a router and views structure for sustainability. When a developer wants to add detail for anything they can create their own templates.

While refactoring on the project, I felt a little bad about Axios requests on the `Home.vue` file. Because of this feeling, I created a service layer for Axios requests and I manage all requests in-app from a `Service.js` file in the service layer.

### Dependencies
* [Axios](https://github.com/axios/axios): I used Axios for exceeding to Allow-Cross origin problem and handling server requests in an easier way.
* [Vue Multiselect](https://vue-multiselect.js.org/): I used  Multiselect to create a typehead dropdown with an easier way. I chose Multiselect because it gives a custom template for dropdowns, in that way, developers can easily create their own templates. At the same time, Multiselect has so many properties for a dropdown. You can simply discover new things for UX from Multiselect and after you can implement.
* [VueChartJS](https://vue-chartjs.org/): I am using vue-awesome repo when I want to create hot solutions on Vue. I checked the Chart Plugins list on the vue-awesome and I found VueChartJS. I checked VueChartJS issues, commits, and stars, after that I added to my app.

### Loading and Placeholders
I created a component for the loading indicator. I am using this component when the user searches for something. I was meant to fill the screen for UX and I had an empty chart when the user searches for something. I changed chart styles when it's empty. In that way, when the user selects a repository from typehead dropdown I changed CSS and while it was showing with filled data.

### Error Handling
I am using `then` and `catch` functions for error handling. If the server produces any problem, I can show a message to the user.

I created a variable called `errorType`. I check the content of the variable on the HTML side while also checking the type on the Vue side. In that way, we can manage all error handlers on a variable! 

## Testing Process
I used BrowserStack for All UI Tests. IE11+ and all of the other browsers was supported in this project.

Thanks a lot.
