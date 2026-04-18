export default function About() {
  return (
    <div>
      <h3
        style={{
          fontFamily: 'Orbitron',
          color: '#00d2ff',
          borderBottom: '1px solid rgba(255,255,255,0.03)',
          paddingBottom: 10,
          marginTop: 0,
        }}
      >
        SYSTEM_PROFILE
      </h3>
      <p style={{ lineHeight: 1.8 }}>
        Highly adaptable technical professional with <b>over 10 years of experience</b> in the Saudi
        Arabian market. Expert in bridging the gap between Information Technology and Biomedical
        Engineering. Proven track record in managing critical hospital equipment and large-scale IT
        infrastructures.
      </p>
      <div
        style={{
          marginTop: 20,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 10,
        }}
      >
        <div>
          <b>LOCATION:</b> Riyadh, KSA
        </div>
        <div>
          <b>LANGUAGES:</b> Hindi, English, Arabic
        </div>
      </div>
    </div>
  );
}
