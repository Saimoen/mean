import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/interfaces/user.interface';
import { BlogService } from 'src/app/shared/services/blog.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @Input() public user!: User | null;
  public error!: string;
  public form: FormGroup = this.fb.group({
    titre: ['', Validators.required],
    image: ['', Validators.required],
    content: ['', Validators.required],
    category: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private blogService: BlogService,
    private router: Router
  ) {}

  public submit() {
    if (this.form.valid) {
      this.blogService.inscription(this.form.getRawValue()).subscribe({
        next: () => this.router.navigateByUrl('/profil'),
        error: (err) =>
          (this.error = err?.error || 'Mauvais mot de passe / email'),
      });
    }
  }
}
