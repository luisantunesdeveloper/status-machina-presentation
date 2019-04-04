import { transition } from "d3-transition";
import { easeLinear } from "d3";

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
    400
  );

  // support multi line here
  drawText(
    container,
    slide.description,
    window.innerWidth / 2,
    window.innerHeight / 2
  );
  return circle;
};
