export default function Hero() {
  return (
    <section className="hero">
      <figure className="hero_body flex">
        <img className="hero_img" src="images/hero-mobile.png" />
        <figcaption className="hero_caption">
          <div className="hero_caption_box flex">
            <h1 className="hero_caption_title">
              Discover the Perfect Fireplace ...
            </h1>
            <div className="hero_caption_subtitle">
              <span>Book consultation:</span>
              <span>0121 345 6789</span>
            </div>
          </div>
        </figcaption>
      </figure>
    </section>
  );
}
