import { useNavigate } from 'react-router-dom';
import { mountRemoteComponent } from '@/utils/loadComponent';
import globalStorage from '@/utils/loadStorage'

const FormFeedback = () => {
  const navigate = useNavigate();
  const token = globalStorage.getToken();

  return mountRemoteComponent({
    module: 'feedback',
    component: 'FormFeedback',
    props: {
      navigate,
      token
    }
  });
};

export default FormFeedback;
