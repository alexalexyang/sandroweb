const colors = [
  "aliceblue",
  "azure",
  "bisque",
  "beige",
  "crimson",
  "darkkhaki",
  "darksalmon",
  "darkslateblue",
  "khaki",
  "gold",
  "lightcoral",
  "lightsalmon",
  "lightseagreen",
  "lightgreen",
  "lightblue",
  "slateblue",
  "darkseagreen",
  "lightcyan",
  "pink",
  "burlywood",
  "mediumturquoise",
  "lightseagreen",
  "salmon",
  "thistle",
  "hotpink",
  "deeppink",
  "darkturquiose",
  "mediumslateblue",
  "maroon",
  "mediumaquamarine",
  "moccasin",
  "mintcream",
  "plum",
  "purple",
  "red",
  "orangered",
  "orange",
  "midnightblue",
  "springgreen",
  "tomato",
  "violet",
  "wheat",
];

export const randColor = () =>
  colors[Math.floor(Math.random() * colors.length)];

export const getRandColors = (colors: string[], num: number) => {
  if (colors.length === num) {
    return;
  }
  const color = randColor();

  if (!colors.includes(color)) {
    colors.push(color);
  }

  getRandColors(colors, num);
};
