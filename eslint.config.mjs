/*
  Konfigurasi ESLint untuk project Gelap Nyawang.
  Menggunakan standar Web Vitals dari Next.js dan menambahkan daftar file
  yang perlu diabaikan agar proses linting lebih bersih dan efisien.
*/

import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

/*
  defineConfig:
  - Membungkus konfigurasi ESLint agar dapat memakai array-based config
    sesuai standar modern ESLint.

  nextVitals:
  - Rule bawaan Next.js untuk menjaga performance Web Vitals
    (CLS, LCP, FID, dsb).

  globalIgnores:
  - Menentukan file/folder yang tidak perlu di-lint seperti build output.
*/
const eslintConfig = defineConfig([
  ...nextVitals,
  globalIgnores([
    ".next/**",        // folder hasil build Next.js
    "out/**",          // output untuk next export (jika dipakai)
    "build/**",        // fallback untuk folder build lain
    "next-env.d.ts",   // auto-generated Next.js type definitions
  ]),
]);

export default eslintConfig;