# dptest

Total time spent: 4 hours

## Requirements

The task:

A web service returns experimental data.  Create a UI to visualize this data.

Some information:

The data is represented as a JSON object.  Here is an example of a very simple 4 dimensional data set consisting of 2 points.  The dimensions in this example are named "x", "y", "z", and "t".

```json
{
  [
    {
      "x": 2.4,
      "y": 3.2,
      "z": 84,
      "t": 1060
    },
    {
      "x": 3.1,
      "y": -4.4,
      "z": 99,
      "t": 1140
    }
  ]
}
```

A user should be able to do the following things:
1. Choose which combination of dimensions to display.
1. For each dimension, specify a minimum and maximum value to include in the displayed results.  Data points outside the allowed range should not be displayed.

Some more information:
1. The attached file is an example of the kind of data the web service will return.  This file contains a 5 dimensional data set with 120 data points.
2. Users can choose any combination of any number of dimensions to display.
3. This UI will be used to visualize different data sets with different dimensionality.
4. The minimum number of dimensions for any data set is 1.  The maximum number of dimensions is around a dozen.  The number of data points will typically be somewhere between 10 and 1000.
5. In production, the data will be returned by a web service.  For now, the data can be hardcoded into your javascript but it must be easy for us to replace it with a different dataset

Don't spend more than a few hours on this challenge.  We understand that a feature like this could easily take days or even weeks of work to get refined and polished to the point where it's ready to ship.  We're not looking for that final product.  We're looking for a good prototype.

## Notes

- I used [CanvasJs](https://canvasjs.com/) to render the charts
- I could have used a view framework like React or Angular to create components with state, however, for speed I decided to keep it simple with vanilla javascript.
- Using vanilla javascript saved on installing npm packages (react, react-dom) and transpiling ES6 (with classes, etc.) to ES5 using babel + babel-preset-env
- I would also have written tests (using npm package ava and assert library or mocha) if the time clock was more than a few hours to complete the task
- I also would have made the solution sexy, if time, using a design framework like Bootstrap, Material, or Ant Design (installed using Bower)