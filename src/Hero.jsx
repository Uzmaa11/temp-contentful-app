import heroImg from './assets/hero.svg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Prism jean shorts la jetée kettlebell dirtbag edison bulb reformer,
            claire saffitz hairpin digicam. EMDR distillery cassette wayfarers
            lynch y2k grain bowl listening bar. Birria attachment style art
            party parasocial lockwood. Tumeric eames feeld somatic.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" />
        </div>
      </div>
    </section>
  )
}
export default Hero
