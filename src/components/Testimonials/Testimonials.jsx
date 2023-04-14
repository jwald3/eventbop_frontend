import React from 'react';
import styles from './Testimonials.module.scss';
import Testimonial from '../Testimonial/Testimonial';
import johnDoeImg from '../../assets/images/john-doe.jpg';
import maryJohnsonImg from '../../assets/images/mary-johnson.jpg'
import janeSmithImg from '../../assets/images/jane-smith.jpg'

const Testimonials = () => {
    const testimonialData = [
        {
            id: 1,
            name: "John Doe",
            review: "EventBop is an amazing app! I've discovered so many great events and venues through it.",
            imageUrl: johnDoeImg
        },
        {
            id: 2,
            name: "Jane Smith",
            review: "I love the simplicity of EventBop. The user interface is so clean and intuitive!",
            imageUrl: janeSmithImg
        },
        {
            id: 3,
            name: "Mary Johnson",
            review: "EventBop has made it so easy to find and attend interesting events in my city. Highly recommended!",
            imageUrl: maryJohnsonImg
        },
    ];

    return (
        <div className={styles.testimonialsContainer}>
            <h2 className={styles.testimonialsTitle}>What Our Users Say</h2>
            <div className={styles.testimonialsGrid}>
                {testimonialData.map((testimonial) => (
                    <Testimonial key={testimonial.id} testimonial={testimonial}/>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
