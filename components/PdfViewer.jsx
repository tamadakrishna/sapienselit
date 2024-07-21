import React from 'react'

function PdfViewer() {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        src={"https://drive.google.com/file/d/1Tax7r3BvrnGttEQMa_AS80Sc3MwU5_G_/preview" }
        allow="autoplay"
        seamless=""
        sandbox="allow-same-origin allow-scripts"
        type="application/pdf"
        frameborder="0"
        width="100%"
        height="100%"
      />
     
    </div>
  )
}

export default PdfViewer