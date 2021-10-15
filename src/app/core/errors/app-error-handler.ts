import { ErrorHandler } from "@angular/core";
import { throwError } from "rxjs";
import { NotFound } from "./not-found";


export class AppErrorHandler implements ErrorHandler {

  constructor() {

  }

  public handleError(error: Response) {
    if (error.status == 404) {
      throwError(new NotFound)
    } else {
      const errorMessage =  (error as any).error?.message || '';
      alert(errorMessage);
      // throwError(error);
    }

    console.log('ERROR: ', error);
  }
}
