import typescript from "@rollup/plugin-typescript";
import { defineConfig } from "rollup";


export default defineConfig({
    input:"src/index.js",
    output:{
        dir:"dist",
        format:"es",
        name:"prince-of-npm",
    },
    external:["react" , "react-dom"],
    plugins:[typescript({tsconfig:"tsconfig.json"})]
})