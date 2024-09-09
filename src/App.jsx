import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      {/* navbar start */}
      <div className="navbar">
        <div className="logo">
          <img src="https://wuling.id/assets/images/header/svg/wuling-logo.svg" alt="" />
        </div>
        <div className="menu">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#Produk">Produk</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="">Costumer Service</a></li>
          </ul>
        </div>
      </div>
      {/* navbar end */}
      
      {/* home start */}
      <div className="img" id='home'>
        <div className="konten">
          <h1>Cloud Ev</h1>
          <hr />
          <p>Kenyamanan berbalut kemewahan untuk anda dan keluarga bersama Cloud EV</p>
          <br />
          <a href="https://wuling.id/id/cloud-ev">Selengkapnya</a>
        </div>        
     </div>
      {/* home end */}
      {/* produk start */}
      <div className="judul" id='Produk'>
        <h1>Produk Kami</h1>
      </div>

      <div className="fotoproduk">

      <div className="produk1">
        <a href="https://wuling.id/id/cloud-ev"><img src="https://wuling.id/assets/images/header/products/xmenu-CloudEV-new.png.pagespeed.ic.EBphO_LTXj.webp" alt="" /></a>
        <h1>Cloud Ev</h1>
        <hr />
        <p>Spesifikasi Wuling Cloud EV
            Wuling Cloud EV tersedia dalam pilihan mesin Electric di Indonesia Hatchback baru dari Wuling hadir dalam 1 varian. Cloud EV tersedia dengan transmisi Otomatis tergantung variannya. Cloud EV adalah Hatchback 5 seater dengan panjang 4295 mm, lebar 1850 mm, wheelbase 2700 mm.</p>
        </div>

        <div className="produk2">
        <a href="https://wuling.id/id/binguo-ev"><img src="https://wuling.id/assets/images/header/products/xmenu-BinguoEV.png.pagespeed.ic.ATF4jpEsls.webp" alt="" /></a>
        <h1>Binguo Ev</h1>
        <hr />
        <p>Spesifikasi Wuling Binguo EV
        Wuling Binguo EV tersedia dalam pilihan mesin Electric di Indonesia Hatchback baru dari Wuling hadir dalam 3 varian. Binguo EV tersedia dengan transmisi Otomatis tergantung variannya. Binguo EV adalah Hatchback 5 seater dengan panjang 3950 mm, lebar 1708 mm, wheelbase 2560 mm.</p>
        </div>

        <div className="produk3">
        <a href="https://wuling.id/id/air-ev"><img src="https://wuling.id/assets/images/header/products/xmenu-Airev.png.pagespeed.ic.G5KZJ0apGF.webp" alt="" /></a>
        <h1>Air Ev</h1>
        <hr />
        <p>Spesifikasi Wuling Air EV
        Wuling Air EV tersedia dalam pilihan mesin Electric di Indonesia Hatchback baru dari Wuling hadir dalam 3 varian. Air EV tersedia dengan transmisi Otomatis tergantung variannya. Air EV adalah Hatchback 4 seater dengan panjang 2974 mm, lebar 1505 mm, wheelbase 2010 mm.</p>
        </div>
      </div>

      {/* produk end */}
      {/* about start */}
      <div className="judul2" id='About'>
         <h1>Tentang Kami</h1>
      </div>
      <div className="about">
        <div className="gambar">
          <img src="https://rockomotif.com/wp-content/uploads/2021/10/wuling-center-resize.jpg" alt="" />
        </div>
        <div className="text">
          <h1>Wuling Motors</h1>
          <p>Memulai operasinya dengan membangun pabrik pertamanya di Greenland International Industrial Center di Cikarang, Kabupaten Bekasi, Provinsi Jawa Barat pada tanggal 20 Agustus 2015. Dibangun di atas lahan seluas 600.000 m2 termasuk Supplier Park, pabrik ini dibangun untuk produksi dan manufaktur mobil di Indonesia dan untuk mendirikan basis ekspor untuk Asia Tenggara. <br />
          Pada 11 Juli 2017, pabrik resmi mulai beroperasi untuk produksi massal.</p>
        </div>
      </div>
      {/* about end */}
      {/* cs start */}
      <div className="isian">
        
        <div className="foto1">
          <img src="https://cdn.iconscout.com/icon/free/png-512/free-email-icon-download-in-svg-png-gif-file-formats--mail-message-letter-user-interface-pack-icons-1502307.png?f=webp&w=512" alt="" />
          <div className="textfoto1">
            <h1>cs@wulingmotors.com</h1>
          </div>
        </div>

        <div className="foto2">
          <img src="https://cdn.iconscout.com/icon/free/png-512/free-whatsapp-logo-icon-download-in-svg-png-gif-file-formats--social-media-logos-pack-icons-189779.png?f=webp&w=512" alt="" />
          <div className="textfoto2">
            <h1>Chat Whatsapp</h1>
          </div>
        </div>

        <div className="foto3">
          <img src="https://cdn.iconscout.com/icon/free/png-512/free-call-icon-download-in-svg-png-gif-file-formats--logo-minimal-icons-pack-miscellaneous-435823.png?f=webp&w=512" alt="" />
          <div className="textfoto3">
            <h1>+1 1234 9876 </h1>
          </div>
        </div>
      </div>

  </div>

    </>
  )
}

export default App
