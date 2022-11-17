import React from 'react';
import * as FontAwesome from 'react-icons/fa';
import './Feature.css';

export default function Feature({ iconName, iconLabel }) {
   const Icon = FontAwesome[iconName];

   return (
      <div className='feature'>
         <div className='feature_circle'>
            <Icon className='feature_icon' />
         </div>
         <span className='feature_label'>{iconLabel}</span>
      </div>
   )
};
