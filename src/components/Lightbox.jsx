import { useState } from 'react'

export default function Lightbox({ images }) {
  const [open, setOpen] = useState(null)

  if (!images || images.length === 0) return null

  return (
    <>
      <div className="carousel-inner">
        {images.map((img, i) => (
          <div key={i} className={`item${i === 0 ? ' active' : ''}`}
               style={{ cursor: 'pointer' }}
               onClick={() => setOpen(i)}>
            <img src={img.src} alt={img.caption} />
            <div className="carousel-caption"><p>{img.caption}</p></div>
          </div>
        ))}
      </div>
      {open !== null && (
        <div className="lightbox-overlay" onClick={() => setOpen(null)}
             style={{
               position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
               background: 'rgba(0,0,0,0.85)', zIndex: 99999,
               display: 'flex', alignItems: 'center', justifyContent: 'center',
               cursor: 'pointer',
             }}>
          <div style={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh' }}>
            <button onClick={() => setOpen(null)}
                    style={{
                      position: 'absolute', top: -30, right: 0,
                      background: 'none', border: 'none', color: '#fff',
                      fontSize: '24px', cursor: 'pointer',
                    }}>&times;</button>
            <img src={images[open].src} alt={images[open].caption}
                 style={{ maxWidth: '90vw', maxHeight: '85vh', objectFit: 'contain' }} />
            <div style={{ color: '#fff', textAlign: 'center', marginTop: '10px' }}>
              {images[open].caption}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
