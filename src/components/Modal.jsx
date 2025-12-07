import React, { Component } from "react";

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.key === "Escape") this.props.onClose();
  };

  handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) this.props.onClose();
  };

  render() {
    const { src } = this.props;

    return (
      <div
        onClick={this.handleBackdropClick}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0,0,0,0.7)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999,
        }}
      >
        <img
          src={src}
          alt=""
          style={{
            maxWidth: "90%",
            maxHeight: "90%",
            borderRadius: "10px",
          }}
        />
      </div>
    );
  }
}
