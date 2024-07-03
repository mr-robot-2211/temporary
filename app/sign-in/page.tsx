"use client"
import { SessionProvider, signIn,signOut } from "next-auth/react";
import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import { useSession } from "next-auth/react";
import {useRouter} from "next/navigation";
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
  Container,
} from '@mantine/core';
import { GoogleButton } from './GoogleButton';

export default function AuthenticationForm(props: PaperProps) {
  const [type, toggle] = useToggle(['login', 'register']);
  // const form = useForm({
  //   initialValues: {
  //     email: '',
  //     name: '',
  //     password: '',
  //     terms: true,
  //   },

  //   validate: {
  //     email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
  //     password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
  //   },
  // });
  const { data: session, status } = useSession();
  const router = useRouter();
  
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  
  if (status === "authenticated") {
    router.push('/sign-in/confirm');
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Container size={400}>
    <Paper radius="md" p="xl" withBorder style={{ maxWidth: 400, margin: '0 auto' }} {...props}>   
      <Text size="lg" fw={500}>
        Welcome to Sovesa, {type} with
      </Text>
 
      <Group grow mb="md" mt="md">
        <GoogleButton radius="xl" onClick={() => signIn("google")}>Google</GoogleButton>
      </Group>
{/* 
      <Divider label="Or continue with email" labelPosition="center" my="lg" />

      <form onSubmit={form.onSubmit(() => {})}>
        <Stack>
          {type === 'register' && (
            <TextInput
              label="Name"
              placeholder="Your name"
              value={form.values.name}
              onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
              radius="md"
            />
          )}

          <TextInput
            required
            label="Email"
            placeholder="hello@gmail.com"
            value={form.values.email}
            onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
            error={form.errors.email && 'Invalid email'}
            radius="md"
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
            error={form.errors.password && 'Password should include at least 6 characters'}
            radius="md"
          />

          {type === 'register' && (
            <Checkbox
              label="I accept terms and conditions"
              checked={form.values.terms}
              onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
            />
          )}
        </Stack>

        <Group justify="space-between" mt="xl">
          <Anchor component="button" type="button" c="dimmed" onClick={() => toggle()} size="xs">
            {type === 'register'
              ? 'Already have an account? Login'
              : "Don't have an account? Register"}
          </Anchor>
          <Button type="submit" radius="xl">
            {upperFirst(type)}
          </Button>
        </Group> */}
      {/* </form> */}
    </Paper>
    </Container>
    </div>
  );
  
}