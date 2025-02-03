import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Card from './Card.jsx'

createRoot(document.getElementById('root')).render(
<div 
  style={{
    display: 'grid',
    flexDirection:'row',
    marginTop:'50px',
    justifyContent:'center',
    gap:'50px'

   }}>
<Card Id="gato" Titulo="Gato bobo" Text="Se lo he robado a una anciana"/> 
<Card Id="Habanero" Titulo="Habanero" Text="Ahora no siento la boca"/>  
<Card Id="chicken" Titulo="Chicken spicy" Text="La cosa va de picante"/>
</div>
)
