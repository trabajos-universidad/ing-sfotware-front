export const pedirProductos = async () => {
    try{
        const resp = await fetch('https://ing-software-work.herokuapp.com/productos');

        if(!resp.ok) throw new Error(resp.msg);

        const data = await resp.json();
        return data.productos;
    }catch(error){
        console.log(error);
    }
}