import { Component } from "react";

class Slider extends Component {
  selected = 0;
  interval = 0;

  images = [
    "https://p4.wallpaperbetter.com/wallpaper/210/50/431/5bd2b866832bf-wallpaper-preview.jpg",
    "https://p4.wallpaperbetter.com/wallpaper/445/670/437/5bd2b8a02d549-wallpaper-preview.jpg",
    "https://p4.wallpaperbetter.com/wallpaper/427/764/48/5bd2b8784d1a7-wallpaper-preview.jpg",
    "https://p4.wallpaperbetter.com/wallpaper/255/183/666/5bd2b79b15a09-wallpaper-preview.jpg",
  ];
  next = () => {
    if (this.selected !== this.images.length - 1) this.selected += 1;
    this.setState({ images: this.images[this.selected] });
  };

  prev = () => {
    if (this.selected !== 0) this.selected -= 1;
    this.setState({ images: this.images[this.selected] });
  };

  slide = () => {
    this.interval = setInterval(() => {
      this.next();
      if (this.selected === this.images.length - 1) this.selected = -1;
    }, 1500);
  };

  stop = () => {
    clearInterval(this.interval);
  };
  constructor() {
    super();
    this.state = {
      images: this.images[0],
    };
  }
  render() {
    return (
      <div className="slider">
        <img src={this.state.images} id="slideShow" />
        <br />
        <input type="button" onClick={this.next} value="next" className="btn" />
        <input type="button" onClick={this.prev} value="prev" className="btn" />
        <input
          type="button"
          onClick={this.slide}
          value="slide"
          className="btn"
        />
        <input type="button" onClick={this.stop} value="stop" className="btn" />
      </div>
    );
  }
}

export default Slider;
