import BubbleAlert from './BubbleAlert'
import DetallesCarro from './DetallesCarro'

const styles = {
  carro: {
    backgroundColor: '#359A2C',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    padding: '15px',
    borderRadius: '15px',
  },
  bubble: {
    position: 'relative',
    left: 76,
    top: -18,
  },
}

export default function Carro({carro, esCarroVisible, mostrarCarro}) {
  const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0)
  return (
    <div>
      <span style={styles.bubble}>
        {cantidad !== 0 ? <BubbleAlert value={cantidad} /> : null}
      </span>
      <button onClick={mostrarCarro} style={styles.carro}>
        Carro
      </button>
      {esCarroVisible ? <DetallesCarro carro={carro} /> : null}
    </div>
  )
}
