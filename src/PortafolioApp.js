import React from 'react' //* Hay que importarla de React */
import { AppRouter } from './routers/AppRouter' //* Necesitamos Importarla, porque vamos a mostrarla */

export const PortafolioApp = () => { //* Exportamos la variable que queremos utilizar en otros lugares */
    return ( //* Lo que voy a Devolver */
        <div> {/* Simplemente es una etiqueta sin mas ni clases */}
            <AppRouter/> {/* La App que vamos a Renderizar */}
        </div>
    )
}