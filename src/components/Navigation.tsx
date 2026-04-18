type Tab = 'about' | 'skills' | 'exp' | 'docs';

interface Props {
  active: Tab;
  onSelect: (tab: Tab) => void;
}

const tabs: { id: Tab; label: string }[] = [
  { id: 'about', label: 'Objective' },
  { id: 'skills', label: 'Expertise' },
  { id: 'exp', label: 'History' },
  { id: 'docs', label: 'Docs' },
];

export default function Navigation({ active, onSelect }: Props) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 12,
        margin: '35px 0',
      }}
    >
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => onSelect(tab.id)}
          style={{
            background: active === tab.id ? '#00d2ff' : 'rgba(255,255,255,0.03)',
            border: '1px solid #00d2ff',
            color: active === tab.id ? '#000' : '#fff',
            padding: '18px 5px',
            borderRadius: 12,
            cursor: 'pointer',
            fontFamily: 'Orbitron',
            fontSize: '0.75rem',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            backdropFilter: 'blur(10px)',
            boxShadow: active === tab.id ? '0 0 30px #00d2ff' : 'none',
            transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          }}
          onMouseEnter={e => {
            if (active !== tab.id) {
              (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.1)';
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(0,210,255,0.1)';
              (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 20px #00d2ff';
            }
          }}
          onMouseLeave={e => {
            if (active !== tab.id) {
              (e.currentTarget as HTMLButtonElement).style.transform = '';
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.03)';
              (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none';
            }
          }}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
