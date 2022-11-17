import React from 'react';
import Feature from './Feature';
import './Modal.css';
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";

export default function Modal({ data, close }) {
   const modalVariants = {
      open: {
         opacity: 1,
         transition: { staggerChildren: 0.5, delayChildren: 0.2 },
      },
      closed: { opacity: 0 }
   };

   const imageVariants = {
      open: { opacity: 1, y: "0vh" },
      closed: { opacity: 0, y: "-10vh" },
   };

   const modalInfoVariants = {
      open: { opacity: 1, transition: { staggerChildren: 0.2 } },
      closed: { opacity: 0 },
   };

   const modalRowVariants = {
      open: { opacity: 1, x: 0 },
      closed: { opacity: 0, x: "10%" },
   };


   return (
      <motion.div
         className='modal'
         onClick={(e) => e.stopPropagation()}
         variants={modalVariants}
      >
         <motion.img className='modal__image'
            src={data.imageUrl}
            alt='real estate mansion'
            variants={imageVariants}
         />
         <motion.div className='modal__info' variants={modalInfoVariants}>
            <motion.div className='modal__row' variants={modalRowVariants}>
               <span className='madal__price'>{data.price}</span>
            </motion.div>
            <motion.div className='modal__row' variants={modalRowVariants}>
               <span className='modal__address'>{data.address}</span>
            </motion.div>
            <motion.div className='modal__row' variants={modalRowVariants}>
               <Feature iconName={'FaBed'} iconLabel={data.numBedroom} />
               <Feature iconName={'FaShower'} iconLabel={data.numWashrooms} />
               <Feature iconName={'FaRuler'} iconLabel={data.livingSpace} />
            </motion.div>
            <motion.div className='modal__description-wrapper' variants={modalInfoVariants}>
               <p className='modal__description'>{data.description}</p>
            </motion.div>
            <motion.button className='modal__close-wrapper' onClick={close} whileHover={{ scale: 1.2 }}>
               <IoCloseCircleOutline className='modal__close-icon' />
            </motion.button>
         </motion.div>
      </motion.div>
   )
};
