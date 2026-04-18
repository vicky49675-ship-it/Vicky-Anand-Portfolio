import { FileText, Download } from 'lucide-react';

const docs = [
  {
    name: 'Government Polytechnic Diploma',
    file: 'Deploma_certificet.pdf',
    category: 'Education',
  },
  {
    name: 'HVAC Professional Certificate',
    file: 'HVAC__Alison_Advanced_Certificate-5929-40726161.pdf',
    category: 'Professional Development',
  },
  {
    name: 'Power Electronics Certificate',
    file: 'MR._VICKY_ANAND_Power_Electronics.pdf',
    category: 'Professional Development',
  },
  {
    name: 'SCE Membership Certificate',
    file: 'SCE-Certificate-26.pdf',
    category: 'Professional License',
  },
  {
    name: 'Experience Certificate',
    file: 'VICKY_MOH_EXPRIANCE.pdf',
    category: 'Professional Experience',
  },
];

function DocumentCard({
  name,
  file,
  category,
}: {
  name: string;
  file: string;
  category: string;
}) {
  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.03)',
        padding: 20,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '1px solid rgba(0,210,255,0.1)',
        transition: '0.3s',
        marginBottom: 15,
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.background = 'rgba(0,210,255,0.05)';
        (e.currentTarget as HTMLDivElement).style.transform = 'translateX(5px)';
        (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(0,210,255,0.3)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.03)';
        (e.currentTarget as HTMLDivElement).style.transform = '';
        (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(0,210,255,0.1)';
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
        <FileText size={24} color="#00d2ff" />
        <div>
          <b style={{ display: 'block', marginBottom: 5 }}>{name}</b>
          <small style={{ color: '#39ff14', fontFamily: 'Orbitron' }}>{category}</small>
        </div>
      </div>
      <a
        href={`/documents/${file}`}
        download
        style={{
          background: '#00d2ff',
          color: '#000',
          border: 'none',
          padding: '10px 16px',
          borderRadius: 8,
          cursor: 'pointer',
          fontFamily: 'Orbitron',
          fontSize: '0.75rem',
          fontWeight: 'bold',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          transition: '0.3s',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLAnchorElement).style.background = '#39ff14';
          (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.05)';
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLAnchorElement).style.background = '#00d2ff';
          (e.currentTarget as HTMLAnchorElement).style.transform = '';
        }}
      >
        <Download size={16} />
        DOWNLOAD
      </a>
    </div>
  );
}

export default function Docs() {
  const categories = [...new Set(docs.map(d => d.category))];

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
        SECURE_DATA_CENTER
      </h3>
      <p>Professional certificates and credentials:</p>

      {categories.map(category => (
        <div key={category} style={{ marginTop: 25 }}>
          <span
            style={{
              fontFamily: 'Orbitron',
              fontSize: '0.8rem',
              color: '#39ff14',
              marginBottom: 15,
              display: 'block',
            }}
          >
            {category.toUpperCase()}
          </span>
          {docs
            .filter(d => d.category === category)
            .map(doc => (
              <DocumentCard key={doc.file} {...doc} />
            ))}
        </div>
      ))}
    </div>
  );
}
