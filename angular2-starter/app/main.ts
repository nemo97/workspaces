import { platformBrowserDynamic,bootstrapWorkerUi }    from '@angular/platform-browser-dynamic';
import { PlatformRef } from '@angular/core';
import { AppModule } from './app.module';
import {WORKER_SCRIPT,platformWorkerUi} from "@angular/platform-browser/src/worker_render";
import {UiArguments, FnArg, PRIMITIVE, ClientMessageBrokerFactory} from '@angular/platform-browser';
//import {ServiceMessageBrokerFactory} from "@angular/platform-browser";
//import {WORKER_RENDER_PLATFORM, WORKER_RENDER_APPLICATION, WORKER_SCRIPT, ServiceMessageBrokerFactory} from "@angular/platform-browser";

//platformBrowserDynamic([{provide: WORKER_SCRIPT, useValue: "factorial/loader.js"}]).bootstrapModule(AppModule);

//  bootstrapWorkerUi("factorial/loader.js").then((ref:PlatformRef)=>{

       //ref.bootstrapModule(AppModule);
//});
//platformWorkerUi([{provide: WORKER_SCRIPT, useValue: "factorial/loader.js"}]).bootstrapModule(AppModule);

const FACTORIAL_CHANNEL = "FACTORIAL";

bootstrapWorkerUi("factorial/loader.js")
  .then((ref: any) => {
    let brokerFactory: ClientMessageBrokerFactory = ref.injector.get(ClientMessageBrokerFactory);
    var broker = brokerFactory.createMessageBroker(FACTORIAL_CHANNEL, false);

    document.getElementById("calculate_factorial").addEventListener("click", (e) => {

      var val = (<HTMLInputElement>document.getElementById("factorial")).value;

      var args = new UiArguments("factorial");
      args.method = "factorial";
      var fnArg = new FnArg(val, PRIMITIVE);
      fnArg.value = val;
      fnArg.type = PRIMITIVE;
      args.args = [fnArg];

      broker.runOnService(args, PRIMITIVE)
        .then((res: string) => {
          document.getElementById("result").innerHTML = `<span>${res}</span>`;
        });
    });
});
