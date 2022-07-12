
export const HomePage = () => {
  return (
    <>
    <div className="row degradado historia">
      <div className="col-md-6 my-3">
        <h1 className="mt-3 text-white">Como se crea tu pedido?</h1>
        <img src="./imgs/img1.png" className="img-fluid img-inicio" />
      </div>
      <div className="col-md-6 my-3">
        <ul className="lista-pasos mt-1">
          <li className="paso">
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
