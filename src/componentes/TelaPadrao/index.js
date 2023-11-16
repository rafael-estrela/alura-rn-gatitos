import { KeyboardAvoidingView, Platform, SafeAreaView, StatusBar } from "react-native";

import estilos from '../../estilos';

export default function TelaPadrao({ children }) {
    return <SafeAreaView style={estilos.preencher}>
        <StatusBar style="auto"/>
        <KeyboardAvoidingView
            style={estilos.preencher}
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
            { children }
        </KeyboardAvoidingView>
    </SafeAreaView>;
}