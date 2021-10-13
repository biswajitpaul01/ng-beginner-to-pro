import { ErrorHandler, Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { throwError } from "rxjs";
import { NotFound } from "./not-found";


export class AppErrorHandler implements ErrorHandler {

  constructor() {

  }

  public handleError(error: Response) {
    if (error.status == 404) {
      throwError(new NotFound)
    } else {
      let errorMessage =  (error as any).error?.message || '';
      alert(errorMessage);
      // throwError(error);
    }

    console.log('ERROR: ', error);
  }
}
