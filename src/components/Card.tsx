import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function Card({ children }: Props) {
  return (
    <div
      style={{
        position: 'relative',
        background: 'rgba(10,15,20,0.95)',
        padding: 40,
        borderRadius: 15,
        border: '1px solid rgba(0,210,255,0.2)',
        boxShadow: '0 10px 40px rgba(0,0,0,0.8)',
        marginBottom: 50,
        animation: 'popUp 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      }}
    >
      {children}
    </div>
  );
}
