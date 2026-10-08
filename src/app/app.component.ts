import {Component, DestroyRef, OnInit} from '@angular/core';
import {interval, map, take} from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{

  constructor(private destroyRef: DestroyRef) {}

    ngOnInit(): void {
        const subscription$= interval(1000)
          .pipe(
            take(3),
            map((value) => value * 3))
          .subscribe({
          next: (value) => console.log(value),
          error: (error) => console.log(error),
        })

      this.destroyRef.onDestroy(() => {
        subscription$.unsubscribe();
      });
    }
}
