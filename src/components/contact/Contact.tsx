import { useForm } from 'react-hook-form';
import { Div, StyledContact, StyledForm } from './Contact.style';
import { H1Styles } from '../../style/styles';
import emailjs from '@emailjs/browser';

const Contact = () => {
  // const [form, setForm] = React.useState('');
  const { register } = useForm();

  function HandleSubmit(event: any) {
    event.preventDefault();

    emailjs.sendForm('service_q6e42tc', 'template_301fk0b', event.target, 'JyUmgad2fytSDmDhX')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <StyledContact>

      <H1Styles>Curtiu? Manda uma mensagem</H1Styles>
      <StyledForm onSubmit={HandleSubmit}>
        <Div>
          <input type="text" placeholder="Seu nome" {...register('name')} />
          <input type="email" placeholder="email@email.com" {...register('email')} />
        </Div>
        <textarea placeholder="Tem alguma pergunta para mim ?" {...register('message')} />

        <button>Enviar</button>
      </StyledForm>

    </StyledContact>
  );
};

export default Contact;