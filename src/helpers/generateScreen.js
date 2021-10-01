import { Colors } from '../constant';
import navScreenSlider from './navigationSliderAnimation';

export default (name, component) => {
  return {
    name,
    component,
    options: {
      cardStyle: {
        backgroundColor: Colors.paleWhite,
        cardStyleInterpolator: navScreenSlider,
      },
    },
  };
};
