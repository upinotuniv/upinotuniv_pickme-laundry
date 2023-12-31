import React from 'react';
import Head from 'next/head';
import SecondLayout from '@/components/templates/Second';
import Card from '@/components/molecules/Card';

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Pickme - Admin Dashboard</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <SecondLayout title='Pickme Dashboard'>
        <Card
          name='John Doe'
          dateOrder='04/07/2023'
          serviceTypes='Iron Only'
          weight='3 Kilograms'
          status='On Progress'
          remaining='1 hours 2 minutes'
          price='Rp50.000'
        />
        <Card
          name='John Doe'
          dateOrder='04/07/2023'
          serviceTypes='Iron Only'
          weight='3 Kilograms'
          status='On Progress'
          remaining='1 hours 2 minutes'
          price='Rp50.000'
        />
        <Card
          name='John Doe'
          dateOrder='04/07/2023'
          serviceTypes='Iron Only'
          weight='3 Kilograms'
          status='On Progress'
          remaining='1 hours 2 minutes'
          price='Rp50.000'
        />
      </SecondLayout>
    </>
  );
}
