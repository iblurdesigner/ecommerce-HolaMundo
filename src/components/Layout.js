import React from 'react'

const styles = {
  layout: {
    backgroundColor: '#ggg',
    color: '#0A283E',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },

  container: {
    width: '1200px',
  },
}

export default function Layout({children}) {
  return (
    <div style={styles.layout}>
      <div style={styles.container}>{children}</div>
    </div>
  )
}
