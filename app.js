import { encoding_for_model } from "tiktoken";
async function contarTokens(){
    //1. Seleccionar el modelo a utilizar
    const encoding = encoding_for_model('gpt-4');

    //2. Ingresamos el texto a usar
    const texto = "Hola, ¿como estas? Espero que muy bien"

    //3. codificar el texto a tokens --> embebidos
    const generado = encoding.encode(texto);
    console.log(generado);

    //4. Imprimir cuanto fue lo generado
    console.log('cantidad de tokens generados: '+generado.length)

    //5. Calcular costos
    const costoPorMilTOkens=0.03; 
    const costoFinal = (generado.length*costoPorMilTokens)/1000;
    console.log()
    
}
contarTokens();