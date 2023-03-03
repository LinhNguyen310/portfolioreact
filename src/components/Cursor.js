import { fireEvent } from '@testing-library/react';
import React from "react";
import { neonCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js'

export const NeonCursor = () => {  
    React.useEffect(() => {
      return () => {
        neonCursor({
            el: document.getElementById('app'),
            shaderPoints: 300,
        })
      };
    });
  
    return (
    <div id="app">
    </div>
    );
  }
