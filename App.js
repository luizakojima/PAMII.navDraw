import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
const Drawer = createDrawerNavigator();
import Home from './fonte/telas/Home';
import Servicos from './fonte/telas/Servicos';
import Produtos from './fonte/telas/Produtos/Produtos';
import IndexProdutos from './fonte/telas/Produtos/IndexProdutos';

export default function App(){
  return (<NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home}/>
      <Drawer.Screen name="Produtos" component={IndexProdutosProdutos}/>
      <Drawer.Screen name="Serviços" component={Servicos}/>
    </Drawer.Navigator>
  </NavigationContainer>)
}
