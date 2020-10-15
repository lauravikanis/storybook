export const createElement = (tagName, props) => {
  const element = document.createElement(tagName);
  Object.assign(element, props);

  //   element.className = props.className;
  //   element.innerText = props.innerText;

  return element;
};
