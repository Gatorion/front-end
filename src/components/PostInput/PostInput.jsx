import React from 'react'
import styles from './PostInput.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faSmile, faMapMarkerAlt, faLink } from '@fortawesome/free-solid-svg-icons';

const PostInput = () => {
    return (
        <div className={styles.postingSection}>
            <input type="text" name="posting" id="posting" placeholder="O que quer compartilhar?" required />
            <div className={styles.postingButtons}>
                <ul>
                    <li><FontAwesomeIcon icon={faImage} /></li>
                    <li><FontAwesomeIcon icon={faSmile} /></li>
                    <li><FontAwesomeIcon icon={faMapMarkerAlt} /></li>
                    <li><FontAwesomeIcon icon={faLink} /></li>
                </ul>
                <button type="submit">Publicar</button>
            </div>
        </div>
    )
}

export default PostInput