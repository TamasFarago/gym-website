import React from 'react'
import TopPictureAbout from "../components/TopPictureAbout"
import AboutGrid from "../components/AboutGrid"

export default function AboutMain() {
    return (
        <section className="about-section">
            <TopPictureAbout />
            <AboutGrid />
        </section>
    )
}
