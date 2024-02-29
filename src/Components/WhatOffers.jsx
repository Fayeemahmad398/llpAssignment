import { useState } from 'react';
import "../style/WhatWeOffer.css"; // Make sure to import your CSS file
import autoImg from "../assets/aiautomation.jpg"
import designImg from "../assets/aidesignimg.jpg"
import jobsImg from "../assets/aiJobs.jpg"
import scallableImg from "../assets/aiscallable.jpg"

function WhatOffers() {
    const items = [
        {
            image: scallableImg,
            title: 'Scalability-Focused Solutions',
            description: 'Streamline and optimize business processes with comprehensive workflow automation. Ensure seamless integration of AI technologies from inception to execution for increased efficiency and productivity.',
        },
        {
            image: jobsImg,
            title: 'Explore AI Opportunities',
            description: 'Unlock the potential of generative AI by identifying tailored opportunities for integration within your organization, ensuring a strategic and efficient approach to AI implementation.',
        },
        {
            image: designImg,
            title: 'Design AI Trust Layer',
            description: 'Prioritize data security and build trust in generative AI applications with a dedicated trust layer. We emphasize privacy-focused solutions that safeguard both organizational and customer data.',
        },
        {
            image: autoImg,
            title: 'End to End Workflow Automation',
            description: 'Implement cutting-edge, scalable generative AI solutions that not only meet current organizational needs but also adapt and grow with the evolving demands of your enterprise. Provide a future-proof approach to AI integration.',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
    };

    const goToPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
    };

    return (
        <div className="carousel-container">
            <h3 className='offers-services'>What we Offer</h3>
            <div className="carousel">
                <div
                    className={`carousel-item`}
                >
                    <img src={items[currentIndex].image} alt={"img"} />
                    <div className="carousel-caption">
                        <h3>{items[currentIndex].title}</h3>
                        <p>{items[currentIndex].description}</p>
                    </div>
                </div>
            </div>
            <button onClick={goToPrev} className="carousel-button prev">
                &lt;
            </button>
            <button onClick={goToNext} className="carousel-button next">
                &gt;
            </button>
        </div>
    );


}

export default WhatOffers;
