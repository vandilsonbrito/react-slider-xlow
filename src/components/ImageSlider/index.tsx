// @ts-nocheck
import React from "react";
import { useState, useEffect, useRef } from "react"
import styles from "./image-slider.module.css";

const ImageSlider = ({ slides, autoScrollInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(() => {
      goToNext()
    }, autoScrollInterval)

    return () => {
      resetTimeout()
    }
  }, [currentIndex, autoScrollInterval])

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1))
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1))
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderWrapper}>
        <div className={styles.slideContent}>
          <a href={slides[currentIndex].link} className={styles.slideLink}>
            <img
              src={slides[currentIndex].url || ""}
              alt={slides[currentIndex].alt}
              className={styles.slideImage}
            />
          </a>
        </div>

        <button
          onClick={goToPrevious}
          className={`${styles.navButton} ${styles.prevButton}`}
          aria-label="Previous slide"
        >
          <span className={styles.arrowIcon}>&#10094;</span>
        </button>

        <button onClick={goToNext} className={`${styles.navButton} ${styles.nextButton}`} aria-label="Next slide">
          <span className={styles.arrowIcon}>&#10095;</span>
        </button>
      </div>

      <div className={styles.dotsContainer}>
        {slides.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`${styles.dot} ${slideIndex === currentIndex ? styles.activeDot : ""}`}
            aria-label={`Go to slide ${slideIndex + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageSlider

