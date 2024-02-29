import Blogs from "../Components/Blogs"
import Connect from "../Components/Connect"
import Footer from "../Components/Footer"
import HeroSection from "../Components/HeroSection"
import Navbar from "../Components/Navbar"
import WhatOffers from "../Components/WhatOffers"

function Home() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <WhatOffers />
            <Blogs />
            <Connect />
            <Footer />
        </>
    )
}

export default Home
