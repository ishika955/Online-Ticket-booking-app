import "../styles/NormalSection.css";

function NormalSection() {
  return (
    <section className="content">
      {/* LINE 1: The Best Offers with Rooms */}
      <marquee direction="right" className="marquee-line-1">
        <h2>The Best Offers with Rooms</h2>
      </marquee>

      {/* LINE 2: Discover Greece, Scotland, Mauritius and more! */}
      <marquee direction="right" className="marquee-line-2">
        <p>Discover Greece, Scotland, Mauritius and more!</p>
      </marquee>
    </section>
  );
}

export default NormalSection;