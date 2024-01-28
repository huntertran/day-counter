import { Component, inject } from '@angular/core';
import {
    Auth,
    signInWithPopup,
    GoogleAuthProvider,
    GithubAuthProvider,
    getAuth,
    User,
    AuthProvider
} from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-user-settings',
    standalone: true,
    imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, MatInputModule, FormsModule, MatIconModule],
    templateUrl: './user-settings.component.html',
    styleUrl: './user-settings.component.scss'
})
export class UserSettingsComponent {
    private auth: Auth = inject(Auth);
    private userService: UserService = inject(UserService);

    public async loginWithGoogle(): Promise<void> {
        const provider = new GoogleAuthProvider();
        let user = await this.getLoggedInUser(provider);
    }

    public loginWithGithub(): void {
        const provider = new GithubAuthProvider();
        this.getLoggedInUser(provider);
    }

    private async getLoggedInUser(provider: AuthProvider): Promise<User> {
        const auth = getAuth();
        let result = await signInWithPopup(auth, provider);
        return result.user;
    }
}
