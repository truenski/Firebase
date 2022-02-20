//SHIFT+ALT+A comenta varias linhas

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBtceUseh0wQH0XEMc3oQsX-kzlix-YaLo",
    authDomain: "colegio-62dd3.firebaseapp.com",
    projectId: "colegio-62dd3",
    storageBucket: "colegio-62dd3.appspot.com",
    messagingSenderId: "554265581132",
    appId: "1:554265581132:web:91ce72c18d40aaa92dc6e9",
    measurementId: "G-H9X1LYQJME"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


let db = firebase.firestore();


const TURMA = "TurmaX";



//Adicionar documentos (CRIOU TURMA A)============= .add().delete()
/* db.collection(TURMA).add({
    nome: "Marcos",
    sobrenome: "Santos",
    notas:{nota1:9.6, nota2:7.5},
}).then((doc)=>{
    console.log("Documento inserido com sucesso: ", doc);
}).catch(err => {
    console.log(err);
})

//MudarID+(doc) ADICIONAR OU MODIFICAR (set)=========================
db.collection(TURMA).doc("AlunaNova").set(
    {
        nome:"Maria",
        sobrenome: "santos",
        notas: {nota1: 8.6, nota2: 7.5},
    }
).then(() => {
    console.log("Documento inserido com sucesso");
}).catch(err => {
    console.log(err);
}) */


//MERGE:Manter dados enquanto adiciona outros ->  set({..},{merge:true})
//.update() Faz o mesmo que o merge
//Modificar objeto dentro de map -> "notas.nota1":9
//Modificar array -> cidades: firebase.firestore.FieldValue.arrayUnion("minas")  remover -> .arrayRemove("minas")
//Adicionar (number)   firebase.firestore.FieldValue.increment(1)

//TODOS===============================================
//db.collection('turmaX').get().then((snapshot) => {
//   snapshot.forEach((doc) => {
//        let aluno = doc.data();
//        console.log(aluno.nome);
//   })
//})






//ESPECIFICAR ALUNO================================================
//let docRef = db.collection("turmaX").doc("MontedeLetra");
//docRef.get().then((doc) => { })


//FILTRAR/ESPECIFICAR+=============================================
//db.collection("turmaX").where("nome", "==", "carlos").get().then(snapshot => {
//    snapshot.forEach((doc) => {
//        let aluno = doc.data();
//        console.log(aluno.nome);
//    })
//})

//where passa ">",  "<=", "==", para pegar os diferentes, use o >, depois <






//Atualizar em tempo real============================================
//db.collection(TURMA).onSnapshot((snapshot) => {}) //Não é uma promise




//Criar Usuários======================================================

//let auth = firebase. auth()
//auth.createUserWithEmailAndPassword(newUserEmail,newUserPassword)
//.then(user => {console.log(user)})
//.catch(error => {console.log(error)})

//Gerenciar logins=======================================

//auth = firebase.auth()
//let user = auth.currentUser;

//auth.signInWithEmailAndPassword(userEmail,userPassword)
//.then(loggedUser=>{console.log(loggedUser)})
//.catch(error=>{console.log(error)})

//ver se usuario logou ou não=================

//auth.onAuthStateChanged(user=>{
 //   if (user){
 //       console.log(user)
 //   }else{console.log("ninguém logado");
//}
//})

//Deslogar=============

//auth.signOut()
//.then(()=>{console.log("usuário foi deslogado")})
//.catch(error=>{console.log(error)})

//Até onde o usuário vai persistir.
//normal = LOCAL - rede social
// SESSION - persiste apenas em 1 aba. usado para logar vários usuários em abas diferentes
// NONE - se atualizar página, desloga

//auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
//.then(...).catch(...)




//MudarPermissões , DATABASE-regras============================
//allow write: if true;
//allow read: if false/true/...
//request.auth.uid != null (precisa de login)
//request.auth.uid == "judai3uo4123h18ue" ; (apenas este id pode)





