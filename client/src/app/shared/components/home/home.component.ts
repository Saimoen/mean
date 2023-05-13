import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogService } from '../../services/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public form: FormGroup = this.fb.group({
    titre: ['', Validators.required],
    image: ['', Validators.required],
    content: ['', Validators.required],
    category: ['', Validators.required],
  });
  public error!: string;

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
