<template>
    <main>
       <form @submit.prevent="addNewGossip">
            <div class="mb-3">
                <label for="titleFormControlInput" class="form-label">Título</label>
                <input 
                    type="text" 
                    class="form-control" 
                    id="titleFormControlInput" 
                    placeholder="Informe o título"
                    v-model="title"
                    required>
                <div class="mb-2">
                    <label for="contentFormControlText" class="form-label">Conteúdo</label>
                    <textarea 
                        class="form-control" 
                        id="contentFormControlText" 
                        rows="4"
                        v-model="content"
                        required></textarea>
                </div>                        
                <div class="mb-2">                   
                    <b-form-file id="file-default"></b-form-file>                   
                </div>
                <div class="mb-2">
                    <label for="authorFormControlText" class="form-label">Autor</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="authorFormControlInput" 
                        placeholder="Informe o autor"
                        v-model="author"
                        required>
                </div> 

                <button type="submit" class="btn btn-primary" >Confirmar</button>           
            </div>          
       </form>
    </main>
</template>

<script>
    import firebaseInit from "../../firebaseConfig";
    import firebase from 'firebase'
    const db = firebaseInit.firestore();

    export default {
      name: 'NewGossip',
      data() {
        return {
            author: '',
            content: '',
            title: '',
            date: Date,
        }
      },
      methods: {
          addNewGossip: function() { 
              this.date = firebase.firestore.Timestamp.fromDate(new Date(this.getCurrentDate))                                  
              db.collection("gossips")
                    .add({ date: this.date, author: this.author, content: this.content, title: this.title })
                    .then(() => {
                        console.log("Document successfully written!");
                    })
                    .catch((error) => {
                        console.error("Error writing document: ", error);
                    });
          }
      },
      computed: {
          getCurrentDate: function() {
                const current = new Date();                        
                const date = `${(current.getMonth()+1).toString().padStart(2, "0")}/${current.getDate()}/${current.getFullYear()}`;
            
                return date;
          }
      }
    }
</script>

<style scoped>
   form {   
       display: flex;       
       margin: 0px 20%;
       justify-content: center;
   }

   .mb-3 {
       
       width: 100%;
   }

   .btn {
       display: flex;
       width: 50%;
       margin-left: 25%;
       justify-content: center;
   }
</style>