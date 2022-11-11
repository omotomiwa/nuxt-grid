<template>
  <div page-wrapper>
    <div class="nav">
      <h3 class="shapes">Shapes</h3>
      <a class="logout-button" href="#">Logout</a>
    </div>
    <div class="main">
      <p class="filter">Filters</p>
      <p class="shape">Shapes</p>
      <div>
        <v-row>
          <v-col>
            <button
              class="tab-rounded"
              v-on:click="userFilterKey = 'oval'"
              :class="{ active: userFilterKey == 'oval' }"
            >
              Oval
            </button>
            <button
              class="tab-rounded"
              v-on:click="userFilterKey = 'round'"
              :class="{ active: userFilterKey == 'round' }"
            >
              Round
            </button>
            <button
              class="tab-rounded"
              v-on:click="userFilterKey = 'triangle'"
              :class="{ active: userFilterKey == 'triangle' }"
            >
              Triangle
            </button>
            <button
              class="tab-rounded"
              v-on:click="userFilterKey = 'square'"
              :class="{ active: userFilterKey == 'square' }"
            >
              Square
            </button>
            <button
              class="tab-rounded"
              v-on:click="userFilterKey = 'rectangle'"
              :class="{ active: userFilterKey == 'rectangle' }"
            >
              Rectangle
            </button>
          </v-col>
        </v-row>
      </div>

      <p class="color">Colors</p>
      <div class="color-variety">
        <button
          class="btn red"
          v-on:click="userFilterKey = 'red'"
          :class="{ isActive: userFilterKey == 'red' }"
        ></button>
        <button
          class="btn blue"
          v-on:click="userFilterKey = 'blue'"
          :class="{ isActive: userFilterKey == 'blue' }"
        ></button>
        <button
          class="btn green"
          v-on:click="userFilterKey = 'green'"
          :class="{ isActive: userFilterKey == 'green' }"
        ></button>
        <button
          class="btn yellow"
          v-on:click="userFilterKey = 'yellow'"
          :class="{ isActive: userFilterKey == 'yellow' }"
        ></button>
        <button
          class="btn skyblue"
          v-on:click="userFilterKey = 'skyblue'"
          :class="{ isActive: userFilterKey == 'skyblue' }"
        ></button>
        <button
          class="btn grey"
          v-on:click="userFilterKey = 'grey'"
          :class="{ isActive: userFilterKey == 'grey' }"
        ></button>
      </div>
      <br />
      <div>
        <span class="item-counter x">All </span
        ><span class="item-counter x">{{ userFilterKey }} </span
        ><span class="item-counter x"> items: </span
        ><span class="item-counter x">({{ userFilter.length }})</span>
      </div>

      <div class="grid-view">
        <v-row>
          <v-col
            v-for="shape in userFilter"
            :key="shape.id"
            cols="12"
            sm="6"
            md="4"
            xs="12"
          >
            <div class="grid">
              <v-img
                max-height="150"
                class="img-grid"
                max-width="250"
                :src="shape.img"
              ></v-img>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  data: () => ({
    greeting: "Hello World!",
    userFilterKey: "available",

    shapes: [
      {
        id: 1,
        shape: "circle",
        color: "yellow",
        img: "https://res.cloudinary.com/dl7eouhxf/image/upload/v1667921398/shapes/new_yellow-circle.webp",
      },
      {
        id: 2,
        shape: "circle",
        color: "skyblue",
        img: "https://res.cloudinary.com/dl7eouhxf/image/upload/v1667921590/shapes/new_skyblue.jpg",
      },
      {
        id: 3,
        shape: "circle",
        color: "red",
        img: "https://res.cloudinary.com/dl7eouhxf/image/upload/v1667921753/shapes/new_redcircle.png",
      },
      {
        id: 4,
        shape: "circle",
        color: "grey",
        img: "https://res.cloudinary.com/dl7eouhxf/image/upload/v1667921866/shapes/new_grey.jpg",
      },
      {
        id: 5,
        shape: "circle",
        color: "green",
        img: "https://res.cloudinary.com/dl7eouhxf/image/upload/v1667919753/shapes/circle-green.jpg",
      },
      {
        id: 6,
        shape: "circle",
        color: "blue",
        img: "https://res.cloudinary.com/dl7eouhxf/image/upload/v1667921977/shapes/new_blue.jpg",
      },
      {
        id: 7,
        shape: "oval",
        color: "red",
        img: "https://res.cloudinary.com/dl7eouhxf/image/upload/v1667922240/shapes/oval_red.jpg",
      },
      {
        id: 8,
        shape: "oval",
        color: "blue",
        img: "https://res.cloudinary.com/dl7eouhxf/image/upload/v1667922365/shapes/oval_blue.jpg",
      },
      {
        id: 9,
        shape: "oval",
        color: "green",
        img: "https://res.cloudinary.com/dl7eouhxf/image/upload/v1667922456/shapes/oval_green.png",
      },
      {
        id: 10,
        shape: "oval",
        color: "yellow",
        img: "https://res.cloudinary.com/dl7eouhxf/image/upload/v1667922558/shapes/oval_yellow.png",
      },
      {
        id: 11,
        shape: "oval",
        color: "skyblue",
        img: "https://res.cloudinary.com/dl7eouhxf/image/upload/v1667922657/shapes/oval_skyblue.png",
      },
      {
        id: 12,
        shape: "oval",
        color: "grey",
        img: "https://res.cloudinary.com/dl7eouhxf/image/upload/v1667922799/shapes/oval_gray.png",
      },
      {
        id: 13,
        shape: "triangle",
        color: "red",
        img: "https://res.cloudinary.com/dl7eouhxf/image/upload/v1667922922/shapes/triangle_red.png",
      },
      {
        id: 14,
        shape: "triangle",
        color: "blue",
        img: "https://res.cloudinary.com/dl7eouhxf/image/upload/v1667923141/shapes/triangle_blue.jpg",
      },
      {
        id: 15,
        shape: "triangle",
        color: "green",
        img: "https://res.cloudinary.com/dl7eouhxf/image/upload/v1667923382/shapes/triangle_green.png",
      },
      {
        id: 16,
        shape: "triangle",
        color: "yellow",
        img: "https://res.cloudinary.com/dl7eouhxf/image/upload/v1667923529/shapes/triangle_yellow.jpg",
      },
      {
        id: 17,
        shape: "triangle",
        color: "skyblue",
        img: "https://res.cloudinary.com/dl7eouhxf/image/upload/v1667923631/shapes/traingle_skyblue.png",
      },
      {
        id: 18,
        shape: "triangle",
        color: "grey",
        img: "https://res.cloudinary.com/dl7eouhxf/image/upload/v1667923715/shapes/triangle_gray.png",
      },
      {
        id: 19,
        shape: "square",
        color: "red",
        img: "https://res.cloudinary.com/dl7eouhxf/image/upload/v1667923913/shapes/square_red.jpg",
      },
      {
        id: 20,
        shape: "square",
        color: "blue",
        img: "https://res.cloudinary.com/dl7eouhxf/image/upload/v1667924026/shapes/square_blue.jpg",
      },
      {
        id: 21,
        shape: "square",
        color: "green",
        img: "https://res.cloudinary.com/dl7eouhxf/image/upload/v1667924145/shapes/square_green.jpg",
      },
      {
        id: 22,
        shape: "square",
        color: "yellow",
        img: "https://res.cloudinary.com/dl7eouhxf/image/upload/v1667924247/shapes/square_yellow.jpg",
      },
      {
        id: 23,
        shape: "square",
        color: "skyblue",
        img: "https://res.cloudinary.com/dl7eouhxf/image/upload/v1667924341/shapes/square_skyblue.jpg",
      },
      {
        id: 24,
        shape: "square",
        color: "grey",
        img: "https://res.cloudinary.com/dl7eouhxf/image/upload/v1667924442/shapes/square_gray.jpg",
      },
      {
        id: 25,
        shape: "rectangle",
        color: "red",
        img: "https://res.cloudinary.com/dl7eouhxf/image/upload/v1667933541/shapes/rectangle_red.jpg",
      },
      {
        id: 26,
        shape: "rectangle",
        color: "blue",
        img: "https://res.cloudinary.com/dl7eouhxf/image/upload/v1667933641/shapes/rectangle_blue.jpg",
      },
      {
        id: 27,
        shape: "rectangle",
        color: "green",
        img: "https://res.cloudinary.com/dl7eouhxf/image/upload/v1667933812/shapes/rectangle_green.jpg",
      },
      {
        id: 28,
        shape: "rectangle",
        color: "yellow",
        img: "https://res.cloudinary.com/dl7eouhxf/image/upload/v1667933920/shapes/rectangle_yellow.jpg",
      },
      {
        id: 29,
        shape: "rectangle",
        color: "skyblue",
        img: "https://res.cloudinary.com/dl7eouhxf/image/upload/v1667934045/shapes/rectangle_skyblue.png",
      },
      {
        id: 30,
        shape: "rectangle",
        color: "grey",
        img: "https://res.cloudinary.com/dl7eouhxf/image/upload/v1667934121/shapes/rectangle_gray.png",
      },
    ],
  }),
  computed: {
    userFilter() {
      return this[this.userFilterKey];
    },
    available() {
      return this.shapes;
    },
    oval() {
      return this.shapes.filter((e) => e.shape === "oval");
    },
    round() {
      return this.shapes.filter((e) => e.shape === "circle");
    },
    triangle() {
      return this.shapes.filter((e) => e.shape === "triangle");
    },
    square() {
      return this.shapes.filter((e) => e.shape === "square");
    },
    rectangle() {
      return this.shapes.filter((e) => e.shape === "rectangle");
    },
    red() {
      return this.shapes.filter((e) => e.color === "red");
    },
    blue() {
      return this.shapes.filter((e) => e.color === "blue");
    },
    green() {
      return this.shapes.filter((e) => e.color === "green");
    },
    yellow() {
      return this.shapes.filter((e) => e.color === "yellow");
    },
    skyblue() {
      return this.shapes.filter((e) => e.color === "skyblue");
    },
    grey() {
      return this.shapes.filter((e) => e.color === "grey");
    },
    showShapes() {
      if (oval) {
        return "Oval";
      } else if (round) {
        return "Round";
      } else if (triangle) {
        return "Triangle";
      } else if (square) {
        return "Square";
      } else {
        return "Rectangle";
      }
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;1,100&display=swap");
body {
  font-family: "Roboto", sans-serif;
}
h3 {
  font-weight: lighter;
}
.nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 50px;
  padding-left: 80px;
  padding-right: 80px;
}
.logout-button {
  color: red;
  text-decoration: none;
}
.main {
  background-color: whitesmoke;
  padding-left: 80px;
  padding-right: 80px;
  padding-top: 10px;
}
.filter {
  font-weight: bold;
}
.shape {
  font-weight: bold;
  color: lightskyblue;
}
.tab-container {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.tab-rounded {
  cursor: pointer;
  border: 1px solid gainsboro;
  background-color: transparent;
  color: black;
  font-size: 1em;
  border-radius: 10px;
  font-weight: bold;
  padding-left: 10px;
  padding-right: 10px;

  margin-right: 10px;
}
.active {
  border: 3px solid gainsboro;
}
.color {
  font-weight: bold;
  color: lightskyblue;
  padding-top: 10px;
}
.color-variety {
  display: flex;
  flex-direction: row;
  gap: 5px;
}
.btn {
  width: 27px !important;
  height: 27px !important;
  border: 1px solid black;
  border-radius: 50% !important;

  margin-right: 10px;
}
.isActive {
  border: 2px solid black;
}
.red {
  background-color: red;
}
.blue {
  background-color: blue;
}
.green {
  background-color: green;
}
.yellow {
  background-color: yellow;
}
.skyblue {
  background-color: skyblue;
}
.grey {
  background-color: gray;
}

.x {
  font-weight: 600;
}
.grid-view {
  padding-top: 10px;
}
.grid {
  height: 10em;
  background-color: white;
}
.img-grid {
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
}
</style>
