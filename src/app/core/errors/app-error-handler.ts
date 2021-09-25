import { ErrorHandler } from "@angular/core";
import { throwError } from "rxjs";
import { NotFound } from "./not-found";

export class AppErrorHandler implements ErrorHandler {
  public handleError(error: Response) {
    if (error.status == 404) {
      throwError(new NotFound)
    } else {
      alert('Something went wrong.');
    }

    console.log('ERROR: ', error);
  }
}
