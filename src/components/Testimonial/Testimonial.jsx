import React from 'react'
import styles from './Testimonial.module.scss'

const Testimonial = ({testimonial}) => {
    return (
        <div key={testimonial.id} className={styles.testimonialCard}>
            <img src={testimonial.imageUrl} alt={testimonial.name} className={styles.testimonialProfileImage} />
            <p className={styles.testimonialReview}>{testimonial.review}</p>
            <p className={styles.testimonialName}>{testimonial.name}</p>
        </div>
    )
}

export default Testimonial