import { Text, TouchableOpacity } from 'react-native'; 

import funcaoEstilos from './estilos';

export default function Botao({ title, action, style, pequeno = false, invertido = false }) {
    const estilos = funcaoEstilos(pequeno, invertido);

    return <TouchableOpacity onPress={ action } style={[estilos.botao, style]}>
        <Text style={estilos.valor}>{ title }</Text>
    </TouchableOpacity>;
}