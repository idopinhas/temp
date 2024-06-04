import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  likeCount: number = 0;
  liked: boolean = false;

  increaseLike(): void {
    if (!this.liked) {
      this.likeCount++;
      this.liked = true;
    }
  }
}
