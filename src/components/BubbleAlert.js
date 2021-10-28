const styles = {
  bubbleAlert: {
    backgroundColor: '#E9725A',
    color: '#fff',
    fontSize: '0.9rem',
    padding: '2px 10px',
    borderRadius: '15px',
    width: '20px',
  },
}
const getNumber = (n) => {
  if (!n) {
    return ' '
  }
  return n > 9 ? '9+' : n
}
export default function BubbleAlert({value}) {
  return <span style={styles.bubbleAlert}>{getNumber(value)}</span>
}
