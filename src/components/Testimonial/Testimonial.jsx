import React from 'react'
import styles from './Testimonial.module.scss'

const Testimonial = ({testimonial}) => {
    return (
        <div key={testimonial.id} className={styles.testimonialCard}>
            <img src={testimonial.imageUrl} alt={testimonial.name} className={styles.testimonialProfileImage} />
            <div className={styles.testimonialInfo}>
                <p className={styles.testimonialReview}>{testimonial.review}</p>
                <p className={styles.testimonialName}>{testimonial.name}</p>
            </div>
        </div>
    )
}

export default Testimonial