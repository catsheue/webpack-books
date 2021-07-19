export default (text = "Luna is cute. aerwerwer") => {
  const element = document.createElement("div");
  element.innerText = text;
  return element;
};
