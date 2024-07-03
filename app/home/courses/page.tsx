import React from 'react';
import { Card, Overlay, Button, Text } from '@mantine/core';
import classes from './ImageActionBanner.module.css';


export function ImageActionBanner() {
  return (
    <Card radius="md" className={classes.card}>
      <Overlay className={classes.overlay} opacity={0.55} zIndex={0} />

      <div className={classes.content}>
        {/* Image on the right side */}
        <div className={classes.imageWrapper}>
          <img src="/path/to/your/image.jpg" alt="Image" className={classes.image} />
        </div>

        <div className={classes.textWrapper}>
          <Text size="lg" fw={700} className={classes.title}>
            Course 1
          </Text>

          <Text size="sm" className={classes.description}>
            Save up to 25% at Fifth Season Hotels in Europe, the Middle East, Africa and Asia Pacific
          </Text>

          {/* Button aligned to the left bottom */}
          <div className={classes.buttonWrapper}>
            <Button className={classes.action} variant="white" color="dark" size="xs">
              Register now
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}


export default function AuthenticationForm() {
    // const [type, toggle] = useToggle(['login', 'register']);
    
    // const { data: session, status } = useSession();
    // const router = useRouter();
    
    // if (status === "loading") {
    //   return <div>Loading...</div>;
    // }
    
    // if (status === "authenticated") {
    //   router.push('/sign-in/confirm');
    // }
  
    return (
        
      <div>
        <h1>Courses</h1>
        <ImageActionBanner/>;
        <ImageActionBanner/>;
      </div>
    );
}