import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { initializeAppCheck, ReCaptchaEnterpriseProvider, provideAppCheck } from '@angular/fire/app-check';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideAnimations(),
        importProvidersFrom(provideFirebaseApp(() => initializeApp({
            "projectId": "hunter-day-counter",
            "appId": "1:102441183745:web:56c19bc2f3beac8dd92e00",
            "storageBucket": "hunter-day-counter.appspot.com",
            "apiKey": "AIzaSyB8VKMvfOYrISdce2tDWbbiHdFgOcx26rA",
            "authDomain": "hunter-day-counter.firebaseapp.com",
            "messagingSenderId": "102441183745",
            "measurementId": "G-PB00HLR9EL"
        }))),
        importProvidersFrom(provideAuth(() => getAuth())),
        importProvidersFrom(provideAnalytics(() => getAnalytics())),
        ScreenTrackingService,
        UserTrackingService,
        importProvidersFrom(provideFirestore(() => getFirestore()))
    ]
};
