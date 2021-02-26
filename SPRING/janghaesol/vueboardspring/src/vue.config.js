// vue.config.js는 프론트 쪽과 백앤드 쪽의 결과물 연동을 위해서 필요하다
//ex) 프론트쪽 서버 8080, 백앤드쪽 서버 7777일때
//이곳에는 export안에
/* devServer:{
        proxy:{
            'api':{
                target: 'http://localhost:7777,
                ws: true,
                changeOrigin: true
            }
    }
}
위와같이 한다.
*/
module.export = {
    transpileDependencies:[
        'vuetify'
    ]
}