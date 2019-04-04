import { transition } from "d3-transition";
import { easeLinear } from "d3";

const circleHeight = 400;

const t = () =>
  transition()
    .duration(1750)
    .ease(easeLinear);

export const drawCircle = (container, id, cx, cy, r) =>
  container
    .append("circle")
    .transition(t)
    .attr("id", id)
    .attr("cx", cx)
    .attr("cy", cy)
    .attr("r", r)
    .style("fill", "white")
    .style("stroke", "white");

export const drawText = (container, text, dx, dy) =>
  container
    .append("text")
    .attr("dx", dx)
    .attr("dy", dy)
    .text(text)
    .style("text-anchor", "middle")
    .style("font", "50px sans-serif");

export const drawSlide = (container, slide, cx) => {
  const circle = drawCircle(
    container,
    slide.id,
    cx,
    window.innerHeight / 2,
    circleHeight
  );

  // support multi line here
  const words = slide.description.split(" ").reduce((acc, word) => {
    if (
      acc.length > 0 &&
      acc[acc.length - 1].match(/ /g) &&
      acc[acc.length - 1].match(/ /g).length > 2
    ) {
      acc.push(word);
    } else {
      if (acc.length === 0) {
        acc[0] = word;
      } else {
        acc[acc.length - 1] = acc[acc.length - 1] + " " + word;
      }
    }
    return acc;
  }, []);

  const lineSpace = circleHeight / words.length;

  words.reduce((acc, phrase) => {
    acc += lineSpace;
    drawText(
      container,
      phrase,
      window.innerWidth / 2,
      words.length === 1 ? window.outerHeight / 2 : acc
    );
    return acc;
  }, lineSpace);

  return circle;
};
