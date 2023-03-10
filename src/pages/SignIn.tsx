import { FormEvent, useState } from 'react';
import axios from 'axios';
import Logo from '../components/Logo';
import { Envelope, Lock } from 'phosphor-react';
import { Checkbox } from '../components/Checkbox';
import { Button } from '../components/Button';
import { Heading } from '../components/Heading';
import { Text } from '../components/Text';
import { TextInput } from '../components/TextInput';

export function SignIn() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  async function handleSignIn(event: FormEvent) {
    event.preventDefault();

    await axios.post('/sessions', {
      email: 'gabrielteste@gmail.com',
      password: '12345678',
    });

    setIsUserSignedIn(true);
  }

  return (
    <div className='w-screen h-screen bg-grey-900 flex flex-col items-center justify-center text-grey-100'>
      <header className='flex flex-col items-center'>
        <Logo />

        <Heading size='lg'>Ignite Lab</Heading>

        <Text size='lg' className='text-grey-400 mt-1'>
          Faça login e comece a usar!
        </Text>
      </header>

      <form
        onSubmit={handleSignIn}
        className='flex flex-col items-stretch w-full max-w-sm mt-10 gap-4'
      >
        {isUserSignedIn && <Text>Login realizado!</Text>}
        <label htmlFor='email' className='flex flex-col gap-2'>
          <Text className='font-semibold'>Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input
              id='email'
              type='email'
              placeholder='Digite seu e-mail'
            />
          </TextInput.Root>
        </label>

        <label htmlFor='password' className='flex flex-col gap-2'>
          <Text className='font-semibold'>Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              id='password'
              type='password'
              placeholder='********'
            />
          </TextInput.Root>
        </label>

        <label htmlFor='remember' className='flex item-center gap-2'>
          <Checkbox id='remember' />
          <Text size='sm' className='text-grey-200'>
            Lembrar de mim por 30 dias
          </Text>
        </label>

        <Button type='submit' className='mt-4'>
          Entrar na plataforma
        </Button>
      </form>

      <footer className='flex flex-col items-center gap-2 mt-8'>
        <Text asChild size='sm'>
          <a href='#' className='text-grey-400 underline hover:text-grey-200'>
            Esqueceu sua senha?
          </a>
        </Text>
        <Text asChild size='sm'>
          <a href='#' className='text-grey-400 underline hover:text-grey-200'>
            Não possui conta? Crie uma agora!
          </a>
        </Text>
      </footer>
    </div>
  );
}
