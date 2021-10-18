import React from 'react'

const styles = {
  button: {
    backgroundColor: '#0A283E',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    padding: '15px 20px',
  },
}

export default function Button({children, ...props}) {
  return (
    <button style={styles.button} {...props}>
      {children}
    </button>
  )
}
