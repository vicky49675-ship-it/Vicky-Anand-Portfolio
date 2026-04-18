import { useState } from 'react';

export default function Header() {
  const [photoUrl, setPhotoUrl] = useState(
    localStorage.getItem('vicky_photo_url') ||
      'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
  );
  const [isEditing, setIsEditing] = useState(false);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = event => {
        const url = event.target?.result as string;
        setPhotoUrl(url);
        localStorage.setItem('vicky_photo_url', url);
        setIsEditing(false);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <header className="text-center py-10" style={{ animation: 'fadeInDown 1s ease' }}>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <div
          style={{
            width: 150,
            height: 150,
            margin: '0 auto 20px',
            borderRadius: '50%',
            border: '3px solid #00d2ff',
            boxShadow: '0 0 30px #00d2ff',
            overflow: 'hidden',
            transition: '0.5s',
            cursor: 'pointer',
            position: 'relative',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLDivElement).style.transform = 'rotate(5deg) scale(1.1)';
            (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 50px #39ff14';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLDivElement).style.transform = '';
            (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 30px #00d2ff';
          }}
          onClick={() => setIsEditing(true)}
        >
          <img
            src={photoUrl}
            alt="Vicky Anand"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'rgba(0,0,0,0.6)',
              color: '#00d2ff',
              fontSize: '0.7rem',
              padding: '4px',
              textAlign: 'center',
              opacity: 0.7,
            }}
          >
            CLICK TO CHANGE
          </div>
        </div>
        {isEditing && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0,0,0,0.8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 9999,
            }}
            onClick={() => setIsEditing(false)}
          >
            <div
              style={{
                background: '#0a0f14',
                padding: 30,
                borderRadius: 15,
                border: '1px solid #00d2ff',
                textAlign: 'center',
              }}
              onClick={e => e.stopPropagation()}
            >
              <p style={{ marginBottom: 20 }}>Upload Your Photo</p>
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                style={{
                  padding: 10,
                  borderRadius: 8,
                  border: '1px solid #00d2ff',
                  background: 'rgba(255,255,255,0.05)',
                  color: '#fff',
                  cursor: 'pointer',
                }}
              />
              <button
                onClick={() => setIsEditing(false)}
                style={{
                  marginTop: 15,
                  padding: '8px 20px',
                  background: '#39ff14',
                  color: '#000',
                  border: 'none',
                  borderRadius: 8,
                  cursor: 'pointer',
                  fontWeight: 'bold',
                }}
              >
                CLOSE
              </button>
            </div>
          </div>
        )}
      </div>
      <div
        style={{
          fontFamily: "'Orbitron', sans-serif",
          fontSize: '2.8rem',
          letterSpacing: 4,
          color: '#fff',
          textShadow: '0 0 20px #00d2ff',
          marginBottom: 5,
        }}
      >
        VICKY ANAND
      </div>
      <div
        style={{
          color: '#39ff14',
          fontWeight: 'bold',
          fontFamily: 'Orbitron',
          letterSpacing: 2,
          fontSize: '0.9rem',
          textTransform: 'uppercase',
        }}
      >
        IT &amp; BIOMEDICAL ENGINEERING PROFESSIONAL
      </div>
      <p style={{ fontSize: '0.9rem', marginTop: 10, opacity: 0.8 }}>
        Riyadh, KSA | SCE No: 773817 | BICSL No: C-B0000249443-1
      </p>
    </header>
  );
}
