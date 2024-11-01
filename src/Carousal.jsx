import { Component } from "react";

class Carousal extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleImageClick = (e) => {
    this.setState({
      active: e.target.dataset.index,
    });
  };

  render() {
    const { images } = this.props;
    const { active } = this.state;
    return (
      <div className="carousel">
        <img src={images[active]} alt="animal picture" />
        <div className="carousel-smaller">
          {images.map((image, index) => (
            <img
              onClick={this.handleImageClick}
              data-index={index}
              key={image}
              src={image}
              className={active === index ? "active" : ""}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousal;
