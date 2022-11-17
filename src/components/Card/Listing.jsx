import React from 'react';
import Feature from './Feature';
import './Listing.css';
import { motion } from 'framer-motion';


export default function Listing({ data, open }) {

   return (
      <motion.div className='listing' onClick={open} whileHover={{ scale: 1.1 }}>
         <div className='listing_content'>
            <div className='listing_image-container'>
               <img className='listing_image'
                  src={data.imageUrl}
                  alt='real estate mansion'
               />
            </div>
            <div className='listing_details'>
               <div className='listing_type'>For Sale</div>
               <div className='listing_row'>
                  <span className='listing_price'>{data.price}</span>
               </div>
               <div className='listing_row'>
                  <span className='listing_address'>{data.address}</span>
               </div>
               <div className='listing_row'>
                  <Feature iconName={'FaBed'} iconLabel={data.numBedroom} />
                  <Feature iconName={'FaShower'} iconLabel={data.numWashrooms} />
                  <Feature iconName={'FaRuler'} iconLabel={data.livingSpace} />
               </div>
            </div>
         </div>
      </motion.div>
   )
};
