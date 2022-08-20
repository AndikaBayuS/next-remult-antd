import "../styles/globals.css";
import "antd/dist/antd.css";
import type { AppProps } from "next/app";
import { AdminLayout } from "../components/AdminLayout/AdminLayout";
import { wrapper } from "@/src/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AdminLayout>
      <Component {...pageProps} />
    </AdminLayout>
  );
}

export default wrapper.withRedux(MyApp);
