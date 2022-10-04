// https://efilingigr.maharashtra.gov.in/ereg/JpegImage.aspx
// https://gras.mahakosh.gov.in/Common/php/securimage_show_igr.php

function toBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })
}

async function getImg() {
  const img = document.body.querySelector('img')
  const pre = document.body.querySelector('pre')
  const res = await fetch('/Common/php/securimage_show_igr.php')
  const jpg = await res.blob()
  const b64 = await toBase64(jpg)
  img.src = b64
  const imgB64 = b64.replace(/^data:(.*,)?/, '')
  const ocr = await fetch('http://localhost:8080/ocr', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ imgB64 }),
    mode: 'cors'
  })
  const { data } = await ocr.json()
  pre.innerText = data[0].replaceAll(/\s/g, '')
}

<pre style="color: #fff;text-align: center;font-size: xxx-large;font-weight: bold;"></pre>
