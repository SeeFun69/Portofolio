import React  from 'react'
import {BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { motion } from 'framer-motion';

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
            <a href="https://web.facebook.com/muhammadrasyid.hidayat/" target="_blank" rel="noreferrer">
                <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <FaFacebookF />
                  </motion.div>
                </a>
        </div>
        <div  >
            <a href="http://www.instagram.com/rasyid_see.fun/" target="_blank" rel="noreferrer">
                <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <BsInstagram  />
                  </motion.div>
                </a>
        </div>
  </div>
    
  )
}

export default SocialMedia