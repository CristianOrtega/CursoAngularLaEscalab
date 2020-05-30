import { Injectable } from '@angular/core';
import { UserI } from '../models/user.interface';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { FileI }  from '../models/file.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  public userData$: Observable<firebase.User>;
  private filePath: string;

  constructor(private afAuth: AngularFireAuth, private storage: AngularFireStorage) { 
    this.userData$ = afAuth.authState; // guardo el estado del usuario de firebase
  }

  loginByEmail(user: UserI) {
    const { email, password } = user; // destructuring de objetos
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  preSaveUserProfile(user: UserI, image?: FileI): void {
    if (image) {
      this.uploadImage(user, image); // subir imagen para ese usuario
    } else {
      this.saveUserProfile(user); // guardar la infor del usuario pero sin imagen
    }
  }

  private uploadImage(user: UserI, image: FileI) {
      this.filePath = `images/${image.name}`;
      const fileRef = this.storage.ref(this.filePath); // referenciar el path de la imagen en el storage
      const task = this.storage.upload(this.filePath, image); // guardo la imagen con el path de referencia
      // queda actualizando cualquier cambio del documento
      task.snapshotChanges().pipe(
        finalize(
          () => { // ejecuta cierta funcion cuando el observable se complete
            fileRef.getDownloadURL().subscribe(urlImage => {
              user.photoURL = urlImage; // url de la imagen y la guaredo en mi usuario
              this.saveUserProfile(user);
            })
          }
        )
      ).subscribe();
  }

  private saveUserProfile(user: UserI) {
    this.afAuth.auth.currentUser.updateProfile({ // devuelve una promesa
      displayName: user.displayName,
      photoURL: user.photoURL
    }).then( () => console.log('Usuario actualizado')).catch( err => console.log('Error', err))
  }

}
