import Rotas from './src/Rotas';
import TelaPadrao from './src/componentes/TelaPadrao';

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

export default function App() {
  return <TelaPadrao>
    <Rotas />
  </TelaPadrao>;
}
