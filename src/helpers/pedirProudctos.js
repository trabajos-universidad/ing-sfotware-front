export const pedirProductos = async () => {
    try{
        const resp = await fetch('http://localhost:4000/productos');

        if(!resp.ok) throw new Error(resp.msg);

        const data = await resp.json();
        return data.productos;
    }catch(error){
        console.log(error);
    }
}