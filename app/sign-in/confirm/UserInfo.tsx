import { Avatar, Text, Button, Paper } from '@mantine/core';
import { signOut } from 'next-auth/react';

export function UserInfoAction({image, name, email, role} : {image?: string | null, name?: string | null, email?: string | null, role?: string | null}) {
  return (
    <Paper radius="md" withBorder p="lg" bg="var(--mantine-color-body)">
      <Avatar
        src= {image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsxFiUXPnYlJp8256RwMPoytquxDb1AKid-fPpIo8CLo6nf0djoOC1SnEePZFVbT_bSPI&usqp=CAU"}
        size={120}
        radius={120}
        mx="auto"
      />
      <Text ta="center" fz="lg" fw={500} mt="md">
        {name || "Under Prabhupada's Shelter"}
      </Text>
      <Text ta="center" c="dimmed" fz="sm">
        {email || "stayhighforeverbits@gmail.com"} • {role || "Trying to be servant of God"}
      </Text>

      <Button variant="default" fullWidth mt="md" onClick={()=>signOut()}>
        Sign out
      </Button>
    </Paper>
  );
}