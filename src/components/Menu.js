import React from "react";
import Colorpicker from "./Colorpicker";
import Slider from "./Slider";

function menu() {
  return (
    <div>
      <div className="card" style={{ width: "50rem", height: "50rem" }}>
        <div className="card-body">
          <div
            class="btn-toolbar"
            role="toolbar"
            aria-label="Toolbar with button groups"
          >
            <div class="btn-group me-2" role="group" aria-label="First group">
              <button type="button" class="btn btn-primary">
                Up
              </button>
            </div>
            <div class="btn-group me-2" role="group" aria-label="Second group">
              <button type="button" class="btn btn-primary">
                Down
              </button>
            </div>
            <div class="btn-group me-2" role="group" aria-label="Second group">
              <button type="button" class="btn btn-primary">
                Left
              </button>
            </div>
            <div class="btn-group" role="group" aria-label="Third group">
              <button type="button" class="btn btn-primary">
                Right
              </button>
            </div>
          </div>

          <div
            class="btn-toolbar my-3"
            role="toolbar"
            aria-label="Toolbar with button groups"
          >
            <div class="btn-group me-2" role="group" aria-label="First group">
              <button type="button" class="btn btn-primary">
                X Up
              </button>
            </div>
            <div class="btn-group me-2" role="group" aria-label="Second group">
              <button type="button" class="btn btn-primary">
                X Down
              </button>
            </div>
            <div class="btn-group me-2" role="group" aria-label="Second group">
              <button type="button" class="btn btn-primary">
                Y Left
              </button>
            </div>
            <div class="btn-group" role="group" aria-label="Third group">
              <button type="button" class="btn btn-primary">
                Y Right
              </button>
            </div>
          </div>

          <div
            class="btn-toolbar"
            role="toolbar"
            aria-label="Toolbar with button groups"
          >
            <div class="btn-group me-2" role="group" aria-label="First group">
              <button type="button" class="btn btn-primary">
                Delete
              </button>
            </div>
            <div class="btn-group me-2" role="group" aria-label="Second group">
              <button type="button" class="btn btn-primary">
                Remote
              </button>
            </div>
          </div>
          
        <Slider name= "X-Offset"></Slider>
        <Slider name= "Y-Offset"></Slider>
        <Slider name= "Blur Radius"></Slider>
        <Colorpicker></Colorpicker>
        </div>


      </div>
    </div>
  );
}

export default menu;
