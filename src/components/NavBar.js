import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkElements = links.map( (item) => {
    return (
      <a key={item} href={"#" + item} >{item}</a>
    )
  })

  return (
    <nav>
      {linkElements}
    </nav>
  )
}

export default NavBar;
