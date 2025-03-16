import ImageSlider from "./components/ImageSlider"
import styles from "./index.module.css"

function App() {

  const slides = [
    {
      url: "https://images.pexels.com/photos/163585/redwood-national-park-california-hdr-landscape-163585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Slide 1 - Forest road",
      link: "#slide1",
    },
    {
      url: "https://images.pexels.com/photos/11107460/pexels-photo-11107460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Slide 2 - Carebean beach",
      link: "#slide2",
    },
    {
      url: "https://images.pexels.com/photos/10749940/pexels-photo-10749940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Slide 3 - Mountain view",
      link: "#slide3",
    },
    {
      url: "https://images.pexels.com/photos/16354184/pexels-photo-16354184/free-photo-of-mar-alvorecer-amanhecer-aurora.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Slide 4 - Beach sunset",
      link: "#slide4",
    },
    {
      url: "https://images.pexels.com/photos/325807/pexels-photo-325807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Slide 5 - Forest landscape",
      link: "#slide5",
    },
  ]

  return (
    <div className={styles.app}>
      <ImageSlider slides={slides} />
    </div>
  )
}

export default App