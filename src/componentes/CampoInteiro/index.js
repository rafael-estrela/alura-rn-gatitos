import { TextInput } from "react-native";

import estilos from './estilos';

export default function CampoInteiro({ value, action, style }) {
    const atualiza = (novoValor, acaoRetorno) => {
        const verificaInteiro = novoValor.match(/^[0-9]*$/);
        if (!verificaInteiro) return;

        const removeZeroEsquerda = novoValor.replace(/^(0)(.+)/, '$2');
        acaoRetorno(removeZeroEsquerda);
    };

    const numeroString = String(value);

    return <TextInput style={[estilos.campo, style]}
        keyboardType="number-pad"
        selectTextOnFocus
        onChangeText={(value) => { atualiza(value, action)}}
        value={numeroString}/>;
}