import {Component, DestroyRef, effect, OnInit, signal} from '@angular/core';
import {interval, map, take} from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  public clickCount = signal(0)
  constructor(private destroyRef: DestroyRef) {
    // Gets executed everytime a sinal runs
    effect(() => {
      console.log(`Clicked button${this.clickCount} times.`)
    });
  }

    ngOnInit(): void {
      //   const subscription$= interval(1000)
      //     .pipe(
      //       take(3),
      //       map((value) => value * 3))
      //     .subscribe({
      //     next: (value) => console.log(value),
      //     error: (error) => console.log(error),
      //   })
      //
      // this.destroyRef.onDestroy(() => {
      //   subscription$.unsubscribe();
      // });
    }

    public onClick(){
    this.clickCount.update(prevCount => prevCount + 1)
    }
}
