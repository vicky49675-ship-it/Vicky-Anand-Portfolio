const experiences = [
  {
    company: 'Al Balsam Medical Company, Riyadh',
    highlight: true,
    detail: 'Project: Special Security Force (SSF) Hospital',
    role: 'IT & Biomedical Technician',
    period: 'Jan 2025 - Present',
  },
  {
    company: 'Afras Trading & Contracting Co., KSA',
    highlight: false,
    detail: '',
    role: 'Senior IT Tech & Staff Coordinator',
    period: '2016 - 2024',
  },
  {
    company: 'HSB InfoTech / Reliance Jio Project',
    highlight: false,
    detail: '',
    role: 'Network Engineer',
    period: '2014 - 2016',
  },
  {
    company: 'HCL Info systems / E-Court Project',
    highlight: false,
    detail: '',
    role: 'Customer & Backend Support',
    period: '2010 - 2014',
  },
];

export default function Experience() {
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
        MISSION_LOGS
      </h3>
      {experiences.map(exp => (
        <div
          key={exp.company}
          style={{
            marginBottom: 20,
            paddingLeft: 15,
            borderLeft: '1px dashed #00d2ff',
          }}
        >
          <b style={{ color: exp.highlight ? '#39ff14' : '#e0e0e0' }}>{exp.company}</b>
          <br />
          {exp.detail && (
            <>
              <small>
                <b>Project:</b> {exp.detail}
              </small>
              <br />
            </>
          )}
          <i>
            {exp.role} | {exp.period}
          </i>
        </div>
      ))}
    </div>
  );
}
