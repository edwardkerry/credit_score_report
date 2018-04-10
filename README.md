# Credit Score Indicator

This is a simple React application to read from the Credit Report Info endpoint and present current Credit Score and Long Term Debt information.

## Components and application flow

### Dashboard 

This is a stateful component. At this stage, and with current application complexity, it did not seem necessary to implement a state management technology.

The Dashboard first mounts with a default loading state of `true`, which renders a simple pulsing Loading indicator.

When the dashboard has mounted it uses the `GetJSON` utility function to call the API. The response is transformed by the creditScore and longTermDebt models into simple objects which are stored in component state. In this way, it will be simple to add further models to add additional reports to the dashboard if required.

Loading is set to `false`, and the ReportContainer component is rendered.

### ReportContainer 

This is a stateless wrapper which recieves the report objects as props. It spreads these props to pass them into the imported CreditScoreReport and LongTermDebtReport components.

* The CreditScoreReport is a presentational component that recieves and displays props.

* The LongTermDebtReport is slightly more complex as, depending on a positive or negative change in debt, it will display a different message.

The ReportContainer loads the Carousel, passing the two report components as an array.

 ### Carousel 
 
 This is a stateful component which keeps track of the current activeSlideIndex, and also has a simple key generator to ensure each list element has a unique key. It maps each element in the recieved array as a `<li>` in an `<ul>` of Slide components. The active Slide is selected using an interactive Dot. 

* A Slide component simply renders any passed content.

* A Dot is rendered for each component in the passed Array. The Dot recieves an onClick function which will update the activeSlideIndex in the Carousel state. 

The activeSlideIndex is set to 0, to display the first component in the array. The Dot and Slide in their respective collections with a matching index apply a `--active` modifier to their class name. For a Slide, this causes it to become visible and transition in from the right. For a Dot, this causes the opacity to change to indicate it is selected and to disable the onClick callback.

As the Carousel takes any number of Slides, again it would be fairly straightforward to develop further `Report` components and for the ReportContainer to pass these through.

## Issues and notes

* Unfortunately I have not yet fully implemented the ProgressArc. A work in progress can be seen on the branch 
`progress_arc`. This as an SVG, currrently imported by the CreditScoreReport. The CreditScoreReport can passes the `maxScore` and `score`, which will be used to calculate the percentage of the bar to fill, and a corresponding percentage to "bounce" back to. Currently a complete circle only is implemented, on Desktop. The current approach causes some issues with the background image on Mobile. 

* The application has some basic breakpoints to render appropriately on both mobile and desktop.

* Components are tested with Enzyme shallow rendering and Jest snapshots. I have added `shallow` as a global variable in the `enzymeSetup` file.

* I have included a mockAPIResponse for use in tests, along with two fixtures of the created creditReport and longTermDebt objects.

* I am unfamiliar with Jest and would have liked to test the Dashboard's componentDidMount, but was unable to successfuly mock the getJSON function to avoid actually calling the API. I considered introducing Sinon to the project which I am more familiar with, but this felt unnecessary as it would be replicating existing functionality.

* Webpack 4.3.0 introduced a confllict with ExtractTextWebpackPlugin, by also using a variable called `contenthash`. I have restricted Webpack to `~4.2.*`

* Jest's moduleNameMapper was not correctly excluding SCSS files when reading config from `jest.json`. I have copied this directly into package.json
