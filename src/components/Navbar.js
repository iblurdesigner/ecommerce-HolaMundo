const styles = {
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '80px',
    justifyContent: 'space-between',
    padding: '0 50px',
    boxShadow: '0 2px 3px rgb(0,0,0,0.1)',
  },
}

export default function Navbar() {
  return (
    <nav style={styles.navbar}>
      <p>Logo</p>
      <p>Carro</p>
    </nav>
  )
}
