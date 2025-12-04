import { encoding_for_model } from "tiktoken";
import { readFile } from 'fs/promises';

async function contarTokens() {
    try {
        // 1. Seleccionar el modelo
        const encoding = encoding_for_model('gpt-4');

        // 2. Leer el archivo local
        const texto = await readFile('./libro.txt', 'utf-8');
        
        // 3. Codificar el texto a tokens
        const generado = encoding.encode(texto);
        console.log(generado);

        // 4. Imprimir cantidad de tokens generados
        console.log('Cantidad de tokens generados: ' + generado.length);

        // 5. Calcular costos
        const costoPorMilTokens = 0.03; 
        const costoFinal = (generado.length * costoPorMilTokens) / 1000;
        console.log('Costo estimado: $' + costoFinal.toFixed(4));

        encoding.free();
        
    } catch (error) {
        console.error('Error:', error.message);
    }
}

contarTokens();