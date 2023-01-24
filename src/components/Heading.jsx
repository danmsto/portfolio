import content from "../content/content";

function Heading() {

  const fadeEffect = () => {
    var i = 0;
    const change = () => {
      var doc = document.getElementById("consoleEffect");
      var color = ["mediumseagreen", "black"];
      doc.style.color = color[i];
      i = (i + 1) % color.length;
    }
    setInterval(change, 750);
  }

  return (
    <div>
      {"> "}{content.siteHeaders.name}{<br></br>}
      {"> "}{content.siteHeaders.uni}{<br></br>}
      {"> "}{content.siteHeaders.rnd}{<br></br>}
      {"> "}{content.siteHeaders.cod}{<br></br>}
      {"> "}<span id="consoleEffect" onLoad={fadeEffect()}>_</span>
    </div>
  )
}

export default Heading;