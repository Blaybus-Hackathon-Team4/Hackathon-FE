/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_STORE_ID: string;
  readonly VITE_STORE_ID: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
