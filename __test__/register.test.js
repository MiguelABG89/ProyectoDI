import React from 'react';
import { shallow } from 'enzyme';
import Register from '../Ventanas/Register';

describe('Register Component', () => {
  it('handles registration with different passwords', () => {
    const wrapper = shallow(<Register />);
    
    // Simula la entrada de datos del usuario
    wrapper.setState({ user: 'testuser', password: 'testpassword', password2: 'differentpassword' });

    // Simula el clic en el botón de registro
    wrapper.find('Button').simulate('press');

    // Verifica que el mensaje de error sea el esperado
    expect(wrapper.state('mensajePasswordDiferentes')).toEqual('Las contraseñas no son iguales');
  });
});
