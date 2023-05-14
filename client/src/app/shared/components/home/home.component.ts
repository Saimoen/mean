import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogService } from '../../services/blog.service';
import { Router } from '@angular/router';
import { Blog } from '../../interfaces/blog.interface';
import { User } from '../../interfaces/user.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public user!: User | null;
  public form: FormGroup = this.fb.group({
    titre: ['', Validators.required],
    image: ['', Validators.required],
    content: ['', Validators.required],
    category: ['', Validators.required],
  });
  public error!: string;
  public blogs?: Blog[];

  constructor(
    private fb: FormBuilder,
    private blogService: BlogService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.getUser().subscribe((user) => {
      // Traitez la valeur de l'utilisateur ici
      this.user = user;
    });
    this.blogService.getBlog().subscribe({
      next: (blog) => (this.blogs = blog),
      error: (err) => console.log(err),
    });
  }

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
