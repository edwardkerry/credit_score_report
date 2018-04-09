# Credit Score Indicator

This is a simple React application to read from the Credit Report Info endpoint and present current Credit Score and Long Term Debt information.

## Components and application flow

* The Dashboard component is responsible for setting application state, which is passed as Props to downstream components. At this early stage it did not seem necessary to implement a technology such as Redux or Flux for state management.

The dashboard first mounts with a default loading state of `true`, which renders a simple pulsing loading indicator.

When the dashboard has mounted it uses the project utility GetJSON function to hit the API. The response is transformed by the creditScore and longTermDebt models into simple Objects which are stored in state. In this way, it will be simple to add further models to add additional reports to the dashboard when required.

Loading is set to `false`, and the ReportContainer component is rendered.

* The ReportContainer is a basic wrapper which loads a  carousel. The ReportContainer passes the CreditScoreReport and LongTermDebtReport to the Carousel as an array of Report components, extracting their required props from the two Objects passed down from the Dashboard.

* The CreditScoreReport is a presentational component that recieves and displays props.

* The LongTermDebtReport is slightly more complex as, depending on a positive or negative change in debt, it will display a different message.

* The Carousel recieves an array of components, and will maps each one in as a `<li>` in an `<ul>` of Slide components. 
A Slide component simply renders any passed content - the CreditScoreReport and LongTermDebtReport components.

The Carousel also renders a line of interactive selection `Dots`, one mapped for each component in the original array. The dot recieves a, onClick function and if clicked will update the activeSlideIndex in the Carousel state. 

The activeSlideIndex is set to 0, to displaay the first component in the array. If the index of the Dot and Slide in their respective collections matches the activeSlideIndex, they apply an `--active` modifier to their class name. For a Slide, this causes it to become visible and transition from the right. For a Dot, this causes the opacity to change to indicate it is selected and to disable the onClick callback.

As the Carousel takes any number of Slides, again it would be fairly straightforward to develop further `Report` components and for the ReportContainer to pass these through.

## Issues and notes

* Webpack 4.2.3 and above has introduced an issue with

* Jest's moduleNameMapper was not correctly excluding SCSS files when reading config from `jest.json`. I have copied this directly into package.json

* Unfortunately I have not yet implemented the progress arc. I would envisage this as an SVG, and imported by the CreditScoreReport. The CreditScoreReport does have access to the maximum and current scores, which would be used to calculate the percentage of the bar to fill and animate a bounce effect.

* The application has some basic breakpoints to render appropriately on both mobile and desktop.

* Components are tested with Enzyme shallow rendering and Jest snapshots. I have added `shallow` as a global variable in the `enzymeSetup` file.

* I have included a mockAPIResponse for use in tests, along with two fixtures of the created creditReport and longTermDebt objects.

I am unfamiliar with Jest and would have liked to test the Dashboard's componentDidMount, but was unable to successfuly mock the getJSON function to avoid actually calling the API. I considered introducing Sinon to the project which I am more familiar with, but this felt unnecessary as it would be replicating existing functionality.