import './location.css'

const Location = () => {
    return (
        <div className="location-container">
            <div className='location-text-container'>
                <h2 className="location-title">Ubicación</h2>
                <p className='location-p'>¡Visítanos en nuestro showroom! Ubicado en la ciudad de Buenos Aires, nuestro espacio es un reflejo de la pasión por la moda y la elegancia. Descubre una experiencia única donde la calidad y el estilo se fusionan. Encuéntranos en Cura Brochero 1129 (Grand Bourg, Malvinas Argentinas)  y sumérgete en un ambiente que celebra la individualidad a través de nuestra selección exclusiva de prendas y atención personalizada. ¡Te esperamos para vivir juntos la moda en su máxima expresión!</p>
            </div>
            <iframe className="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3288.2953713817087!2d-58.73612702483327!3d-34.495395351784616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bca29ee4445fb7%3A0x89fe5ba20abce756!2sCura%20Brochero%201129%2C%20B1615EKK%20Grand%20Bourg%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1703275601221!5m2!1ses!2sar" title="Mapa de showroom" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default Location