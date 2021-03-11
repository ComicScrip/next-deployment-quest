import Image from 'next/image';
import Layout from '../components/Layout';

export default function IndexPage() {
  return (
    <Layout pageTitle='Home'>
      <Image
        src='/images/wcs_logo.jpg'
        height={434}
        width={800}
        layout='responsive'
        alt='wild code school logo'
      />
      <p>Hello Wilder !</p>
    </Layout>
  );
}
