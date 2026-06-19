import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

function WebsiteQRCode() {
  const websiteUrl = "https://shokr-pharmacy.vercel.app"; 

  return (
    <div className="qr-container" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px',
      margin: '25px auto',
      padding: '15px',
      background: 'rgba(255, 255, 255, 0.03)',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      borderRadius: '12px',
      maxWidth: '180px'
    }}>
      <span style={{ color: '#cbd5e1', fontSize: '0.8rem', fontWeight: '500' }}>
        Scan to Mobile
      </span>
      
      <div style={{
        background: '#ffffff',
        padding: '8px',
        borderRadius: '8px',
        display: 'inline-flex'
      }}>
        <QRCodeSVG 
          value={websiteUrl} 
          size={110} 
          bgColor={"#ffffff"} 
          fgColor={"#0b1f3a"} 
          includeMargin={false}
        />
      </div>
    </div>
  );
}

export default WebsiteQRCode;