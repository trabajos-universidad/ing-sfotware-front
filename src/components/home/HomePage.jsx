
export const HomePage = () => {
  return (
    <>
    <div className="row degradado">
      <div className="col-md-6">
        <h1 className="mt-4 text-white">Como se crea tu pedido?</h1>
        <img src="./imgs/img1.png" className="img-fluid img-inicio" />
      </div>
      <div className="col-md-6">
        <ul className="lista-pasos mt-5">
          <li className="paso mt-5">
            <img src="./imgs/madera.jpg" alt="imagen" className="paso-img"/> 
            <div>
              <h3 className="text-white">Paso 1</h3>
              <p className="text-white"> Primero se toma un tronco de madera el cual cumpla con los estandares de calidad</p>
            </div>
          </li>
          <li className="paso mt-3">
            <img src="./imgs/madera.jpg" alt="imagen" className="paso-img"/> 
            <div>
              <h3 className="text-white">Paso 2</h3>
              <p className="text-white"> Primero se toma un tronco de madera el cual cumpla con los estandares de calidad</p>
            </div>
          </li><li className="paso mt-3">
            <img src="./imgs/madera.jpg" alt="imagen" className="paso-img"/> 
            <div>
              <h3 className="text-white">Paso 3</h3>
              <p className="text-white"> Primero se toma un tronco de madera el cual cumpla con los estandares de calidad</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    </>
  );
};
