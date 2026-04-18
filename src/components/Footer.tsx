export default function Footer() {
  return (
    <footer
      style={{
        textAlign: 'center',
        padding: 40,
        fontSize: '0.85rem',
        borderTop: '1px solid rgba(255,255,255,0.03)',
        marginTop: 20,
      }}
    >
      <div style={{ marginBottom: 10 }}>
        <a href="tel:+966506724002" style={{ color: '#00d2ff', textDecoration: 'none', fontWeight: 'bold' }}>
          +966 5067 24002
        </a>{' '}
        |{' '}
        <a
          href="mailto:AFRASVICKY.COM@GMAIL.COM"
          style={{ color: '#00d2ff', textDecoration: 'none', fontWeight: 'bold' }}
        >
          AFRASVICKY.COM@GMAIL.COM
        </a>
      </div>
      <p style={{ opacity: 0.5 }}>© 2026 VICKY ANAND | DESIGNED FOR EXCELLENCE</p>
    </footer>
  );
}
