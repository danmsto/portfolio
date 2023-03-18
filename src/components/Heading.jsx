import content from "../content/content";

function Heading() {

  var b = document.querySelector('body');
  var bs = getComputedStyle(b);

  const fadeEffect = () => {
    var i = 0;
    const change = () => {
      var doc = document.getElementById("consoleEffect");
      var color = [bs.getPropertyValue('--background'), bs.getPropertyValue('--text')];
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
      {"> "}{content.siteHeaders.dev1}<span id="consoleEffect" onLoad={fadeEffect()}>_</span>
    </div>
  )
}

export default Heading;