import React from 'react'
import Producto from './Producto'

const styles = {
  productos: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}

export const Productos = ({productos, agregarAlCarro}) => {
  return (
    <div style={styles.productos}>
      {productos.map((producto) => (
        <Producto
          agregarAlCarro={agregarAlCarro}
          key={producto.name}
          producto={producto}
        />
      ))}
    </div>
  )
}
