import React, { useState } from 'react';
import Listing from './Listing';
import Modal from './Modal';
import Overlay from './Overlay';
import { AnimatePresence } from 'framer-motion';

export default function Card({ data }) {
   const [open, setOpen] = useState(false);

   const openModal = () => {
      setOpen(true);
   };

   const closeModal = () => {
      setOpen(false);
   };


   return (
      <>
         <Listing
            data={data}
            open={openModal}
         />
         <AnimatePresence>
            {open &&
               <Overlay close={closeModal} >
                  {<Modal data={data} close={closeModal} />}
               </Overlay>
            }
         </AnimatePresence>

      </>
   )
};
