// Copyright (c) 2021 8th Wall, Inc.
/* globals AFRAME */

// Component that places tiles where the floor is clicked
AFRAME.registerComponent("tap-place", {
  init() {
    const floor = document.getElementById("floor");
    floor.addEventListener("click", (event) => {
      // Create new entity for the new object
      const newElement = document.createElement("a-entity");

      // The raycaster gives a location of the touch in the scene
      const touchPoint = event.detail.intersection.point;
      newElement.setAttribute("position", touchPoint);

      newElement.setAttribute("rotation", "0 90 0");

      newElement.setAttribute("visible", "false");
      newElement.setAttribute("scale", "0.4 0.4 0.4");

      newElement.setAttribute("shadow", {
        receive: false,
      });

      newElement.setAttribute("gltf-model", "#tileModel");
      this.el.sceneEl.appendChild(newElement);

      newElement.addEventListener("model-loaded", () => {
        // Once the model is loaded, we are ready to show it popping in using an animation
        newElement.setAttribute("visible", "true");
        newElement.setAttribute("animation", {
          property: "scale",
          to: "0.6 0.6 0.6",
          easing: "easeOutElastic",
          dur: 800,
        });
      });
    });
  },
});
