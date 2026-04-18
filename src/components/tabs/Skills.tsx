const biomedical = [
  'Ultrasound Machines',
  'X-Ray Systems (Mobile/Fixed)',
  'ECG & Patient Monitors',
  'Vital Sign Monitors',
  'UV Sterilization Units',
  'Dental Units & Lab Equipment',
];

const it = [
  'Cisco Networking (LAN/WAN)',
  'Windows Support (XP to 11)',
  'ELV, BMS & SCADA Systems',
  'Motherboard Chip Level Repair',
  'HVAC Operational Tech',
  'CCTV & Access Control',
];

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div style={{ marginBottom: 25 }}>
      <span
        style={{
          fontFamily: 'Orbitron',
          fontSize: '0.8rem',
          color: '#39ff14',
          marginBottom: 10,
          display: 'block',
        }}
      >
        {title}
      </span>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {items.map(item => (
          <div
            key={item}
            style={{
              background: 'rgba(255,255,255,0.04)',
              padding: 12,
              borderRadius: 8,
              fontSize: '0.85rem',
              borderLeft: '3px solid #00d2ff',
              transition: '0.3s',
              cursor: 'default',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.transform = 'translateX(10px)';
              (e.currentTarget as HTMLDivElement).style.background = 'rgba(0,210,255,0.1)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.transform = '';
              (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.04)';
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
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
        TECHNICAL_MATRIX
      </h3>
      <SkillGroup title="> BIOMEDICAL EQUIPMENT MAINTENANCE" items={biomedical} />
      <SkillGroup title="> IT & NETWORKING INFRASTRUCTURE" items={it} />
    </div>
  );
}
