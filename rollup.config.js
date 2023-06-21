import path from "path"
//引入ts插件 对ts进行编译转换
import ts from "rollup-plugin-typescript2"
//启动一个服务器
import server from "rollup-plugin-serve"
//热更新
import livereload from "rollup-plugin-livereload"
//压缩代码
import { terser } from "rollup-plugin-terser"
import replace from "rollup-plugin-replace"
export default {
    input:"./src/index.ts",
    output:{
        file:path.resolve(__dirname,"./lib/index.js"),
        format:"umd",
        sourcemap:true
    },
    plugins:[
        ts(),
        livereload(),
        terser(),
        replace({
            'process.env.NODE_ENV':JSON.stringify(process.env.NODE_ENV)
        }),
        server({
            open:true,
            port:81,
            openPage:"/public/index.html"
        })
    ]
}
//rollup相比于webpack打包比较小

