import React from "react";
import { drawSlide } from "./draw";
import { select } from "d3-selection";
import { event, mouse } from "d3";

export default class Canvas extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.currentSlide && this.slideIndex < this.slidesCount) {
      this.renderSlide();
    }
  }

  componentDidUpdate() {
    if (this.currentSlide && this.slideIndex < this.slidesCount) {
      this.renderSlide();
    }
  }

  click(previous, next) {
    const coordinates = mouse(this);
    if (coordinates[0] < window.innerWidth / 2) {
      previous(event);
    } else {
      next(event);
    }
  }

  getContainer() {
    return select("svg");
  }

  renderSlide() {
    drawSlide(this.getContainer(), this.currentSlide, window.innerWidth / 2);
    this.getContainer().on(
      "click",
      this.click.bind(
        this.getContainer().node(),
        this.props.previous,
        this.props.next
      )
    );
  }

  render() {
    const slides = this.props.store.slides;
    this.slideIndex = this.props.store.currentSlide;
    this.slidesCount = slides.length + 1;
    this.currentSlide =
      this.props.store.currentSlide > -1 &&
      this.props.store.currentSlide < slides.length + 1
        ? slides[this.props.store.currentSlide]
        : slides[0];

    const svg = (
      <svg width={window.innerWidth} height={window.innerHeight}>
        <rect width="100%" height="100%" fill="black" />
        <text dx={50} dy={window.innerHeight - 50} fill="white">
          {this.props.store.currentSlide + 1}/{this.slidesCount - 1}
        </text>
        <text
          dx={window.innerWidth - 180}
          dy={window.innerHeight - 50}
          fill="white"
        >
          MIT Luís Antunes
        </text>
      </svg>
    );

    return svg;
  }
}
