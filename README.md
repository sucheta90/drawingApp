# Drawing App

A simple demo app, created as a part of a group a activity. User should be able to line draw, select colors for the line and can choose their preferable line-width.

## Use of `<canvas>` element

The HTML `<canvas>` element is used to draw graphics, on the fly, with the help of JavaScript.

Canvas has several methods for drawing paths, boxes, circles, text, and adding images.

This app is a simple demonstation where the user can draw lines in different color with lines having different line-widths.

The `Clear` button will clear the `<canvas>` so that the user can start a new drawing.

### Implementation details

To make the Canvas work as it should we need to call function as below:

```
const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

```

The [`getContext()` ](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext) method returns a drawing context on the canvas.

#### Helpful Links

1. [CanvasREnderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)
