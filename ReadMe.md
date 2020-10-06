# BrScan

### Para abrir o projeto rode os seguintes comandos:

* Instalar o Node 12.18 LTS ou se preferir o Yarn(ultima versão)
* Instalar o React Native: 
  * npm i react-native@0.63.3 | versão estável
* npm install
* react-native run-android

### 
    Bibliotecas Requisitadas:
        react-native-swiper - Ok
        react-native-camera - Ok
        react-native-masked-text - Ok
        react-native-orientarion-locker: não instalei, fui no android/app/src/main/AndroidManifest.xml e lockei manualmento em Portrait, caso necessário a utilização da lib para algum função auxiliar instalerei.

### 
    Comandos para desenvolvimento:
        npm run android ou react-native run-android - para rodar o app no celular
        npm run log ou react-native log-android - ver os logs no console
    
    Caso de algum problema em alguma das dependências, rode esses comandos na sequência:
        rm -rf ./node_modules
        npm cache clean --force
        npm i
        cd android && ./gradlew clean && cd ..