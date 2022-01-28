import { GetServerSideProps } from "next";

export default function Continent() {
  return (
    <>

    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/',
      permanent: true,
    }
  }
}