import SideBar from "../sidebar"
import Header from "../header"
import dataImages from "../lib/dataImages"
export default function Home(){
    return(
        <div>
            <Header/>
            <SideBar>
            <div style={{width: "100%", padding: "12px"}}>
                <p><span style={{"fontWeight": "bold"}}>Selamat datang di </span>De Love adalah toko online yang menjual berbagai macam produk fashion wanita, mulai dari pakaian, sepatu, tas, hingga aksesoris.</p>
                <p>Kami menyediakan produk-produk berkualitas tinggi dengan harga yang terjangkau.</p>
                <p>Kami juga menawarkan berbagai macam promo dan diskon menarik.</p>
               {/* gambar  */}
               <div style={{display: "grid",gridTemplateColumns: "repeat(2, 1fr)",  padding: "8px"}} className="img">
               {dataImages.map((image, index) => (
                <img key={index} src={image.src} alt={image.alt} style={{maxWidth: "100%", objectFit: "cover"}} />
              ))}
                </div>
                <div style={{display: "flex", maxWidth: "100%", width: "100%"} } className="deskripsi
                ">
                <p>De Love adalah toko online yang menjual berbagai macam produk fashion wanita, mulai dari pakaian, sepatu, tas, hingga aksesoris.</p>
            <p>Kami menyediakan produk-produk berkualitas tinggi dengan harga yang terjangkau.</p>
            <p>Kami juga menawarkan berbagai macam promo dan diskon menarik.</p>
            <p>Kami juga menyediakan signature bread, cupcake, dan pastry yang lezat.</p>
                </div>
               
            </div>
            </SideBar>
        </div>
    )
}